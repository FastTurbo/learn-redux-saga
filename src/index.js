import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import App from './components/App'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,sagaMiddleware)))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
)