import React, { FunctionComponent } from 'react'
import { EditProps } from '../types/Edit'
import { PartnerType } from '../types/Partner'
import { PARTNERS_GRID_PARTNERS } from '../utils'


const Edit: FunctionComponent<EditProps> = ({ ...props }: EditProps) => {
	console.log(props)

	// @ts-ignore
	const partners = JSON.parse(PARTNERS_GRID_PARTNERS);

	return (
		<div className="partners-grid">
			{ partners.map((partner: PartnerType) => {
				return ( <div>{ partner.name }</div> )
			}) }
		</div>
	)
}

export default Edit