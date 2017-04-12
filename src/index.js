import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Packin from './components/Packin';
import Plannin from './components/Plannin';


const RootEntry = () => {
	return(
		<Router>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/plannin" component={Plannin} />
				<Route path="/packin" component={Packin} />
			</div>
		</Router>
	)
}

render(
  <RootEntry />,
  document.getElementById('root')
);



// <Router>
// 			<div>
// 				<Route path="/" component={App} />
// 				<Route path="/plannin" component={Plannin} />
// 				<Route path="/topics" component={Packin} />
// 			</div>
// 		</Router>