var cimg;
$("body").append("<input class='cropanh d-none'></input>")
var cra = $(".cropanh");
        var ti1 = $(".tad-in-text1");
        var ti2 = $(".tad-in-text2");
        var ti3 = $(".tad-in-text3");
        var ti4 = $(".tad-in-text4");
		var ti5 = $(".tad-in-text4");
        var tia = $(".tad-in-texta");
        $("#cropanh").click(function() {
            $(".cropanh").val(1);
            ktform();
        });
        ti1.on("input", function() {
            ktform();
        });
        ti2.on("input", function() {
            ktform();
        });
        ti3.on("input", function() {
            ktform();
        });
        ti4.on("input", function() {
            ktform();
        });
		ti5.on("input", function() {
            ktform();
        });
        tia.on("input", function() {
            ktform();
        });

        function ktform() {
            if (undefined !== cra.val() && cra.val().length == "") {
                $("#tad-taoanh").addClass("disabled")
            } else if (undefined !== ti1.val() && ti1.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else if (undefined !== ti2.val() && ti2.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else if (undefined !== ti3.val() && ti3.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            }else if (undefined !== ti4.val() && ti4.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            }else if (undefined !== ti5.val() && ti5.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else if (undefined !== tia.val() && tia.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else {
                $("#tad-taoanh").removeClass("disabled")
            }
        }



window.onload = function() {
	var u = window.Cropper;
	var b = window.URL || window.webkitURL;
	var q = document.querySelector(".img-container");
	var p = q.getElementsByTagName("img").item(0);
	var n = document.getElementById("actions");
	var t = {
		aspectRatio: tyle,
		viewMode: vmode,
		preview: ".img-preview",
		autoCrop: true,
		strict: true,
		background: true,
		autoCropArea: 1
	};
	var r = new u(p, t);
	var o = p.src;
	var s = "image/jpeg";
	var m;
	if (!document.createElement("canvas").getContext) {
		$('button[data-method="getCroppedCanvas"]').prop("disabled", true)
	}
	if (typeof document.createElement("cropper").style.transition === "undefined") {
		$('button[data-method="rotate"]').prop("disabled", true);
		$('button[data-method="scale"]').prop("disabled", true)
	}
	n.querySelector(".docs-buttons").onclick = function(h) {
		var d = h || window.event;
		var e = d.target || d.srcElement;
		var f;
		var c;
		var a;
		var g;
		if (!r) {
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
		f = r.cropped;
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
						r.clear()
					}
					break;
				case "getCroppedCanvas":
					try {
						g.option = JSON.parse(g.option)
					} catch (d) {
						console.log(d.message)
					}
					if (s === "image/jpeg") {
						if (!g.option) {
							g.option = {}
						}
						g.option.fillColor = "#fff"
					}
					break
			}
			c = r[g.method](g.option, g.secondOption);
			switch (g.method) {
				case "rotate":
					if (f) {
						r.crop()
					}
					break;
				case "scaleX":
				case "scaleY":
					e.setAttribute("data-option", -g.option);
					break;
				case "getCroppedCanvas":
					if (c) {
						cimg = c;
			cra.val(1)
				 ktform();
					}
					break;
				case "destroy":
					r = null;
					if (m) {
						b.revokeObjectURL(m);
						m = "";
						p.src = o
					}
					break
			}
			if (typeof c === "object" && c !== r && a) {
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
		if (!r || this.scrollTop > 300) {
			return
		}
		switch (a.keyCode) {
			case 37:
				a.preventDefault();
				r.move(-1, 0);
				break;
			case 38:
				a.preventDefault();
				r.move(0, -1);
				break;
			case 39:
				a.preventDefault();
				r.move(1, 0);
				break;
			case 40:
				a.preventDefault();
				r.move(0, 1);
				break
		}
	};
	$(".cropanh-container").hide();
	var v = document.getElementById("inputImage");
	if (b) {
		v.onchange = function() {
			var c = this.files;
			var a;
			if (r && c && c.length) {
				a = c[0];
				if (/^image\/\w+/.test(a.type)) {
					s = a.type;
					if (m) {
						b.revokeObjectURL(m)
					}
					p.src = m = b.createObjectURL(a);
					r.destroy();
					r = new u(p, t);
					v.value = null;
					cra.val(1)
				 ktform();
					$(".cropanh-container").show();
					$(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác")
				} else {
					window.alert("Vui lòng chọn một tệp hình ảnh.")
				}
			}
		}
	} else {
		v.disabled = true;
		v.parentNode.className += " disabled"
	}
};