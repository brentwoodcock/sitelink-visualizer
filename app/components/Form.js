import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';


class Form extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='card mt-4 mb-3'>
				<div className ='card-header'>
					Search
				</div>
				<div className='card-body'>
					<form className='form-inline mt-2 mb-2' data-toggle='validator'>
						<div className='form-group'>
							<select required className='form-control m-2' id='locSelect' onChange={this.props.onLocChange}>
								<option disabled selected hidden>Choose Location</option>
								<option value='l003'>Ashely's</option>
								<option value='l004'>Ashley's Boat</option>
								<option value='l007'>Caney</option>
								<option value='l008'>Franz</option>
								<option value='l006'>Katy</option>
								<option value='l002'>Living</option>
								<option value='l005'>Naco</option>
							</select>
						</div>

						<RadioGroup onChange={this.props.onSearchChange} value='unitTypes' horizontal>
							<RadioButton value='unitTypes' iconSize='0' iconInnerSize='0'>
								Unit Types
							</RadioButton>
							<RadioButton value='allUnits' iconSize='0' iconInnerSize='0'>
								All Units
							</RadioButton>
						</RadioGroup>

						<button type='submit' className='btn btn-success m-2' onClick={this.props.onSubmit}>Submit</button>
					</form>
				</div>
			</div>
		)
	}
} 

export default Form;