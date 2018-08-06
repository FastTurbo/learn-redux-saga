import { INCREMENT_ASYNC } from "../constants";
import { FETCH_USER_REQUEST } from '../constants';


export const incrementAsync = () => {
    return {
        type: INCREMENT_ASYNC
    }
}

export const fetch_user = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}