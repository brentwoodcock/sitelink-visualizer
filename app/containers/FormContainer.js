import React, { Component } from 'react';
import Form from '../components/Form';

class FormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			default: ''
		}
	}
	render() {
		return (
			<Form />
		)
	}
}

export default FormContainer;