import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore,applyMiddleware} from "redux";
import reducer from "./reducers/index";
// 管理中间件
import thunk from "redux-thunk";
// 与react-redux整合
import {Provider} from "react-redux";

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


serviceWorker.unregister();
