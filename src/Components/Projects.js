import React from "react";
import ProjectCards from "./ProjectCards";

function Projects() {
   return (
      <div className="projects" id="projects" style={{ height: "100vh" }}>
         <section className="resume-section" id="about">
            <div className="resume-section-content">
               <h2 className="mb-0">Projects</h2>
               <ProjectCards />
            </div>
         </section>
      </div>
   );
}

export default Projects;
