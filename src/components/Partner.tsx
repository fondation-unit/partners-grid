import * as React from 'react'
import { ReseauProps } from '../types/Reseau'


const Partner = ({element, setActiveId, activeId}: ReseauProps) => {
    const elementId = parseInt(element.id)

	return (
        <div onClick={ () => setActiveId(elementId === activeId ? 0 : elementId) }
            className={ activeId === elementId ? `partner-img active-info` : `partner-img` } >
            <img src={element.logo} alt={element.name} className='card__image' />
            <div className='card__overlay'>
                <div className='card__header'></div>
                <h6 className='card__title'>{element.name}</h6>
                <a href={element.url} className='card__url'>Lien</a>
            </div>
        </div>	
    )
}

export default Partner