import axios from "axios";
import { USERS_API } from "../config";
import Cache from "./cache";

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

async function find(id) {
    const cachedUser= await Cache.get("users." + id);

    if (cachedUser) return cachedUser;

    return axios.get(USERS_API + "/" + id).then(response => {
        const user = response.data;

        Cache.set("users." + id, user);

        return user;
    });
}
export default {
    register,
    find,
};