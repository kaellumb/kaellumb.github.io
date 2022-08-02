var myfunc = setInterval(function() {
    var now = new Date().getTime();
    now = Math.floor(now / 1000);
    document.getElementById("time").innerHTML = now.toLocaleString();
    }, 1000)