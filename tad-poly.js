$(document).ready(function(){if(window.location.hostname==tmbq){var a="";$(".tad-in-text2,.tad-in-text1,.tad-in-text0").click(function(){$("#tad-taoanh").removeClass("disabled")});$("#tad-taoanh").click(function(){t1=$(".tad-in-text1").val();$(".tad-out-text1").html(t1);t2=$(".tad-in-text2").val();$(".tad-out-text2").html(t2);$(".load-anh").show(0).delay(200).hide(0);$("#img-out,.tad-ketqua,#tad-taianhve").hide(0).delay(200).show(0);const d=document.getElementById("temp");const k=d.getContext("2d");k.save();k.fillStyle="white";k.beginPath();k.arc(d.width/2,d.width/2,400,0,2*Math.PI);k.fill();k.restore();var j=t1.length;var h=t2.length;if(j==0){alert("Vui lòng nhập chữ");$(".tad-in-text1").focus();return false}if(h==0){alert("Vui lòng nhập chữ");$(".tad-in-text2").focus();return false}if(j==1){k.save();k.fillStyle="black";k.font="900 300px Arial";var c=t1.toUpperCase();var i=k.measureText(c).width;k.fillText(c,(d.width/2)-(i/2)+6,600);k.restore()}if(j==2){k.save();k.fillStyle="black";k.font="900 300px Arial";var c=t1.toUpperCase();var i=k.measureText(c).width;k.fillText(c,(d.width/2)-(i/2)+4,600);k.restore()}if(j==3){k.save();k.fillStyle="black";k.font="900 250px Arial";var c=t1.toUpperCase();var i=k.measureText(c).width;k.fillText(c,(d.width/2)-(i/2)+5,570);k.restore()}k.save();d.style.letterSpacing="20px";k.fillStyle="black";k.font="600 40px UTM-Avo";var b=t2.toUpperCase();var i=k.measureText(b).width;k.fillText(b,(d.width/2)-(i/2)+15,680);k.restore();k.save();k.globalCompositeOperation="lighten";var f=new Image();f.src="https://1.bp.blogspot.com/-y9xlj5h8r4k/YEs63uDKX7I/AAAAAAAAp8M/Uevcx1GMxZQS8o1tSHcEsXaFc2Ley0zEwCNcBGAsYHQ/s0/123.jpg";f.crossOrigin="Anonymous";k.drawImage(f,0,0,d.width,d.height);k.restore();k.save();k.globalCompositeOperation="overlay";k.globalAlpha=0.2;k.fillStyle="black";k.beginPath();k.arc(d.width/2,d.width/2,400,0,2*Math.PI);k.lineWidth=50;k.stroke();k.restore();const g="";if(g!=""){k.save();k.globalCompositeOperation="hue";k.fillStyle=g;k.beginPath();k.rect(0,0,d.width,d.height);k.fill();k.restore()}const e=d.toDataURL("image/jpeg");a=e;$("#img-out").html("<img src='"+e+"' alt='Tạo ảnh đẹp' class='img-thumbnail'/>")});$("#tad-taianhve").click(function(){$(this).attr("download","taoanhdep-logo-polygon").attr("href",a)})}});