<template>
  <div>
    <Nav />
    <div class="input-container">
      <div class="input-title">
        <span class="titleText">标题：</span>
        <input type="text" name="blogTitle" v-model="blogTitle" />
      </div>
      <div class="input-content">
        <span class="titleText">内容：</span>
        <textarea class="blogContent" v-model="blogContent"></textarea>
      </div>
      <button type="submit" class="button" @click="addBlog">提交</button>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  name: "BlogInput",
  data: function() {
    return {
      blogTitle: "",
      blogContent: ""
    };
  },
  components: {
    Nav
  },
  methods: {
    addBlog: function() {
      this.$store.dispatch("addBlog", {
        blogTitle: this.blogTitle,
        blogContent: this.blogContent
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.input-container {
  float: left;
  width: 82%;
  padding: 10px 10px 10px 30px;
  font-size: 14px;
  text-align: center;
  div {
    padding: 8px;
    input {
      width: 95%;
      height: 30px;
      line-height: 30px;
      border: none;
    }
  }
  .input-content {
    .titleText {
      vertical-align: top;
    }
    .blogContent {
      border: none;
      width: 95%;
      height: 300px;
      resize: none;
    }
  }
  .button {
    border: none;
    outline: none;
    width: 80px;
    height: 40px;
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
