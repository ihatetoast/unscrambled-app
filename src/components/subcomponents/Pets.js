import React from 'react';
// import peeWeePets from '../../assets/peeweepetstore.svg';

// constructor(props, context){
// 		super(props, context);
// 		this.state = {
// 			lists: Lists
// 		};
// 	};

export default React.createClass({
	getInitialState: function () {
		return {
			selectedPets: "none"
		};
	},
	render: function(){
		return(
			<div>
				<div className="eggPics">
					{/*<img src={ pee wee herman pet shop scene }/>*/}
				</div>
				<h3  className="category">I am bringing</h3>
				<div className="radio">
					<label>
					<input type="radio" name='none' className='radio' value="none" checked={this.state.selectedPets === "none"} onChange={this.handlePets}/>
					no critters.
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='hounds' className='radio' value="hounds" checked={this.state.selectedPets === "hounds"} onChange={this.handlePets}/>
					just my hounds.
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='cats' className='radio' value="cats" checked={this.state.selectedPets === "cats"} onChange={this.handlePets}/>
					just my cats.
					</label>
				</div>
				<div className="radio">
					<label>
					<input type="radio" name='all' className='radio' value="all" checked={this.state.selectedPets === "all"} onChange={this.handlePets}/>
					ALL THE CRITTERS!
					</label>
				</div>
				<hr className="borderVee"/>
			</div>
		)
	},

	handlePets: function (changeEvent) {
		this.setState({
			selectedRun: changeEvent.target.value,
		});
		//pet supply list
	}

})
