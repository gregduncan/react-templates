import { FETCH_GENERIC, FETCH_GENERIC_FULFILLED, FETCH_GENERIC_REJECTED } from "../constants/ActionTypes"

const initialState = {
    data: 1,
    fetching: false,
    error: null
}

export default function generic(state = initialState, action) {

    switch (action.type) {
        case FETCH_GENERIC: {
            return { 
                ...state, 
                fetching: true 
            }
        }

        case FETCH_GENERIC_REJECTED: {
            return { 
                ...state, 
                fetching: false, 
                error: action.payload 
            }
        }

        case FETCH_GENERIC_FULFILLED: {
            return {
                ...state,
                fetching: false,
                data: action.payload
            }
        }

        default:
            return state
    }
}
