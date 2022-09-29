import axios from "axios";
import { USERS_API } from "../config";

function register(user) {
    return axios.post(USERS_API, user, {
        headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization",
            "Access-Control-Allow-Methods": "*"
        },
    });
}

export default {
    register
};