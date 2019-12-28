<template>
  <div class="login-container">
    <ul>
      <li>
        <input
          type="text"
          name="loginName"
          v-model="loginName"
          placeholder="请输入用户名"
        />
      </li>
      <li>
        <input
          type="password"
          name="pwd"
          v-model="pwd"
          placeholder="请输入密码"
        />
      </li>
    </ul>
    <div>
      <input type="submit" class="button" value="登录" @click="loginSubmit" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: function() {
    return {
      loginName: "",
      pwd: ""
    };
  },
  methods: {
    loginSubmit: function() {
      this.$store.dispatch("getLogin", {
        loginName: this.loginName,
        pwd: this.pwd,
        router: this.$router,
        url: "/api/login/checkMemberLogin"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  background: url("../assets/blog-header-bg.jpg");
  height: 100%;
  width: 100%;
  text-align: center;
  ul {
    padding-top: 15%;
    li {
      padding: 10px;
      input {
        width: 25%;
        height: 30px;
        line-height: 30px;
        border: none;
        font-size: 14px;
        color: #333;
        padding-left: 4px;
      }
    }
  }
  .button {
    border: none;
    outline: none;
    width: 60px;
    height: 30px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    background-color: rgb(67, 238, 67);
    &:hover {
      background-color: rgb(0, 240, 0);
    }
  }
}
</style>
