import axios from "axios";

const baseURL: string = "https://be-torre-test.onrender.com/api/users";

export const usersApi = axios.create({ baseURL });