import * as React from 'react'
import { PartnerType } from '../types/Partner'
import { PARTNERS_GRID_PARTNERS } from '../utils'


const Display = () => {
    const partners = JSON.parse(PARTNERS_GRID_PARTNERS); 
	
	return (
		<div id='partnersgrid-block-root' className="partners-grid">
			<div className='container'>
				<div className='row'>
					<div className='partner'>
						{ partners.map((element: PartnerType) => {
							return (
								element.type && element.type == "reseau"
									? <div>
										<h6>{element.name}</h6>
                                        <img src={element.logo} alt={element.name}/>
										{ console.log(element) }
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

export default Display