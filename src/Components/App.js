import React from 'react';
import '../Styles/App.css';
import Nav from './Nav';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Awards from './Awards';
import Blogs from './Blogs';
import Contact from './Contact';
import Resume from './Resume';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='content'>
				<Main />
				<About />
				<Skills />
				<Projects />
				<Awards />
				<Blogs />
        <Contact />
        <Resume />
			</div>
		</div>
	);
}

export default App;
