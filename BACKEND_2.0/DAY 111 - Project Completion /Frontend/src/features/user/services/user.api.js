import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/users",
    withCredentials: true
});

export async function followersList() {

    const response = await api.get("/followersList", );

    return response.data;
}

export async function followingList() {

    const response = await api.get("/followingList", );

    return response.data;
}

export async function pendingReq() {

    const response = await api.get("/PendingReq", );

    return response.data;
}