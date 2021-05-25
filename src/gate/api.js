import axios from "axios";

import { apiUrl } from "../helpers/configs.js";

export const userApi = axios.create({ baseURL: apiUrl });

export default userApi;
