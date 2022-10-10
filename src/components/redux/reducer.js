import { FETCH_DATA, STORE_USER_DATA } from "./actiontypes"

const initialState = {
    data: [],
    finish: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USER_DATA:
            return {
                ...state,
                data: action.payload
            }

        case FETCH_DATA:
            return {
                ...state,
                finish: action.payload
            }
        default: return state
    }
}

export default reducer
