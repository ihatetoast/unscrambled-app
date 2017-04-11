import React from 'react';

// const transportation = [
// 	{ label: 'My car', value: 'car' },
// 	{ label: 'Megabus', value: 'megabus' },
// 	{ label: 'Motorcycle', value: 'motorcycle' }
// ];

// constructor(props, context){
// 		super(props, context);
// 		this.state = {
// 			lists: Lists
// 		};
// 	};

export default React.createClass({
	getInitialState: function () {
		return {
			selectedTrans: 'car'
		};
	},
	render: function() {
		return (
			<div>
				<div className="eggPics">
					<img src={require('./../../../assets/biggerboat.png')}/>
				</div>
				<h3 className="category">I'm going by</h3>
				<div className="radio">
					<label>
					<input type="radio" name='transportation' className='radio' value="car" checked={this.state.selectedTrans === 'car'} onChange={this.handleTransChange}/>
					car
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='transportation' className='radio' value="Megabus" checked={this.state.selectedTrans === 'Megabus'} onChange={this.handleTransChange}/>
					Megabus
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='transportation' className='radio' value="motorcycle" checked={this.state.selectedTrans === 'motorcycle'} onChange={this.handleTransChange}/>
					motorcycle or biggerboat
					</label>
				</div>
				<hr className="borderVee"/>

			</div>
			);
	},
	handleTransChange: function (changeEvent) {
		this.setState({
			selectedTrans: changeEvent.target.value,
		});
		//if megabus is chosen, return a form to have the megabus info
	}

});
