import React, { Component } from 'react';
import Results from '../components/Results';

class ResultsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			default: ''
		}
	}
	render() {
		return (
			<Results />
		)
	}
}

export default ResultsContainer;