import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './index.css';
import App from './App';


const Root = () => {
	return(
		<div>
			<BrowserRouter>
				<Match exactly pattern="/" component={Home}/>
				<Match />
				<Miss />

			</BrowserRouter>
		</div>
	)
}

render(
  <App />,
  document.getElementById('root')
);
