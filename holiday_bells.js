$(function(){var s=function(){};$(document).delegate(".b-ball_bounce","mouseenter",function(){u(this);i(this)}).delegate(".b-ball_bounce .b-ball__right","mouseenter",function(a){a.stopPropagation();u(this);i(this)});function q(){var a="http://dzogate.com/wp-content/uploads/2013/holiday_bells.swf";a=a+"?nc="+(new Date().getTime());swfobject.embedSWF(a,"z-audio__player","1","1","9.0.0",null,{},{allowScriptAccess:"always",hasPriority:"true"})}function o(a){if($.browser.msie){return window[a]}else{return document[a]}}window.flashInited=function(){s=function(a){try{o("z-audio__player").playSound(a)}catch(b){}}};if(window.swfobject){window.setTimeout(function(){$("body").append('<div class="g-invisible"><div id="z-audio__player"></div></div>');q()},100)}var j=["1","2","3","4","5","6","7","8","9","0","-","=","q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","\\"];var n=["z","x","c","v","b","n","m",",",".","/"];var p=36;var v={};for(var r=0,t=j.length;r<t;r++){v[j[r].charCodeAt(0)]=r}for(var r=0,t=n.length;r<t;r++){v[n[r].charCodeAt(0)]=r}$(document).keypress(function(a){var b=$(a.target);if(!b.is("input")&&a.which in v){s(v[a.which])}});function u(c){if(c.className.indexOf("b-ball__right")>-1){c=c.parentNode}var b=/b-ball_n(\d+)/.exec(c.className);var a=/b-head-decor__inner_n(\d+)/.exec(c.parentNode.className);if(b&&a){b=parseInt(b[1],10)-1;a=parseInt(a[1],10)-1;s((b+a*9)%p)}}function i(a){var b=$(a);if(a.className.indexOf(" bounce")>-1){return}b.addClass("bounce");function c(){b.removeClass("bounce").addClass("bounce1");function d(){b.removeClass("bounce1").addClass("bounce2");function e(){b.removeClass("bounce2").addClass("bounce3");function f(){b.removeClass("bounce3")}setTimeout(f,300)}setTimeout(e,300)}setTimeout(d,300)}setTimeout(c,300)}});