import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Match, Miss, Route } from 'react-router';

import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import Packin from './components/Packin';
import Plannin from './components/Plannin';


const RootEntry = () => {
	return(
		<div>
			<Router>
				<div>
					<Match exact pattern="/" component={App} />
					<Match pattern="/plannin" component={Plannin} />
					<Route path="/packin" component={Packin} />

					<Miss component={NotFound}/>
				</div>
			</Router>
			
      </div>
	)
}

render(
  <RootEntry />,
  document.getElementById('root')
);

