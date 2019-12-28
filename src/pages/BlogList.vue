<template>
  <div class="sub-container">
    <Nav />
    <div class="blog-list">
      <BlogBriefItem
        v-for="item in this.$store.state.blogModule.blogList"
        :key="item.articalID"
        :blogItems="item"
      />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import BlogBriefItem from "../components/BlogBriefItem";
export default {
  name: "BlogListPage",
  created() {
    this.$store.dispatch("getBlogList");
  },
  components: {
    Nav,
    BlogBriefItem
  },
  data: () => {
    return {
      blogList: []
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.sub-container {
  height: calc(100% - 120px);
}
.blog-list {
  float: left;
  width: 82%;
  margin: 10px;
}
</style>
