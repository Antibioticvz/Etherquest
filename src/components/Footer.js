import React from 'react'

const Footer = () => {
	//console.log(children)
	return(
		<div className="footer__wrapper">

			<div className="ui container footer__content">

				<div className="row footer__contact">
					<a href="#" target="_blank"><i className="facebook square icon"></i></a>
					<a href="#" target="_blank"><i className="twitter square icon"></i></a>
					<a href="#" target="_blank"><i className="reddit square icon"></i></a>
					<a href="#" target="_blank"><i className="medium icon"></i></a>
					<a href="mailto:#" target="_top"><i className="mail icon"></i></a>
				</div>

				<div className="row footer__quote">
					All transactions are managed via the Ethereum network and MetaMask.
				</div>

				<div className="row footer__copyrights">
					© Etherquest. All Rights Reserved.
				</div>

			</div>

		</div>
	)
}



export default Footer