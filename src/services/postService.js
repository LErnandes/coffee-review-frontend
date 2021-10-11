import api from "./api.js";

export default {
  async getposts() {
    return await api.get("posts/get");
  },

  async getLastposts() {
    return await api.get("posts/get/last");
  },

  async createposts(data, token) {
    return await api
      .post("posts/create", data, {
        headers: {
          token,
        },
      })
      .catch(() => {
        this.$router.push("login");
      });
  },

  async getById(id) {
    return await api.get(`posts/${id}`);
  },

  async editposts(id, data, token) {
    return await api
      .put(`posts/${id}`, data, {
        headers: {
          token,
        },
      })
      .catch(() => {
        this.$router.push("login");
      });
  },

  async deleteposts(id, token) {
    return await api
      .delete(`posts/${id}`, {
        headers: {
          token,
        },
      })
      .catch(() => {
        this.$router.push("login");
      });
  },
};