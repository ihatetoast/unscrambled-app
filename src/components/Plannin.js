import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import EggButton from './subcomponents/EggButton';
import RadioContainer from './subcomponents/RadioContainer';

class Plannin extends React.Component{
	render() {
		return (
			<div>
				<Header />
				<Link to="/"><EggButton className="btnEgg btnEggHome" btntext="Home" /></Link>
					<div className="scramListsHolder">
						<h2>You have decisions to make:</h2>
						<RadioContainer />
					</div>
				<Footer />
			</div>
		);
	}
	
};
export default Plannin;
