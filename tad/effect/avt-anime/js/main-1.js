function timnv() {
	var m, j, k, a, n, l, i;
	m = document.getElementById("tad-timnv");
	j = m.value.toUpperCase();
	k = document.getElementById("tad-chonkieu");
	a = k.getElementsByTagName("div");
	for (l = 0; l < a.length; l++) {
		n = a[l].getElementsByTagName("span")[0];
		i = n.textContent || n.innerText;
		if (i.toUpperCase().indexOf(j) > -1) {
			a[l].style.display = ""
		} else {
			a[l].style.display = "none"
		}
	}
}
$(document).ready(function() {
	if (window.location.hostname == tmbq) {
		var e = document.getElementById("tad-chonkieu");
		dsAnime.forEach(function(a) {
			var d = document.createElement("div");
			var c = a.imgAnime;
			var b = c.substring(c.lastIndexOf("/") + 1, c.length).replace(/-/g, " ").replace(/.png/g, "");
			d.setAttribute("dataImg", a.imgAnime);
			d.setAttribute("dataColor", a.colorBg);
			d.setAttribute("title", b);
			d.innerHTML = "<span>" + b + "</span><i style='background-image: url(" + a.imgAnime.replace(/h240/g, "s120") + ");'></i>";
			e.appendChild(d)
		});
		$("#doimaunen").colorpicker().change(function() {
			var a = $("#doimaunen").val();
			$(".demomau").css("background-color", a);
			$(".active span").css("color", a);
			colorBg = a
		});
		$("#tad-chonkieu>div").click(function() {
			$("#tad-chonkieu>div").removeClass("active");
			$(this).addClass("active");
			var a = $(this).attr("dataImg").replace(/h240/g, "s0");
			var b = $(this).attr("dataColor");
			$("#tad-chonkieu>div>span").attr("style", "");
			$(this).find("span").css("color", b);
			imgAnime = a;
			colorBg = b;
			$("#doimaunen").val(b).trigger("change");
			$("#doimaunen").colorpicker("setValue", b)
		});
		$("#tad-chonkieu").children("div:first-child").click();
		var f = $(".tad-in-text1");
		var g = $(".tad-in-text2");
		f.on("input", function() {
			h()
		});
		g.on("input", function() {
			h()
		});

		function h() {
			if (undefined !== f.val() && f.val().length == 0) {
				$("#tad-taoanh").addClass("disabled")
			} else {
				if (undefined !== g.val() && g.val().length == 0) {
					$("#tad-taoanh").addClass("disabled")
				} else {
					$("#tad-taoanh").removeClass("disabled")
				}
			}
		}
		$("#tad-taoanh").click(function() {
			$("#img-out").hide();
			$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
			document.fonts.load('10pt "MTD William Letter"').then(function() {
				document.fonts.load('10pt "Steelfish"').then(function() {
					var a = new Image;
					a.crossOrigin = "Anonymous";
					a.src = "https://1.bp.blogspot.com/-5SECGn_32Co/YQkQ-ZyDSPI/AAAAAAAAv1o/nZYKV0s_UPY41XlfWfNIX0HbVoRLhnlogCNcBGAsYHQ/s0/line.png";
					a.onload = function() {
						var b = new Image;
						b.crossOrigin = "Anonymous";
						b.src = imgAnime;
						b.onload = function() {
							t1 = $(".tad-in-text1").val();
							t2 = $(".tad-in-text2").val().toUpperCase();
							var c = document.getElementById("temp");
							var d = c.getContext("2d");
							d.clearRect(0, 0, c.width, c.height);
							d.save();
							d.fillStyle = "#fff";
							d.fillRect(0, 0, c.width, c.height);
							d.restore();
							d.save();
							d.fillStyle = colorBg;
							d.fillRect(0, 0, c.width, c.height);
							d.restore();
							d.save();
							d.fillStyle = "#fff";
							d.font = "300px MTD William Letter";
							d.textAlign = "center";
							d.fillText(t1, c.width / 2, 350);
							d.restore();
							d.save();
							d.strokeStyle = "white";
							d.lineWidth = 7;
							d.font = "450px Steelfish";
							d.textAlign = "center";
							d.strokeText(t2, c.width / 2, 900);
							d.restore();
							d.save();
							d.fillStyle = "rgb(255 255 255 / 70%)";
							d.font = "450px Steelfish";
							d.textAlign = "center";
							d.fillText(t2, c.width / 2, 1350);
							d.restore();
							d.save();
							d.strokeStyle = "white";
							d.lineWidth = 7;
							d.font = "450px Steelfish";
							d.textAlign = "center";
							d.strokeText(t2, c.width / 2, 1800);
							d.restore();
							d.save();
							d.drawImage(a, 0, 0, c.width, c.height);
							d.restore();
							d.save();
							gradient2 = d.createLinearGradient(0, 0, 0, 2000);
							gradient2.addColorStop(0, "rgba(0,0,0,0.05)");
							gradient2.addColorStop(0.5, "rgba(0,0,0,0)");
							gradient2.addColorStop(1, "rgba(0,0,0,0.1)");
							d.fillStyle = gradient2;
							d.fillRect(0, 0, 2000, 2000);
							d.restore();
							d.save();
							d.drawImage(b, 0, 0, c.width, c.height);
							d.restore();
							c.toBlob(function(l) {
								var k = URL.createObjectURL(l);
								$("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + k + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + k + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
								setTimeout(function() {
									$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
									$("#img-out").show()
								}, 1000)
							}, "image/jpeg")
						}
					}
				})
			})
		})
	}
});