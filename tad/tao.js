$(document).ready(function(){if(window.location.hostname==tmbq){$("head").append("<script src='"+tm+"tv/h2.js'>");if($(".btn-chonanh").length!==0){$("head").append("<link href='"+tm+"css/cr.css' rel='stylesheet'/>");$("head").append("<script src='"+tm+"cr.js'>");$("head").append("<script src='"+tm+"tv/cr.js'>");$("body").append("<input class='cropanh d-none' value=''>")
$("#cropanh").click(function(){$("#tad-taoanh").removeClass("disabled");$(".cropanh").val(1);});}
$("#tad-taoanh").click(function(){if($(".cropanh").val()==""){alert("Bạn chưa chọn ảnh");$('#chonanhModal').modal('show');return false;}
var norq=$(".no-request");var t0=$(".tad-in-text0");var t0o=$(".tad-out-text0");if(t0.length!==0){if(norq.length!==0){}
else if(t0.val().length==0){t0.focus();t0.addClass("is-invalid");return false;}else{t0.removeClass("is-invalid");t0o.html(t0.val());}}
var t1=$(".tad-in-text1");var t1o=$(".tad-out-text1");if(norq.length!==0){}
else if(t1.length!==0){if(t1.val().length==0){t1.focus();t1.addClass("is-invalid");return false;}else{t1.removeClass("is-invalid");t1o.html(t1.val());}}
var t2=$(".tad-in-text2");var t2o=$(".tad-out-text2");if(norq.length!==0){}
else if(t2.length!==0){if(t2.val().length==0){t2.focus();t2.addClass("is-invalid");return false;}else{t2.removeClass("is-invalid");t2o.html(t2.val());}}
var t3=$(".tad-in-text3");var t3o=$(".tad-out-text3");if(norq.length!==0){}
else if(t3.length!==0){if(t3.val().length==0){t3.focus();t3.addClass("is-invalid");return false;}else{t3.removeClass("is-invalid");t3o.html(t3.val());}}
var ta=$(".tad-in-texta");var tao=$(".tad-out-texta");if(norq.length!==0){}
else if(ta.length!==0){if(ta.val().length==0){ta.focus();ta.addClass("is-invalid");return false;}else{ta.removeClass("is-invalid");tao.html(ta.replace(/\r?\n/g,'</div><div>'));tao.html(ta.val());}}
$(".load-anh").addClass("show");html2canvas(document.querySelector(".tad-main"),{useCORS:!0,scrollX:0,scrollY:0,width:rongh2,height:daih2,scale:1,x:0,y:0}).then(canvas=>{canvas.toBlob(function(blob){var bloburl=URL.createObjectURL(blob);$("#img-out").html("<img src='"+bloburl+"' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");$("#tad-taianhve").attr("download",tenanhxuat).attr("href",bloburl);});$("#tad-taianhve").addClass("show");$(".tad-ketqua").addClass("show");$(".load-anh").removeClass("show");},'image/jpeg');});}});