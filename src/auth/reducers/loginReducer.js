import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./loginActions"


export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
        return {
            ...state,
            isAuthenticated: false,
            user: action.creds
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            errorMessage: ''
        }
        case LOGIN_FAILURE:
        return {
            ...state,
            isAuthenticated: false,
            errorMessage: action.message
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }

        default:
        return state
    }
    }