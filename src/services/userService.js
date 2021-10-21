import api from "./api.js";

export default {
  async auth(data) {
    let response = await api.post("users/login", data);
    return response.data.token;
  }
}