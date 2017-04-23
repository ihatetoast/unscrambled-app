import React from 'react';

import './../../styles/EggButton.css';

const EggButton = (props) =>{
	return(
		<button className={props.className } onClick={props.onClick}>{props.btntext}</button>
		)
}
export default EggButton;

