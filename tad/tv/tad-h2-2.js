var tvtad = "";
$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        $("#tad-taoanh").addClass("disabled");
        $("head").append(xlha);
        if ($(".btn-chonanh").length !== 0) { $("head").append(cssCrop);
            $("body").append("<input class='cropanh d-none' value=''>") }
        var cra = $(".cropanh");
        var ti1 = $(".tad-in-text1");
        var ti2 = $(".tad-in-text2");
        var ti3 = $(".tad-in-text3");
        var tia = $(".tad-in-texta");
        $("#cropanh").click(function() { $(".cropanh").val(1);
            ktform(); });
        ti1.on("input", function() { ktform(); });
        ti2.on("input", function() { ktform(); });
        ti3.on("input", function() { ktform(); });
        tia.on("input", function() { ktform(); });

        function ktform() { if (undefined !== cra.val() && cra.val().length == "") { $("#tad-taoanh").addClass("disabled") } else if (undefined !== ti1.val() && ti1.val().length == 0) { $("#tad-taoanh").addClass("disabled") } else if (undefined !== ti2.val() && ti2.val().length == 0) { $("#tad-taoanh").addClass("disabled") } else if (undefined !== ti3.val() && ti3.val().length == 0) { $("#tad-taoanh").addClass("disabled") } else if (undefined !== tia.val() && tia.val().length == 0) { $("#tad-taoanh").addClass("disabled") } else { $("#tad-taoanh").removeClass("disabled") } }
        $("#tad-taoanh").click(function() {
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            $("#img-out").hide();
            t0 = $(".tad-in-text0").val();
            $(".tad-out-text0").html(t0);
            t1 = $(".tad-in-text1").val();
            $(".tad-out-text1").html(t1);
            t2 = $(".tad-in-text2").val();
            $(".tad-out-text2").html(t2);
            t3 = $(".tad-in-text3").val();
            $(".tad-out-text3").html(t3);
            ta = $(".tad-in-texta").val();
            if (ta) { $(".tad-out-texta").html(ta.replace(/\r?\n/g, '</div><div>')); }
            html2canvas(document.querySelector(".tad-main"), { useCORS: !0, scrollX: 0, scrollY: 0, width: rongh2, height: daih2, scale: 1, x: 0, y: 0 }).then(canvas => { canvas.toBlob(function(blob) { var bloburl = URL.createObjectURL(blob);
                    $("#img-out").html("<label class='mt-2 tad-ketqua'> Kết quả: </label><img src='" + bloburl + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + bloburl + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + ".jpg'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>"); }, 'image/jpeg');
                setTimeout(function() { $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                    $("#img-out").show(); }, 1000) });
        });
        window.onload = function() {
            var j = window.Cropper;
            var h = window.URL || window.webkitURL;
            var c = document.querySelector(".img-container");
            var d = c.getElementsByTagName("img").item(0);
            var f = document.getElementById("actions");
            var k = { aspectRatio: tyle, viewMode: vmode, preview: ".img-preview", autoCrop: true, strict: true, background: true, autoCropArea: 1 };
            var b = new j(d, k);
            var e = d.src;
            var a = "image/jpeg";
            var g;
            if (!document.createElement("canvas").getContext) { $('button[data-method="getCroppedCanvas"]').prop("disabled", true) }
            if (typeof document.createElement("cropper").style.transition === "undefined") { $('button[data-method="rotate"]').prop("disabled", true);
                $('button[data-method="scale"]').prop("disabled", true) }
            f.querySelector(".docs-buttons").onclick = function(n) {
                var r = n || window.event;
                var q = r.target || r.srcElement;
                var p;
                var l;
                var m;
                var o;
                if (!b) { return }
                while (q !== this) {
                    if (q.getAttribute("data-method")) { break }
                    q = q.parentNode
                }
                if (q === this || q.disabled || q.className.indexOf("disabled") > -1) { return }
                o = { method: q.getAttribute("data-method"), target: q.getAttribute("data-target"), option: q.getAttribute("data-option") || undefined, secondOption: q.getAttribute("data-second-option") || undefined };
                p = b.cropped;
                if (o.method) {
                    if (typeof o.target !== "undefined") { m = document.querySelector(o.target); if (!q.hasAttribute("data-option") && o.target && m) { try { o.option = JSON.parse(m.value) } catch (r) { console.log(r.message) } } }
                    switch (o.method) {
                        case "rotate":
                            if (p) { b.clear() }
                            break;
                        case "getCroppedCanvas":
                            try { o.option = JSON.parse(o.option) } catch (r) { console.log(r.message) }
                            if (a === "image/jpeg") {
                                if (!o.option) { o.option = {} }
                                o.option.fillColor = "#fff"
                            }
                            break
                    }
                    l = b[o.method](o.option, o.secondOption);
                    switch (o.method) {
                        case "rotate":
                            if (p) { b.crop() }
                            break;
                        case "scaleX":
                        case "scaleY":
                            q.setAttribute("data-option", -o.option);
                            break;
                        case "getCroppedCanvas":
                            if (l) { $(".anhdacat").html(l) }
                            break;
                        case "destroy":
                            b = null;
                            if (g) { h.revokeObjectURL(g);
                                g = "";
                                d.src = e }
                            break
                    }
                    if (typeof l === "object" && l !== b && m) { try { m.value = JSON.stringify(l) } catch (r) { console.log(r.message) } }
                }
            };
            document.body.onkeydown = function(l) {
                var m = l || window.event;
                if (!b || this.scrollTop > 300) { return }
                switch (m.keyCode) {
                    case 37:
                        m.preventDefault();
                        b.move(-1, 0); break;
                    case 38:
                        m.preventDefault();
                        b.move(0, -1); break;
                    case 39:
                        m.preventDefault();
                        b.move(1, 0); break;
                    case 40:
                        m.preventDefault();
                        b.move(0, 1); break }
            };
            $(".cropanh-container").hide();
            var i = document.getElementById("inputImage");
            if (h) {
                i.onchange = function() {
                    var m = this.files;
                    var l;
                    if (b && m && m.length) {
                        l = m[0];
                        if (/^image\/\w+/.test(l.type)) {
                            a = l.type;
                            if (g) { h.revokeObjectURL(g) }
                            d.src = g = h.createObjectURL(l);
                            b.destroy();
                            b = new j(d, k);
                            i.value = null;
                            $(".cropanh-container").show();
                            $(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác")
                        } else { window.alert("Vui lòng chọn một tệp hình ảnh.") }
                    }
                }
            } else { i.disabled = true;
                i.parentNode.className += " disabled" }
        };
    }
});