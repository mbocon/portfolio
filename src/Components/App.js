import React from 'react';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Awards from './Awards';
import Tutorials from './Tutorials';
import Contact from './Contact';
import '../../src/index.css';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='content'>
				<About />
				<Skills />
				<Projects />
				<Awards />
				<Tutorials />
				<Contact />
			</div>

		</div>
	);
}

export default App;
