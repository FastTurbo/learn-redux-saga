
import user from './user'
import counter from './counter'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user,
    counter
})

export default rootReducer