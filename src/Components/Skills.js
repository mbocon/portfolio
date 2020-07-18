import React from 'react';
import '../Styles/Skills.css';

function Skills() {
	return (
		<div className='skills' id='skills'>
			<h1 className='header-h1'>Skills</h1>
			<div className='content-container'>
				<div className='skills-container'>
					<div className='card'>
						<h4>Front-End</h4>
						<ul>
							<li>
								<i className='fab fa-html5 icon bigger-icon'></i>HTML5
							</li>
							<li>
								<i className='fab fa-css3-alt icon bigger-icon'></i>CSS3
							</li>
							<li>
								<i className='devicon-bootstrap-plain icon bigger-icon'></i>Bootstrap
							</li>
							<li>
								<i class='devicon-sass-original icon bigger-icon'></i>SASS
							</li>
							<li>
								<i className='fab fa-js icon bigger-icon'></i>Javascript
							</li>
							<li>
								<i className='devicon-jquery-plain icon bigger-icon'></i>jQuery
							</li>
							<li>
								<i className='fab fa-react icon bigger-icon'></i>ReactJS
							</li>
						</ul>
					</div>
					<div className='card'>
						<h4>Back-End</h4>
						<ul>
							<li>
								<i className='fab fa-node icon bigger-icon'></i>Nodejs
							</li>
							<li>
								<i class='devicon-express-original icon bigger-icon'></i>Express
							</li>
							<li>
								<i className='devicon-mongodb-plain icon bigger-icon'></i>
								MongoDB
							</li>
							<li>
								<i className='devicon-ruby-plain icon bigger-icon'></i>
								Ruby on Rails
							</li>
							<li>
								<i className='devicon-postgresql-plain icon bigger-icon'></i>
								Postgresql
							</li>
						</ul>
					</div>
					<div className='card'>
						<h4>Other</h4>
						<ul>
							<li>
								<i className='devicon-heroku-original icon bigger-icon'></i>Heroku
							</li>
							<li>
								<i className='fab fa-git-square icon bigger-icon'></i> Git
							</li>
							<li>
								<i className='fab fa-github icon bigger-icon'></i>Github
							</li>
							<li>
								<i class='fas fa-code-branch icon bigger-icon'></i> Agile/Scrum
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
