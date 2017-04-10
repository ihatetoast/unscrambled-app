import React from 'react';
import logo from './../assets/IHTlogo.png';
import './../styles/Footer.css';



const Footer = () => {
	return (
			<div className="footer">
				<div className="credits">
					<div className="copyright">
						<span>&copy;2016  Katy Cassidy</span><br />
						<span>www ihatetoast com</span>
					</div>
					<img className="logo" src={logo} alt="logo of greyhound eating toast"/>
				</div>
			</div>
	);
}


 export default Footer;