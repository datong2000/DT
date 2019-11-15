<template>
  <div>
    <h3>使用vueMeta设置title的话</h3>
    <h3>就不要使用router.beforeEach来设置title</h3>
    <h3 style="color:red">否则 title 会有冲突</h3>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "测试测试",
    titleTemplate: "%s - Yay!",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style>
</style>