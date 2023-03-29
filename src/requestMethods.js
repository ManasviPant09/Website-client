import axios from "axios";

const BASE_URL = "https://website-api-i932.onrender.com/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWZhZjNhZWIwZjNhNzNiYTNmYTUzMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjkxODYyNCwiZXhwIjoxNjc3MTc3ODI0fQ.jzHEQipZqw1sHynn3pRE6A5g8CdqODropsgu1hmSgD8"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});