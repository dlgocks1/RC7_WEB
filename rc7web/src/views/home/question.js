import React, { useState } from 'react';

function Question({title,content}){

    var [istoggle,settoggle] = useState(-1);

    var transfromOn = {transform : "translateY(-50%) rotate(90deg)"};
    var transfromOff = {transform : ""};

    return(
        <div className="question-box-container">
            <details className="question-box" onToggle={(event) => {
                    settoggle(parseInt(istoggle)*-1);
                }}>
                <summary> {title}
                    <svg style={istoggle===1 ? transfromOn : transfromOff} viewBox="0 0 26 26" className="svg-icon-thin-x">
                        <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                    </svg>
                </summary>
                <div className="question-detail">{content.split('<br/>').map((line)=>{
                        return(
                            <>
                            {line}
                            <br />
                             </> 
                          );
                    })}
                </div></details>
        </div>
    )
};

export default Question;

