import * as React from 'react'
import { PartnerType } from '../types/Partner'
import { PARTNERS_GRID_PARTNERS } from '../utils'


const Save = () => {
    const partners = JSON.parse(PARTNERS_GRID_PARTNERS);

	return (
		<div className="partners-grid">
			<div className='container'>
				<div className='row'>
					<div className='partner'>
			{ partners.map((partner: PartnerType) => {
				return ( 
						<a href={partner.url}><img src={partner.logo} alt={partner.name} className="img"/></a>
						)
			}) }
					</div>
				</div>
			</div>
		</div>
	)
};

export default Save
