import React, { Component } from 'react';
import Form from '../components/Form';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			searchType: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLocChange = this.handleLocChange.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
	}
	handleLocChange(e) {
		this.setState({ location: e.target.value });
	}
	handleSearchChange(e) {
		this.setState({ searchType: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.setSearchTerms(this.state.location, this.state.searchType);
	}
	render() {
		return (
			<Form 
			handleLocChange={this.handleLocChange}
			handleSearchChange={this.handleSearchChange}
			handleSubmit={this.handleSubmit} 
			location={this.state.location}
			searchType={this.state.searchType} />
		)
	}
}

export default FormContainer;