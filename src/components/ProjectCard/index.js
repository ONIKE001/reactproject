import React from "react";
import "./index.css";

export default function ProjectCard(props) {
    return (
    <div className="ProjectCard">
        <div className="project">
            <img src={props.images}  alt="portfolio.jpg"/>
            <div className="Description">    
            <div className="title">{props.title}</div>:
            
            <div className="url">{props.url}</div>:

           <div className="description">{props.description}</div>:
         </div>
         </div>

    </div>
    );
}
