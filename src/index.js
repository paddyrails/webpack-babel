import React from 'react';
import {render} from 'react-dom';

import getFacts from './facts';
import App from './App';

getFacts().then(facts => {
    render(<App facts={facts}/>, document.querySelector('#root'));
})
