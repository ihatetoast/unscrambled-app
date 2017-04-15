import React from 'react';
import EggBorder from './EggBorder';
import './../../styles/RadioGroup.css';


const RadioGroup = (props) => (
	<div className="radio-group">
		<label className="form-title">{props.title}</label>
		<div className="radio-options">
      		{props.options.map(option => {
        		return (
          			<label key={option} className="optionLabel">
			            <input
			              className="radio"
			              name={props.setName}
			              onChange={props.controlFunc}
			              value={option}
			              checked={ props.selectedOptions.indexOf(option) > -1 }
			              type={props.type} /> 
			              {option}
          			</label>
        		);	
      		})}
      		<EggBorder />
    	</div>
	</div>

)
RadioGroup.propTypes = {
	title: React.PropTypes.string.isRequired,
	type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	setName: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOptions: React.PropTypes.array,
	controlFunc: React.PropTypes.func.isRequired
};

export default RadioGroup;
