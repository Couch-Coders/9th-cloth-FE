import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../store/reducers';

const MyApp = ({ Component, store }) => {
    return <Component />;
};

const devMode = process.env.NODE_ENV === 'development';

const configureStore = () => {
    const middlewares = [logger, thunkMiddleware];
    const enhancer = !devMode
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, { debug: devMode });

export default wrapper.withRedux(MyApp);
