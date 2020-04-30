import React from "react";
import projectlist from "./projectslist";

function Projects(props) {
  console.log(props)
  return (<div>
    
    <div className="card bg-info text-white" >
      <div className="card-body">
        {/* <img src= {require(props.project.img)} className="d-block w-100" alt={props.project.title} /> */}
        <h5 className="card-title">{props.project.title}</h5>
        <p className="card-text">{props.project.description}</p>
        <a href={props.project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github</a>
        <a href={props.project.deployed} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live demo</a>
      </div>
    </div>
  </div>
  )
}
export default Projects;