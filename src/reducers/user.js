
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESSFUL } from '../constants';
import { FETCH_USER_FAILED } from '../constants';

const initialState = {
    isFetching:false,
    error: null,
    user: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USER_REQUEST:
        return {
            isFetching:true,
            error: null,
            user: null
        }
    case FETCH_USER_SUCCESSFUL:
        return {
            isFetching:false,
            error: null,
            user: action.user.data[0].name
        }
    case FETCH_USER_FAILED:
        return {
            isFetching:false,
            error: action.error,
            user: null
        }

  default:
    return state
  }
}
