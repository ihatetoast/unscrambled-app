import React, { Component } from 'react';
import brokenEgg from './../assets/broken_egg.png';
import suitcaseEgg from './../assets/whole_egg.png';
import './../styles/Header.css';

class Header extends Component{
	render() {
		return (
			<div className="headerWithEggs">
				<img className="headerEgg" src={ brokenEgg } alt="a broken egg" />
				<h1 className="scrambledWithEggs">Unscrambled</h1>
				<img className="headerEgg" src={ suitcaseEgg } alt="an egg made to look like a suitcase"/>
			</div>
		);
	}
}

export default Header;