import React from 'react';
import Card from './BlogCards';

function Blogs() {
	return (
		<div className='blogs' id='blogs'>
			<section className='resume-section' id='about'>
				<div className='resume-section-content'>
					<h2 className='mb-0'>Blogs</h2>
					<Card />
				</div>
			</section>
		</div>
	);
}

export default Blogs;
