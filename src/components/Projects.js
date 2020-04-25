import React from "react";
import projectlist from "./projectslist";

function Projects(props) {
  console.log(props)
  return (<div>
    <div className="card bg-info text-white" >
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active"><img src={require("../assets/password.png")} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src= {require("../assets/planner.png")} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src= {require("../assets/quiz.png")} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src= {require("../assets/team.jpg")} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("../assets/weather.png")} className="d-block w-100 h-100" alt="..." />
          </div>
        </div>
      </div>
      <div className="card-body">
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