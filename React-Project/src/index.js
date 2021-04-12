import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import itemReducer from "./public/Model/Reducer";

const initState = {
    titleList : false,
    backgroundColor:"#50AADB",
}
const store = createStore(itemReducer, initState);
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

