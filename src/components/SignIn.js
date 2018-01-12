import React from 'react'

const SignIn = () => {
	//console.log(children)
	return(
		<div className="ui center aligned home__header">
			<h1 className="ui inverted center aligned header">Wanna play?</h1>

			<p className="text">You’ll need a safe place to store all of your adorable CryptoKitties! The perfect place is in a secure wallet like MetaMask. This will also act as your login to the game (no extra password needed).
			</p>

			<center>
			<button className=" massive ui button">
				Install MetaMask
			</button>
			</center>
		</div>
	)
}



export default SignIn