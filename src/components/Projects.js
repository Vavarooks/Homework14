import React from "react";
function Projects(props){
    console.log(props)
    return(<div>
<div className="card bg-info text-white" >
  <img src= {props.project.img} className="card-img-top" alt= {props.project.title} />
  <div className="card-body">
    <h5 className="card-title">{props.project.title}</h5>
    <p className="card-text">{props.project.description}</p>
    <a href={props.project.github} target="_blank"  rel="noopener noreferrer" className="btn btn-primary">Github</a>
    <a href={props.project.deployed} target="_blank"  rel="noopener noreferrer" className="btn btn-primary">Live demo</a>
  </div>
</div>
    </div>      
    )
}
export default Projects;