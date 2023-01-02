import React from 'react'
const WPElement = require('@wordpress/element')
import Display from './components/Display'


const rootElement = document.getElementById('partnersgrid-block-root')
if (rootElement) {
    WPElement.render(
        <Display />,
        document.getElementById('partnersgrid-block-root')
    )
}
