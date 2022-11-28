import React, { useState } from 'react'
import Partner from './Partner'
import { PartnerType } from '../types/Partner'


const Reseau = (element: PartnerType) => {
	const [active, setActive] = useState<string>('')

	const activateElement = (name: string) => {
		setActive(active == name ? '' : name)
	}

	return (
        <div className="reseau">
            <div className="reseau-title">
                <h6>{element.name}</h6>
            </div>
            <img 
                src={element.logo} 
                alt={element.name}
                className={ active === element.name ? `reseau-img active` : `reseau-img` } 
            />
            <div className="reseau-items">
                { element.items && element.items.map((item: any) => {
                    return <Partner {...item} />
                }) }
            </div>
        </div>			
	)
}

export default Reseau