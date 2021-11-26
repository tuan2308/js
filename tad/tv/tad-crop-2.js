window.onload = function() {
	var q = window.Cropper;
	var s = window.URL || window.webkitURL;
	var m = document.querySelector(".img-container");
	var b = m.getElementsByTagName("img").item(0);
	var u = document.getElementById("actions");
	var p = {
		aspectRatio: tyle,
		viewMode: vmode,
		preview: ".img-preview",
		autoCrop: true,
		strict: true,
		background: true,
		autoCropArea: 1
	};
	var n = new q(b, p);
	var v = b.src;
	var o = "image/jpeg";
	var t;
	if (!document.createElement("canvas").getContext) {
		$('button[data-method="getCroppedCanvas"]').prop("disabled", true)
	}
	if (typeof document.createElement("cropper").style.transition === "undefined") {
		$('button[data-method="rotate"]').prop("disabled", true);
		$('button[data-method="scale"]').prop("disabled", true)
	}
	u.querySelector(".docs-buttons").onclick = function(h) {
		var d = h || window.event;
		var e = d.target || d.srcElement;
		var f;
		var c;
		var a;
		var g;
		if (!n) {
			return
		}
		while (e !== this) {
			if (e.getAttribute("data-method")) {
				break
			}
			e = e.parentNode
		}
		if (e === this || e.disabled || e.className.indexOf("disabled") > -1) {
			return
		}
		g = {
			method: e.getAttribute("data-method"),
			target: e.getAttribute("data-target"),
			option: e.getAttribute("data-option") || undefined,
			secondOption: e.getAttribute("data-second-option") || undefined
		};
		f = n.cropped;
		if (g.method) {
			if (typeof g.target !== "undefined") {
				a = document.querySelector(g.target);
				if (!e.hasAttribute("data-option") && g.target && a) {
					try {
						g.option = JSON.parse(a.value)
					} catch (d) {
						console.log(d.message)
					}
				}
			}
			switch (g.method) {
				case "rotate":
					if (f) {
						n.clear()
					}
					break;
				case "getCroppedCanvas":
					try {
						g.option = JSON.parse(g.option)
					} catch (d) {
						console.log(d.message)
					}
					if (o === "image/jpeg") {
						if (!g.option) {
							g.option = {}
						}
						g.option.fillColor = "#fff"
					}
					break
			}
			c = n[g.method](g.option, g.secondOption);
			switch (g.method) {
				case "rotate":
					if (f) {
						n.crop()
					}
					break;
				case "scaleX":
				case "scaleY":
					e.setAttribute("data-option", -g.option);
					break;
				case "getCroppedCanvas":
					if (c) {
					
							var i = c.toDataURL('image/jpeg',1.0);
							$("#Cimg").attr("src", i)
					
						$("#tad-taoanh").removeClass("disabled")
					}
					break;
				case "destroy":
					n = null;
					if (t) {
						s.revokeObjectURL(t);
						t = "";
						b.src = v
					}
					break
			}
			if (typeof c === "object" && c !== n && a) {
				try {
					a.value = JSON.stringify(c)
				} catch (d) {
					console.log(d.message)
				}
			}
		}
	};
	document.body.onkeydown = function(c) {
		var a = c || window.event;
		if (!n || this.scrollTop > 300) {
			return
		}
		switch (a.keyCode) {
			case 37:
				a.preventDefault();
				n.move(-1, 0);
				break;
			case 38:
				a.preventDefault();
				n.move(0, -1);
				break;
			case 39:
				a.preventDefault();
				n.move(1, 0);
				break;
			case 40:
				a.preventDefault();
				n.move(0, 1);
				break
		}
	};
	$(".cropanh-container").hide();
	var r = document.getElementById("inputImage");
	if (s) {
		r.onchange = function() {
			var c = this.files;
			var a;
			if (n && c && c.length) {
				a = c[0];
				if (/^image\/\w+/.test(a.type)) {
					o = a.type;
					if (t) {
						s.revokeObjectURL(t)
					}
					b.src = t = s.createObjectURL(a);
					n.destroy();
					n = new q(b, p);
					r.value = null;
					$("#tad-taoanh").removeClass("disabled");
					$(".cropanh-container").show();
					$(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác")
				} else {
					window.alert("Vui lòng chọn một tệp hình ảnh.")
				}
			}
		}
	} else {
		r.disabled = true;
		r.parentNode.className += " disabled"
	}
};