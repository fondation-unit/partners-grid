import * as React from 'react'
import Partner from './Partner'
import IconPlus from './IconPlus'
import { ReseauProps } from '../types/Reseau'


const Reseau = ({element, setActiveId, activeId}: ReseauProps) => {
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
                        return (
                            <Partner element={item} activeId={activeId} setActiveId={setActiveId}  />
                        )
                    }) }
                </div>
            : null }
        </div>			
	)
}

export default Reseau