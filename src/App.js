import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EggButton from './components/subcomponents/EggButton';


function App(){
	return(
		<div className="torso">
			<Header tagline="Omeletting you get organised."/>
			<div className="content">
				<h2>Plannin&apos; or Packalackin&apos;?</h2>
				<p>If you&apos;re going to edit the master list, you are plannin&apos;. If you just want to pack from the master list, you are packalackin&apos;.</p>
		
				<div className="eggBtnHldr">
					<Link to="/plannin"><EggButton className="btnEgg btnEggMajor" btntext="Plannin&apos;!" /></Link>
					<Link to="/packin"><EggButton className="btnEgg btnEggMajor" btntext="Packalackin&apos;!" /></Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;

