import React from 'react';
import katzDeli from '../../assets/katzdeli.svg';
// constructor(props, context){
// 		super(props, context);
// 		this.state = {
// 			lists: Lists
// 		};
// 	};

class Goingout extends React.Component{
	constructor(props, context) {
		super(props, context)
		this.state = {
			selectedGoingOut: 'going out'
		};
	}
	render(){
		return(
			<div>
				<h3  className="category">I plan on </h3>
				<div className="eggPics">
					<img src={ katzDeli } alt="two eggs at a deli. one faking an orgasm."/>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='fancy' className='radio' value="going out" checked={this.state.selectedGoingOut === "going out"} onChange={this.handleGoingOut}/>
					going out
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='fancy' className='radio' value="staying in" checked={this.state.selectedGoingOut === "staying in"} onChange={this.handleGoingOut}/>
					staying in
					</label>
				</div>
				<hr className="borderVee"/>
			</div>	
		)
	}
	handleGoingOut(changeEvent) {
		this.setState({
			selectedGoingOut: changeEvent.target.value,
		});
		//bling list
	}
};
export default Goingout;
