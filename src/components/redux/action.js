import { STORE_USER_DATA } from "./actiontypes"

export const fetchUserRequest = data => {
    return {
        type: STORE_USER_DATA,
        payload: data
    }
}
