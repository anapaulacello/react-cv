import React from "react";

const More=({languages,habilities})=>{
    return(
        <div className="more">
            <ul className="languages">
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
            <ul className="habilities">
                <li>
                <img src={habilities.java_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.js_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.ts_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.html_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.css_icon} alt=""></img>
                </li>
                <li>
                <img src={habilities.scss_icon} alt=""></img>
                </li>
            </ul>
        </div>
    );
};

export default More;