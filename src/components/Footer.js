import React, { Component } from 'react';
import logo from './../assets/IHTlogo.png';
import './../styles/Footer.css';


class Footer extends Component{
	render() {
		return (
			<div className="footer">
				<div className="credits">
					<div className="copyright"><p>&copy;2016  Katy Cassidy</p></div>
					<div ><img className="logo" src={logo} alt="logo of greyhound eating toast"/></div>
				</div>
			</div>
		);
	}
};

 export default Footer;