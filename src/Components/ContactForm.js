import React, { Component } from "react";
import emailjs from "emailjs-com";

class Contact extends Component {
   state = {
      messageSent: false,
      name: "",
      email: "",
      subject: "",
      message: "",
   };

   handleChange = e => {
      this.setState({ [e.target.name]: [e.target.value] });
   };

   handleSubmit = e => {
      e.preventDefault();
      emailjs
         .sendForm(
            "mikebocon@gmail.com",
            "email",
            "#contactForm",
            "user_TDHnlUmT0NjlcwDVhw989"
         )
         .then()
         .catch();

      this.setState({
         name: "",
         email: "",
         subject: "",
         message: "",
         messageSent: true,
      });

      setTimeout(() => {
         this.setState({
            messageSent: false,
         });
      }, 4000);
   };

   render() {
      return (
         <section id="contactme">
            <h2 className="contact-title">Let's Connect!</h2>
            <div>
               <h4>
                  Schedule a meeting via{" "}
                  <a
                     href="https://calendly.com/mikebocon/experiment1et"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Calendly
                  </a>{" "}
                  or message me below
               </h4>
            </div>
            <div className="wrapper-contact">
               <div className="contact ">
                  {this.state.messageSent ? (
                     <div className="alert animated fadeInUp">
                        Your message has been sent!
                     </div>
                  ) : (
                     ""
                  )}

                  <form
                     onSubmit={this.handleSubmit}
                     className="animated delay-1s fadeInRight"
                     id="contactForm"
                  >
                     <p>
                        <input
                           name="name"
                           type="text"
                           placeholder="Name"
                           id="form-name"
                           required
                           value={this.state.name}
                           onChange={this.handleChange}
                        />
                     </p>
                     <br />
                     <p>
                        <input
                           name="email"
                           type="email"
                           placeholder="Email"
                           id="form-email"
                           required
                           value={this.state.email}
                           onChange={this.handleChange}
                        />
                     </p>
                     <br />
                     <p>
                        <input
                           name="subject"
                           type="text"
                           placeholder="Subject"
                           id="form-subject"
                           value={this.state.subject}
                           onChange={this.handleChange}
                        />
                     </p>
                     <p>
                        <textarea
                           name="message"
                           type="text"
                           placeholder="Message"
                           value={this.state.message}
                           onChange={this.handleChange}
                           rows="10"
                           id="form-message"
                           required
                        ></textarea>
                     </p>
                     <br />
                     <p id="btn-form">
                        <input
                           className="button submit-btn"
                           onClick={this.successMessage}
                           type="submit"
                           name="submit"
                        />
                     </p>
                     <br />
                  </form>
               </div>
            </div>
         </section>
      );
   }
}

export default Contact;
