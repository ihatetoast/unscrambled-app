import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EggButton from './subcomponents/EggButton';
// import $ from 'jquery' later, tater


class Packin extends React.Component{
	render() {
		return (
			<div>
				<Header />
				<Link to="/"><EggButton className="btnEgg btnEggHome" btntext="Home" /></Link>
				
				<Footer />
			</div>
		);
	}
	
};
export default Packin;

// <Header />
// 				<Link to="/"><EggButton className="btnEgg btnEggHome" btntext="Home" /></Link>
// 				<Link to="/plannin"><EggButton className="btnEgg btnEggHome" btntext="Plan" /></Link>
// 				<h1>Tap to clear items as you pack:</h1>
// 			{/*will need to map over the items so they'll appear to tap off*/}
// 				<Footer />

// const lists = this.state.lists.map((item, i) => {
		// 	return (
		// 		<div>
		// 			<ListSection
		// 				key={item.id}
		// 				id={item.id}
		// 				name={item.name}
		// 				/>
		// 		</div>
		// 	);
		// });