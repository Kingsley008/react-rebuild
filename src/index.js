import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Routes from './Routes';
import store from './Store';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render( <Provider store = {store}><Routes/></Provider>, document.getElementById('root'));
registerServiceWorker();
