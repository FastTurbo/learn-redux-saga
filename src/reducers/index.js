import { combineReducers } from 'redux'
import users from './users.js';
import counter from './counter'


const rootReducer = combineReducers({
    users,
    counter
})

export default rootReducer