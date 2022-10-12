import axios from "axios";
import Cache from "./cache";
import { DISCUSSIONS_API } from "../config";

async function findAll() {
    const cachedDiscussions = await Cache.get("discussions");

    if (cachedDiscussions) return cachedDiscussions;

    return axios.get(DISCUSSIONS_API).then(response => {
        const discussions = response.data["hydra:member"];
        Cache.set("discussions", discussions);
        return discussions;
    });
}

async function find(id) {
    const cachedDiscussion = await Cache.get("discussions." + id);

    if (cachedDiscussion) return cachedDiscussion;

    return axios.get(DISCUSSIONS_API + "/" + id).then(response => {
        const discussion = response.data;

        Cache.set("discussions." + id, discussion);

        return discussion;
    });
}

function deleteDiscussions(id) {
    return axios.delete(DISCUSSIONS_API + "/" + id).then(async response => {
        const cachedDiscussions = await Cache.get("discussions");

        if (cachedDiscussions) {
            Cache.set("discussions", cachedDiscussions.filter(c => c.id !== id));
        }

        return response;
    });
}

function update(id, discussion) {
    return axios.put(DISCUSSIONS_API + "/" + id, discussion).then(async response => {
        const cachedDiscussions = await Cache.get("discussions");
        const cachedDiscussion = await Cache.get("discussions." + id);

        if (cachedDiscussion) {
        Cache.set("discussions." + id, response.data);
        }

        if (cachedDiscussions) {
        const index = cachedDiscussions.findIndex(c => c.id === +id);
        cachedDiscussions[index] = response.data;
        }

        return response;
    });
}

function create(discussion) {
    return axios.post(DISCUSSIONS_API, discussion).then(async response => {
        const cachedDiscussions = await Cache.get("discussions");

        if (cachedDiscussions) {
            Cache.set("discussions", [...cachedDiscussions, response.data]);
        }

        return response;
    });
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteDiscussions
};