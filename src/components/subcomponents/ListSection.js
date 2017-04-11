// this will be the a list section and it and its mates will make up the larger list

import React from 'react';
import {Link} from 'react-router';
import ListItems from './ListItems';

export default React.createClass({
	render: function() {
		return (
			<div>
				<p>Sublist: {this.props.name}</p>
				
			</div>
			);
	}
});

