import React, { Component } from 'react';
import FormContainer from '../containers/FormContainer';
// import ResultsContainer from '../containters/ResultsContainer';

class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			default: ''
		}
	}
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12'>
						<FormContainer />
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-12'>
						ResultsContainer
					</div>
				</div>
			</div>
		)
	}
};

export default Wrapper;