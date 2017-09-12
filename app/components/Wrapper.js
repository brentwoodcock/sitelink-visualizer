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
			data: []
		}
		this.setSearchTerms = this.setSearchTerms.bind(this);
	}
	// Runs when component's state changes (i.e. search terms are set)
	componentDidUpdate(prevProps, prevState) {
		// Checks with previous search terms to only query API if terms are different (prevents infinite queries)
		if (prevState.location !== this.state.location || prevState.searchType !== this.state.searchType) {
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
	}
	setSearchTerms (location, searchType) {
		this.setState({ 
			location: location,
			searchType: searchType
		});
		console.log('Wrapper search terms ' + this.state.location + this.state.searchType);
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
						data={this.state.data}
						searchType={this.state.searchType} />
					</div>
				</div>
			</div>
		)
	}
};

export default Wrapper;