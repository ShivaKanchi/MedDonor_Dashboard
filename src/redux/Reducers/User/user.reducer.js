import { GET_USER, SELF, CLEAR_USER, UPDATE_USER } from "./user.type";

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state
            };
        case SELF:
            return {
                ...state,
                user: action.payload
            };
        case CLEAR_USER:
            return {
                user: {}
            };
        case UPDATE_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return {
                ...state
            }
    }
}
export default userReducer;