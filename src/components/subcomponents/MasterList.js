import React from 'react';

class List extends React.Component{

	render(){
		const details = this.props.details;
		return(
			<div>
				<li>
					{details.name}: 
					<ul>
						{details.items.map(item => <li key={item}>{item}</li>)} 
					</ul>
				</li>
			</div>
		)
	}
	
}
export default List;

