import React from 'react';
import EggBorder from './EggBorder';



const RadioGroup = (props) => (
	<div>
		<label>{props.title}</label>
		<div className="checkbox-group">
      		{props.options.map(option => {
        		return (
          			<label key={option} className="form-label capitalize">
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
