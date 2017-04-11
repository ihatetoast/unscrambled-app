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
			selectedAccom: 'pooh'
		};
	},
	render: function() {
		return (
			<div>
				<div className="eggPics">
					<img src={require('./../../../assets/shining-twins_living.jpg')}/>
				</div>
				<h3  className="category">I'm staying</h3>
				<div className="radio">
					<label>
					<input type="radio" name='accommodation' className='radio' value="pooh" checked={this.state.selectedAccom === 'pooh'} onChange={this.handleResChange}/>
					with Pooh
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='accommodation' className='radio' value="dad" checked={this.state.selectedAccom === 'dad'} onChange={this.handleResChange}/>
					with Dad and Ellen
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='accommodation' className='radio' value="mary" checked={this.state.selectedAccom === 'mary'} onChange={this.handleResChange}/>
					with Mary and Jeff
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='accommodation' className='radio' value="la quinta" checked={this.state.selectedAccom === 'la quinta'} onChange={this.handleResChange}/>
					at La Quinta or The Overlook
					</label>
				</div>
				<hr className="borderVee"/>
			</div>
		);
	},
	handleResChange(changeEvent) {
		this.setState({
			selectedAccom: changeEvent.target.value,
		});
		//have the name at top of the list
		//also give the list that always goes
	}
});

