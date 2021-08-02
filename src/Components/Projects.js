import React from "react";
import ProjectCard from "./ProjectCards";

function Projects() {
   return (
      <div className="projects" id="projects" style={{ height: "100vh" }}>
         <section className="resume-section" id="about">
            <div className="resume-section-content">
               <h2 className="mb-0">Projects</h2>
               <span className="projects-small">
                  NOTE: Some of my applications are deployed to Heroku, which
                  puts the servers to sleep after a period of inactivity{" "}
                  <span aria-label="emoji" role="img">
                     &#128517;
                  </span>
                  . Please allow a minute or two{" "}
                  <span aria-label="emoji" role="img">
                     &#9200;
                  </span>{" "}
                  for Heroku to spin up the project{" "}
                  <span aria-label="emoji" role="img">
                     &#128513;
                  </span>
               </span>
               <ProjectCard />
            </div>
         </section>
      </div>
   );
}

export default Projects;
