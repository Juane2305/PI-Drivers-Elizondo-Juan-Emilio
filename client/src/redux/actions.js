import axios from "axios";
import { GET_ALL_DRIVERS } from "./action-types";
const UrlDrivers = 'http://localhost:3001/drivers'

export const getAllDrivers = () => {
    return async function(dispatch){
        const response = await axios(UrlDrivers)
        return dispatch({ type: GET_ALL_DRIVERS, payload: response.data});
    }
}