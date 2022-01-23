function loadscript(url) {		
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.head.appendChild(script);
}
(function() {
  loadscript("https://hm.baidu.com/hm.js?9ef4ae99614b0cb7e67d889a99cb22e8");
  loadscript(window.location.protocol.split(':')[0] === 'https'?'https://zz.bdstatic.com/linksubmit/push.js':'http://push.zhanzhang.baidu.com/push.js');
  loadscript("https://v1.cnzz.com/z_stat.php?id=1278903492&web_id=1278903492");
})();