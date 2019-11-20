/* eslint-disable */
export class banner {
    constructor(div, ul, time = 3000, type = 1) {
        // 获取外层 div
        this.ulDiv = document.getElementById(div)
        // 获取 ul
        this.img_ul = document.getElementById(ul)
        // 一共有多少个 li
        this.length = this.img_ul.children.length
        // 第一个li 的宽度
        this.liWidth = this.img_ul.firstChild.offsetWidth
        // 动画防抖
        this.lock = true
        // 执行动画的id
        this.timerID = null
        // 从第一个开始
        this.current = 0
        // 多久执行一次动画
        this.time = time
        // 当前左边的距离
        this.currentLeft = this.img_ul.offsetLeft
        // 变速 匀速 状态
        this.type = type
        // 滚动变速动画
        this.animationID = null
    }
    // 主方法
    banner() {
        this.img_ul.appendChild(this.img_ul.children[0].cloneNode(true));
        this.interval();
        this.ulDiv.addEventListener("mouseover", () => {clearInterval(this.timerID)}, false);
        this.ulDiv.addEventListener("mouseout", () => {this.interval()}, false)
    }
    // 执行时间
    interval() {
        this.timerID = setInterval(() => {
            this.is();
            this.current++;
            this.currentPosition(-(this.current * this.liWidth))
        }, this.time);
    }
    // 判断是否是第一个或最后一个
    is() {
        if (this.current == this.length -1 ) {
            this.current = 0;
            this.img_ul.style.left = 0 + "px";
        }
    }
    // 右按钮
    right() {
        this.current++;
        this.is();
        this.currentPosition(-(this.current * this.liWidth))
    }
    // 左按钮
    left() {
        this.current--;
        this.is();
        this.currentPosition(-(this.current * this.liWidth))
    }
    // 当前位置 + 过渡动画
    currentPosition(target) {
        if(this.type === 1){
            clearInterval(this.animationID);
            this.animationID = setInterval(() => {
            var step = (target - this.currentLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            this.currentLeft += step;
            this.img_ul.style.left = this.currentLeft + "px";
            if (this.currentLeft == target) {
                clearInterval(this.animationID);
            }
        }, 10);
        }else if(this.type === 0){
            
        }
    }
}
export default banner