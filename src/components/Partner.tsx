import * as React from 'react'
import { PartnerType } from '../types/Partner'


const Partner = (element: PartnerType) => {
	return (
        <a href={element.url} className="item">
            <img src={element.logo} alt={element.name} className="img" />
        </a>		
	)
}

export default Partner