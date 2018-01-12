import React, { Component } from 'react';

import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Home from './components/Home'
import Footer from './components/Footer'
import Nav from './components/Nav'

import CardPage from './containers/CardPage'
import Breed from './containers/Breed'
import BreedBuy from './containers/BreedBuy'
import MyCardPage from './containers/MyCardPage'
import History from './containers/History'
import Terms from './components/Terms'
import Buy from './components/Buy'
import Sell from './components/Sell'
import SignIn from './components/SignIn'

import './assets/css/card.css';
import './assets/css/main.css';
//import './assets/css/pagination.css';

const NoMatch = () => (<div>Sorry, page not found</div>);

class App extends Component {
	render() {
		return (
			<div>

				<Nav/>


				<Switch >
					<Route exact path="/" render={() => <Home />} />
					<Route path="/card/:id" render={(props) => <CardPage {...props}/>}/>
					<Route path="/sell/:id" render={(props) => <Sell {...props}/>}/>
					<Route path="/me" render={() => <MyCardPage />}/>
					<Route path="/buy/:id" render={(props) => <Buy {...props}/>}/>
					<Route path="/terms" render={() => <Terms />}/>
					<Route path="/breed/:id" render={(props) => <Breed {...props} />}/>
					<Route path="/breed_buy/:id" render={(props) => <BreedBuy {...props} />}/>
					<Route path="/history" render={() => <History />}/>
					<Route path="/sign" render={() => <SignIn />}/>
					{/*<Route path="/login" render={() => <LoginPage />} />*/}
					<Route component={NoMatch} />
				</Switch>

				<Footer />
			</div>
		)
	}
}



const mapStateToProps = state => ({
	//login: state.login,
});

const mapDispatchToProps = dispatch => ({
	//loginActions: bindActionCreators(loginActions, dispatch),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(App));
