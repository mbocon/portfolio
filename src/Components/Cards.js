import React from "react";

export default class Card extends React.Component {
   render() {
      return (
         <div className="card-container">
            <div className="flip-card">
               <div className="flip-card-inner">
                  <div className="flip-card-front">
                     <h3>Want to see how I built this Rainbow Animation?</h3>
                     <img
                        className="card-img rainbow-img"
                        src={
                           "https://miro.medium.com/max/368/1*ZipcniKz4fnqSDee1vb-7Q.gif"
                        }
                        alt="Article-Img"
                     />
                  </div>
                  <div className="flip-card-back">
                     <p className="card-description">
                        I explain how I created this cool rainbow animation on
                        CodePen!
                     </p>
                     <a
                        href="https://codepen.io/mbocon/pen/GRZJRyo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link">
                        Get the code!
                     </a>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
