<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import VueCookie from "vue-cookie";
/*eslint-disable */
export default {
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    this.message = VueCookie.get("type");
  }
};
</script>

<style>
</style>