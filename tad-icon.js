$(document).ready(function () {
    if (window.location.hostname == tmbq) {
        $("#tad-taiiconve").hide();
        $(".tad-ketqua").hide();
        $("#tad-taoanh").addClass("disabled");
        var teniconxuat = "";
        $(".chonicon li").click(function () {
            $("#tad-taoanh").removeClass("disabled");
            $(".chonicon li").attr("class", "");
            $(this).addClass("active");
            iconchon = $(this).html();
            $(".tad-out-icon").html(iconchon);
            tenicon = $(this).find("span").html();
            teniconxuat = tenicon;
        });
        $("#cropanh").click(function () {
            $("#tad-taoanh").removeClass("disabled");
        });
        $(".tad-in-text2,.tad-in-text1").click(function () {
            $("#tad-taoanh").removeClass("disabled");
        });
        var getimg = "";
        $("#tad-taoanh").click(function () {
            t1 = $(".tad-in-text1").val();
            $(".tad-out-text1").html(t1);
            t2 = $(".tad-in-text2").val();
            $(".tad-out-text2").html(t2);
            $(".load-anh").show();
            html2canvas(document.querySelector(".tad-main"), {
                useCORS: !0,
                scrollX: 0,
                scrollY: 0,
                width: 1500,
                height: 1500,
                scale: 1,
                x: 0,
                y: 0
            }).then(canvas => {
                var dataurl = canvas.toDataURL("image/jpeg");
                $("#img-out").html("<img src='" + dataurl + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");
                getimg = dataurl;
                $("#tad-taiiconve").show();
                $(".tad-ketqua").show();
                $(".load-anh").hide();
            });
            $("#tad-taiiconve").click(function () {
                $(this).attr("download", "taoanhdep-icon-" + teniconxuat).attr("href", getimg);
            });
        });
    }
});