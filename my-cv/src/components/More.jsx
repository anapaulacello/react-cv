import React from "react";
import "./More.scss"

const More=({languages,habilities})=>{
    return(
        <div className="more">
            <ul>
                <li>
                <img src={languages.java_icon} alt=""></img>
                </li>
                <li>
                <img src={languages.js_icon} alt=""></img>
                </li>
                <li>
                <img src={languages.ts_icon} alt=""></img>
                </li>
                <li>
                <img src={languages.html_icon} alt=""></img>
                </li>
                <li>
                <img src={languages.css_icon} alt=""></img>
                </li>
                <li>
                <img src={languages.scss_icon} alt=""></img>
                </li>
            </ul>
            <ul >
                <li>
                <img src={habilities.angular_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.react_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.mongo_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.node_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.git_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.insomnia_icon} alt=""></img>
                </li>
            </ul>
        </div>
    );
};

export default More;