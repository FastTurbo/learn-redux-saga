import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import  createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger, sagaMiddleware)))

sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
