$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        $("head").append(cssCrop);
        $("head").append(jsCrop);
        $("head").append(jqueryCrop);
        $("body").append("<img src='https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png' crossorigin='anonymous' id='Bimg' class='d-none'/> <img src='https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png' crossorigin='anonymous' id='Mimg' class='d-none'/>");
        var j = document.getElementById("Nimg");
        var b = document.getElementById("Cimg");
        var d = document.getElementById("Bimg");
        var o = document.getElementById("Mimg");
        var e = 0;
        var a = vitri;
        $("#Bimg").attr("src", bgimg);
        $("#Mimg").attr("src", markimg);
        $("#tad-taoanh").click(function() {
            $("#Bimg").attr("src", bgimg);
            $("#Mimg").attr("src", markimg);
            a = vitri;
            $("#img-out").hide();
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            setTimeout(function() {
                d.onload = m()
            }, 200)
        });

        function m() {
            c = document.querySelector("canvas"), ctx = c.getContext("2d"), corners = a, step = 1;
            var n, s, h, p, k, A, q, g, l = b.width - 1,
                i = b.height - 1;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.save();
            for (y = 0; y < i; y += step) {
                for (x = 0; x < l; x += step) {
                    k = r(corners[0], corners[3], y / i);
                    A = r(corners[1], corners[2], y / i);
                    q = r(corners[0], corners[3], (y + step) / i);
                    g = r(corners[1], corners[2], (y + step) / i);
                    n = r(k, A, x / l);
                    s = r(k, A, (x + step) / l);
                    h = r(q, g, (x + step) / l);
                    p = r(q, g, x / l);
                    ctx.drawImage(b, x, y, step, step, n.x, n.y, Math.ceil(Math.max(step, Math.abs(s.x - n.x), Math.abs(p.x - h.x))) + 1, Math.ceil(Math.max(step, Math.abs(n.y - p.y), Math.abs(s.y - h.y))) + 1)
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
            ctx.drawImage(o, 0, 0, c.width, c.height);
            ctx.restore();
            ctx.save();
            ctx.globalCompositeOperation = "destination-over";
            ctx.drawImage(d, 0, 0, c.width, c.height);
            ctx.restore();
            if (j) {
                ctx.save();
                ctx.globalAlpha = 0.5;
                var f = ctx.createPattern(j, "repeat");
                ctx.fillStyle = f;
                ctx.fillRect(0, 0, c.width, c.height);
                ctx.restore()
            }
            c.toBlob(function(t) {
                var u = URL.createObjectURL(t);
                $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + u + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + u + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                $("#img-out").show()
            }, 'image/jpeg');

            function r(v, u, t) {
                return {
                    x: v.x + (u.x - v.x) * t,
                    y: v.y + (u.y - v.y) * t
                }
            }
        }
    }
});