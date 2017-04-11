import React from 'react';
import {Link} from 'react-router';


export default React.createClass({

	render: function() {
		const items = this.props.items.map((item, i) =>{
				return(
					<p>{this.props.item[i]}</p>
				);
		});
	}
});
// later make the list items file in for packign items
// <ul>
// 	<li></li>
// </ul>

// render: function() {
// 		const ingredients = this.state.recipe.ingredients.map((ingredient, i) => {
// 			return (
// 				<li className="ingredients" key={i}>{this.state.recipe.ingredients[i]}</li>
// 			);
// 		});
// 		const steps = this.state.recipe.steps.map((step, i) => {
// 			return (
// 				<li className="steps" key={i}>{this.state.recipe.steps[i]}</li>
// 			);
// 		});