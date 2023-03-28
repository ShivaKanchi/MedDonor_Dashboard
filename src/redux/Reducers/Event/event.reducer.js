import {
    GET_ALL_EVENTS,
    GET_EVENT,
    ADD_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    GET_CITY_EVENTS,
    GET_CERTIFICATE_EVENT,
} from "./event.type";

const intialState = {
    events: [],
    selectedEvent: {}
};

const eventReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_EVENT: return {
            ...state,
            ...action.payload
        };
        case GET_ALL_EVENTS: return {
            ...state,
            events: [...action.payload]
        };
        case GET_EVENT: return {
            ...state,
            selectedEvent: [...action.payload]
        };
        case UPDATE_EVENT: return {
            ...state,
            ...action.payload
        };
        case DELETE_EVENT: return {
            ...state,
            ...action.payload
        };
        case GET_CITY_EVENTS: return {
            ...state,
            events: [...action.payload]
        };
        case GET_CERTIFICATE_EVENT: return {
            ...state,
            events: [...action.payload]
        };
        default: return {
            ...state
        }
    }
}
export default eventReducer