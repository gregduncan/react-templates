import * as types from "../constants/ActionTypes"

export const editGeneric = (value) => {
    return { type: types.FETCH_GENERIC_FULFILLED, payload: value }
}