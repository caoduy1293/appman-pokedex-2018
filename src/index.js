import React from 'react'
import ReactDOM from 'react-dom'
import reduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { applyMiddleware,compose, createStore } from 'redux'

import './index.css'
import App from './App'
import reducers from './reducers';

const rootStore = createStore(
    reducers,
    compose(
        applyMiddleware(reduxThunk)
    )
);
ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
