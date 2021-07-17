$(document).ready(function() { if (window.location.hostname == tmbq) { $("head").append(cssCrop);
        $("head").append(jsCrop);
        $("head").append(jqueryCrop);
        $("body").append("<img src='https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png' crossorigin='anonymous' id='Bimg' class='d-none'/> <img src='https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png' crossorigin='anonymous' id='Mimg' class='d-none'/>"); var i = document.getElementById("Nimg"); var g = document.getElementById("Cimg"); var n = document.getElementById("Bimg"); var l = document.getElementById("Mimg"); var k = 0; var h = vitri;
        $("#Bimg").attr("src", bgimg);
        $("#Mimg").attr("src", markimg);
        $("#tad-taoanh").click(function() { $("#Bimg").attr("src", bgimg);
            $("#Mimg").attr("src", markimg);
            h = vitri;
            $("#img-out").hide();
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            setTimeout(function() { n.onload = f() }, 200) });

        function f() { c = document.querySelector("canvas"), ctx = c.getContext("2d"), corners = h, step = 1; var j, z, u, d, o, e, b, v, m = g.width - 1,
                t = g.height - 1;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.save(); for (y = 0; y < t; y += step) { for (x = 0; x < m; x += step) { o = a(corners[0], corners[3], y / t);
                    e = a(corners[1], corners[2], y / t);
                    b = a(corners[0], corners[3], (y + step) / t);
                    v = a(corners[1], corners[2], (y + step) / t);
                    j = a(o, e, x / m);
                    z = a(o, e, (x + step) / m);
                    u = a(b, v, (x + step) / m);
                    d = a(b, v, x / m);
                    ctx.drawImage(g, x, y, step, step, j.x, j.y, Math.ceil(Math.max(step, Math.abs(z.x - j.x), Math.abs(d.x - u.x))) + 1, Math.ceil(Math.max(step, Math.abs(j.y - d.y), Math.abs(z.y - u.y))) + 1) } } if (tadMk == "black") { ctx.save();
                ctx.globalAlpha = 0.3;
                ctx.fillStyle = "#333";
                ctx.fillRect(0, 0, c.width, c.height);
                ctx.restore() }
            ctx.globalCompositeOperation = "destination-in";
            ctx.drawImage(l, 0, 0, c.width, c.height);
            ctx.restore();
            ctx.save();
            ctx.globalCompositeOperation = "destination-over";
            ctx.drawImage(n, 0, 0, c.width, c.height);
            ctx.restore(); if (i) { ctx.save();
                ctx.globalAlpha = 0.5; var w = ctx.createPattern(i, "repeat");
                ctx.fillStyle = w;
                ctx.fillRect(0, 0, c.width, c.height);
                ctx.restore() }
            c.toBlob(function(q) { var p = URL.createObjectURL(q);
                $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + p + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + p + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                $("#img-out").show() }, "image/jpeg");

            function a(p, q, r) { return { x: p.x + (q.x - p.x) * r, y: p.y + (q.y - p.y) * r } } } } });