function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

var count = 0;
var url  = getQueryVariable("url");

function countDown(){
    var timer = document.getElementById("timer");
    if(count > 0){
        count--;
        timer.innerHTML = "Bạn sẽ được chuyển hướng đến <a href='"+url+"' rel='nofollow'>"+url+"</a> trong <b>"+count+"</b> giây.";
        setTimeout("countDown()", 1000);
    }else{
        window.location.href = "https://megaurl.in/st?api=b95cd9aed238c4916c6adf94241a7d19338d1ac2&url=" + url;
    }
}
