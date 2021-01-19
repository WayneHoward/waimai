export default {
    setRem() {
        // 设计稿宽度和设备宽度
        var uiW = 375,
            winW = document.documentElement.clientWidth,
            // 定义比例
            rate = winW / uiW;
        document.documentElement.style.fontSize = rate * 10 + "px";
        
    },
    // 另外一些公共方法
}