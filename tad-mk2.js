$(document).ready(function(){if(window.location.hostname==tmbq){$("#tad-taianhve").hide();$(".tad-ketqua").hide();var e=document.getElementById("Cimg");var j=new Image;j.crossOrigin="Anonymous";j.src=bgimg;var d=new Image;d.crossOrigin="Anonymous";d.src=markimg;var a=document.getElementById("Nimg");var b=vitri;$("#tad-taoanh").click(function(){$(".load-anh").fadeIn(500,function(){j.onload=m()})});function m(){c=document.querySelector("canvas"),ctx=c.getContext("2d"),corners=b,step=1;g();function g(){var s,r,h,n,i,D,q,k,o=e.width-1,p=e.height-1;ctx.clearRect(0,0,c.width,c.height);ctx.save();for(y=0;y<p;y+=step){for(x=0;x<o;x+=step){i=f(corners[0],corners[3],y/p);D=f(corners[1],corners[2],y/p);q=f(corners[0],corners[3],(y+step)/p);k=f(corners[1],corners[2],(y+step)/p);s=f(i,D,x/o);r=f(i,D,(x+step)/o);h=f(q,k,(x+step)/o);n=f(q,k,x/o);ctx.drawImage(e,x,y,step,step,s.x,s.y,Math.ceil(Math.max(step,Math.abs(r.x-s.x),Math.abs(n.x-h.x)))+1,Math.ceil(Math.max(step,Math.abs(s.y-n.y),Math.abs(r.y-h.y)))+1)}}ctx.globalCompositeOperation="destination-in";ctx.drawImage(d,0,0,c.width,c.height);ctx.restore();ctx.save();ctx.globalCompositeOperation="destination-over";ctx.drawImage(j,0,0,c.width,c.height);ctx.restore();if(a){ctx.save();ctx.globalAlpha=0.5;var l=ctx.createPattern(a,"repeat");ctx.fillStyle=l;ctx.fillRect(0,0,c.width,c.height);ctx.restore()}c.toBlob(function(t){var u=URL.createObjectURL(t);$("#img-out").html("<img src='"+u+"' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");$("#tad-taianhve").attr("download",tenanhxuat).attr("href",u)});$("#tad-taianhve").show();$(".tad-ketqua").show();$(".load-anh").fadeOut(500)}function f(k,i,h){return{x:k.x+(i.x-k.x)*h,y:k.y+(i.y-k.y)*h}}}}});