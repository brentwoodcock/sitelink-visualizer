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
					<form className='form mt-4 mb-2' data-toggle='validator'>
						<div className='form-group row'>
							<label for='locSelect' className='col-2 col-form-label ml-2'>Location</label>
							<div className='col-9'>
								<select required className='form-control' id='locSelect' onChange={this.props.onLocChange}>
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
						</div>

						<div className='form-group row'>
							<label for='radioInfoType' className='col-2 col-form-label ml-2'>Type of Information</label>
							<div className='col-9'>
								<div style={{ 'box-sizing': 'content-box', 'height': '38px' }}>
								<RadioGroup onChange={this.props.onSearchChange} value='unitTypes' id='radioInfoType' horizontal>
									<RadioButton value='unitTypes'>
										Unit Types
									</RadioButton>
									<RadioButton value='allUnits'>
										All Units
									</RadioButton>
								</RadioGroup>
								</div>
							</div>
						</div>

						<button type='submit' className='btn btn-success m-2' onClick={this.props.onSubmit}>Submit</button>
					</form>
				</div>
			</div>
		)
	}
} 

export default Form;