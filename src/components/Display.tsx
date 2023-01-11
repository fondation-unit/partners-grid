import React, { useState } from 'react'
import Reseau from './Reseau'
import Partner from './Partner'
import { PartnerType } from '../types/Partner'
import { PARTNERS_GRID_PARTNERS } from '../utils'


const Display = () => {
	const [activeId, setActiveId] = useState<number>(0)
    const partners = JSON.parse(PARTNERS_GRID_PARTNERS)
 
	return (
		<div className='partner-container container'>
			{ partners.map((element: PartnerType) => {
				return (
					element.type && element.type == "reseau"
						? <Reseau element={element} activeId={activeId} setActiveId={setActiveId} />
						: <Partner element={element} activeId={activeId} setActiveId={setActiveId} />
				)
			}) }
		</div>
	)
}

export default Display