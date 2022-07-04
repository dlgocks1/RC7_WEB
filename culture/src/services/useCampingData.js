import  { useEffect, useState } from 'react';
import axios from 'axios';
import { campingMockdata } from '../utils/mockData';

function useCampingData(){
    const [campingList, setCampintList] = useState([]);

    useEffect(() => {
        let isCompleted = false;
        // (async () => {
        //         try {
        //             const url =
        //             `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/locationBasedList?serviceKey=uQEBqklQ8iRzL1OLrXwjYa6xIfWCRrOLfyo2HAr4hI8RvzDnTeWL5VqVJCYcIOYy%2BJqQBZSuD7hd86jJzep6%2FQ%3D%3D&pageNo=1&numOfRows=10&MobileOS=ETC&MobileApp=AppTest&mapX=128.6142847&mapY=36.0345423&radius=2000`;

        //             const res = await axios({
        //                 method: "get",
        //                 url: url,
        //             });

        //             if (!isCompleted) {
        //                 setCampintList(res.data);
        //             }
        //         } catch (error) {
        //             console.log(error);
        //         }
        // })();
       

        // return () => {
        //     isCompleted = true;
        // };

    }, []);

    return {
        campingList
    };
};

export default useCampingData;