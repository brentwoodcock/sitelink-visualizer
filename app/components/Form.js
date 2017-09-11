import React, { Component, PropTypes } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deafult: ''
		}
	}
	render() {
		return (
			<form className='form-inline'>
				<select className='form-control' id='locSelect'>
					<option selected>Choose Location</option>
					<option value='1'>Location 1</option>
					<option value='2'>Location 2</option>
					<option value='3'>Location 3</option>
					<option value='4'>Location 4</option>
					<option value='5'>Location 5</option>
				</select>

				<button type='submit' className='btn btn-success'>Submit</button>
			</form>
		)
	}
} 

export default Form;