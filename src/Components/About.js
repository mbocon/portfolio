import React from 'react';

function About() {
	return (
		<div className='container-fluid p-0'>
			<section className='resume-section' id='about'>
				<div className='resume-section-content'>
					<h1 className='mb-0'>
						Mike
						<span className='text-primary'> Bocon</span>
					</h1>

					<div className='subheading mb-5'>
						165 Fraser Ave · Lanai City, HI 96763 · (808) 281-5545 ·
						<a href='mailto:mikebocon@gmail.com'> mikebocon@gmail.com</a>
					</div>
					<p className='lead mb-5'>
						Completed a 24-week, 500-hour full-stack program conducted in a remote setting, providing experience with the
						latest front and back-end programming languages, tools, and methodologies. HTML, CSS, SASS, JavaScript, jQuery,
						PostgreSQL, MongoDB, Ruby, Ruby on Rails, NodeJS, ReactJS, Express, JSX, Git, GitHub, and Agile/Scrum.
					</p>
					<div className='social-icons'>
						<a
							className='social-icon'
							href='https://www.linkedin.com/in/mike-bocon/'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-linkedin-in'></i>
						</a>
						<a className='social-icon' href='https://github.com/mbocon' target='_blank' rel='noopener noreferrer'>
							<i className='fab fa-github'></i>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
