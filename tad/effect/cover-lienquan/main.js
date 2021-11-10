function timnv() {
	var b, p, o, d, r, c, q;
	b = document.getElementById("tad-timnv");
	p = b.value.toUpperCase();
	o = document.getElementById("tad-chonkieu");
	d = o.getElementsByTagName("div");
	for (c = 0; c < d.length; c++) {
		r = d[c].getElementsByTagName("label")[0];
		q = r.textContent || r.innerText;
		if (q.toUpperCase().indexOf(p) > -1) {
			d[c].style.display = ""
		} else {
			d[c].style.display = "none"
		}
	}
}
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
var LQtuong;
var e = document.getElementById("tad-chonkieu");
dsLquan.forEach(function(b, c) {
	c = c + 1;
	var k = document.createElement("div");
	var i = b.LQcover.replace(/h240/g, "s0");
	k.setAttribute("dataCover", i);
	var j = i.substring(i.lastIndexOf("/") + 1, i.length).replace(/-/g, " ").replace(/.jpg/g, "");
	k.innerHTML = "<a href='" + i + "'><img alt='Ảnh bìa Liên Quân Mobile' class='img-thumbnail' src='" + b.LQthumb.replace(/h240/g, "s120") + "'><i class='fas fa-search-plus'></i></a><div class='custom-control custom-radio custom-control-inline'> <input type='radio' id='kieu" + c + "' name='kieu1' class='custom-control-input'> <label class='custom-control-label' for='kieu" + c + "'>" + j + "</label> </div>";
	e.appendChild(k)
});
$(document).ready(function() {
	if (window.location.hostname == tmbq) {
		$("#tad-chonkieu>div").click(function() {
			var c = $(this).attr("dataCover");
			LQtuong = c
		});
		$("#tad-chonkieu").children("div:first-child").find("input").click();
		$("#tad-taoanh").click(function() {
			$("#img-out").hide();
			$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
			a()
		});

		function a() {
			document.fonts.load('10pt "UTM Gods Word"').then(function() {
				var b = new Image();
				b.crossOrigin = "Anonymous";
				b.src = LQtuong;
				b.onload = function() {
					var c = new Image();
					c.crossOrigin = "Anonymous";
					c.src = "https://lh3.googleusercontent.com/-yf4MQhVwyP0/YYTsGKx9EdI/AAAAAAAAzQg/MpDwDvx1XlsvaJf1CVyb_t4iW12eS7b-ACNcBGAsYHQ/s0/l1.png";
					c.onload = function() {
						var d = new Image();
						d.crossOrigin = "Anonymous";
						d.src = "https://lh3.googleusercontent.com/-bE7AqZtNUDY/YYs05M-kO6I/AAAAAAAA0Gw/so1T9CcEqcAt5uzLsHGU23hRGdMZ_8h6QCNcBGAsYHQ/s0/l2.png";
						d.onload = function() {
							var n = document.getElementById("temp");
							var i = n.getContext("2d");
							var l = $(".tad-in-text1").val().toUpperCase();
							i.clearRect(0, 0, n.width, n.height);
							i.save();
							i.filter = "blur(20px)";
							var m = 50;
							i.drawImage(b, n.width / 2 - 3033 / 2 - m / 2, 0 - m / 2, 3033 + m, n.height + m);
							i.restore();

                            i.save();
                            i.filter = "brightness(90%) contrast(110%)";
							i.drawImage(b, 0, n.height / 2 - 741 / 2, n.width, 741);
                            i.restore();
                            i.save();
							i.globalCompositeOperation = "overlay";
							i.drawImage(c, 0, 0, n.width, n.height);
							i.restore();
							i.save();
							i.fillStyle = "rgba(0,0,0, 0.1)";
							i.fillRect(0, 0, n.width, n.height);
							i.restore();
							i.drawImage(d, 0, 0, n.width, n.height);
							i.save();
							var k = i.createLinearGradient(0, 0, 0, 1000);
							k.addColorStop(0, "#fff");
							k.addColorStop(0.55, "#fff");
							k.addColorStop(0.65, "rgba(255, 255, 255, 0)");
							i.fillStyle = k;
							i.textAlign = "center";
							i.font = "70px UTM Gods Word";
							i.fillText(l, n.width / 2 - 10, 590);
							i.restore();
							n.toBlob(function(j) {
								var o = URL.createObjectURL(j);
								$("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + o + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + o + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
								setTimeout(function() {
									$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
									$("#img-out").show()
								}, 1000)
							}, "image/jpeg")
						}
					}
				}
			})
		}
	}
});