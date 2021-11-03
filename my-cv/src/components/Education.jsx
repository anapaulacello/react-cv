import React from "react";
import "./Education.scss"

const Education=({education})=>{
    return(
        <div className="education">
            {education.map((element)=>{
                return(
                    <div key={JSON.stringify(element)}>
                    <h3>{element.name}</h3>
                    <p>{element.date}</p>
                    <p>{element.where}</p>
                </div>
                );
            })}
        </div>
    );
};

export default Education;