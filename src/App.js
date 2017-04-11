import React from 'react';
import './App.css';

import Header from './components/Header';
import PlanOrPack from './components/PlanOrPack';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className="App">
			<Header tagline="Omeletting you get organised."/>
			<PlanOrPack />
			<Footer />
		</div>
	);
}

export default App;





