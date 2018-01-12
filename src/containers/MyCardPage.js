import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ReactPaginate from 'react-paginate';

import HomeCard from '../containers/HomeCard'
import TheCard from '../components/card/index'

import {Link} from 'react-router-dom'

import * as meActions  from '../reducers/my_card/actions';



class MyCardPage extends Component {
	componentWillMount(){
		// ToDo Get from API User
		const UserID='12345'
		this.props.meActions.getMeCards()
		//ToDo this.props.meActions.getMyCards(UserID)
		console.log('This is the single card ID you need to call an API by passing ID from params')
	}

	componentWillUnmount(){
		this.props.meActions.meInitState()
		// ToDo this.props.meActions.meInitState()
	}

	render() {
		const Cards = this.props.me.cardsToShow


		return (
			<div >

				<ReactPaginate previousLabel={"previous"}
											 nextLabel={"next"}
											 breakLabel={'...'}
											 breakClassName={"item"}
											 pageCount={50}
											 marginPagesDisplayed={2}
											 pageRangeDisplayed={5}
											 onPageChange={(e)=>{
												 this.props.meActions.onChangeMe(e.selected, 'pag')
											 }}
											 containerClassName={"ui pagination menu"}
											 pageLinkClassName={"item"}
											 subContainerClassName={""}
											 activeClassName={"active item"} />

				<br/>

				<button onClick={()=>this.props.meActions.sortDate('min', this.props.me.cards)} >Date Max</button>
				<button onClick={()=>this.props.meActions.sortDate('max', this.props.me.cards)} >Date Min</button>

				<button onClick={()=>this.props.meActions.sortPrice('min', this.props.me.cards)} >Price Max</button>
				<button onClick={()=>this.props.meActions.sortPrice('max', this.props.me.cards)} >Price Min</button>


				<div className="ui form">
					<div className="field">
						<label>Rarity</label>

						<select
							className={'ui selection dropdown'}
							onChange={(e)=>this.props.meActions.filterRarity(e.target.value, this.props.me.cards)}
						>
							<option value="all">all</option>
							<option value="legendary">legendary</option>
							<option value="epic">epic</option>
							<option value="rare">rare</option>
							<option value="uncommon">uncommon</option>
							<option value="common-1">common-1</option>
							<option value="common-2">common-2</option>
							<option value="common-3">common-3</option>
							<option value="common-4">common-4</option>
							<option value="common-5">common-5</option>
							<option value="common-6">common-6</option>
							<option value="common-7">common-7</option>
							<option value="common-8">common-8</option>
							<option value="common-9">common-9</option>
							<option value="common-10">common-10</option>
							<option value="common-11">common-11</option>
							<option value="common-12">common-12</option>
							<option value="common-13">common-13</option>
							<option value="common-14">common-14</option>
							<option value="common-15">common-15</option>
						</select>

					</div>
				</div>


				<div className="ui four column doubling stackable grid container">
					{
						(Cards.length > 0) ?
							Cards.map( (Card, number) => {


									if(number >= this.props.me.pag*10 && number < this.props.me.pag*10+20){



										return(
											<Link className="item" to={'/card/'+Card.id}>
												<HomeCard key={number}
																	card={
																		<TheCard
																			key={number}
																			cards={Card}
																		/>
																	}
												/>
											</Link>
										)

									}




								}
							)
							: ''
					}
				</div>
			</div>
		)
	}
}



const mapStateToProps = state => ({
	me: state.me,
});

const mapDispatchToProps = dispatch => ({
	meActions: bindActionCreators(meActions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MyCardPage);
