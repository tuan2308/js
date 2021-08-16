$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        $("head").append(cssCrop);
        $("head").append(jsCrop);
        $("head").append(jqueryCrop);
        var b = document.getElementById("Nimg");
        var e = document.getElementById("Cimg");
        var d = vitri;
        $("#tad-taoanh").click(function() {
            $("#cropanh").click();
            d = vitri;
            $("#img-out").hide();
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            setTimeout(function() {
                i()
            }, 200)
        });

        function i() {
            var a = new Image();
            a.crossOrigin = "Anonymous";
            a.src = markimg;
            a.onload = function() {
                var f = new Image();
                f.crossOrigin = "Anonymous";
                f.src = bgimg;
                f.onload = function() {
                    c = document.querySelector("canvas"), ctx = c.getContext("2d"), corners = d, step = 1;
                    var A, F, l, E, h, B, n, g, s = e.width - 1,
                        p = e.height - 1;
                    ctx.clearRect(0, 0, c.width, c.height);
                    ctx.save();
                    for (y = 0; y < p; y += step) {
                        for (x = 0; x < s; x += step) {
                            h = q(corners[0], corners[3], y / p);
                            B = q(corners[1], corners[2], y / p);
                            n = q(corners[0], corners[3], (y + step) / p);
                            g = q(corners[1], corners[2], (y + step) / p);
                            A = q(h, B, x / s);
                            F = q(h, B, (x + step) / s);
                            l = q(n, g, (x + step) / s);
                            E = q(n, g, x / s);
                            ctx.drawImage(e, x, y, step, step, A.x, A.y, Math.ceil(Math.max(step, Math.abs(F.x - A.x), Math.abs(E.x - l.x))) + 1, Math.ceil(Math.max(step, Math.abs(A.y - E.y), Math.abs(F.y - l.y))) + 1)
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
                    ctx.drawImage(a, 0, 0, c.width, c.height);
                    ctx.restore();
                    ctx.save();
                    ctx.globalCompositeOperation = "destination-over";
                    ctx.drawImage(f, 0, 0, c.width, c.height);
                    ctx.restore();
                    if (b) {
                        ctx.save();
                        ctx.globalAlpha = 0.5;
                        var r = ctx.createPattern(b, "repeat");
                        ctx.fillStyle = r;
                        ctx.fillRect(0, 0, c.width, c.height);
                        ctx.restore()
                    }
                    c.toBlob(function(k) {
                        var j = URL.createObjectURL(k);
                        $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + j + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + j + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                        $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                        $("#img-out").show()
                    }, "image/jpeg");

                    function q(j, m, k) {
                        return {
                            x: j.x + (m.x - j.x) * k,
                            y: j.y + (m.y - j.y) * k
                        }
                    }
                }
            }
        }
    }
});