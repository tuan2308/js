$(document).ready(function(){if(window.location.hostname==tmbq){$(".tad-in-text1").on("input",function(){if($(".tad-in-text1").val()==""){$("#tad-taoanh").addClass("disabled")}else{$("#tad-taoanh").removeClass("disabled")}});$("#tad-taoanh").click(function(){if($(".tad-in-text1").val()==""){alert("Vui lòng nhập tên");$(".tad-in-text1").focus();return false}$("#img-out").hide();$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");setTimeout(function(){b()},1000)});function b(){var a=$(".tad-in-text1").val();document.fonts.load('10pt "SVN-Steady"').then(function(){var c=new Image();c.crossOrigin="Anonymous";c.src="https://1.bp.blogspot.com/-rFYP7iODx9U/YTXHC7_2IDI/AAAAAAAAxAM/A5LYD6CeD3IHD1OiX8ZpEu_W1zT5LyZOwCNcBGAsYHQ/s0/bg.jpg";c.onload=function(){var d=new Image();d.crossOrigin="Anonymous";d.src="https://1.bp.blogspot.com/-eqcary6XTj0/YTXIgubkiRI/AAAAAAAAxAU/2v3CKG_beRY66lYmu2gUpTZ7S_178P5tQCNcBGAsYHQ/s0/layer.png";d.onload=function(){var e=document.getElementById("temp");var f=e.getContext("2d");f.clearRect(0,0,e.width,e.height);f.save();f.fillStyle="white";f.fillRect(0,0,e.width,e.height);f.restore();f.save();f.globalCompositeOperation="destination-atop";f.drawImage(d,0,0,e.width,e.height);f.font="135px SVN-Steady";f.fillStyle="#464646";f.textBaseline="middle";f.textAlign="center";f.fillText(a,e.width/2,e.height/2);f.restore();f.globalCompositeOperation="destination-over";f.drawImage(c,0,0,e.width,e.height);e.toBlob(function(h){var g=URL.createObjectURL(h);$("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='"+g+"' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='"+g+"' class='btn btn-block btn-primary mt-2'  download='taoanhdep_"+tenanhxuat+"'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");$("#img-out").show()},"image/jpeg")}}})}}});