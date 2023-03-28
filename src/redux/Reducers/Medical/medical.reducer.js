import {
    GET_ALL_MEDICALS,
    GET_MEDICAL,
    ADD_MEDICAL,
    UPDATE_MEDICAL,
    DELETE_MEDICAL
} from './medical.type'

const intialState = {
    medicals: [],
    selectedMedical: {}
}

const medicalReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_ALL_MEDICALS: return {
            ...state,
            medicals: action.payload
        };
        case GET_MEDICAL: return {
            ...state,
            selectedMedical: [...action.payload]
        };
        case ADD_MEDICAL: return {
            ...state,
            ...action.payload
        };
        case UPDATE_MEDICAL: return {
            ...state,
            ...action.payload
        };
        case DELETE_MEDICAL: return {
            ...state,
            ...action.payload
        };
        default: return {
            ...state
        }
    }
}
export default medicalReducer