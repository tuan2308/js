var bg = new Image;
bg.crossOrigin = "Anonymous";
bg.src = bgimg;
var mark = new Image;
mark.crossOrigin = "Anonymous";
mark.src = markimg;
var vt = vitri;

$(document).ready(function() {
if (window.location.hostname == tmbq) {
var e = document.getElementById("Nimg");
var a = document.getElementById("Cimg");


$("#tad-taoanh").click(function() {
    bg.src = bgimg;
    mark.src = markimg;
    vt = vitri;
    $("#img-out").hide();
    $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
    setTimeout(function() {
       bgimg.onload = m()
    }, 200)
});

function m() {
    c = document.querySelector("canvas"), ctx = c.getContext("2d"), corners = vitri, step = 1;
    var f, n, q, g, r, p, k, s, h = a.width - 1,
        i = a.height - 1;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.save();
    for (y = 0; y < i; y += step) {
        for (x = 0; x < h; x += step) {
            r = l(corners[0], corners[3], y / i);
            p = l(corners[1], corners[2], y / i);
            k = l(corners[0], corners[3], (y + step) / i);
            s = l(corners[1], corners[2], (y + step) / i);
            f = l(r, p, x / h);
            n = l(r, p, (x + step) / h);
            q = l(k, s, (x + step) / h);
            g = l(k, s, x / h);
            ctx.drawImage(a, x, y, step, step, f.x, f.y, Math.ceil(Math.max(step, Math.abs(n.x - f.x), Math.abs(g.x - q.x))) + 1, Math.ceil(Math.max(step, Math.abs(f.y - g.y), Math.abs(n.y - q.y))) + 1)
        }
    }
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(mark, 0, 0, c.width, c.height);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.drawImage(bg, 0, 0, c.width, c.height);
    ctx.restore();
    if (e) {
        ctx.save();
        ctx.globalAlpha = 0.5;
        var B = ctx.createPattern(e, "repeat");
        ctx.fillStyle = B;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.restore()
    }
    c.toBlob(function(t) {
        var u = URL.createObjectURL(t);
        $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + u + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + u + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
        $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
        $("#img-out").show()
    });

    function l(v, u, t) {
        return {
            x: v.x + (u.x - v.x) * t,
            y: v.y + (u.y - v.y) * t
        }
    }
}
}
});