var bg=new Image;bg.crossOrigin="Anonymous";bg.src=bgimg;var mark=new Image;mark.crossOrigin="Anonymous";mark.src=markimg;$(document).ready(function(){if(window.location.hostname==tmbq){var i=document.getElementById("Nimg");var g=document.getElementById("Cimg");var k=0;var h=vitri;$("#tad-taoanh").click(function(){bg.src=bgimg;mark.src=markimg;h=vitri;$("#img-out").hide();$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");setTimeout(function(){b.onload=f()},200)});function f(){c=document.querySelector("canvas"),ctx=c.getContext("2d"),corners=h,step=1;var A,m,d,z,a,j,u,C,w=g.width-1,v=g.height-1;ctx.clearRect(0,0,c.width,c.height);ctx.save();for(y=0;y<v;y+=step){for(x=0;x<w;x+=step){a=t(corners[0],corners[3],y/v);j=t(corners[1],corners[2],y/v);u=t(corners[0],corners[3],(y+step)/v);C=t(corners[1],corners[2],(y+step)/v);A=t(a,j,x/w);m=t(a,j,(x+step)/w);d=t(u,C,(x+step)/w);z=t(u,C,x/w);ctx.drawImage(g,x,y,step,step,A.x,A.y,Math.ceil(Math.max(step,Math.abs(m.x-A.x),Math.abs(z.x-d.x)))+1,Math.ceil(Math.max(step,Math.abs(A.y-z.y),Math.abs(m.y-d.y)))+1)}}ctx.globalCompositeOperation="destination-in";ctx.drawImage(o,0,0,c.width,c.height);ctx.restore();ctx.save();ctx.globalCompositeOperation="destination-over";ctx.drawImage(b,0,0,c.width,c.height);ctx.restore();if(i){ctx.save();ctx.globalAlpha=0.5;var e=ctx.createPattern(i,"repeat");ctx.fillStyle=e;ctx.fillRect(0,0,c.width,c.height);ctx.restore()}c.toBlob(function(n){var l=URL.createObjectURL(n);$("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='"+l+"' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='"+l+"' class='btn btn-block btn-primary mt-2'  download='taoanhdep_"+tenanhxuat+"'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");$("#img-out").show()});function t(l,n,p){return{x:l.x+(n.x-l.x)*p,y:l.y+(n.y-l.y)*p}}}}});