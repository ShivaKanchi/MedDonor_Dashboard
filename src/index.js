import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store"
import './index.css'

import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    <Provider store={store}>
        <ContextProvider>
            <App />
        </ContextProvider>
    </Provider>
    , document.getElementById('root')
)