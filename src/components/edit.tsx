import React, { FunctionComponent } from 'react'
import { EditProps } from '../types/Edit'
import { PARTNERS_GRID_PARTNERS } from '../utils'


const Edit: FunctionComponent<EditProps> = ({ ...props }: EditProps) => {
	console.log(props)

	// @ts-ignore
	console.log(PARTNERS_GRID_PARTNERS);

	return (
		<div className="partners-grid">Bonjour 2</div>
	)
}

export default Edit