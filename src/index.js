import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import Packin from './components/Packin';
import Plannin from './components/Plannin';


const RootEntry = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Match exactly pattern="/plannin/" component={Plannin} />
				<Miss component={NotFound}/>
			</div>
		</BrowserRouter>
	)
}

render(
  <RootEntry />,
  document.getElementById('root')
);

