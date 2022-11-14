import * as React from 'react'
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit'
import Save from './components/save'


export default registerBlockType('partnersgrid/block-esnext', {
    title: 'Partners Grid',
    icon: 'search',
    category: 'widgets',
    attributes: {
        content: {
            type: 'array'
        }
    },
    edit: (props) => <Edit {...props} />,
    save: () => <Save />
})
