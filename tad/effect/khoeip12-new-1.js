$(document).ready(function(){if(window.location.hostname==tmbq){$("head").append(cssCrop);$("head").append(jsCrop);$("head").append(jqueryCrop);$("#tad-taoanh").click(function(){$("#cropanh").click();$("#img-out").hide();$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> "+tdta);draw();});function draw(){var bgimg="https://1.bp.blogspot.com/-n2Vb5Dscb4w/YMQruHgcPII/AAAAAAAAtrE/EipHC6fhMngk0ESR_ufQtQgkpYzA6t0AgCNcBGAsYHQ/s0/bgimg.jpg";var layerimg="https://1.bp.blogspot.com/-ddZzD2vOXsI/YMtcU1DEqCI/AAAAAAAAt9M/u9ruXX4iHI8GFOF2M0c3O3CPovg1paAMgCNcBGAsYHQ/s0/limg.png";var noidseimg="https://1.bp.blogspot.com/-d2Vo94ex7Mw/YMQo4P51nUI/AAAAAAAAtqs/gePoFvQ85kkC6iYooDj2G8E01512sKoHQCNcBGAsYHQ/s0/nimg.png";var vitri=[{x:-20,y:150},{x:1161,y:272},{x:1106,y:863},{x:66,y:1031}];var vitri2=[{x:1224,y:280},{x:1838,y:335},{x:1775,y:697},{x:1176,y:856}]
var canvas;var ctx;var image,image2,a,f;var triangles=[];var triangles2=[];var dirtyTriangles=false;var dirtyTriangles2=false;$(document).ready(function(){image=new Image();image.src=document.getElementById("Cimg").src;image.onload=function(){var flipimg=document.createElement("canvas");ctx2=flipimg.getContext('2d');flipimg.width=image.naturalWidth;flipimg.height=image.naturalHeight;ctx2.save();ctx2.scale(-1,1);ctx2.drawImage(image,-image.naturalWidth,0,image.naturalWidth,image.naturalHeight)
ctx2.restore();image2=flipimg;f=new Image();f.crossOrigin="Anonymous";f.src=noidseimg;f.onload=function(){i=new Image();i.crossOrigin="Anonymous";i.src=layerimg;i.onload=function(){h=new Image();h.crossOrigin="Anonymous";h.src=bgimg;h.onload=function(){draw();}}}}
canvas=document.getElementById("temp");ctx=canvas.getContext('2d');dirtyTriangles=true;dirtyTriangles2=true;});var draw=function(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle="#999";ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(h,0,0,canvas.width,canvas.height);var render=function(image,tri){if(image){drawTriangle(ctx,image,tri.p0.x,tri.p0.y,tri.p1.x,tri.p1.y,tri.p2.x,tri.p2.y,tri.t0.u,tri.t0.v,tri.t1.u,tri.t1.v,tri.t2.u,tri.t2.v);}}
if(dirtyTriangles){dirtyTriangles=false;calculateGeometry();}
for(triangle of triangles){render(image,triangle);}
if(dirtyTriangles2){dirtyTriangles2=false;calculateGeometry2();}
for(triangle2 of triangles2){render(image2,triangle2);}
ctx.save();ctx.globalAlpha=0.8;ctx.drawImage(f,0,0,canvas.width,canvas.height);ctx.restore();ctx.save();ctx.drawImage(i,0,0,canvas.width,canvas.height);ctx.restore();canvas.toBlob(function(k){var j=URL.createObjectURL(k);$("#img-out").html("<label class='mt-2'>"+tkq+"</label><img src='"+j+"' alt='taoanhdep' class='img-thumbnail'></img><a href='"+j+"' class='btn btn-block btn-primary mt-2' download='taoanhdep_"+tenanhxuat+"'><i class='fas fa-cloud-download-alt'></i> "+ttav+"</a>");setTimeout(function(){$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> "+tta);$("#img-out").show()},ttl);},"image/jpeg")}
var calculateGeometry=function(){triangles=[];var subs=5;var divs=5;var p=vitri;var dx1=p[3].x-p[0].x;var dy1=p[3].y-p[0].y;var dx2=p[2].x-p[1].x;var dy2=p[2].y-p[1].y;var imgW=image.naturalWidth;var imgH=image.naturalHeight;for(var sub=0;sub<subs;++sub){var curRow=sub/subs;var nextRow=(sub+1)/subs;var curRowX1=p[0].x+dx1*curRow;var curRowY1=p[0].y+dy1*curRow;var curRowX2=p[1].x+dx2*curRow;var curRowY2=p[1].y+dy2*curRow;var nextRowX1=p[0].x+dx1*nextRow;var nextRowY1=p[0].y+dy1*nextRow;var nextRowX2=p[1].x+dx2*nextRow;var nextRowY2=p[1].y+dy2*nextRow;for(var div=0;div<divs;++div){var curCol=div/divs;var nextCol=(div+1)/divs;var dCurX=curRowX2-curRowX1;var dCurY=curRowY2-curRowY1;var dNextX=nextRowX2-nextRowX1;var dNextY=nextRowY2-nextRowY1;var p1x=curRowX1+dCurX*curCol;var p1y=curRowY1+dCurY*curCol;var p2x=curRowX1+(curRowX2-curRowX1)*nextCol;var p2y=curRowY1+(curRowY2-curRowY1)*nextCol;var p3x=nextRowX1+dNextX*nextCol;var p3y=nextRowY1+dNextY*nextCol;var p4x=nextRowX1+dNextX*curCol;var p4y=nextRowY1+dNextY*curCol;var u1=curCol*imgW;var u2=nextCol*imgW;var v1=curRow*imgH;var v2=nextRow*imgH;var triangle1=new Triangle(new Point(p1x-1,p1y),new Point(p3x+2,p3y+1),new Point(p4x-1,p4y+1),new TextCoord(u1,v1),new TextCoord(u2,v2),new TextCoord(u1,v2));var triangle2=new Triangle(new Point(p1x-2,p1y),new Point(p2x+1,p2y),new Point(p3x+1,p3y+1),new TextCoord(u1,v1),new TextCoord(u2,v1),new TextCoord(u2,v2));triangles.push(triangle1);triangles.push(triangle2);}}}
var calculateGeometry2=function(){triangles2=[];var subs=5;var divs=5;var p2=vitri2;var dx21=p2[3].x-p2[0].x;var dy21=p2[3].y-p2[0].y;var dx22=p2[2].x-p2[1].x;var dy22=p2[2].y-p2[1].y;var imgW=image.naturalWidth;var imgH=image.naturalHeight;for(var sub=0;sub<subs;++sub){var curRow=sub/subs;var nextRow=(sub+1)/subs;var curRowX1=p2[0].x+dx21*curRow;var curRowY1=p2[0].y+dy21*curRow;var curRowX2=p2[1].x+dx22*curRow;var curRowY2=p2[1].y+dy22*curRow;var nextRowX1=p2[0].x+dx21*nextRow;var nextRowY1=p2[0].y+dy21*nextRow;var nextRowX2=p2[1].x+dx22*nextRow;var nextRowY2=p2[1].y+dy22*nextRow;for(var div=0;div<divs;++div){var curCol=div/divs;var nextCol=(div+1)/divs;var dCurX=curRowX2-curRowX1;var dCurY=curRowY2-curRowY1;var dNextX=nextRowX2-nextRowX1;var dNextY=nextRowY2-nextRowY1;var p1x=curRowX1+dCurX*curCol;var p1y=curRowY1+dCurY*curCol;var p2x=curRowX1+(curRowX2-curRowX1)*nextCol;var p2y=curRowY1+(curRowY2-curRowY1)*nextCol;var p3x=nextRowX1+dNextX*nextCol;var p3y=nextRowY1+dNextY*nextCol;var p4x=nextRowX1+dNextX*curCol;var p4y=nextRowY1+dNextY*curCol;var u1=curCol*imgW;var u2=nextCol*imgW;var v1=curRow*imgH;var v2=nextRow*imgH;var triangle21=new Triangle(new Point(p1x-1,p1y),new Point(p3x+2,p3y+1),new Point(p4x-1,p4y+1),new TextCoord(u1,v1),new TextCoord(u2,v2),new TextCoord(u1,v2));var triangle22=new Triangle(new Point(p1x-2,p1y),new Point(p2x+1,p2y),new Point(p3x+1,p3y+1),new TextCoord(u1,v1),new TextCoord(u2,v1),new TextCoord(u2,v2));triangles2.push(triangle21);triangles2.push(triangle22);}}}
var drawTriangle=function(ctx,im,x0,y0,x1,y1,x2,y2,sx0,sy0,sx1,sy1,sx2,sy2){ctx.save();ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.lineTo(x2,y2);ctx.closePath();ctx.clip();var denom=sx0*(sy2-sy1)-sx1*sy2+sx2*sy1+(sx1-sx2)*sy0;if(denom==0){return;}
var m11=-(sy0*(x2-x1)-sy1*x2+sy2*x1+(sy1-sy2)*x0)/denom;var m12=(sy1*y2+sy0*(y1-y2)-sy2*y1+(sy2-sy1)*y0)/denom;var m21=(sx0*(x2-x1)-sx1*x2+sx2*x1+(sx1-sx2)*x0)/denom;var m22=-(sx1*y2+sx0*(y1-y2)-sx2*y1+(sx2-sx1)*y0)/denom;var dx=(sx0*(sy2*x1-sy1*x2)+sy0*(sx1*x2-sx2*x1)+(sx2*sy1-sx1*sy2)*x0)/denom;var dy=(sx0*(sy2*y1-sy1*y2)+sy0*(sx1*y2-sx2*y1)+(sx2*sy1-sx1*sy2)*y0)/denom;ctx.transform(m11,m12,m21,m22,dx,dy);ctx.drawImage(im,0,0);ctx.restore();};var Point=function(x,y){this.x=x?x:0;this.y=y?y:0;}
var TextCoord=function(u,v){this.u=u?u:0;this.v=v?v:0;}
var Triangle=function(p0,p1,p2,t0,t1,t2){this.p0=p0;this.p1=p1;this.p2=p2;this.t0=t0;this.t1=t1;this.t2=t2;}}}});