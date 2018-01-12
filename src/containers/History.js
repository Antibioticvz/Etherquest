import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as historyActions  from '../reducers/history/actions';

import Activity from '../components/Activity'


class History extends Component {
	componentWillMount(){
		// ToDo Get from API User
		const UserID='12345'
		this.props.historyActions.getHistoryCards()
		console.log('This is the single card ID you need to call an API by passing ID from params')
	}

	componentWillUnmount(){
		this.props.historyActions.historyInitState()
	}

	render() {
		const History = this.props.history.historyToShow

		console.log('this.props.history.historyToShow', this.props.history.historyToShow)
		console.log('History.length > 0', History.length )

		return (
			<div >
				<div className="ui form">
					{/*<div className="ui four column doubling stackable grid container">*/}
					<div className="ui divided items">

						{
							(History.length > 0)
								? History.map( (History, number) => (<Activity />))
								: ''
						}
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	history: state.history,
});

const mapDispatchToProps = dispatch => ({
	historyActions: bindActionCreators(historyActions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(History);
