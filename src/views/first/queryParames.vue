<template>
  <div>
    <input type="text" v-model="data.name" /><br/>
    <input type="text" v-model="data.age" />
    <button @click="getData">查询</button>
  </div>
</template>
<script>
// 前进后退，保留查询参数
/*eslint-disable */
export default {
  data() {
    return {
      data: {
        name: "",
        age: ""
      }
    };
  },
  methods: {
    getData() {
      this.$router.push({
        path: "/queryParames",
        query: { name: this.data.name, age: this.data.age }
      });
    },
    log() {
      console.log(this.data);
    }
  },
  created() {
    this.data.name = this.$route.query.name;
    this.data.age = this.$route.query.age;
    // this.data = this.$route.query
    // console.log(this.data);
    this.log();
  },
  beforeRouteUpdate(to, from, next) {
    this.data = to.query;
    this.log();
    next();
  },
  watch: {
    $route(to, from) {
      this.$router.go(0);
      // this.data = router.query;
    }
  }
};
</script>

<style>
</style>