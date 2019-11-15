<template>
  <div>
    <div id="loopDiv">
      <ul id="list">
        <li>
          <div style="background:yellow;"></div>
          <div style="background:red;"></div>
          <div style="background:orange;"></div>
        </li>
        <li>
          <div style="background:red;"></div>
          <div style="background:green;"></div>
          <div style="background:blue;"></div>
        </li>
        <li>
          <div style="background:green;"></div>
          <div style="background:red;"></div>
          <div style="background:green;"></div>
        </li>
        <li>
          <div style="background:blue;"></div>
          <div style="background:orange;"></div>
          <div style="background:blue;"></div>
        </li>
        <li>
          <div style="background:orange;"></div>
          <div style="background:red;"></div>
          <div style="background:orange;"></div>
        </li>
      </ul>
      <div id="left" @click="app.left()">&lt;</div>
      <div id="right" @click="app.right()">&gt;</div>
    </div>
  </div>
</template>

<script>
import { banner } from "@/lib/banner";
/* eslint-disable */
export default {
  data() {
    return {
      app: null
    };
  },
  methods: {
    // banner() {
    //   const ulDiv = document.getElementById("loopDiv");
    //   this.img_ul = document.getElementById("list");
    //   this.interval();
    //   ulDiv.addEventListener(
    //     "mouseover",
    //     () => {
    //       clearInterval(this.timer);
    //     },
    //     false
    //   );
    //   ulDiv.addEventListener(
    //     "mouseout",
    //     () => {
    //       this.interval();
    //     },
    //     false
    //   );
    // },
    // interval() {
    //   this.timer = setInterval(() => {
    //     this.current++;
    //     this.is();
    //     this.img_ul.style.left = -(this.current * 200) + "px";
    //   }, 3000);
    // },
    // is() {
    //   if (this.current == 5) {
    //     this.current = 0;
    //   }
    //   if (this.current == -1) {
    //     this.current = 4;
    //   }
    // },
    // right() {
    //   this.current++;
    //   this.is();
    //   this.img_ul.style.left = -(this.current * 200) + "px";
    // },
    // left() {
    //   this.current--;
    //   this.is();
    //   this.img_ul.style.left = -(this.current * 200) + "px";
    // }
  },
  mounted() {
    this.app = new banner("loopDiv", "list", 1000);
    this.app.banner();
  }
};
</script>

<style lang="less">
#loopDiv {
  width: 200px;
  height: 340px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}

#list {
  list-style: none;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  height: 340px;
  width: 1000px;
}
#list li {
  float: left;
  width: 200px;
  height: 340px;
}
#list li div {
  display: inline-block;
  width: 33.33%;
  height: 100%;
}

#left {
  position: absolute;
  padding: 15px;
  background: #fff;
  left: 0px;
  top: 130px;
  cursor: pointer;
}
#right {
  position: absolute;
  padding: 15px;
  background: #fff;
  right: 0px;
  top: 130px;
  cursor: pointer;
}
</style>