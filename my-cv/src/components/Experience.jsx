import React from "react";


const Education=({experience})=>{
    return(
        <div className="education">
            {experience.map((element)=>{
                return(
                    <div key={JSON.stringify(element)}>
                    <h3>{element.date}</h3>
                    <p>{element.where}</p>
                    <p>{element.description}</p>
                </div>
                );
            })}
        </div>
    );
};

export default Education;