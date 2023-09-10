import { ADD_USER, DELETE_USER, UPDATE_USER,UPDATE_PWS_USER } from "./userActions";


export const userReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                    date: new Date().toLocaleString()
                }];
        
        case DELETE_USER:
            return state.filter((user) => user.id !== action.payload);
        case UPDATE_USER:
            return state.map((user) => user.id === action.payload.id ? {
                ...action.payload,
                password: user.password,
                date: new Date().toLocaleString()
            } : user);
        
        case UPDATE_PWS_USER: 
            
            return state.map((user) => {
                if (user.id === action.payload.id) {
                    if (user.password === action.payload.passwordOld) {

                        return {
                            ...user,
                            password: action.payload.passwordNew,
                            date: new Date().toLocaleString()
                        }
                    }
                }
                return user;            }
            );
        
               
        default:
            return state;
    }
}
