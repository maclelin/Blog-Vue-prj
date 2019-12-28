<template>
  <div>
    <Nav />
    <div class="input-container">
      <div class="link-title">关于博客</div>
      <div>本博客主要撰写NodeJs和前端技术传承，希望和大家一起成长</div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  name: "BlogInput",
  components: {
    Nav
  }
};
</script>
<style lang="scss" scoped>
.input-container {
  float: left;
  width: 82%;
  padding: 10px 10px 10px 30px;
  font-size: 14px;
  .link-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: center;
    padding: 10px;
  }
}
input,
textarea {
  outline: none;
}
</style>
