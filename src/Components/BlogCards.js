import React from 'react';

export default class Card extends React.Component {
	render() {
		return (
			<div className='card-container'>
				<div class='flip-card'>
					<div class='flip-card-inner'>
						<div class='flip-card-front'>
							<h3>How to build a simple server</h3>
							<img
								className='card-img'
								src={'https://miro.medium.com/max/414/1*Jw9V__6jYhm2amP74D_0lw.png'}
								alt='Article-Img'
							/>
						</div>
						<div class='flip-card-back'>
							<p className='card-description'>
								In this tutorial I demonstrate how to build a simple server using Node.js and Express
							</p>
							<a
								href='https://medium.com/@mikebocon/building-your-first-server-with-node-js-express-a4aad222bad9'
								target='_blank'
								rel='noopener noreferrer'
								className='card-link'>
								Go to Medium Article
							</a>
						</div>
					</div>
				</div>
				<div class='flip-card'>
					<div class='flip-card-inner'>
						<div class='flip-card-front'>
							<h3>Using moment for a time-stamp</h3>
							<img
								className='card-img'
								src={'https://miro.medium.com/max/1050/1*MtK-wpSdQ9WKEFIZE9IEyw.png'}
								alt='Article-Img'
							/>
						</div>
						<div class='flip-card-back'>
							<p className='card-description'>
								In this tutorial I demonstrate how to incorporate a posted x-amount of time ago feature
							</p>
							<a
								href='https://medium.com/@mikebocon/using-moment-with-the-mern-stack-5290e2e914fe'
								target='_blank'
								rel='noopener noreferrer'
								className='card-link'>
								Go to Medium Article
							</a>
						</div>
					</div>
				</div>
				<div class='flip-card'>
					<div class='flip-card-inner'>
						<div class='flip-card-front'>
							<h3>Want to see how I built this Rainbow Animation?</h3>
							<img
								className='card-img rainbow-img'
								src={'https://miro.medium.com/max/368/1*ZipcniKz4fnqSDee1vb-7Q.gif'}
								alt='Article-Img'
							/>
						</div>
						<div class='flip-card-back'>
							<p className='card-description'>
								I explain how I created this cool rainbow animation on CodePen!
							</p>
							<a
								href='https://codepen.io/mbocon/pen/GRZJRyo'
								target='_blank'
								rel='noopener noreferrer'
								className='card-link'>
								Get the code!
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
