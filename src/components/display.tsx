import * as React from 'react'
import Reseau from './Reseau'
import Partner from './Partner'
import { PartnerType } from '../types/Partner'
import { PARTNERS_GRID_PARTNERS } from '../utils'



const Display = () => {
    const partners = JSON.parse(PARTNERS_GRID_PARTNERS)

	return (
		<div id='partnersgrid-block-root' className="partners-grid">
			<div className='container'>
				<div className='row'>
					<div className='partner'>
						{ partners.map((element: PartnerType) => {
							return (
								element.type && element.type == "reseau"
									? <Reseau {...element} />
									: <Partner {...element} />
							)
						}) }
					</div>
				</div>
			</div>
		</div>
	)
}

export default Display