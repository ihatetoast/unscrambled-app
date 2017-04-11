import React from 'react';

import brokenEggs from '../assets/eggs_broken.svg';
import wholeEggs from '../assets/eggs_whole.svg';
import './../styles/Header.css';


const Header = (props) => {
	return (
		<div className="headerFlexWrapper">
			<div className="titleWithEggs">
				<div className="headerEggDiv">
					<img className="headerEgg" src={ brokenEggs } alt="a broken egg" />
				</div>
				<h1 className="scrambledWithEggs">Unscrambled</h1>
				<div className="headerEggDiv">
					<img className="headerEgg" src={ wholeEggs } alt="a whole egg"/>
				</div>
			</div>
			<h3>{props.tagline}</h3>
		</div>
	);
}


export default Header;


