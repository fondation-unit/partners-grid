import React, { useState } from 'react'
import { PartnerType } from '../types/Partner'


const Partner = (element: PartnerType) => {
    const [showInfo, setShowInfo] = useState<string>('')
    
	const activateInfo = (id: string) => {
		setShowInfo(showInfo === id ? '' : id)
	}
    
	return (
        <div onClick={ () => activateInfo(element.id) }
            className={ showInfo === element.id ? `partner-img active` : `partner-img` } >
            <img src={element.logo} alt={element.name} className='card__image' />
            <div className='card__overlay'>
                <div className='card__header'></div>
                <h6 className='card__title'>{element.name}</h6>
                <a href={element.url} className='card__url'>Lien Back</a>
            </div>
        </div>	
    )
}

export default Partner