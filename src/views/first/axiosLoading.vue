<template>
  <div>
    {{message}}
    <Loading v-if="isShow" />
  </div>
</template>
<script>
import { getData } from "@/axios";
import { mapState } from "vuex";
import Loading from "@/components/loading.vue";
/*eslint-disable */
export default {
  data() {
    return {
      message: ""
    };
  },
  components: {
    Loading
  },
  computed: {
    ...mapState(["isShow"])
  },
  methods: {
    async getd() {
      try {
        const res = await getData(this.$apis.axiosLoading, true);
        if (res.status === 200) {
          this.message = res;
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.getd();
  }
};
</script>