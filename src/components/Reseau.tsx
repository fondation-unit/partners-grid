import * as React from 'react'
import Partner from './Partner'
import IconPlus from './IconPlus'
import { PartnerType } from '../types/Partner'

interface Props {
    element: PartnerType
    setActiveId: (name: any) => void
    activeId: number
}

const Reseau = ({element, setActiveId, activeId}: Props) => {
    const elementId = parseInt(element.id)

	return (
        <div className="reseau">
            <img 
                src={element.logo} 
                alt={element.name}
                onClick={ () => setActiveId(elementId === activeId ? 0 : elementId) }
                className={ activeId === elementId ? `reseau-img active-reseau` : `reseau-img` } 
            />
            <IconPlus 
                element={element} 
                setActiveId={setActiveId} 
                activeId={activeId} 
            />
            { activeId === elementId ?
                <div className="reseau-items">
                    { element.items && element.items.map((item: any) => {
                        return <Partner {...item} />
                    }) }
                </div>
            : null }
        </div>			
	)
}

export default Reseau