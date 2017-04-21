import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import List from './subcomponents/List';
import EggButton from './subcomponents/EggButton';
import lists from '../packingList';


class Packin extends React.Component{
		constructor(){
		super();
		this.loadLists=this.loadLists.bind(this);
		this.state={
			lists: {}
		}
	}
	loadLists(){
		console.log("load list fired");
		this.setState({
			lists: lists
		});
	}

	render() {
		return (
			<div className="torso">
				<Header />
				<Link to="/"><EggButton className="btnEgg btnEggHome" btntext="Home" /></Link>
				<div>
					<EggButton className="btnEgg btnEggMajor" loadLists={this.loadLists} btntext="Load all lists" />
				</div>
				<div className="content">
					<ul>
						{Object
							.keys(this.state.lists)
							.map(key => <List key={key} details={this.state.lists[key]} />)
						}
					</ul>
				</div>
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