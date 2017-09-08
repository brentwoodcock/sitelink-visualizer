import React, { Component } from 'react';
// import style from './style';

class LocationDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			default: '',
			options: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({ default: e.target.value });
	}
	render() {
		return(
			<div className='container'>
			<div className='row'>

			<div className='btn-group'>
				<button type='button' className='btn btn-primary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					Location
				</button>
				<div className='dropdown-menu'>
					<a className='dropdown-item' href='#'>Location 1</a>
					<a className='dropdown-item' href='#'>Location 2</a>
					<a className='dropdown-item' href='#'>Location 3</a>
					<a className='dropdown-item' href='#'>Location 4</a>
					<a className='dropdown-item' href='#'>Location 5</a>
				</div>
			</div>

			</div>
			</div>
		)
	}
}

export default LocationDropdown;