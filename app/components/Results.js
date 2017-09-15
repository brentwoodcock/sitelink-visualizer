import React, { Component } from 'react';
import ReactTable from 'react-table';
// import 'react-table/react-table.css';

class Results extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ReactTable
				data={this.props.data}
				columns={this.props.columns}
				defaultPageSize={10}
				className='-striped'
				filterable
				SubComponent={row => {
					console.log(row.row._original);
					var subComponentData = [];
					for (var key in row.row._original) {
						if (row.row._original.hasOwnProperty(key) && (key !== '$attributes') && (key !== 'Ret_Code')) {
							subComponentData.push({
								variable: key,
								value: row.row._original[key]
							});
						}
					};

					var subComponentColumns = [{
						Header: 'Variable',
						accessor: 'variable'
					}, {
						Header: 'Value',
						accessor: 'value'
					}];

					return (
						<div style={{ 'padding':'20px', 'margin-left': '50px', 'margin-right': '50px' }}>
							<ReactTable
								data={subComponentData}
								columns={subComponentColumns}
								className='-striped'
								showPagination={false}
								style={{
									height: '350px'  // Forces table to overflow and scroll
								}}
								defaultSorted={[
									{
										id: 'variable',
										asc: true
									}
								]}
								pageSize={subComponentData.length}
							/>
						</div>
						);
				}}
			/>
		)
	}
}

export default Results;