import React from 'react'

const HomeCard = ({key, card}) => {
	return(
		<div>
			<div key={'home__card-wrapper_'+key} className="home__card-wrapper column">
				<div key={'item-card__wrapper_'+key} className="item-card__wrapper ui link card">
					<div style={{width: '220px', display: 'inline-block'}}>
						{card}
					</div>
				</div>
			</div>
		</div>

	)
}

export default HomeCard