import React, { Component } from 'react';

class Main extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className ='main-container'>
				<nav className='navbar navbar-default navbar-fixed-top bg-primary'>
					<div className='container text-center'>
						<h2>Sitelink API</h2>
					</div>
				</nav>
				{this.props.children}
			</div>
		)
	}
}

export default Main;