import React from 'react';
import shiningTwins from '../../assets/shining-twins_living.svg';
// constructor(props, context){
// 		super(props, context);
// 		this.state = {
// 			lists: Lists
// 		};
// 	};

class Accommodation extends  React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			selectedAccom: 'pooh'
		};
	};
	render() {
		return (
			<div>
				<div className="eggPics">
					<img src={ shiningTwins } alt="eggs dressed in dresses holding hands in the hallway"/>
				</div>
				<h3  className="category">I&apos;m staying</h3>
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
	}
	handleResChange(changeEvent) {
		this.setState({
			selectedAccom: changeEvent.target.value,
		});
		//have the name at top of the list
		//also give the list that always goes
	}
};

export default Accommodation;

