import React from 'react';
import ReactDOM from 'react-dom';
// import routes from './config/routes';
import Main from './components/Main';
import Wrapper from './components/Wrapper';

ReactDOM.render(
	<Main>
		<Wrapper />
	</Main>
	,document.getElementById('root'));