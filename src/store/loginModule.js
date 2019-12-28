import request from "../utils/http";

const loginModule = {
  namespace: true,
  state: {
    loginStatus: false,
    loginRes: {
      flag: "0",
      msg: "登录失败"
    }
  },
  mutations: {
    modifyLoginStataus: function(state, { data, router }) {
      if (data && data.flag === "1") {
        sessionStorage.setItem("loginStatus", "1");
        router.push("/BlogList");
      }
    }
  },
  actions: {
    getLogin({ commit, state }, params = {}) {
      const { router } = params;
      delete params.router;
      request.getApi(params).then(result => {
        if (result.data) {
          commit("modifyLoginStataus", { data: result.data, router });
        }
      });
    }
  }
};

export default loginModule;
