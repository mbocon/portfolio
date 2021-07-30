import React from 'react';
import BlogCards from './BlogCards';

function Blogs() {
	return (
		<div className='blogs' id='blogs'>
			<section className='resume-section' id='about'>
				<div className='resume-section-content'>
					<h2 className='mb-0'>Blogs</h2>
					<BlogCards />
				</div>
			</section>
		</div>
	);
}

export default Blogs;
