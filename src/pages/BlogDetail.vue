<template>
  <div class="sub-container">
    <Nav />
    <div class="blog-detail-title">
      <BlogBriefItem />
    </div>
    <div class="blog-detail-content" v-html="htmlContent" />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import BlogBriefItem from "../components/BlogBriefItem";
export default {
  name: "BlogDetail",
  data: function() {
    return {
      htmlContent: `<span>这只是测试富文本</span>`
    };
  },
  components: {
    Nav,
    BlogBriefItem
  }
};
</script>
<style lang="scss" scoped>
.sub-container {
  height: calc(100% - 120px);
}
.blog-detail-title {
  float: left;
  width: 82%;
  margin: 10px;
  text-align: center;
}
.blog-detail-content {
  float: left;
  padding: 10px;
  width: 82%;
}
</style>
