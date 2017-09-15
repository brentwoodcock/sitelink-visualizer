import React, { Component } from 'react';
import Results from '../components/Results';
import matchSorter from 'match-sorter';

class ResultsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [],
			subComponents: []
		}
		this.createColumns = this.createColumns.bind(this);
		this.createSubComponents = this.createSubComponents.bind(this);
	}
	componentDidUpdate(prevProps, prevState) {
		this.createColumns();
		this.createSubComponents();
	}
	createColumns() {
		if (this.props.searchType === 'unitTypes') {
			this.state.columns =[{
				Header: 'Unit Type',
				accessor: 'sTypeName',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['sTypeName'] }),
				filterAll: true
			}, {
				Header: 'Type ID',
				accessor: 'UnitTypeID',
				maxWidth: 75,
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['UnitTypeID'] }),
				filterAll: true
			}, {
				Header: 'Standard Rate',
				accessor: 'dcStdRate',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['dcStdRate'] }),
				filterAll: true
			}, {
				Header: 'Length',
				accessor: 'dcLength',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['dcLength'] }),
				filterAll: true
			}, {
				Header: 'Width',
				accessor: 'dcWidth',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['dcWidth'] }),
				filterAll: true
			}, {
				Header: 'Vacant Units',
				accessor: 'iTotalVacant',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['iTotalVacant'] }),
				filterAll: true
			}, {
				Header: 'Total Units',
				accessor: 'iTotalUnits',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['iTotalUnits'] }),
				filterAll: true
			}]
		} else if (this.props.searchType === 'allUnits') {
			this.state.columns = [{
				Header: 'Unit Name',
				accessor: 'sUnitName',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['sUnitName'] }),
				filterAll: true
			}, {
				Header: 'Unit Type',
				accessor: 'sTypeName',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['sTypeName'] }),
				filterAll: true
			}, {
				Header: 'Unit Type ID',
				accessor: 'UnitTypeID',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['UnitTypeID'] }),
				filterAll: true
			}, {
				Header: 'Standard Rate',
				accessor: 'dcStdRate',
				filterMethod: (filter, rows) =>
					matchSorter(rows, filter.value, { keys: ['dcStdRate'] }),
				filterAll: true
			}]
		}
	}
	createSubComponents() {
		if (this.props.searchType === 'unitTypes') {
			for (var i = 0; i < this.props.data.length; i++) {
				var component = {};
				var typeInfo = this.props.data[i];
				for (var key in typeInfo) {
					if (typeInfo.hasOwnProperty(key) && key !== '$attributes') {
						component[key] = typeInfo[key];
					}
				}
				for (var key in component) {
					if (component.hasOwnProperty(key)) {
						
					}
				}
				this.state.subComponents.push(component);
			}
		}
	}
	render() {
		return (
			<Results 
			data={this.props.data}
			columns={this.state.columns}
			subComponents={this.state.subComponents} />
		)
	}
}

export default ResultsContainer;