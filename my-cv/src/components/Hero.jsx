import React from "react";


const Hero=({hero})=>{
    return(
        <div className="hero">
            <img src={hero.image} alt=""></img>
            <h2>{hero.name}</h2>
            <a href={"mailto:" + hero.email}>anapaulamoralesdulzaides@gmail.com</a>
            <a href={hero.gitHub}>
                <img src="https://imgur.com/EAdSgZC.png" alt=""></img>
            </a>
            <a href={hero.linkedIn}>
                <img src="https://imgur.com/Lku97v7.png" alt=""></img>
            </a>
        </div>
    );
};

export default Hero;