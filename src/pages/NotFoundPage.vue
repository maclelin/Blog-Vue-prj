<template>
  <div class="not-found-title">你来到一个无人的沙漠中...</div>
</template>
<script>
export default {
  name: "NotFoundPage"
};
</script>

<style lang="scss" scoped>
.not-found-title {
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  padding: 15px;
  background: url("../assets/not-found.jpg");
  height: calc(100% - 100px);
}
</style>