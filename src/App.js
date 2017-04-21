import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EggButton from './components/subcomponents/EggButton';


// function tripPlan(props){
// 	return <span>{props.btntext}</span>
// }
//class App extends React.Component(){
function App(){
	return(
		<div className="torso">
			<Header tagline="Omeletting you get organised."/>
			<div className="content">
				<div className="eggBtnHldr">
					<Link to="/plannin"><EggButton className="btnEgg btnEggMajor" btntext="Plannin'!" /></Link>
					<Link to="/packin"><EggButton className="btnEgg btnEggMajor" btntext="Packin'!" /></Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;





// <div className="App">
// 			<Header tagline="Omeletting you get organised."/>
// 			<h2>Are you plannin' or packalackin?</h2>
// 			<div className="eggBtnHldr">
// 				<EggButton btntxt="Plannin'!" />
// 				<EggButton btntxt="Packin'!" />
// 			</div>
// 			<Footer />
// 		</div>