<template>
  <div class="navi-left">
    <ul>
      <li>
        <img src="../assets/blog-icon.jpg" alt />
      </li>
      <li>
        <router-link to="/BlogInput">撰写文章</router-link>
      </li>
      <li>
        <router-link to="/BlogAbout">关于博客</router-link>
      </li>
      <li>
        <router-link to="/BlogLink">友情链接</router-link>
      </li>
      <li>
        <span class="log-out">登出博客</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "navigator"
};
</script>

<style lang="scss" scoped>
.navi-left {
  width: 15%;
  height: 100%;
  border-right: 1px dashed #ddd;
  text-align: center;
  padding: 10px;
  color: #333;
  font-size: 14px;
  float: left;
  img {
    width: 200px;
  }
  li {
    padding: 5px;
  }
}
.log-out {
  cursor: pointer;
}
</style>