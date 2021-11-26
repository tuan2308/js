window.onload = function() {
	var c = window.Cropper;
	var l = window.URL || window.webkitURL;
	var g = document.querySelector(".img-container");
	var h = g.getElementsByTagName("img").item(0);
	var j = document.getElementById("actions");
	var d = {
		aspectRatio: tyle,
		viewMode: vmode,
		preview: ".img-preview",
		autoCrop: true,
		strict: true,
		background: true,
		autoCropArea: 1
	};
	var f = new c(h, d);
	var i = h.src;
	var e = "image/jpeg";
	var k;
	if (!document.createElement("canvas").getContext) {
		$('button[data-method="getCroppedCanvas"]').prop("disabled", true)
	}
	if (typeof document.createElement("cropper").style.transition === "undefined") {
		$('button[data-method="rotate"]').prop("disabled", true);
		$('button[data-method="scale"]').prop("disabled", true)
	}
	j.querySelector(".docs-buttons").onclick = function(n) {
		var r = n || window.event;
		var q = r.target || r.srcElement;
		var p;
		var s;
		var b;
		var o;
		if (!f) {
			return
		}
		while (q !== this) {
			if (q.getAttribute("data-method")) {
				break
			}
			q = q.parentNode
		}
		if (q === this || q.disabled || q.className.indexOf("disabled") > -1) {
			return
		}
		o = {
			method: q.getAttribute("data-method"),
			target: q.getAttribute("data-target"),
			option: q.getAttribute("data-option") || undefined,
			secondOption: q.getAttribute("data-second-option") || undefined
		};
		p = f.cropped;
		if (o.method) {
			if (typeof o.target !== "undefined") {
				b = document.querySelector(o.target);
				if (!q.hasAttribute("data-option") && o.target && b) {
					try {
						o.option = JSON.parse(b.value)
					} catch (r) {
						console.log(r.message)
					}
				}
			}
			switch (o.method) {
				case "rotate":
					if (p) {
						f.clear()
					}
					break;
				case "getCroppedCanvas":
					try {
						o.option = JSON.parse(o.option)
					} catch (r) {
						console.log(r.message)
					}
					if (e === "image/jpeg") {
						if (!o.option) {
							o.option = {}
						}
						o.option.fillColor = "#fff"
					}
					break
			}
			s = f[o.method](o.option, o.secondOption);
			switch (o.method) {
				case "rotate":
					if (p) {
						f.crop()
					}
					break;
				case "scaleX":
				case "scaleY":
					q.setAttribute("data-option", -o.option);
					break;
				case "getCroppedCanvas":
					if (s) {
						var m = s.toDataURL("image/jpeg", 1);
						$("#Cimg").attr("src", m);
						$("#tad-taoanh").removeClass("disabled")
					}
					break;
				case "destroy":
					f = null;
					if (k) {
						l.revokeObjectURL(k);
						k = "";
						h.src = i
					}
					break
			}
			if (typeof s === "object" && s !== f && b) {
				try {
					b.value = JSON.stringify(s)
				} catch (r) {
					console.log(r.message)
				}
			}
		}
	};
	document.body.onkeydown = function(m) {
		var b = m || window.event;
		if (!f || this.scrollTop > 300) {
			return
		}
		switch (b.keyCode) {
			case 37:
				b.preventDefault();
				f.move(-1, 0);
				break;
			case 38:
				b.preventDefault();
				f.move(0, -1);
				break;
			case 39:
				b.preventDefault();
				f.move(1, 0);
				break;
			case 40:
				b.preventDefault();
				f.move(0, 1);
				break
		}
	};
	$(".cropanh-container").hide();
	var a = document.getElementById("inputImage");
	if (l) {
		a.onchange = function() {
			var m = this.files;
			var b;
			if (f && m && m.length) {
				b = m[0];
				if (/^image\/\w+/.test(b.type)) {
					e = b.type;
					if (k) {
						l.revokeObjectURL(k)
					}
					h.src = k = l.createObjectURL(b);
					f.destroy();
					f = new c(h, d);
					a.value = null;

					$(".cropanh").val(1);

					$(".cropanh-container").show();
					$(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác")
				} else {
					window.alert("Vui lòng chọn một tệp hình ảnh.")
				}
			}
		}
	} else {
		a.disabled = true;
		a.parentNode.className += " disabled"
	}
};