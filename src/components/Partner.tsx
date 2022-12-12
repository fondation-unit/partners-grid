import * as React from 'react'
import { ReseauProps } from '../types/Reseau'


const Partner = ({element}: ReseauProps) => {

	return (
        <div className="partner-img">
            <a href={element.url}><img src={element.logo} alt={element.name} className='card__image' /></a>
        </div>	
    )
}

export default Partner