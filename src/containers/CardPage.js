import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'
import Modal from 'react-modal'

import * as cardActions from '../reducers/card/actions'
import ThisCard from '../components/card'

//import {runesToCard} from '../components/card/runesToCard'
import Tag from '../components/Tag'

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


// Gift
const Gift = () => (<div>
	<div className="ui inverted segment">
		<div className="ui inverted form">
			<div className="one fields">
				<div className="field">
					<label>Give it to:</label>
					<input placeholder="my friend number" type="text"/>
				</div>
			</div>
			<div className="ui submit button">Submit</div>
		</div>
	</div>

</div>)

class CardPage extends Component {
	constructor() {
		super();

		this.state = {
			modalIsOpen: false,
			modalBody: ''
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
		//console.log('this.props.match.params.id', this.props.match.params.id)
		this.props.cardActions.getCard(this.props.match.params.id)
		// ToDo this.props.cardActions.getCardRarity(this.props.match.params.id)
	}

	componentWillUnmount(){
		this.props.cardActions.cardInitState()
	}

	render() {
		/*console.log('This is the single card ID you need to call an API by passing ID from params')
		 console.log(this.props.match.params.id)*/
		//const Card = this.props.card
		//console.log(this.props.card)

		// ToDo Connect to api
		const User = {owner: true},
		 			CardTag = ['tag1', 'tag2', 'tag3' ],
					Card = this.props.card

		return (
			<div>
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


				<div className="item-page__wrapper ui container">
					<div className="ui centered grid item-page__details">

						{/*<!-- Big Card -->*/}

						<div className="four wide computer eight wide tablet sixteen wide mobile column">
							<ThisCard
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
									(this.props.card.auction === true) ? <div>

									<div className="ui centered four column grid">

									{/*<!-- Price -->*/}

									<div className="ui column tiny statistic">
									<div className="label">
									PRICE
									</div>
									<div className="value">
									{this.props.card.price}
									</div>
									</div>

									{/*<!-- Time Left -->*/}

									<div className="ui column tiny statistic">
									<div className="label">
									TIME LEFT
									</div>
									<div className="value">
									{this.props.card.time}
									</div>
									</div>

									{/*<!-- Rarity -->*/}

									<div className="ui column tiny statistic">
									<div className="label">
									RARITY
									</div>
									<div className="value">
									{this.props.card.rarity}
									</div>
									</div>

									</div>
										<h2>{this.props.card.name}</h2>
									</div>: <h1>{this.props.card.name}</h1>
								}

							<div className="row item-page__description">
								<div className="ui bulleted list">
									<div className="item">Mana Cost: {this.props.card.mana}</div>
									<div className="item">HP: {this.props.card.hp} / Attack: {this.props.card.attack} / Defense: {this.props.card.defense}</div>
									<div className="item">{this.props.card.text}</div>
								</div>
							</div>


							<div className="row ui form item-page__buy">
								<div className="field">
									{/*ToDo Need to check the card owner*/}
									{
										!User.owner ?
											<Link to={'/buy/'+this.props.match.params.id}>
												<button className="buy-button ui black basic button">Buy Now</button>
											</Link>
											: <div>
													<Link to={'/sell/'+this.props.match.params.id}>
														<button className="buy-button ui black basic button">Sell</button>
													</Link>

												{
													(!this.props.card.breed) ?
														<Link to={'/breed/' + this.props.match.params.id}>
															<button className="buy-button ui black basic button">Breed</button>
														</Link>
														:
														<Link to={'/breed_buy/' + this.props.match.params.id}>
															<button className="buy-button ui black basic button">Breed Not mine</button>
														</Link>
												}


													<button onClick={
														()=>{
															this.setState({ modalBody: <Gift/>}, this.openModal)
														}
													} className="buy-button ui black basic button">Gift</button>
												</div>
									}
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

			</div>
		)
	}
}



const mapStateToProps = state => ({
	card: state.card,
});

const mapDispatchToProps = dispatch => ({
	cardActions: bindActionCreators(cardActions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CardPage);
