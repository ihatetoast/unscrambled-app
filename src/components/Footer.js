import React, { Component } from 'react';


class Footer extends Component{
	render() {
		return (
			<div className="footer">
				<div className="credits">
					<div className="copyright"><p>&copy;2016  Katy Cassidy</p></div>
					<div className="logo"><img src={require('./../assets/IHTlogo.png')} alt="logo of greyhound eating toast"/></div>
				</div>
			</div>
		);
	}
};

 export default Footer;