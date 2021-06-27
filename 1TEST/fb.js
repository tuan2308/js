$(document).ready(function() {

        function f() {
            t1 = $(".tad-in-text1").val();
            t2 = $(".tad-in-text2").val();
            cochu = $(".tad-cochu").val();
            const m = document.getElementById("temp");
            const n = m.getContext("2d");
            n.clearRect(0, 0, m.width, m.height);
            n.save();


            var e = document.getElementById("Bimg")
            n.drawImage(e, 0, 0, m.width, m.height);
            n.restore();

            n.save();
            n.globalCompositeOperation = "lighten";
            n.fillStyle = "red";
            n.font = cochu + "px Edo SZ";
            var l = t1.toUpperCase();
            var c = n.measureText(l).width;
            n.fillText(l, (m.width / 2) - (c / 2) + 7, 320);
            n.restore();
            n.save();
            n.globalCompositeOperation = "lighten";
            n.fillStyle = "cyan";
            n.font = cochu + "px Edo SZ";
            var l = t1.toUpperCase();
            var c = n.measureText(l).width;
            n.fillText(l, (m.width / 2) - (c / 2) - 7, 320);
            n.restore();

            n.save();
            n.fillStyle = "white";
            n.font = cochu + "px Edo SZ";
            var l = t1.toUpperCase();
            var c = n.measureText(l).width;
            n.fillText(l, (m.width / 2) - (c / 2), 320);
            n.restore();

            n.save();
            n.fillStyle = "#fca0a0";
            n.font = "22px Arial";
            var c = n.measureText(t2).width;
            n.fillText(t2, (m.width / 2) - (c / 2) - 2, 330 - cochu);
            n.restore();

            n.save();
            n.fillStyle = "white";
            n.font = "22px Arial";
            var c = n.measureText(t2).width;
            n.fillText(t2, (m.width / 2) - (c / 2), 330 - cochu);
            n.restore();

            n.save();
            n.drawImage(e, 0, 0, m.width, m.height);
            n.restore();

            m.toBlob(function(i) {
                var j = URL.createObjectURL(i);
                $("#img-out").html("<img src='" + j + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");
                $("#tad-taianhve").attr("download", "taoanhdep--bia-glitch.jpg").attr("href", j)
            });
            $(".load-anh").show(0).delay(2000).hide(0);
            $("#img-out,.tad-ketqua,#tad-taianhve").hide(0).delay(2000).show(0)
        }
        var h = $(".tad-in-text1");
        h.on("input", function() {
            d()
        });

        function d() {
            if (undefined !== h.val() && h.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else {
                $("#tad-taoanh").removeClass("disabled")
            }
        }
        $("#tad-taoanh").click(function() {
            document.fonts.load('10pt "Edo SZ"').then(f)
        })
    
});