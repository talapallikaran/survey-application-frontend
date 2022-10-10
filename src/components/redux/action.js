import { STORE_USER_DATA, TOGGLE, USER_SIGNIN } from "./actiontypes"

export const fetchUserRequest = (data) => {
    return {
        type: STORE_USER_DATA,
        payload: data
    }
}

export const toggle = () => {
    return {
        type: TOGGLE
    }
}

export const userData = (data) => {
    return {
        type: USER_SIGNIN,
        payload: data
    }
}