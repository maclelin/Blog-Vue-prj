import request from "../utils/http";

const blogModule = {
  namespace: true,
  actions: {
    addBlog: function({ commit, state, rootState }, params) {
      params.url = "/api/blog/addBlog";
      request.getApi(params).then(result => {
        if (result.data && result.data.flag === "1") {
          alert("新增成功");
        }
      });
    },
    getBlogList: function({ commit, state, rootState }, params = {}) {
      params.url = "/api/blog/getBlogList";
      request.getApi(params).then(result => {
        if (result.data && result.data.flag === "1") {
          commit("commitBlogList", result.data.items);
        }
      });
    }
  },
  mutations: {
    commitBlogList: function(state, data) {
      state.blogList = data;
    }
  },
  state: {
    blogList: []
  }
};

export default blogModule;
