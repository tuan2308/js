var tvtad="";$(document).ready(function(){if(window.location.hostname==tmbq){function d(){t1=$(".tad-in-text1").val();t2=$(".tad-in-text2").val();cochu=$(".tad-cochu").val();const c=document.getElementById("temp");const a=c.getContext("2d");a.clearRect(0,0,c.width,c.height);a.save();var b=document.getElementById("Bimg");a.drawImage(b,0,0,c.width,c.height);a.restore();a.save();a.globalCompositeOperation="screen";a.fillStyle="white";a.font="122px UTM Banque";a.shadowColor="#006bff";a.textAlign="center";a.shadowBlur=10;a.fillText(t1,c.width/2,c.height/2+30);a.shadowBlur=20;a.fillText(t1,c.width/2,c.height/2+30);a.shadowBlur=30;a.fillText(t1,c.width/2,c.height/2+30);a.shadowBlur=40;a.fillText(t1,c.width/2,c.height/2+30);a.shadowBlur=50;a.fillText(t1,c.width/2,c.height/2+30);a.restore();c.toBlob(function(g){var i=URL.createObjectURL(g);$("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='"+i+"' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='"+i+"' class='btn btn-block btn-primary mt-2'  download='taoanhdep--anhbiahacker.jpg'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>")});$("#img-out").hide(0);$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");setTimeout(function(){$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");$("#img-out").show(0)},2000)}var e=$(".tad-in-text1");e.on("input",function(){f()});function f(){if(undefined!==e.val()&&e.val().length==0){$("#tad-taoanh").addClass("disabled")}else{$("#tad-taoanh").removeClass("disabled")}}$("#tad-taoanh").click(function(){document.fonts.load('10pt "UTM Banque"').then(d)})}});