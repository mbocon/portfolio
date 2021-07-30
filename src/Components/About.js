import React from "react";

export default function About() {
   return (
      <div className="container-fluid p-0">
         <section className="resume-section" id="about">
            <div className="resume-section-content">
               <h1 className="mb-0">
                  Mike
                  <span className="text-primary"> Bocon</span>
                  <h3 className="about-h3">
                     <span className="software">S</span>
                     <span className="software">O</span>
                     <span className="software">F</span>
                     <span className="software">T</span>
                     <span className="software">W</span>
                     <span className="software">A</span>
                     <span className="software">R</span>
                     <span className="software">E</span>
                     <span className="software">-</span>
                     <span className="software">D</span>
                     <span className="software">E</span>
                     <span className="software">V</span>
                     <span className="software">E</span>
                     <span className="software">L</span>
                     <span className="software">O</span>
                     <span className="software">P</span>
                     <span className="software">E</span>
                     <span className="software">R</span>
                  </h3>
               </h1>

               <div className="subheading mb-5">
                  165 Fraser Ave · Lanai City, HI 96763 · (808) 281-5545 ·
                  <a
                     href="mailto:mikebocon@gmail.com"
                     rel="noopener noreferrer">
                     {" "}
                     mikebocon@gmail.com
                  </a>
               </div>
               <p className="lead mb-5">
                  Completed a 24-week, 420-hour full-stack program conducted in
                  a remote setting, providing experience with the latest front
                  and back-end programming languages, tools, and methodologies.
                  HTML, CSS, SASS, JavaScript, jQuery, PostgreSQL, MongoDB,
                  Ruby, Ruby on Rails, NodeJS, ReactJS, Express, JSX, Git,
                  GitHub, and Agile/Scrum.
               </p>
               <div className="social-icons">
                  <a
                     className="social-icon"
                     href="https://www.linkedin.com/in/mike-bocon/"
                     target="_blank"
                     rel="noopener noreferrer">
                     <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                     className="social-icon"
                     href="https://github.com/mbocon"
                     target="_blank"
                     rel="noopener noreferrer">
                     <i className="fab fa-github"></i>
                  </a>
               </div>
            </div>
         </section>
      </div>
   );
}
