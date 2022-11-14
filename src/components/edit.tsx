import React, { FunctionComponent } from 'react'
import { EditProps } from '../types/Edit'


const Edit: FunctionComponent<EditProps> = ({ ...props }: EditProps) => {
	console.log(props)
	return (
		<div>ok</div>
	)
}

export default Edit