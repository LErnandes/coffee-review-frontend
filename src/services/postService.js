import api from "./api.js";
import router from '../router/index.js';

export default {
  async getposts() {
    let posts = await api.get("posts/");
    return posts.data;
  },

  async createposts(data, token) {
    return await api
      .post("posts/", data, {
        headers: {
          token,
        },
      })
      .catch(() => {
        router.push("admin");
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
        router.push("admin");
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
        router.push("admin");
      });
  },
};