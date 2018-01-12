import React, { Component } from 'react';

import Modal from 'react-modal'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as breedActions from '../reducers/breed/actions'
import TheCard from '../components/card'
import Tag from '../components/Tag'

//import {runesToCard} from '../components/card/runesToCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// Modal Style
const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'
	}
};

const MyCards = ({cards, onClick}) => {
	//console.log('CARDS=======>', cards)
	//console.log('onClick=======>', onClick)
	return(
		<div>

			<div className="ui four column doubling stackable grid container">
				{
					(cards.length > 0) ?
						cards.map( (Card, key) => {
								return(
									<div key={'home__card-wrapper_'+key} className="home__card-wrapper column"
											 onClick={()=>onClick()}
									>
										<div key={'item-card__wrapper_'+key} className="item-card__wrapper ui link card">
											<div style={{width: '220px', display: 'inline-block'}}>
												<TheCard
													key={key}
													cards={Card}
												/>
											</div>
										</div>
									</div>



								)
							}
						)
						: ''
				}
			</div>
		</div>
	)
}

const Public = () => (<div>

</div>)

class BreedBuy extends Component {
	constructor() {
		super();

		this.state = {
			modalIsOpen: false,
			modalBody: '',
			pair: false,
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		//this.setState({modalBody: ''});
		//this.setState({modalBody: <Sell/>});
		//this.subtitle.style.color = '#f00';
	}

	closeModal() {
		this.setState({modalIsOpen: false});
		this.setState({modalBody: ''});
	}

	componentWillMount(){
		console.log('this.props.match.params.id', this.props.match.params.id)
		this.props.breedActions.getCard(this.props.match.params.id)
		this.props.breedActions.getMyCards()
		// ToDo this.props.breedActions.getCardRarity(this.props.match.params.id)
	}

	componentWillUnmount(){
		this.props.breedActions.breedInitState()
	}

	render() {
		/*console.log('This is the single breed ID you need to call an API by passing ID from params')
		 console.log(this.props.match.params.id)*/
		//const Cards = this.props.breed.myCards
		//console.log(this.props.breed)

		// ToDo Connect to api
		const User = {owner: true},
			CardTag = ['tag1', 'tag2', 'tag3' ],
			Card = this.props.breed.card

		return(


			(this.props.breed.selectBreed) ? (
				<div>

					<h1>Breed</h1>
					<center>
						<div className="item-page__wrapper ui container">
							<div className="ui centered grid item-page__details">

								<div className="eight wide computer eight wide tablet sixteen wide mobile column">
									{
										(this.props.breed.cardBreed !== '') ?
											<div>
												<TheCard
													key={'breed_mother'}
													cards={this.props.breed.cardBreed}
												/>
												<button className="buy-button ui black basic button">Breed them</button>
											</div>
											: <button onClick={
											()=>{
												this.setState({ modalBody:
													<MyCards
														cards={this.props.breed.myCards}
														onClick={()=>{
															//console.log('My card action')

															this.props.breedActions.onChangeBreed( this.props.breed.myCards[0], 'cardBreed')

															this.closeModal()

														}}

													/>}, this.openModal)
											}
										} className="buy-button ui black basic button">Add</button>
									}
								</div>
								<div className="eight wide computer eight wide tablet sixteen wide mobile column">
									<TheCard
										key={'breed_father'}
										cards={this.props.breed.card}
									/>
								</div>

							</div>
						</div>

					</center>



					<div>
						<button onClick={this.openModal}>Open Modal</button>
						<Modal
							isOpen={this.state.modalIsOpen}
							onAfterOpen={this.afterOpenModal}
							onRequestClose={this.closeModal}
							style={customStyles}
							contentLabel="Example Modal"
						>

							{this.state.modalBody}
							{/*<h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>*/}
							<button className="buy-button ui black basic button" onClick={this.closeModal}>close</button>

						</Modal>
					</div>





				</div>
			)
				:
				(
					<div className="item-page__wrapper ui container">
						<div className="ui centered grid item-page__details">

							{/*<!-- Big Card -->*/}

							<div className="four wide computer eight wide tablet sixteen wide mobile column">
								<TheCard
									key="single"
									cards={Card}
									/*runes={'l(10)5(10)56'/!*this.props.card.runes*!/}
									 rarity={'legendary'/!*this.props.card.rarity*!/}*/
								/>
							</div>

							{/*<!-- Description Box -->*/}

							<div className="ten wide computer sixteen wide mobile column">

								{/*<!-- Stats Box -->*/}

								<div className="row item-page__stats">
									{
										(this.props.breed.card.auction === true) ? <div>

											<div className="ui centered four column grid">

												{/*<!-- Price -->*/}

												<div className="ui column tiny statistic">
													<div className="label">
														PRICE
													</div>
													<div className="value">
														{this.props.breed.card.price}
													</div>
												</div>

												{/*<!-- Time Left -->*/}

												<div className="ui column tiny statistic">
													<div className="label">
														TIME LEFT
													</div>
													<div className="value">
														{this.props.breed.card.time}
													</div>
												</div>

												{/*<!-- Rarity -->*/}

												<div className="ui column tiny statistic">
													<div className="label">
														RARITY
													</div>
													<div className="value">
														{this.props.breed.card.rarity}
													</div>
												</div>

											</div>
											<h2>{this.props.breed.card.name}</h2>
										</div>: <h1>{this.props.breed.card.name}</h1>
									}

									<div className="row item-page__description">
										<div className="ui bulleted list">
											<div className="item">Mana Cost: {this.props.breed.card.mana}</div>
											<div className="item">HP: {this.props.breed.card.hp} / Attack: {this.props.breed.card.attack} / Defense: {this.props.breed.card.defense}</div>
											<div className="item">{this.props.breed.card.text}</div>
										</div>
									</div>


									<div className="row ui form item-page__buy">
										<div className="field">
											{/*ToDo Need to check the card owner*/}
											<button onClick={()=>this.props.breedActions.onChangeBreed(!this.props.breed.selectBreed, 'selectBreed') }
															className="buy-button ui black basic button">Breed</button>

											<p className="buy-warning-label">Warning: Do not send Ether from an exchange's address.</p>
										</div>
									</div>


									<div className="ui centered two column grid form item-page__relatives">



										<div className="column ui centered">
											<h3 className="item-page__etymology">Origins</h3>
											<div className="item-page__icon">
												<div className="item-pave__img-wrapper item-card__bg1">
													<a href="#"><img className="etymology-card" src="../assets/imgs/cards/2.png"/></a>
													<a href="#"><img className="etymology-card" src="../assets/imgs/cards/7.png"/></a>
												</div>
											</div>
										</div>

										{/*<!-- Derivations -->*/}

										<div className="column">
											<h3 className="item-page__etymology">Derivations</h3>
											<div className="item-page__icon">
												<a href="#"><img className="etymology-card" src="../assets/imgs/cards/1.png"/></a>
												<a href="#"><img className="etymology-card" src="../assets/imgs/cards/7.png"/></a>
											</div>
										</div>

									</div> {/*<!-- End Etomology -->*/}

								</div> {/*<!-- End Description -->*/}

								<br/>
								{
									CardTag.map( (tag, i) => <Tag key={i} text={tag}/> )
								}

							</div>
						</div>




					</div>
				)

		)
	}
}



const mapStateToProps = state => ({
	breed: state.breed,
});

const mapDispatchToProps = dispatch => ({
	breedActions: bindActionCreators(breedActions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BreedBuy);
