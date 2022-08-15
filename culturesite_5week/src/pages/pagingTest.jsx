import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { firebaseApp, firebaseDb, firebaseStorage } from "../hoc/firebase";
import { getDatabase, ref, onValue, child, set, get } from "firebase/database";

function PagingTest() {
  const [attachment, setAttachment] = useState();
  const [file, setFile] = useState(null);

  const testCollection = firebaseDb.collection("myName");

  useEffect(() => {
    testCollection.get().then((docs) => {
      // 반복문으로 docuemnt 하나씩 확인
      docs.forEach((doc) => {
        if (doc.exists) {
          // document의 데이터
          console.log(doc.data());
          // document의 id
          console.log(doc.id);
        }
      });
    });
  }, []);

  const addDoc = async (data) => {
    try {
      await testCollection.add(data);
      console.log("add : good!");
    } catch (e) {
      alert("add : err!");
    }
  };

  const handleFileChange = (event) => {
    const {
      target: { files, value },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    setFile(value);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      console.log(result);
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
    console.log(theFile);
  };

  const onClearAttachment = () => {
    setAttachment(null);
    setFile("");
  };

  const handleFileSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = firebaseStorage.ref(`images/${file.name}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      // const response = await attachmentRef.put(attachment);
      attachmentUrl = await response.ref.getDownloadURL();
    }
    console.log(attachmentUrl);
  };

  return (
    <>
      <div>
        이미지를 넣어주세요
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          value={file}
        />
      </div>
      <div>
        <input type="submit" value="제출하기" onClick={handleFileSubmit} />
      </div>
      {attachment && (
        <div>
          <img src={attachment} width="50px" height="50px" alt="attachment" />
          <button onClick={onClearAttachment}>Clear</button>
        </div>
      )}
    </>
  );
}

export default PagingTest;
