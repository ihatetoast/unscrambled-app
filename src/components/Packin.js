import React from 'react';
import { Link, hashHistory } from 'react-router';
import ListSection from './subcomponents/ListSection';
import ListItems from './subcomponents/ListItems';
import Lists from './../packingList';

// import $ from 'jquery' later, tater


/*See jess!
*/

class Packin extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			lists: Lists
		};
	};
	

	render(){
		const lists = this.state.lists.map((item, i) => {
			return (
				<div>
					<ListSection
						key={item.id}
						id={item.id}
						name={item.name}
						/>
				</div>
			);
		});
		return (
			<div>
				<h1>Tap to clear items as you pack:</h1>
			{/*will need to map over the items so they'll appear to tap off*/}
				{lists}
			</div>
			)
		
	}
};

export default Packin;