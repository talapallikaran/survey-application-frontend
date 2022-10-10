import { STORE_USER_DATA, TOGGLE, USER_SIGNIN } from "./actiontypes"

const initialState = {
    data: [],
    toggle: false,
    userData: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USER_DATA:
            return {
                ...state,
                data: action.payload
            }
        default: return state
    }
}

export const userData = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE:
            return {
                ...state,
                toggle: !state.toggle
            }

        case USER_SIGNIN:
            return {
                ...state,
                userData: action.payload
            }
        default: return state
    }
}


