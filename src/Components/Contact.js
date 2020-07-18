import React from 'react';

function Contact() {
	return (
		<div className='resume-section' id='contact' style={{ height: '100vh' }}>
			<section className='resume-section'>
				<div className='resume-section-content'>
					<h2 class='mb-5'>Contact</h2>
					<div className='social-icons'>
						<a className='social-icon' href='https://www.linkedin.com/in/mike-bocon/' target="_blank" rel="noopener noreferrer">
							<i className='fab fa-linkedin-in'></i>
						</a>
						<a className='social-icon' href='https://github.com/mbocon' target='_blank' rel="noopener noreferrer">
							<i className='fab fa-github'></i>
						</a>
						<a className='social-icon' href="mailto:mikebocon@gmail.com">
							<i className='fas fa-envelope'></i>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
