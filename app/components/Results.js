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
				defaultPageSize={20}
				style={{
					height: '600px' // This will force the table body to overflow and scroll
				}}
				className='-striped'
				SubComponent={row => {
					return (
						<p>All of the data</p>
						);
				}}
			/>
		)
	}
}

export default Results;