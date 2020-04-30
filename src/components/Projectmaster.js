import React from "react";
import "./projectslist";
import projectlist from "./projectslist";
import Projects from "./Projects";

function Projectsmaster() {
    console.log(projectlist);
    return (<div className="container">
        <h1>Projects</h1>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
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
        <div className="projectsmaster">
            {projectlist.map((project, key) => {
                return (
                    <Projects project={project} key={key} />
                )
            })}

        </div>
    </div>
    )
}
export default Projectsmaster;