$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        $("#tad-taoanh2").hide();
        $("#tad-taianhve").hide();
        $(".tad-ketqua").hide();
        var getimg = "";
        $(".tad-in-text2").on("input", function() {
            var t1count = $(".tad-in-text2").val().length;
            if (t1count == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else {
                $("#tad-taoanh").removeClass("disabled")
            }
        });
        $("#tad-taoanh").click(function() {
            if ($(".tad-in-text2").val() == "") {
                alert("Vui lòng nhập tên để tạo ảnh");
                return false
            }
            t1 = $(".tad-in-text1").val();
            $(".tad-out-text1").html(t1);
            t2 = $(".tad-in-text2").val();
            $(".tad-out-text2").html(t2);
            $(".load-anh").show();
            html2canvas(document.querySelector(".tad-main"), {
                useCORS: !0,
                scrollX: 0,
                scrollY: 0,
                width: 900,
                height: 1950,
                scale: 1,
                x: 0,
                y: 0
            }).then(canvas => {
                var dataurl = canvas.toDataURL("image/jpeg");
                $("#img-out").html("<img src='" + dataurl + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");
                getimg = dataurl;
                $("#tad-taianhve").show();
                $(".tad-ketqua").show();
                $(".load-anh").hide();
            });
            $("#tad-taianhve").click(function() {
                $(this).attr("download", tenanhxuat).attr("href", getimg);
            });
        });
        $("#tad-taoanh2").click(function() {
            if ($(".tad-in-text2").val() == "") {
                alert("Vui lòng nhập tên để tạo ảnh");
                return false
            }
            t1 = $(".tad-in-text1").val();
            $(".tad-out-text1").html(t1);
            t2 = $(".tad-in-text2").val();
            $(".tad-out-text2").html(t2);
            $(".load-anh").show();
            html2canvas(document.querySelector(".tad-main"), {
                useCORS: !0,
                scrollX: 0,
                scrollY: 0,
                width: 900,
                height: 1600,
                scale: 1,
                x: 0,
                y: 0
            }).then(canvas => {
                var dataurl = canvas.toDataURL("image/jpeg");
                $("#img-out").html("<img src='" + dataurl + "' alt='Ảnh instagram' class='img-thumbnail'></img>");
                getimg = dataurl;
                $("#tad-taianhve").show();
                $(".tad-ketqua").show();
                $(".load-anh").hide();
            });
            $("#tad-taianhve").click(function() {
                $(this).attr("download", tenanhxuat).attr("href", getimg);
            });
        });
        $(".chonmau input").click(function() {
            $(".tad-main").attr("class", "tad-main");
            $(".tad-main").addClass($(".chonmau input:checked").val());
            $(".tad-nhapten").attr("class", "tad-nhapten");
            $(".tad-nhapten").addClass($(".chonmau input:checked").val());
        });
        $("#customRadio1").click(function() {
            $(".temp").attr("class", "temp");
            $("#tad-taoanh").show();
            $("#tad-taoanh2").hide();
        });
        $("#customRadio2").click(function() {
            $(".temp").attr("class", "temp");
            $(".temp").addClass("ip8");
            $("#tad-taoanh").hide();
            $("#tad-taoanh2").show();
        });
    }
});