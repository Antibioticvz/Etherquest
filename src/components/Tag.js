import React from 'react'
import {Link} from 'react-router-dom'

const Tag = ({text, link='/', key, icon='github'}) => {
	//console.log(children)
	return(
		<Link to={link} key={"tag_button_"+key} className="ui button">

			<i key={"tag_icon_"+key} className={icon+" icon"} />{text}
		</Link>
	)
}



export default Tag