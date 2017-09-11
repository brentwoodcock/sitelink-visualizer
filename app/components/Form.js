import React, { Component, PropTypes } from 'react';
import axios from 'axios';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			searchType: '',
			data: ''
		};
		this.handleLocChange = this.handleLocChange.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleLocChange(e) {
		this.setState({ location: e.target.value });
	}
	handleSearchChange(e) {
		this.setState({ searchType: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		var self = this;

		if (this.state.searchType === 'unitTypes') {
			console.log('Requesting /types/' + this.state.location);
			axios.get('/types/' + this.state.location).then(response => {
				this.setState({ data: response.data });
				console.log(this.state.data);
			}).catch(error => {
				console.log(error);
			});
		} else if (this.state.searchType === 'allUnits') {
			console.log('Requesting /units/' + this.state.location);
			axios.get('/units/' + this.state.location).then(response => {
				this.setState ({ data: response.data });
				console.log(this.state.data);
			}).catch(error => {
				console.log(error);
			});
		}
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
							<select required className='form-control ml-2 mr-2' id='locSelect' onChange={this.handleLocChange}>
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
								<input required className='form-check-input' type='radio' name='searchTypeOptions' id='unitTypeInfo' value='unitTypes' checked={this.state.searchType === 'unitTypes'} onChange={this.handleSearchChange} /> Unit Types
							</label>
						</div>
						<div className='form-check form-check-inline'>
							<label className='form-check-label'>
								<input required className='form-check-input' type='radio' name='searchTypeOptions' id='allUnitInfo' value='allUnits' checked={this.state.searchType === 'allUnits'} onChange={this.handleSearchChange} /> All Units
							</label>
						</div>

						<button type='submit' className='btn btn-success' onClick={this.handleSubmit}>Submit</button>
					</form>
				</div>
			</div>
		)
	}
} 

export default Form;