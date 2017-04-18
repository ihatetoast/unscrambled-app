import React from 'react';
import './../../styles/EggPicture.css';

const EggPicture = (props) =>{
	return(
		<div className="EggPictureFrame">
			<img className="eggPic" src={props.src}  alt="an egg in a boat with egg shark in background" />
		</div>
		)
}
export default EggPicture;
