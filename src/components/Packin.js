/*right now this loads the entire list. 
eventually, the list would be determined by the plannin side
planning needs to have some backend so i can plan one day and pack another
*/

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
