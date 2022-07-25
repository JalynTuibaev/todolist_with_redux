import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import reducer from "./store/reducer";
import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
