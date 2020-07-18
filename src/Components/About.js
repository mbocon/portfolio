import React from 'react';
import '../Styles/About.css';

function About() {
	return (
		<div className='about' id='about'>
			<h1 className='header-h1'>About</h1>
			<div className="content-container">
			<h2 className='about-h2'>
				Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, learning & teaching.
			</h2>
			<p>
				I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional career has been in Law Enforcement - I've never stopped engaging my passion to help others
				and solve problems. As a developer, I enjoy using my strong attention to detail, my love for
				making things, and my mission-driven work ethic to make the world a better place. That's why I’m excited to make a big
				impact at a high growth company.
			</p>
			</div>
			<div className='content-container'>
			<h2 className="about-h2">
				Trained as a full-stack developer at <span className='education'><a href="https://generalassemb.ly/education/software-engineering-immersive-remote" target="_blank" rel="noopener noreferrer">General Assembly<i class="fas fa-external-link-alt link"></i></a></span> 
			</h2>
			<p>Completed a 24-week, 500-hour full-stack program conducted in a remote setting, providing experience with the latest front and back-end programming languages, tools, and methodologies. 
			HTML, CSS, SASS, JavaScript, jQuery, PostgreSQL, MongoDB, Ruby, Ruby on Rails, NodeJS, ReactJS, Express, EJS, Git, GitHub, and Agile/Scrum.</p>
			</div>
		</div>
	);
}

export default About;
