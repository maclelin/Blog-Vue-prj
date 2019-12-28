<template>
  <div id="app">
    <div class="container">
      <router-view name="BlogTitle" />
      <router-view />
      <div class="footer">Copyright © 2016 Node Powered by koa</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.container {
  margin: 0 auto;
  width: 80%;
  background: #eee;
  height: 100%;
}

.blog-list-title {
  background: url("./assets/blog-header-bg.jpg");
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.footer {
  position: fixed;
  bottom: 0;
  text-align: center;
  font-size: 14px;
  height: 50px;
  width: 80%;
  line-height: 50px;
}

* {
  box-sizing: border-box !important;
}

a {
  text-decoration: none;
  color: #333;
}
ul {
  list-style: none;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}
input,
textarea {
  outline: none;
}
</style>
