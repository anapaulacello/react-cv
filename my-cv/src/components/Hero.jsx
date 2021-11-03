import React from "react";
import "./Hero.scss"

const Hero=({hero})=>{
    return(
        <div className="hero">
            <img className="principal_img" src={hero.image} alt=""></img>
            <h2 className="hero_name">{hero.name}</h2>
            <a href={"mailto:" + hero.email}>anapaulamoralesdulzaides@gmail.com</a>
            <div className="media_container">
                <a href={hero.gitHub}>
                    <img src="https://imgur.com/EAdSgZC.png" alt=""></img>
                </a>
                <a href={hero.linkedIn}>
                    <img src="https://imgur.com/Lku97v7.png" alt=""></img>
                </a>
            </div>

        </div>
    );
};

export default Hero;