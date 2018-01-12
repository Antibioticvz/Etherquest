import React, {Component} from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions  from '../reducers/home/actions';

import {Link} from 'react-router-dom'

import ReactPaginate from 'react-paginate';

import TheCard from './card/index'
import HomeCard from '../containers/HomeCard'
import Intro from '../components/Intro'
import Tag from '../components/Tag'


// Make [{10:{}},{10:{}} ...] for pagination
const makePag = (cards=[]) => {

			console.log(cards)

	let card = [], cardsGr = [], b = 0, len = 50

	for (; b < len; ) {
		let i = 0, lenGR = 20

		for (; i < lenGR;) {
			cardsGr.push(cards[i]);
			i++;
		}

		b++
		card.push(cardsGr)
		cardsGr = [], i = 0
	}


	return card
}

class Home extends Component {
	componentWillMount(){
		this.props.homeActions.getHomeCards()
	}

	componentWillUnmount(){
		this.props.homeActions.homeInitState()
	}

	render() {
		//console.log(this.props.home.cardsToShow)
		const Cards = this.props.home.cardsToShow,
					allTags = ['Tag', 'NotThere', 'all']


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
											 	this.props.homeActions.onChangeHome(e.selected, 'pag')
											 }}
											 containerClassName={"ui pagination menu"}
											 pageLinkClassName={"item"}
											 subContainerClassName={""}
											 activeClassName={"active item"} />






				<Intro />


				<button onClick={()=>this.props.homeActions.sortDate('min', this.props.home.cards)} >Date Max</button>
				<button onClick={()=>this.props.homeActions.sortDate('max', this.props.home.cards)} >Date Min</button>

				<button onClick={()=>{ this.props.homeActions.sortPrice('min', this.props.home.cards) }} >Price Max</button>
				<button onClick={()=>this.props.homeActions.sortPrice('max', this.props.home.cards)} >Price Min</button>


				<div className="ui form">
					<div className="field">
						<label>Rarity</label>

						<select
							className={'ui selection dropdown'}
							onChange={(e)=>this.props.homeActions.filterRarity(e.target.value, this.props.home.cards)}
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
				<div className="ui form">
					<div className="field">
						<label>Breed</label>

						<select
							className={'ui selection dropdown'}
							onChange={(e)=>this.props.homeActions.filterBreed(e.target.value, this.props.home.cards)}
						>
							<option value="all">all</option>
							<option value={true}>For Breed</option>
						</select>

					</div>
				</div>

				<div className="ui form">
					<div className="field">
						<label>Sell</label>

						<select
							className={'ui selection dropdown'}
							onChange={(e)=>this.props.homeActions.filterSell(e.target.value, this.props.home.cards)}
						>
							<option value="all">all</option>
							<option value={true}>For Sell</option>
						</select>

					</div>
				</div>


				{
					allTags.map( (tag, i) => <div onClick={()=>{
						console.log('TAG ', tag)
						this.props.homeActions.filterTag(tag, this.props.home.cards)
					}}>
						<Tag key={i} text={tag}/>
					</div> )
				}

				<Tag />


				<div className="ui four column doubling stackable grid container">
					{
						//Cards[this.props.home.pag].map( (Card, number) => {
						(Cards.length > 0 ) ?
							Cards.map( (Card, number) => {
								/*console.log('Card', Card)
									console.log('number', number)*/

								if(number >= this.props.home.pag*10 && number < this.props.home.pag*10+20){



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
					}}
				</div>



			</div>
		)
	}
}

const mapStateToProps = state => ({
	home: state.home,
});

const mapDispatchToProps = dispatch => ({
	homeActions: bindActionCreators(homeActions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);