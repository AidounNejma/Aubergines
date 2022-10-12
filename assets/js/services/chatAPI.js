import axios from "axios";
import Cache from "./cache";
import { CHAT_API } from "../config";

async function findAll() {
    const cachedChats = await Cache.get("chats");

    if (cachedChats) return cachedChats;

    return axios.get(CHAT_API).then(response => {
        const chats = response.data["hydra:member"];
        Cache.set("chats", chats);
        return chats;
    });
}

async function find(id) {
    const cachedChat = await Cache.get("chats." + id);

    if (cachedChat) return cachedChat;

    return axios.get(CHAT_API + "/" + id).then(response => {
        const chat = response.data;

        Cache.set("chats." + id, chat);

        return chat;
    });
}

function deleteChats(id) {
    return axios.delete(CHAT_API + "/" + id).then(async response => {
        const cachedChats = await Cache.get("chats");

        if (cachedChats) {
            Cache.set("chats", cachedChats.filter(c => c.id !== id));
        }

        return response;
    });
}

function update(id, chat) {
    return axios.put(CHAT_API + "/" + id, chat).then(async response => {
        const cachedChats = await Cache.get("chats");
        const cachedChat = await Cache.get("chats." + id);

        if (cachedChat) {
            Cache.set("chats." + id, response.data);
        }

        if (cachedChats) {
            const index = cachedChats.findIndex(c => c.id === +id);
            cachedChats[index] = response.data;
        }

        return response;
    });
}

function create(chat) {
    return axios.post(CHAT_API, chat).then(async response => {
        const cachedChats = await Cache.get("chats");

        if (cachedChats) {
            Cache.set("chats", [...cachedChats, response.data]);
        }

        return response;
    });
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteChats
};