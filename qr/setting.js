$(document).ready(function(){$(".chonanhcosan img").click(function(){var a=$(this).attr("src");$("#Cimg").attr("src",a);Clogo=document.getElementById("Cimg").src;$(".img-preview").html("<img src='"+a+"' class='cacsimg'/>")});$(".chonanhcosan .col").click(function(){$(".chonanhcosan .col").removeClass("active");$(this).addClass("active");$("#chonanhModal").modal("hide");$(".btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác");$(".cropanh-container").hide();$(".btn-upanh span").html("<i class='fas fa-upload'></i> Chọn ảnh")});$("#tad-taianh").on("click",function(){var a=$("#qrcode img").attr("src");$(this).attr("download","taoanhdep.com--qr.png").attr("href",a)});$("#dangkn").on("change",function(){dangdk=$(this).val();if(dangdk==""){$("#nhapmkwf").hide()}else{$("#nhapmkwf").show()}})});var logoBorder=false;var logoBgTransparent=true;var Clogo=false;var noiDung="https://taoanhdep.com";function showQr(b){if(b=="vanban"){var a=document.getElementById("nhapnd");nd=a.value;if(nd.length==""){alert("Vui lòng nhập nội dung");a.focus();return false}else{noiDung=a.value}}if(b=="wifi"){var a=document.getElementById("nhapssid");var c=document.getElementById("dangkn");var d=document.getElementById("nhapmkwifi");ssid=a.value;dkn=c.value;pass=d.value;if(ssid.length==""){alert("Vui lòng nhập SSID");a.focus();return false}else{if(dkn==""){noiDung="WIFI:S:"+a.value+";T:"+dkn+";P:;;"}else{if(pass.length==""){alert("Vui lòng nhập Mật khẩu");d.focus();return false}else{noiDung="WIFI:S:"+a.value+";T:"+dkn+";P:"+d.value+";;"}}}}if(b=="sodienthoai"){var a=document.getElementById("nhapsdt");noiDung=a.value;if(noiDung.length==""){alert("Vui lòng nhập số điện thoại");a.focus();return false}else{noiDung="tel:"+a.value}}$("#qrcode,.tad-kq,#tad-taianh").hide(0).delay(2000).show(0);$(".load-anh").show(0).delay(2000).hide(0);new QRCode(document.getElementById("qrcode"),{text:noiDung,width:1600,height:1600,colorDark:"#000000",colorLight:"#ffffff",logo:Clogo,logoBorder:logoBorder,logoStroke:true,logoBgColor:"#ffffff",logoBgTransparent:logoBgTransparent,correctLevel:QRCode.CorrectLevel.H})}function botron(){logoBorder=logoBorder?false:true}function tachnen(){logoBgTransparent=logoBgTransparent?false:true};