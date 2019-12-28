<template>
  <div>
    <Nav />
    <div class="input-container">
      <div class="link-title">Node的友情链接网址</div>
      <ul class="link-container">
        <li>
          <a href="http://">GitHub</a>
        </li>
        <li>
          <a href="http://">CNode</a>
        </li>
        <li>
          <a href="http://">SegmentFault</a>
        </li>
        <li>
          <a href="http://">Google</a>
        </li>
      </ul>
      <ul class="link-container">
        <li>
          <a href="http://">NPM</a>
        </li>
        <li>
          <a href="http://">RubyChina</a>
        </li>
        <li>
          <a href="http://">W3cSchool</a>
        </li>
        <li>
          <a href="http://">MDN</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  name: "BlogLink",
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
  .link-container {
    display: flex;
    li {
      flex: 1;
      padding: 10px;
    }
  }
}
input,
textarea {
  outline: none;
}
</style>
