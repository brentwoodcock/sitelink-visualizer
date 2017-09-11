import React, { Component } from 'react';

class Main extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className ='main-container'>
				<nav className='navbar navbar-inverse bg-primary'>
					<span className='container text-center text-white'>
						<h2>Sitelink API</h2>
					</span>
				</nav>
				{this.props.children}
			</div>
		)
	}
}

export default Main;