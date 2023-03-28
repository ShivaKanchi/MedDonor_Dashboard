import { GET_ALL_MEDICINES, GET_MEDICINE } from "./medicine.type";
const intialState = {
    medicinelist: [],
    medicine: {}
}

const medicineReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_ALL_MEDICINES:
            return {
                ...state,
                medicinelist: [...action.payload]
            };
        case GET_MEDICINE: return {
            ...state,
            medicine: action.payload
        };
        default: return {
            ...state
        }
    }
}

export default medicineReducer