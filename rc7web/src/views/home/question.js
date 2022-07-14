/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from  "./HomeStyles.module.css";

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function Question({title,content}){

    const [istoggle,settoggle] = useState(-1);

    const transfromOn = {transform : "translateY(-50%) rotate(90deg)"};
    const transfromOff = {transform : ""};

    return(
        <div className={cx("question-box-container")}>
            <details className={cx("question-box")} onToggle={() => {
                    settoggle(parseInt(istoggle, 10)*-1);
                }}>
                <summary> {title}
                    <svg style={istoggle===1 ? transfromOn : transfromOff} viewBox="0 0 26 26" className={cx("svg-icon-thin-x")}>
                        <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z" />
                    </svg>
                </summary>
                <div className={cx("question-detail")}>
                    {content.split('<br/>').map((line)=>(
                            <>
                            {line}
                            <br />
                             </> 
                          ))}
                </div></details>
        </div>
    )
};

export default Question;

