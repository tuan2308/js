$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        $("head").append(cssCrop);
        $("head").append(jsCrop);
        $("head").append(jqueryCrop);
        var b = document.getElementById("Nimg");
        var e = document.getElementById("Cimg");
        var j = new Image;
        j.crossOrigin = "Anonymous";
        j.src = bgimg;
        var o = new Image;
        o.crossOrigin = "Anonymous";
        o.src = limg;
        var a = 0;
        var d = vitri;
        $("#tad-taoanh").click(function() {
            j.src = bgimg;
            o.src = limg;
            d = vitri;
            $("#img-out").hide();
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            setTimeout(function() { j.onload = m() }, 200)
        });

        function m() {
            c = document.querySelector("canvas"), ctx = c.getContext("2d"), corners = d, step = 1;
            var q, h, n, r, p, i, f, l, s = e.width - 1,
                A = e.height - 1;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.save();
            ctx.drawImage(j, 0, 0, c.width, c.height);
            ctx.restore();
            ctx.save();
            for (y = 0; y < A; y += step) {
                for (x = 0; x < s; x += step) {
                    p = g(corners[0], corners[3], y / A);
                    i = g(corners[1], corners[2], y / A);
                    f = g(corners[0], corners[3], (y + step) / A);
                    l = g(corners[1], corners[2], (y + step) / A);
                    q = g(p, i, x / s);
                    h = g(p, i, (x + step) / s);
                    n = g(f, l, (x + step) / s);
                    r = g(f, l, x / s);
                    ctx.drawImage(e, x, y, step, step, q.x, q.y, Math.ceil(Math.max(step, Math.abs(h.x - q.x), Math.abs(r.x - n.x))) + 1, Math.ceil(Math.max(step, Math.abs(q.y - r.y), Math.abs(h.y - n.y))) + 1)
                }
            }
            ctx.save();
            ctx.drawImage(o, 0, 0, c.width, c.height);
            ctx.restore();
            if (b) {
                ctx.save();
                var k = ctx.createPattern(b, "repeat");
                ctx.fillStyle = k;
                ctx.fillRect(0, 0, c.width, c.height);
                ctx.restore()
            }
            c.toBlob(function(t) {
                var u = URL.createObjectURL(t);
                $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + u + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + u + "' class='btn btn-block btn-primary mt-2' download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                $("#img-out").show()
            }, 'image/jpeg');

            function g(v, u, t) { return { x: v.x + (u.x - v.x) * t, y: v.y + (u.y - v.y) * t } }
        }
    }
});