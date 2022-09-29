import axios from "axios";
import Cache from "./cache";
import { POSTS_API } from "../config";

async function findAll() {
    const cachedPosts = await Cache.get("posts");

    if (cachedPosts) return cachedPosts;

    return axios.get(POSTS_API).then(response => {
        const posts = response.data["hydra:member"];
        Cache.set("posts", posts);
        return posts;
    });
}

async function find(id) {
    const cachedPost = await Cache.get("posts." + id);

    if (cachedPost) return cachedPost;

    return axios.get(POSTS_API + "/" + id).then(response => {
        const post = response.data;

        Cache.set("posts." + id, post);

        return post;
    });
}

function deletePost(id) {
    return axios.delete(POSTS_API + "/" + id).then(async response => {
        const cachedPosts = await Cache.get("posts");

        if (cachedPosts) {
            Cache.set("posts", cachedPosts.filter(c => c.id !== id));
        }

        return response;
    });
}

function update(id, post) {
    return axios.put(POSTS_API + "/" + id, post).then(async response => {
        const cachedPosts = await Cache.get("posts");
        const cachedPost = await Cache.get("posts." + id);

        if (cachedPost) {
        Cache.set("posts." + id, response.data);
        }

        if (cachedPosts) {
        const index = cachedPosts.findIndex(c => c.id === +id);
        cachedPosts[index] = response.data;
        }

        return response;
    });
}

function create(post) {
    return axios.post(POSTS_API, post).then(async response => {
        const cachedPosts = await Cache.get("posts");

        if (cachedPosts) {
            Cache.set("posts", [...cachedPosts, response.data]);
        }

        return response;
    });
}

export default {
    findAll,
    find,
    create,
    update,
    delete: deletePost
};