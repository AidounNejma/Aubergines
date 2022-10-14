import axios from "axios";
import Cache from "./cache";
import { DISCUSSION_USERS_API } from "../config";

async function findAll() {
    const cachedDiscussionUsers = await Cache.get("discussion_users");

    if (cachedDiscussionUsers) return cachedDiscussionUsers;

    return axios.get(DISCUSSION_USERS_API).then(response => {
        const discussionUsers = response.data["hydra:member"];
        Cache.set("discussion_users", discussionUsers);
        return discussionUsers;
    });
}

async function find(id) {
    const cachedDiscussionUser = await Cache.get("discussion_users." + id);

    if (cachedDiscussionUser) return cachedDiscussionUser;

    return axios.get(DISCUSSION_USERS_API + "/" + id).then(response => {
        const discussionUser = response.data;

        Cache.set("discussion_users." + id, discussionUser);

        return discussionUser;
    });
}

async function findByUser(id) {
    const cachedDiscussionUser = await Cache.get("discussion_users." + id);

    if (cachedDiscussionUser) return cachedDiscussionUser;

    return axios.get(DISCUSSION_USERS_API + "?user=" + id).then(response => {
        const discussionUser = response.data;

        Cache.set("discussion_users." + id, discussionUser);

        return discussionUser;
    });
}

function deleteDiscussionUsers(id) {
    return axios.delete(DISCUSSION_USERS_API + "/" + id).then(async response => {
        const cachedDiscussionUsers = await Cache.get("discussion_users");

        if (cachedDiscussionUsers) {
            Cache.set("discussion_users", cachedDiscussionUsers.filter(c => c.id !== id));
        }

        return response;
    });
}

function update(id, discussionUser) {
    return axios.put(DISCUSSION_USERS_API + "/" + id, discussionUser).then(async response => {
        const cachedDiscussionUsers = await Cache.get("discussion_users");
        const cachedDiscussionUser = await Cache.get("discussion_users." + id);

        if (cachedDiscussionUser) {
        Cache.set("discussion_users." + id, response.data);
        }

        if (cachedDiscussionUsers) {
        const index = cachedDiscussionUsers.findIndex(c => c.id === +id);
        cachedDiscussionUsers[index] = response.data;
        }

        return response;
    });
}

function create(discussionUser) {
    return axios.post(DISCUSSION_USERS_API, discussionUser).then(async response => {
        const cachedDiscussionUsers = await Cache.get("discussion_users");

        if (cachedDiscussionUsers) {
            Cache.set("discussion_users", [...cachedDiscussionUsers, response.data]);
        }

        return response;
    });
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deleteDiscussionUsers,
    findByUser
};