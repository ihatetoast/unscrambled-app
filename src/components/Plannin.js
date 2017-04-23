import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Plannin.css';

import Header from './Header';
import Footer from './Footer';
import EggButton from './subcomponents/EggButton';
import ListBits from './subcomponents/ListBits';
import RadioContainer from './subcomponents/RadioContainer';

class Plannin extends React.Component{
	render() {
		return (
			<div className="torso">
				<Header />
				<section className="plannin content">
					<Link to="/"><EggButton className="btnEgg btnEggHome" btntext="Home" /></Link>
					<div className="scramListsHolder">
						
						<RadioContainer />
						<ListBits />
					</div>
				</section>
				<Footer />
			</div>
		);
	}
	
};
export default Plannin;
