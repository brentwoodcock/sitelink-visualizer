import React, { Component, PropTypes } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='card mt-4'>
				<div className ='card-header'>
					Search
				</div>
				<div className='card-body'>
					<form className='form-inline mt-2 mb-2' data-toggle='validator'>
						<div className='form-group'>
							<select required className='form-control ml-2 mr-2' id='locSelect' onChange={this.props.handleLocChange}>
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

						<div className='form-check form-check-inline'>
							<label className='form-check-label'>
								<input required className='form-check-input' type='radio' name='searchTypeOptions' id='unitTypeInfo' value='unitTypes' checked={this.props.searchType === 'unitTypes'} onChange={this.props.handleSearchChange} /> Unit Types
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<label className='form-check-label'>
								<input required className='form-check-input' type='radio' name='searchTypeOptions' id='allUnitInfo' value='allUnits' checked={this.props.searchType === 'allUnits'} onChange={this.props.handleSearchChange} /> All Units
							</label>
						</div>

						<button type='submit' className='btn btn-success' onClick={this.props.handleSubmit}>Submit</button>
					</form>
				</div>
			</div>
		)
	}
} 

export default Form;