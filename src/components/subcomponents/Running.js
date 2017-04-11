import React from 'react';

// constructor(props, context){
// 		super(props, context);
// 		this.state = {
// 			lists: Lists
// 		};
// 	};

export default React.createClass({
	getInitialState: function () {
		return {
			selectedRun: "run"
		};
	},
	render(){
		return(
			<div>
				<div className="eggPics">
					<img src={require('./../../../assets/forrest.png')}/>
				</div>
				<h3  className="category">I hope to</h3>
				<div className="radio">
					<label>
					<input type="radio" name='run' className='radio' value="run" checked={this.state.selectedRun === "run"} onChange={this.handleRun}/>
					run, Katy! Run!
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='run' className='radio' value="slack" checked={this.state.selectedRun === "slack"} onChange={this.handleRun}/>
					slack, Katy! Slack!
					</label>
				</div>
				<hr className="borderVee"/>
			</div>
		)
	},

	handleRun(changeEvent) {
		this.setState({
			selectedRun: changeEvent.target.value,
		});
		//running list
	}

})
