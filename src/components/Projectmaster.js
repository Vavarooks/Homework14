import React from "react";
import "./projectslist";
import projectlist from "./projectslist";
import Projects from "./Projects";

function Projectsmaster() {
    console.log(projectlist);
    return (<div className="container">
        <h1>Projects</h1>
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