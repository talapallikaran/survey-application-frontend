import { FETCH_DATA, STORE_USER_DATA } from "./actiontypes"

export const fetchUserRequest = data => {
    return {
        type: STORE_USER_DATA,
        payload: data
    }
}

export const finsihRequest = finish => {
    return {
        type: FETCH_DATA,
        payload: finish
    }
}