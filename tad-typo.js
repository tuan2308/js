$(document).ready(function(){if(window.location.hostname==tmbq){var img1=document.getElementById("img1");var img2=document.getElementById("img2");var canvas=document.getElementById("canvas");var x,y,scale,xoay,toadoX,toadoY,DcScale,HoaTron,Dotrong,Dcxoay=0;var HoaTron="normal";var Dotrong=1;var cwidth=0;var cheight=0;$("#Dch .Dch").on("input",function(){toadoX=$("#DchX input").val();$("#DchX span").text(toadoX+"px");toadoY=$("#DchY input").val();$("#DchY span").text(toadoY+"px");DcScale=$("#DchScale input").val();$("#DchScale span").text(DcScale+"x");HoaTron=$("#DchHoatron").val();Dotrong=$("#DchOpa input").val();$("#DchOpa span").text(parseInt(Dotrong*100)+"%");Dcxoay=$("#DchXoay input").val();$("#DchXoay span").text(Dcxoay+"º");draw(toadoX,toadoY,DcScale,HoaTron,Dotrong,Dcxoay)});document.getElementById("chonnen").onchange=function(a){$("#themlayer").show();img1.onload=Vechonnen;img1.onerror=failed;img1.src=URL.createObjectURL(this.files[0])};document.getElementById("upanhlen").onchange=function(a){img2.src=URL.createObjectURL(this.files[0]);$("#preimgup").show().html("<img class='img-thumbnail' src='"+img2.src+"'></img>");$("#preimgup,#chonanhup").show();$(".showtypo,#chontyponay").hide()};$("#chonanhup,#chonanhurl").click(function(){$("#DchHoatron").val("normal");draw0()});$("#upanhurl input").on("input",function(){img2.crossOrigin="anonymous";img2.src=$(this).val();$("#preimgurl").show().html("<img onerror='imgloi()' class='img-thumbnail' src='"+img2.src+"'></img>")});function imgloi(){$(".thongbaourl").show();$("#preimgurl img").hide()}function Vechonnen(){canvas.width=img1.width;canvas.height=img1.height;$("#DchX input,#DchchuX input").attr("max",img1.width).attr("min","-"+img1.width);$("#DchY input,#DchchuY input").attr("max",img1.height).attr("min","-"+img1.height);$("#DchchuSize input").attr("max",img1.height).attr("value",img1.width/5);var a=canvas.getContext("2d");a.drawImage(img1,0,0);draw(toadoX,toadoY,DcScale,HoaTron,Dotrong,Dcxoay);$(".avt-chonnen").css("background-image","url(' "+img1.src+" ')")}function velai(){canvas.width=img1.width;canvas.height=img1.height;$("#DchX input").attr("max",img1.width).attr("min","-"+img1.width);$("#DchY input").attr("max",img1.height).attr("min","-"+img1.height);var a=canvas.getContext("2d");a.drawImage(img1,0,0);$(".avt-chonnen").css("background-image","url(' "+img1.src+" ')")}function draw0(b){$(".showtypo,#chontyponay,#chonanhup,#preimgup").hide();var a=canvas.getContext("2d");a.save();a.drawImage(img1,0,0);a.restore();a.save();a.globalCompositeOperation=b;a.translate((img2.width/2),(img2.height/2));a.scale(0.8,0.8);a.drawImage(img2,-(img2.width/2),-(img2.height/2),img2.width,img2.height);a.restore();$("#Dch").show();$(".avt-upanhlen").css("background-image","url(' "+img2.src+" ')");$("#chonanhModal").modal("hide");$("#taoxong").removeClass("disabled")}function draw(a,g,e,c,f,d){var b=canvas.getContext("2d");b.save();b.drawImage(img1,0,0);b.restore();b.save();b.globalCompositeOperation=c;b.globalAlpha=f;b.translate((img2.width/2)-(-a),(img2.height/2)-(-g));b.rotate(d*Math.PI/360);b.scale(e,e);b.drawImage(img2,-(img2.width/2),-(img2.height/2),img2.width,img2.height);b.restore()}function failed(){console.error("The provided file couldn't be loaded as an Image media")}var getimg="";$("#taoxong").click(function(){canvas.toBlob(function(a){url=URL.createObjectURL(a);$("#imgout").attr("src",url).show();getimg=url});$(".loadtad").show(0).delay(1000).hide(0);$("#tad-xuatanh").delay(1000).show(0);$("#tad-csa").delay(1000).hide(0)});$("#quaylai").click(function(){$("#tad-xuatanh").hide();$("#tad-csa").show()});$("#tad-taianhve").click(function(){$(this).attr("href",getimg)});var index;function showchuden(){for(index=0;index<chuden.length;++index){$("#showchutrang").hide();$("#showchuden").append("<div class='col-6 my-2'><img src='"+chuden[index]+"' class='img-thumbnail'></img></div>").show()}showtypo()}function showchutrang(){for(index=0;index<chutrang.length;++index){$("#showchuden").hide();$("#showchutrang").append("<div class='col-6 my-2'><img src='"+chutrang[index]+" 'class='img-thumbnail'></img></div>").show()}showtypo()}function showtypo(){$("#preimgup,#chonanhup").hide();$(".showtypo img").click(function(){$(".showtypo img").removeClass("active");$(this).addClass("active");$("#chontyponay").show();var b=$(this).attr("src");var a=$(this).parent().parent().attr("blendmode");$("#DchHoatron").val(a);img2.crossOrigin="Anonymous";$("#img2").attr("src",b)});$("#chontyponay").click(function(){HoaTron=$("#DchHoatron").val();draw0(HoaTron)})}}});