<template>
  <div>
    <ul>
      <li v-for="(item,idx) in this.list" :key="idx">
        <h3>{{ item.meta.title }}</h3>
        <p>
          <router-link :to="{path:'/first/'+ item.path}">查看效果</router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ROUTER_EACH_PATH } from "@/router/routerEach";
/* eslint-disable */
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.list = ROUTER_EACH_PATH;
  }
};
</script>

<style>
a {
  color: #000;
  text-decoration: none;
}
</style>