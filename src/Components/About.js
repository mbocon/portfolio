import React from 'react';
import '../Styles/About.css';

function About() {
	return (
		<div className='about' id='about'>
			<h1 className='header-h1'>About</h1>
			<div className="content-container">
			<h3 className='about-h3'>
				Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and teaching
			</h3>
			<p>
				I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has
				taken many twists and turns — from touring and recording artist, to employee of the year at a non-profit, to dean's
				scholar at UPenn, to small business owner and entrepreneur — I've never stopped engaging my passion to help others
				and solve problems. As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for
				making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big
				impact at a high growth company.
			</p>
			</div>
		</div>
	);
}

export default About;
