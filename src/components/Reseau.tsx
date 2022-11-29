import React, { useEffect, useState } from 'react'
import Partner from './Partner'
import Icon from './IconPlus'
import { PartnerType } from '../types/Partner'


const Reseau = (element: PartnerType) => {
	const [active, setActive] = useState<any>({})

    useEffect(() => {
        activateElement(element)
    }, [])

	const activateElement = (element: PartnerType) => {
		setActive(active.name == element.name ? element : {})
	}

	return (
        <div className="reseau">
            <img 
                src={element.logo} 
                alt={element.name}
                onClick={ () => setActive(element === active ? {} : element) }
                className={ active === element.name ? `reseau-img active-reseau` : `reseau-img` } 
            />
            <Icon element={element} setActiveElement={setActive} active={active} />
            <div className="reseau-items">
                { element.items && element.items.map((item: any) => {
                    return <Partner {...item} />
                }) }
            </div>
        </div>			
	)
}

export default Reseau