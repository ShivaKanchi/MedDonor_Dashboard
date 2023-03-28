import axios from "axios";
import { GET_ALL_MEDICINES, GET_MEDICINE } from "./medicine.type";

export const getMedicines = () => async (dispatch) => {
    try {
        const medicines = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/medicine`,
        });
        return dispatch({
            type: GET_ALL_MEDICINES,
            payload: medicines.data.data
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const getMedicine = () => async (dispatch) => {
    try {
        const medicine = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/medicine`,
        });
        console.log(medicine, "From action medicine")
        return dispatch({
            type: GET_MEDICINE,
            payload: medicine
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
}