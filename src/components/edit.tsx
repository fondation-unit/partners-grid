import React, { FunctionComponent } from 'react'
import { EditProps } from '../types/Edit'


const Edit: FunctionComponent<EditProps> = ({ ...props }: EditProps) => {
	console.log(props)

// @ts-ignore
const PARTNERSGRIDLIST = PARTNERSGRID.partner;
console.log(PARTNERSGRIDLIST)
	return (
		<div className="partners-grid">Bonjour 2</div>
	)
}

export default Edit