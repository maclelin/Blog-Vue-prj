<template>
  <router-link to="/BlogDetail/12343434">
    <div class="blog-item">
      <span class="blog-title">{{ blogItems.articalTitle }}</span>
      <div class="blog-info-item">
        <span class="author">作者：{{ blogItems.articalAuthor }}</span>
        <span class="publish-time">发布时间：{{ blogItems.articalTime }}</span>
        <span class="view-count">浏览量：{{ blogItems.articalClick }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BlogBriefItem",
  props: {
    blogItems: {
      require: true,
      default: {
        type: Array
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-item {
  border: 1px dashed #ddd;
  color: #333;
  margin-bottom: 8px;
  padding: 8px 0;
  .blog-title {
    font-size: 18px;
    padding: 8px 10px;
  }
  .blog-info-item {
    padding: 5px 10px;
    font-size: 14px;
    span {
      padding-right: 5px;
    }
  }
}
</style>
