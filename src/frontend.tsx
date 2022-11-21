import React from 'react';
const WPElement = require('@wordpress/element');


const rootElement = document.getElementById('partnersgrid-block-root');
if (rootElement) {
    console.log('coucou');
    WPElement.render(
        <div>Hell yeah</div>,
        document.getElementById('partnersgrid-block-root')
    );
}
