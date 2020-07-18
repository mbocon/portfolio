import React from 'react';
import '../Styles/Nav.css';

function Nav() {
	return (
		<div className='navigation'>
			<div className='nav-name col-md-6 col-lg-4 col-xl-3'>
				<h1>
					<a href='#main'>Mike Bocon</a>
				</h1>
				<p className='nav-p'>Full Stack Developer</p>
			</div>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
					<span className='sr-only'>Toggle navigation</span>
					<span className='icon-bar'></span>
					<span className='icon-bar'></span>
					<span className='icon-bar'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto flex-column vertical-nav'>
						<li className='nav-item'>
							<a className='nav-link' href='#about'>
								<i className='fa fa-user icon'></i>About
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#skills'>
								<i className='fa fa-star icon'></i>Skills
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#projects'>
								<i className='fas fa-wrench icon'></i>Projects
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link' href='#awards'>
								<i className='fa fa-trophy icon'></i>Awards
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#blogs'>
								<i className='fas fa-pencil-alt icon'></i>Blog
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#contact'>
								<i className='fa fa-envelope-open icon'></i>Contact
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#resume'>
								<i className='fa fa-file icon'></i>Resume
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
