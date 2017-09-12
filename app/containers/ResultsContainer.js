import React, { Component } from 'react';
import Results from '../components/Results';

class ResultsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: []
		}
		this.createColumns = this.createColumns.bind(this);
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('ResultsContainer did update');
		this.createColumns();
	}
	createColumns() {
		if (this.props.searchType === 'unitTypes') {
			this.state.columns =[{
				Header: 'Unit Type',
				accessor: 'sTypeName'
			}, {
				Header: 'Unit Type ID',
				accessor: 'UnitTypeID'
			}, {
				Header: 'Standard Rate',
				accessor: 'dcStdRate'
			}, {
				Header: 'Occupied Units',
				accessor: 'iTotalOccupied'
			}, {
				Header: 'Vacant Units',
				accessor: 'iTotalVacant'
			}, {
				Header: 'Total Units',
				accessor: 'iTotalUnits'
			}]
		} else if (this.props.searchType === 'allUnits') {
			this.state.columns = [{
				Header: 'Unit Name',
				accessor: 'sUnitName'
			}, {
				Header: 'Unit Type',
				accessor: 'sTypeName'
			}, {
				Header: 'Unit Type ID',
				accessor: 'UnitTypeID'
			}, {
				Header: 'Standard Rate',
				accessor: 'dcStdRate'
			}]
		}
	}
	render() {
		return (
			<Results 
			data={this.props.data}
			columns={this.state.columns} />
		)
	}
}

export default ResultsContainer;