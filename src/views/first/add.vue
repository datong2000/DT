<template>
  <div>
    <div
      v-for="(item,idx) in list"
      :key="idx"
      style="width:20px;height:20px;display:inline;color:#fff;padding:10px;margin:10px;"
      :class="item.bgc==true?'bgc_000':'bgc_ccc'"
      @click="addClass_Two(item)"
    >{{item.id}}</div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {
      list: [
        { id: "A", bgc: false },
        { id: "B", bgc: false },
        { id: "C", bgc: false },
        { id: "D", bgc: false },
        { id: "E", bgc: false }
      ],
      classList: []
    };
  },
  methods: {
    // 添加 超过3 就清除第一个，添加到最后一个
    addClass(idx) {
      let index = this.classList.indexOf(this.list[idx]);
      if (index === -1) {
        if (this.classList.length >= 3) {
          this.classList.splice(0, 1);
          this.classList.push(this.list[idx]);
        } else {
          this.classList.push(this.list[idx]);
        }
        for (let i = 0; i < this.list.length; i++) {
          this.list[i].bgc = false;
        }
        for (let k = 0; k < this.classList.length; k++) {
          this.classList[k].bgc = true;
        }
      } else {
        this.classList[index].bgc = false;
        this.classList.splice(index, 1);
      }
    },
    addClass_Two(item) {
      let index = this.classList.indexOf(item);
      if (index === -1) {
        if (item.bgc) item.bgc = false;
        else item.bgc = true;
        if (this.classList.length >= 3) {
          this.classList[0].bgc = false;
          this.classList.splice(0, 1);
          this.classList.push(item);
        } else this.classList.push(item);
      } else {
        this.classList[index].bgc = false;
        this.classList.splice(index, 1);
      }
    },
    // addClass_Three(item) {
    //   if (this.classList.indexOf(item) === -1) {
    //     if (item.bgc) item.bgc = false;
    //     else item.bgc = true;
    //     if (this.classList.length >= 3) {
    //       this.classList[0].bgc = false;
    //       this.classList.splice(0, 1);
    //       this.classList.push(item);
    //     } else this.classList.push(item);
    //   } else {
    //     this.classList[this.classList.indexOf(item)].bgc = false;
    //     this.classList.splice(this.classList.indexOf(item), 1);
    //   }
    // }
  }
};
</script>

<style>
.bgc_000 {
  background: #000;
}
.bgc_ccc {
  background: #ccc;
}
</style>