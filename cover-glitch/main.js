$(document).ready(function(){if(window.location.hostname==tmbq){var e="";function a(){t1=$(".tad-in-text1").val();t2=$(".tad-in-text2").val();cochu=$(".tad-cochu").val();const f=document.getElementById("temp");const d=f.getContext("2d");d.clearRect(0,0,f.width,f.height);d.save();const h=document.getElementById("scream");d.drawImage(h,0,0,f.width,f.height);d.restore();var k=t1.length;var j=t2.length;d.save();d.globalCompositeOperation="lighten";d.fillStyle="red";d.font=cochu+"px Edo SZ";var g=t1.toUpperCase();var i=d.measureText(g).width;d.fillText(g,(f.width/2)-(i/2)+7,320);d.restore();d.save();d.globalCompositeOperation="lighten";d.fillStyle="cyan";d.font=cochu+"px Edo SZ";var g=t1.toUpperCase();var i=d.measureText(g).width;d.fillText(g,(f.width/2)-(i/2)-7,320);d.restore();d.save();d.fillStyle="white";d.font=cochu+"px Edo SZ";var g=t1.toUpperCase();var i=d.measureText(g).width;d.fillText(g,(f.width/2)-(i/2),320);d.restore();d.save();d.fillStyle="#fca0a0";d.font="20px Arial";var i=d.measureText(t2).width;d.fillText(t2,(f.width/2)-(i/2)-2,200);d.restore();d.save();d.fillStyle="white";d.font="20px Arial";var i=d.measureText(t2).width;d.fillText(t2,(f.width/2)-(i/2),200);d.restore();d.save();d.globalAlpha=0.1;d.drawImage(h,0,0,f.width,f.height);d.restore();f.toBlob(function(m){var l=URL.createObjectURL(m);$("#img-out").html("<img src='"+l+"' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");$("#tad-taianhve").attr("download","taoanhdep--bia-glitch.jpg").attr("href",l)});$(".load-anh").show(0).delay(2000).hide(0);$("#img-out,.tad-ketqua,#tad-taianhve").hide(0).delay(2000).show(0)}var c=$(".tad-in-text1");c.on("input",function(){b()});function b(){if(undefined!==c.val()&&c.val().length==0){$("#tad-taoanh").addClass("disabled")}else{$("#tad-taoanh").removeClass("disabled")}}$("#tad-taoanh").click(function(){document.fonts.load('10pt "Edo SZ"').then(a)})}});