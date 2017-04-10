import React from 'react';

import brokenEgg from './../assets/broken_egg.png';
import suitcaseEgg from './../assets/whole_egg.png';
import './../styles/Header.css';

const Header = (props) => {
	return (
		<div className="headerFlexWrapper">
			<div className="titleWithEggs">
				<img className="headerEgg" src={ brokenEgg } alt="a broken egg" />
				<h1 className="scrambledWithEggs">Unscrambled</h1>
				<img className="headerEgg" src={ suitcaseEgg } alt="an egg made to look like a suitcase"/>
			</div>
			<h3>{props.tagline}</h3>
		</div>
	);
}


export default Header;