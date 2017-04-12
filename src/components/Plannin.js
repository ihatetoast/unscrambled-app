
import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import EggButton from './subcomponents/EggButton';
// import EggButtonSmall from './subcomponents/EggButton-small';

// import $ from 'jquery'

// import Transportation from './subcomponents/Transportation';
// import Accommodation from './subcomponents/Accommodation';
// import Pets from './subcomponents/Pets';
// import Running from './subcomponents/Running';
// import Goingout from './subcomponents/Goingout';

class Plannin extends React.Component{
	render() {
		return (
			<div>
				<Header />
				<Link to="/"><EggButton className="btnEgg btnEggHome" btntext="Home" /></Link>
				<section>
					<div className="scramListsHolder">
						<h2>How you gonna get there? Who's goin'? Watcha doin'?</h2>
						{/*<form onSubmit={this.handleFormSubmit}>
							<Transportation />
							<Accommodation />
							<Pets />
							<Running />
							<Goingout />
							<button className="btnEgg minorBtnEgg" type="submit">Save</button>
						</form>	*/}
					</div>
				</section>
				<EggButton className="btnEgg btnEggMinor" btntext="Save"/>
				<Footer />
			</div>
		);
	}
	
};
export default Plannin;

// handleGoingOut(evt) {
// 		this.setState({
// 			selectedGoingOut: evt.target.value,
// 		});
// 		//bling list
// 	}
// 	handleFormSubmit(evt) {
// 		evt.preventDefault();
// 		alert('You have pressed my buttons. I am not a finished project. Don\'t judge. I see the shoes you\'re wearing.');
// 		//see the notes above
// 	}