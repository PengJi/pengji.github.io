function lovetime() {
    window.setTimeout("lovetime()", 1000);
    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var years = days * 365
    var today = new Date()
    var todayYear = today.getFullYear()
    var todayMonth = today.getMonth()
    var todayDate = today.getDate()
    var todayHour = today.getHours()
    var todayMinute = today.getMinutes()
    var todaySecond = today.getSeconds()
    // 修改这里时间即可
    var t1 = Date.UTC(2021, 09, 21, 11, 00, 00)
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
    var diff = t2 - t1
    // var diffYears = Math.floor(diff / years)
    var diffDays = Math.floor((diff / days))
    var diffHours = Math.floor((diff - diffDays * days) / hours)
    var diffMinutes = Math.floor((diff - diffDays * days - diffHours * hours) / minutes)
    var diffSeconds = Math.floor((diff - diffDays * days - diffHours * hours - diffMinutes *
        minutes) / seconds)
    // document.getElementById("lovetime").innerHTML = "我们已经在一起 <br/> <font size='6' color='#9A33FF'>" + diffYears + "年" + diffDays + "天" +
    //     diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒</font>啦"
    document.getElementById("lovetime").innerHTML = "<font size='6' color='#EA1608'>星宝</font> <br/> <font size='6' color='#EA0879'> 情人节快乐 </font> <br/>" + 
        "我们已经在一起 <br/> <font size='6' color='#9A33FF'>" +  diffDays + "天" + diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒</font>啦"
}
lovetime()

// function audioAutoPlay(id){
//     var audio = document.getElementById(id);
//     audio.play();
//     document.addEventListener("WeixinJSBridgeReady", function () {
//             audio.play();
//     }, false);
// }
// audioAutoPlay('music-jp');