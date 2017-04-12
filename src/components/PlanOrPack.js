import React from 'react';
import { Link, hashHistory } from 'react-router';
// import $ from 'jquery'
import './../styles/PlanOrPack.css';

const PlanOrPack = () =>{
	return (
		<div className="eggBtnHldr">
			<h2>Are you plannin' or packalackin?</h2>
			<p>Ima gonna see two buttons that are right now commented out</p>
			<Link to="/plannin"><button className="btnEgg majorBtnEgg" >Plannin'</button></Link>
			<Link to="/packin"><button className="btnEgg majorBtnEgg">Packalackin'</button></Link>
		</div>
	);
}
export default PlanOrPack;