var tvtad="";$(document).ready(function(){if(window.location.hostname==tmbq){var dk1=$(".dk1").val();$(".chonnen div").click(function(){$(".btn-chonnen").html("<i class='fas fa-image'></i> Chọn nền khác")
$(".dk1").val(1);$(".chonnen div").removeClass("active");$(this).addClass("active");var cropimg=$(this).children().attr("src");;$(".img-container img,.cropper-canvas img, .cropper-view-box img").attr("src",cropimg);$(".img-preview,.tad-main").css("background-image","url("+cropimg+")").css("background-size","cover");$('#chonanhModal').modal('hide');});$("#tad-taianhve").hide();$(".tad-ketqua").hide();var getimg="";$("#tad-taoanh").click(function(){t1=$(".tad-in-text1").val();$(".tad-out-text1").html(t1);t2=$(".tad-in-text2").val();$(".tad-out-text2").html(t2);t3=$(".tad-in-text3").val();$(".tad-out-text3").html(t3);if($(".dk1").val()==""){alert("Vui lòng chọn nền");$('#chonanhModal').modal('show');return false;}
if(t1==""){alert("Vui lòng nhập tên");$(".tad-nhapten input").focus();return false;}
$(".load-anh").show();html2canvas(document.querySelector(".tad-main"),{useCORS:!0,scrollX:0,scrollY:0,width:rongh2,height:daih2,scale:1,x:0,y:0}).then(canvas=>{canvas.toBlob(function(blob){var bloburl=URL.createObjectURL(blob);$("#img-out").html("<img src='"+bloburl+"' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");$("#tad-taianhve").attr("download",tenanhxuat).attr("href",bloburl);});$("#tad-taianhve").show();$(".tad-ketqua").show();$(".load-anh").hide();},'image/jpeg');});}});