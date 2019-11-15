/* eslint-disable */
export class banner {
    constructor(div, ul, time = 3000) {
        this.ulDiv = document.getElementById(div)
        this.img_ul = document.getElementById(ul)
        this.length = this.img_ul.children.length
        this.timerID = null
        this.current = 0
        this.time = time
    }
    banner() {
        this.interval();
        this.ulDiv.addEventListener("mouseover", () => {clearInterval(this.timerID);}, false);
        this.ulDiv.addEventListener("mouseout", () => {this.interval()}, false);
    }
    interval() {
        this.timerID = setInterval(() => {
            this.current++;
            this.is();
            this.currentPosition()
        }, this.time);
    }
    is() {
        if (this.current == this.length) {
            this.current = 0;
        }
        if (this.current == -1) {
            this.current = this.length-1;
        }
    }
    right() {
        this.current++;
        this.is();
        this.currentPosition()
    }
    left() {
        this.current--;
        this.is();
        this.currentPosition()
    }
    currentPosition(){
        return this.img_ul.style.left = -(this.current * 200) + "px";
    }
}
export default banner