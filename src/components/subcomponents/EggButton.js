import React from 'react';

import './../../styles/EggButton.css';

const EggButton = (props) =>{
	return(
		<button className={props.className}>{props.btntext}</button>
		)
}
export default EggButton;


// return (
// 		<button className="btnEgg btnEggMajor"  >{this.props.btntxt}</button>
// 	);