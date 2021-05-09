//import React from 'react';
import ReactDom from 'react-dom';
// import ReducerList from './reducers/index';

import App from './App';
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from 'redux-thunk';

//const store = createStore(ReducerList, applyMiddleware(thunk));

ReactDom.render(
    //<Provider store={store}>
        <App/>
    //</Provider>
    , document.getElementById('root')
);
