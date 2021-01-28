export default (value) => {
    var date = new Date(value) 

    var n = date.getFullYear(); // 年  

    var y = date.getMonth() - 1; // 月
    y = y < 10 ? '0' + y : y;  // 补零操作

    var r = date.getDate(); // 天
    r = r < 10 ? '0' + r : r;

    var h = date.getHours(); // 小时
    h = h < 10 ? '0' + h : h;

    var f = date.getMinutes(); // 分钟
    f = f < 10 ? '0' + f : f;

    var m = date.getSeconds(); //秒数
    m = m < 10 ? '0' + m : m;

    return n + '年' + '-' + y + "月" + '-' + r + '日' + '-' + h +'小时' + '-' + f + '分种' + '-' + m + '秒'
 }