import React, { FunctionComponent } from 'react'
import { EditProps } from '../types/Edit'
import { PartnerType } from '../types/Partner'
import { PARTNERS_GRID_PARTNERS } from '../utils'


const Edit: FunctionComponent<EditProps> = () => {
	const partners = JSON.parse(PARTNERS_GRID_PARTNERS);

	return (
		<div className="partners-grid">
			<div className='container'>
				<div className='row'>
					<div className='partner'>
						{ partners.map((element: PartnerType) => {
							return (
								element.type && element.type == "reseau"
									? <div>
										<h6>{element.name}</h6>
										{ element.items && element.items.map((item: any) => {
											return (
												<a href={item.url}>
													<img src={item.logo} alt={item.name} className="img" />
												</a>
											)
										}) }
									</div>
									
									: <a href={element.url}>
										<img src={element.logo} alt={element.name} className="img" />
									</a>
							)
						}) }
					</div>
				</div>
			</div>
		</div>
	)
}

export default Edit