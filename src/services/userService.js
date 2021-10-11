import api from "./api.js";

export default {
  async auth(data) {
    return await api.post("users/login", data);
  }
}