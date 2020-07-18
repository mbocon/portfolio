import React from 'react';
import '../Styles/Contact.css';

function Contact() {
	return (
		<div className='contact' id='contact'>
			<h1 className='header-h1'>Contact</h1>
			<div className="content-container">
			<ul>
			<li className='contact-list'><i className="devicon-github-plain icon contact-icon"></i><a href="https://github.com/mbocon" target="_blank" rel="noopener noreferrer">https://github.com/mbocon</a>
			</li>
			<li className='contact-list'><i className="devicon-linkedin-plain icon contact-icon"></i><a href="https://www.linkedin.com/in/mike-bocon/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/mike-bocon/</a>
			</li>
			<li className='contact-list'><i class="fas fa-envelope icon contact-icon"></i><a href="mailto:mikebocon@gmail.com">mikebocon@gmail.com</a></li>
			</ul>
			</div>
		</div>
	);
}

export default Contact;
