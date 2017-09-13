import React, { Component } from 'react';
import Results from '../components/Results';

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
		console.log('ResultsContainer did update');
		this.createColumns();
		this.createSubComponents();
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
		console.log('subComponents array');
		console.log(this.state.subComponents);
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