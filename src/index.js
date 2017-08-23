import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

const all = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

//ReactDOM.render(all(), document.getElementById('root'));

ReactDOM.render(all(), document.getElementById('root'));
