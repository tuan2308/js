$(document).ready(function() {
	if (window.location.hostname == tmbq) {
		$("head").append(cssCrop);
		$("head").append(jsCrop);
		$("head").append(jqueryCrop);
		var a = document.getElementById("Nimg");
		var g = document.getElementById("Cimg");
		var h = vitri;
		$("#tad-taoanh").click(function() {
			$("#cropanh").click();
			h = vitri;
			$("#img-out").hide();
			$("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> " + tdta);
			setTimeout(function() {
				f()
			}, 200)
		});

		function f() {
			var b = new Image();
			b.crossOrigin = "Anonymous";
			b.src = markimg;
			b.onload = function() {
				var d = new Image();
				d.crossOrigin = "Anonymous";
				d.src = bgimg;
				d.onload = function() {
					c = document.querySelector("canvas"), ctx = c.getContext("2d"), corners = h, step = 2;
					var u, o, C, w, i, t, v, m, z = g.width - 1,
						k = g.height - 1;
					ctx.clearRect(0, 0, c.width, c.height);
					ctx.save();
					for (y = 0; y < k; y += step) {
						for (x = 0; x < z; x += step) {
							i = j(corners[0], corners[3], y / k);
							t = j(corners[1], corners[2], y / k);
							v = j(corners[0], corners[3], (y + step) / k);
							m = j(corners[1], corners[2], (y + step) / k);
							u = j(i, t, x / z);
							o = j(i, t, (x + step) / z);
							C = j(v, m, (x + step) / z);
							w = j(v, m, x / z);
							ctx.drawImage(g, x, y, step, step, u.x, u.y, Math.ceil(Math.max(step, Math.abs(o.x - u.x), Math.abs(w.x - C.x))) + 1, Math.ceil(Math.max(step, Math.abs(u.y - w.y), Math.abs(o.y - C.y))) + 1)
						}
					}
					if (tadMk == "black") {
						ctx.save();
						ctx.globalAlpha = 0.3;
						ctx.fillStyle = "#333";
						ctx.fillRect(0, 0, c.width, c.height);
						ctx.restore()
					}
					ctx.globalCompositeOperation = "destination-in";
					ctx.drawImage(b, 0, 0, c.width, c.height);
					ctx.restore();
					ctx.save();
					ctx.globalCompositeOperation = "destination-over";
					ctx.drawImage(d, 0, 0, c.width, c.height);
					ctx.restore();
					if (a) {
						ctx.save();
						ctx.globalAlpha = 0.5;
						var e = ctx.createPattern(a, "repeat");
						ctx.fillStyle = e;
						ctx.fillRect(0, 0, c.width, c.height);
						ctx.restore()
					}
                    setTimeout(function() {	c.toBlob(function(n) {
						var l = URL.createObjectURL(n);
						$("#img-out").html("<label class='mt-2'>" + tkq + "</label><img src='" + l + "' alt='taoanhdep' class='img-thumbnail'></img><a href='" + l + "' class='btn btn-block btn-primary mt-2' download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> " + ttav + "</a>");
                   
						$("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> " + tta);
						$("#img-out").show();
                     
					}, "image/jpeg");
                    
                     }, 1000)

					function j(n, p, l) {
						return {
							x: n.x + (p.x - n.x) * l,
							y: n.y + (p.y - n.y) * l
						}
					}
				}
			}
		}
	}
});