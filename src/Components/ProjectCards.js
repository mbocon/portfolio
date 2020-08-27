import React from 'react';
import img from '../img/kaizen-app.png';
import img2 from '../img/skilliam.png';
import img3 from '../img/asmd.png';

export default class ProjectCard extends React.Component {
	render() {
		return (
			<div className='card-container'>
				<div class='flip-card'>
					<div class='flip-card-inner'>
						<div class='flip-card-front'>
							<h3>Kaizen App</h3>
							<img className='card-img app-img' src={img} alt='App-Img' />
						</div>
						<div class='flip-card-back'>
							<div className='card-description project-card'>
								A React on Rails full-stack app.
								<ul className='project-list'>
									<li>
										<i className='fa fa-check project-check-icon' /> Full CRUD capabilities
									</li>
									<li>
										<i className='fa fa-check project-check-icon' /> User Authentication with JWT
									</li>
									<li>
										<i className='fa fa-check project-check-icon' /> Password Encryption
									</li>
									<li>
										<i className='fa fa-check project-check-icon' /> External API implementation
									</li>
								</ul>
							</div>
							<li className='list-inline-item project-link'>
								<a href='https://kaizen-goals.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='card-link'>
									<i className='fa fa-globe project-icon' />
									See live
								</a>
                            </li>
                            <li className='list-inline-item project-link'>
								<a href='https://github.com/mbocon/kaizen-app-api' target='_blank' rel='noopener noreferrer' className='card-link'>
									<i className='devicon-github-plain project-icon' />
									API Repo
								</a>
                            </li>
                            <li className='list-inline-item project-link'>
								<a href='https://github.com/mbocon/kaizen-app-client' target='_blank' rel='noopener noreferrer' className='card-link'>
									<i className='devicon-github-plain project-icon' />
									Front-End Repo
								</a>
							</li>
						</div>
					</div>
				</div>
				<div class='flip-card'>
				<div class='flip-card-inner'>
					<div class='flip-card-front'>
						<h3>Skilliam App</h3>
						<img className='card-img app-img' src={img2} alt='App-Img' />
					</div>
					<div class='flip-card-back'>
						<div className='card-description project-card'>
							A full-stack app built with the MERN stack.
							<ul className='project-list'>
								<li>
									<i className='fa fa-check project-check-icon' /> Full CRUD capabilities
								</li>
								<li>
									<i className='fa fa-check project-check-icon' /> User Authentication with JWT
								</li>
								<li>
									<i className='fa fa-check project-check-icon' /> Password Encryption
								</li>
							</ul>
						</div>
						<li className='list-inline-item project-link'>
							<a href='https://skilliam.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='card-link'>
								<i className='fa fa-globe project-icon' />
								See live
							</a>
						</li>
						<li className='list-inline-item project-link'>
							<a href='https://github.com/mbocon/skilliam' target='_blank' rel='noopener noreferrer' className='card-link'>
								<i className='devicon-github-plain project-icon' />
								Github Repo
							</a>
						</li>
					</div>
				</div>
			</div>
			<div class='flip-card'>
				<div class='flip-card-inner'>
					<div class='flip-card-front'>
						<h3>ASMD App</h3>
						<img className='card-img app-img' src={img3} alt='App-Img' />
					</div>
					<div class='flip-card-back'>
						<div className='card-description project-card'>
							Practice basic math skills with digital flashcards!
							<ul className='project-list'>
								<li>
									<i className='fa fa-check project-check-icon' /> Add, Subtract, Multiply, Divide
								</li>
								<li>
									<i className='fa fa-check project-check-icon' /> Built-in number ranges to use
								</li>
								<li>
									<i className='fa fa-check project-check-icon' /> Create your own custom number range
								</li>
							</ul>
						</div>
						<li className='list-inline-item project-link'>
							<a href='https://asmdmath.herokuapp.com/' target='_blank' rel='noopener noreferrer' className='card-link'>
								<i className='fa fa-globe project-icon' />
								See live
							</a>
						</li>
						<li className='list-inline-item project-link'>
							<a href='https://github.com/mbocon/ASMD' target='_blank' rel='noopener noreferrer' className='card-link'>
								<i className='devicon-github-plain project-icon' />
								Github Repo
							</a>
						</li>
					</div>
				</div>
			</div>
				<div class='flip-card'>
					<div class='flip-card-inner'>
						<div class='flip-card-front'>
                            <h3>More coming soon</h3>
                            <i class="fa fa-exclamation request-icon"></i>

						</div>
						<div class='flip-card-back'>
							<p className='card-description'>Want to be notified when my next project is live?</p>
							<a href='#contact' className='card-link'>
								Click here!
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
