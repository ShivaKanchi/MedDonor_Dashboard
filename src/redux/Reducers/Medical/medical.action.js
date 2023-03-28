import axios from 'axios';
import {
    GET_ALL_MEDICALS,
    GET_MEDICAL,
    ADD_MEDICAL,
    UPDATE_MEDICAL,
    DELETE_MEDICAL
} from './medical.type'

export const getAllMedicals = () => async (dispatch) => {
    try {
        const medicallist = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/medical/`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
        });
        return dispatch({ type: GET_ALL_MEDICALS, payload: medicallist.data.data });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}
export const getMedical = (_id) => async (dispatch) => {
    try {
        const onemedical = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/medical/`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
        });
        return dispatch({ type: GET_MEDICAL, payload: onemedical });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}
export const addMedical = (medicalData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/medical/add`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
            data: { credentials: medicalData }
        });
        return dispatch({ type: ADD_MEDICAL, payload: medicalData });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}

export const updateMedical = (medicalData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/medical/update`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
            data: { credentials: medicalData }
        });
        return dispatch({ type: UPDATE_MEDICAL, payload: medicalData });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}

export const deleteMedical = (_id) => async (dispatch) => {
    try {
        const deletedMedical = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/medical/delete`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
        });
        return dispatch({ type: DELETE_MEDICAL, payload: deletedMedical });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}