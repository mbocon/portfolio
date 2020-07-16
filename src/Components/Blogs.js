import React from 'react';
import '../Styles/Blogs.css';

function Blogs() {
	return (
		<div className='blogs' id='blogs'>
			<h1 className='header-h1'>Blog posts</h1>
			<div className='content-container'>
				<ul>
					<li>Blog 1</li>
					<li>Blog 2</li>
					<li>Blog 3</li>
				</ul>
			</div>
		</div>
	);
}

export default Blogs;
