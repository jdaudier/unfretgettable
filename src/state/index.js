// import createSagaMiddleware from 'redux-saga'
import { Iterable } from 'immutable';

import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';

import reducers from './reducers';
// import sagas from './sagas';

// const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];
const middleware = [];

if (process.env.NODE_ENV === 'development') {
    const createLogger = require(`redux-logger`);

    const logger = createLogger({
        timestamp: false,
        duration: false,
        stateTransformer: state => {
            const newState = {};

            for (const i of Object.keys(state)) {
                if (Iterable.isIterable(state[i])) {
                    newState[i] = state[i].toJS();
                } else {
                    newState[i] = state[i];
                }
            }

            return newState;
        },
    });

    middleware.push(logger);
}

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middleware)
));

// sagaMiddleware.run(sagas);

export default store;
