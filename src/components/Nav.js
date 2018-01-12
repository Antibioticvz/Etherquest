import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
	return(
		<div className="ui secondary stackable pointing menu navbar__wrapper">
			<div className="ui container navbar__content">

				<div className="header item">
					<a href="#">
						<div className="navbar__image-wrapper">
							<img src="../assets/imgs/logo.png" alt="Etherquest Logo" />
						</div>
					</a>
				</div>

				<Link className="item" to={'/me'}> My Cards </Link>
				<Link className="item" to={'/'}> Marketplace </Link>

				{/* ToDo this link for demonstration  */}
				<Link className="item" to={'/sell/1212'}> Sell </Link>

				<Link className="item" to={'/history'}> History </Link>

				<Link className="item" to={'/terms'}> Terms & Privacy </Link>


				<Link className="item" to={'/sign'}> Sign In</Link>

				<div className="right menu navbar__right-menu">
					<div className="navbar__popup-btn">
						<a className="ui item ng-binding ng-scope">
							Your Metamask/Mist is not connected <i className="warning sign icon"></i>
						</a>
					</div>
				</div>

			</div>
		</div>

	)
}



export default Nav