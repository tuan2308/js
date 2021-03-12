$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        var a = "";

        function b() {
            const e = document.getElementById("temp");
            const k = e.getContext("2d");
            k.save();
            k.fillStyle = "white";
            k.beginPath();
            k.arc(e.width / 2, e.width / 2, 400, 0, 2 * Math.PI);
            k.fill();
            k.restore();
            var j = t1.length;
            var h = t2.length;
            if (j == 0) {
                alert("Vui lòng nhập chữ");
                $(".tad-in-text1").focus();
                return false
            }
            if (h == 0) {
                alert("Vui lòng nhập chữ");
                $(".tad-in-text2").focus();
                return false
            }
            if (j == 1) {
                k.save();
                e.style.letterSpacing = "0px";
                k.fillStyle = "black";
                k.font = "900 300px Arial-b";
                var d = t1.toUpperCase();
                var i = k.measureText(d).width;
                k.fillText(d, (e.width / 2) - (i / 2) + 6, 600);
                k.restore()
            }
            if (j == 2) {
                k.save();
                e.style.letterSpacing = "0px";
                k.fillStyle = "black";
                k.font = "900 300px Arial-b";
                var d = t1.toUpperCase();
                var i = k.measureText(d).width;
                k.fillText(d, (e.width / 2) - (i / 2) + 4, 600);
                k.restore()
            }
            if (j == 3) {
                k.save();
                e.style.letterSpacing = "0px";
                k.fillStyle = "black";
                k.font = "900 250px Arial-b";
                var d = t1.toUpperCase();
                var i = k.measureText(d).width;
                k.fillText(d, (e.width / 2) - (i / 2) + 5, 570);
                k.restore()
            }
            k.save();
            e.style.letterSpacing = "20px";
            k.fillStyle = "black";
            k.font = "600 40px UTM-Avo";
            var c = t2.toUpperCase();
            var i = k.measureText(c).width;
            k.fillText(c, (e.width / 2) - (i / 2) + 15, 680);
            k.restore();
            k.save();
            k.globalCompositeOperation = "lighten";
            const g = document.getElementById("scream");
            k.drawImage(g, 0, 0, e.width, e.height);
            k.restore();
            k.save();
            k.globalCompositeOperation = "overlay";
            k.globalAlpha = 0.2;
            k.fillStyle = "black";
            k.beginPath();
            k.arc(e.width / 2, e.width / 2, 400, 0, 2 * Math.PI);
            k.lineWidth = 50;
            k.stroke();
            k.restore();
            const f = e.toDataURL("image/jpeg");
            a = f;
            $("#img-out").html("<img src='" + f + "' alt='Tạo ảnh đẹp' class='img-thumbnail'/>")
        }
        $(".tad-in-text2,.tad-in-text1,.tad-in-text0").click(function() {
            $("#tad-taoanh").removeClass("disabled")
        });
        $("#tad-taoanh").click(function() {
            t1 = $(".tad-in-text1").val();
            $(".tad-out-text1").html(t1);
            t2 = $(".tad-in-text2").val();
            $(".tad-out-text2").html(t2);
            $(".load-anh").show(0).delay(2000).hide(0);
            $("#img-out,.tad-ketqua,#tad-taianhve").hide(0).delay(2000).show(0);
            document.fonts.load('10pt "Arial-b"', '10pt "UTM-Avo"').then(b)
        });
        $("#tad-taianhve").click(function() {
            $(this).attr("download", "taoanhdep--logo-polygon").attr("href", a)
        })
    }
});