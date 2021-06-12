var tvtad = "";
$(document).ready(function() {
    // if (window.location.hostname == tmbq) {
        $("#tad-taianhve").hide();
        $(".tad-ketqua").hide();
        $("#tad-taoanh").click(function() {
            $(".load-anh").fadeIn(500, function() {
                h()
            })
        });
        var f = document.getElementById("Cimg");
        var bg = document.getElementById("Bimg");
        var i = document.getElementById("Limg");
        var g = document.getElementById("Nimg");

        function h() {
            c = document.querySelector("canvas"), ctx = c.getContext("2d"), corners = [{x: -20, y: 155} , {x: 1160, y: 276}, {x: 1107, y: 865} ,{x: 68, y: 1029}], corners1 = [{x: 1893, y: 326} , {x: 1222, y: 280} , {x: 1173, y: 850} , {x: 1821, y: 694}], step = 1;
            a();

            function a() {
                var d, e, t, v, D, z, A, C, u = f.width - 1,
                    B = f.height - 1;
                ctx.clearRect(0, 0, c.width, c.height);



              ctx.save();
                ctx.drawImage(bg, 0, 0, c.width, c.height);
           



                for (y = 0; y < B; y += step) {
                    for (x = 0; x < u; x += step) {

                        D = b(corners[0], corners[3], y / B);
                        z = b(corners[1], corners[2], y / B);
                        A = b(corners[0], corners[3], (y + step) / B);
                        C = b(corners[1], corners[2], (y + step) / B);
                        d = b(D, z, x / u);
                        e = b(D, z, (x + step) / u);
                        t = b(A, C, (x + step) / u);
                        v = b(A, C, x / u);
                        ctx.drawImage(f, x, y, step, step, d.x, d.y, Math.ceil(Math.max(step, Math.abs(e.x - d.x), Math.abs(v.x - t.x))) + 1, Math.ceil(Math.max(step, Math.abs(d.y - v.y), Math.abs(e.y - t.y))) + 1)
                    }
                }


                for (y = 0; y < B; y += step) {
       
                    for (x = 0; x < u; x += step) {
            
             
                        D = b(corners1[0], corners1[3], y / B);
                        z = b(corners1[1], corners1[2], y / B);
                        A = b(corners1[0], corners1[3], (y + step) / B);
                        C = b(corners1[1], corners1[2], (y + step) / B);
                        d = b(D, z, x / u);
                        e = b(D, z, (x + step) / u);
                        t = b(A, C, (x + step) / u);
                        v = b(A, C, x / u);
                        ctx.drawImage(f, x, y, step, step, d.x, d.y, Math.ceil(Math.max(step, Math.abs(e.x - d.x), Math.abs(v.x - t.x))) + 1, Math.ceil(Math.max(step, Math.abs(d.y - v.y), Math.abs(e.y - t.y))) + 1)
                    }
                }
            
                ctx.save();
                ctx.globalAlpha = .8;
                ctx.drawImage(g, 0, 0, c.width, c.height);
                ctx.restore();


                ctx.save();
                ctx.drawImage(i, 0, 0, c.width, c.height);
                ctx.restore();

              
                c.toBlob(function(k) {
                    var j = URL.createObjectURL(k);
                    $("#img-out").html("<img src='" + j + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");
                    $("#tad-taianhve").attr("download", tenanhxuat).attr("href", j)
                });
                $("#tad-taianhve").show();
                $(".tad-ketqua").show();
                $(".load-anh").fadeOut(500)
            }

            function b(d, e, k) {
                return {
                    x: d.x + (e.x - d.x) * k,
                    y: d.y + (e.y - d.y) * k
                }
            }
        }
    // }
});