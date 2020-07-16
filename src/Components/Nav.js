import React from 'react';
import '../Styles/Nav.css';

function Nav() {
	return (
		<div className='navigation'>
			<div className='nav-name'>
				<h1>
					<a href='#main'>Mike Bocon</a>
				</h1>
				<p>Full Stack Developer</p>
			</div>

			<ul>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#skills'>Skills</a>
				</li>
				<li>
					<a href='#projects'>Projects</a>
				</li>
				<li>
					<a href='#awards'>Awards</a>
				</li>
				<li>
					<a href='#blogs'>Blog</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
				<li>
					<a href='#resume'>Resume</a>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
