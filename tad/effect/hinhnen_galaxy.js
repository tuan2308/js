$(document).ready(function(){if(window.location.hostname==tmbq){var dk1=$(".dk1").val();$(".chonnen div").click(function(){$(".btn-chonnen").html("<i class='fas fa-image'></i> Chọn nền khác")
$(".dk1").val(1);$(".chonnen div").removeClass("active");$(this).addClass("active");var cropimg=$(this).children().attr("src");;$(".img-container img,.cropper-canvas img, .cropper-view-box img").attr("src",cropimg);$(".img-preview,.tad-main").css("background-image","url("+cropimg+")").css("background-size","cover");$('#chonanhModal').modal('hide');});var getimg="";$("#tad-taoanh").click(function(){var choncung=$("#choncunghd :selected").val();$(".tad-main").attr("class","tad-main");$(".tad-main").addClass(choncung);t1=$(".tad-in-text1").val();$(".tad-out-text1").html(t1);t2=$(".tad-in-text2").val();$(".tad-out-text2").html(t2);if($(".dk1").val()==""){alert("Vui lòng chọn nền");$('#chonanhModal').modal('show');return false;}
if(t2==""){alert("Vui lòng nhập tên");$(".tad-nhapten input").focus();return false;}
$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");$("#img-out").hide();html2canvas(document.querySelector(".tad-main"),{useCORS:!0,scrollX:0,scrollY:0,width:rongh2,height:daih2,scale:1,x:0,y:0}).then(canvas=>{tadUpload(canvas)});});}});