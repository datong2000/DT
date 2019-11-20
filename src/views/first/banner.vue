<template>
  <div>
    <div id="loopDiv">
      <ul id="list">
        <li>
          <img src="@/assets/1.jpg" alt />
          <img src="@/assets/2.jpg" alt />
          <img src="@/assets/3.jpg" alt />
        </li>
        <li>
          <img src="@/assets/4.jpg" alt />
          <img src="@/assets/5.jpg" alt />
          <img src="@/assets/6.jpg" alt />
        </li>
        <li>
          <img src="@/assets/7.jpg" alt />
          <img src="@/assets/8.jpg" alt />
          <img src="@/assets/9.jpg" alt />
        </li>
        <li>
          <img src="@/assets/10.jpg" alt />
          <img src="@/assets/11.jpg" alt />
          <img src="@/assets/12.jpg" alt />
        </li>
        <li>
          <img src="@/assets/13.jpg" alt />
          <img src="@/assets/14.jpg" alt />
          <img src="@/assets/15.jpg" alt />
        </li>
      </ul>
      <div id="left" class="bar" @click="app.left()">&lt;</div>
      <div id="right" class="bar" @click="app.right()">&gt;</div>
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
}
</script>

<style lang="less">
#loopDiv {
  width: 600px;
  height: 200px;
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
  height: 200px;
  width: 3000px;
}
#list li {
  float: left;
  width: 600px;
  height: 200px;
}
#list li img {
  display: inline-block;
  width: 33.33%;
  height: 100%;
}

.bar {
  position: absolute;
  padding: 15px;
  background: #fff;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
#left {
  left: 0px;
}
#right {
  right: 0px;
}
</style>