import React, { Component } from 'react';


class Header extends Component{
	render() {
		return (
			<div className="headerWithEggs col-6">
				<img src={require('./../assets/broken_egg.png') } alt="a broken egg" />
				<h1 className="scrambledWithEggs">Unscrambled</h1>
				<img src={require('./../assets/whole_egg.png') } alt="an egg made to look like a suitcase"/>
			</div>
		);
	}
}

export default Header;