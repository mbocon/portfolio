import React from 'react';
import img from '../img/me.jpeg';
import $ from 'jquery';

function Nav() {
	function closeNav() {
		$('.navbar-collapse').removeClass('show');
	}
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top' id='sideNav'>
			<a className='navbar-brand js-scroll-trigger' href='#root'>
				<span className='d-block d-lg-none'>Mike Bocon</span>
				<span className='d-none d-lg-block'>
					<img className='img-fluid img-profile rounded-circle mx-auto mb-2' src={img} alt='my-img' />
				</span>
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<a href='#about' onSelect={closeNav()} className='nav-link js-scroll-trigger'>
							About
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link js-scroll-trigger' href='#skills'>
							Skills
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link js-scroll-trigger' href='#projects'>
							Projects
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link js-scroll-trigger' href='#awards'>
							Awards
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link js-scroll-trigger' href='#blogs'>
							Blogs
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link js-scroll-trigger' href='#contact'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
