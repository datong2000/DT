<template>
  <div id="app">
    <h3>
      <router-link to="/show">查看功能效果</router-link>
    </h3>
    <router-view />
  </div>
</template>

<script>

export default {
  mounted(){
  }
};
</script>

<style lang="less" scoped>
h3 {
  text-align: center;
}
</style>
