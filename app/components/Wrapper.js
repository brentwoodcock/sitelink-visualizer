import React, { Component } from 'react';
import axios from 'axios';
import FormContainer from '../containers/FormContainer';
import ResultsContainer from '../containers/ResultsContainer';

class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			searchType: '',
			data: [],
			convertedData: []
		}
		this.setSearchTerms = this.setSearchTerms.bind(this);
		this.convertData = this.convertData.bind(this);
	}
	// Runs when component's state changes (i.e. search terms are set)
	componentDidUpdate(prevProps, prevState) {
		// Checks with previous search terms to only query API if terms are different (prevents infinite queries)
		if (prevState.location !== this.state.location || prevState.searchType !== this.state.searchType) {
			if (this.state.searchType === 'unitTypes') {
				console.log('Requesting /types/' + this.state.location);
				axios.get('/api/types/' + this.state.location).then(response => {
					this.setState({ data: response.data });
					this.convertData();
				}).catch(error => {
					console.log(error);
				});
			} else if (this.state.searchType === 'allUnits') {
				console.log('Requesting /units/' + this.state.location);
				axios.get('/api/units/' + this.state.location).then(response => {
					this.setState({ data: response.data });
					this.convertData();
				}).catch(error => {
					console.log(error);
				});
			}
		}
	}
	setSearchTerms (location, searchType) {
		this.setState({ 
			location: location,
			searchType: searchType
		});
	}
	// Convert incoming number strings to integers and floats for accurate sorting of table columns
	convertData() {
		var data = this.state.data;
		console.log('initial data');
		console.log(data);
		var convertedData = [];
		for (var i = data.length - 1; i >= 0; i--) {
			for (var key in data[i]) {
				if (data[i].hasOwnProperty(key) && key !== '$attributes') {
					var x = data[i][key];
					x = +x;
					// Only replace data values converted to integers or floats
					if (isNaN(x)) {
						// Do nothing
					} else {
						data[i][key] = x;
					}
				}
			}
			convertedData.push(data[i]);
		}
		this.setState({ convertedData: convertedData });
		// console.log('convertedData');
		// console.log(this.state.convertedData);
	}
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12'>
						<FormContainer 
						setSearchTerms={this.setSearchTerms}
						location={this.state.location}
						searchType={this.state.searchType} />
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-12'>
						<ResultsContainer
						data={this.state.convertedData}
						searchType={this.state.searchType} />
					</div>
				</div>
			</div>
		)
	}
};

export default Wrapper;