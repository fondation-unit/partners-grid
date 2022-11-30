import * as React from 'react'
import { PartnerType } from '../types/Partner'

interface Props {
    element: PartnerType
    setActiveId: (name: any) => void
    activeId: number
}

const IconPlus = ({element, setActiveId, activeId}: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" 
            onClick={ () => setActiveId(element.id) }
            className={ activeId === parseInt(element.id) ? `icon-plus icon-active-reseau` : `icon-plus` }>
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
        </svg>
    )
}

export default IconPlus