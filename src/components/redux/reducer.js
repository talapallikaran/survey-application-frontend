import { STORE_USER_DATA } from "./actiontypes"

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USER_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: return state
    }
}

export default reducer
