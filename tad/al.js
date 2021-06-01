$(document).ready(function() {

var tm = "https://cdn." + document.location.hostname.slice(4, 17) + "/tad/"

    $("head").append("<script src='" + tm + "html2can.js'>");
    if ($(".btn-chonanh").length !== 0) {
        $("head").append("<link href='" + tm + "tad-crop.css' rel='stylesheet'/>");
        $("head").append("<script src='" + tm + "cr.js'>");
        $("head").append("<script src='" + tm + "cropper.js'>");
        $("body").append("<input class='cropanh d-none' value=''>")
        $("#cropanh").click(function() {
            $("#tad-taoanh").removeClass("disabled");
            $(".cropanh").val(1);
        });
    }
    $("#tad-taianhve").hide();
    $(".tad-ketqua").hide();
    $("#tad-taoanh").addClass("disabled");
    $(".tad-in-text0").on("input", function() {
        var tcount = $(".tad-in-text0").val().length;
        if (tcount == 0) {
            $("#tad-taoanh").addClass("disabled")
        } else {
            $("#tad-taoanh").removeClass("disabled")
        }
    });
    $(".tad-in-text1").on("input", function() {
        var tcount = $(".tad-in-text1").val().length;
        if (tcount == 0) {
            $("#tad-taoanh").addClass("disabled")
        } else {
            $("#tad-taoanh").removeClass("disabled")
        }
    });
    $(".tad-in-text2").on("input", function() {
        var tcount = $(".tad-in-text2").val().length;
        if (tcount == 0) {
            $("#tad-taoanh").addClass("disabled")
        } else {
            $("#tad-taoanh").removeClass("disabled")
        }
    });
    $(".tad-in-text3").on("input", function() {
        var tcount = $(".tad-in-text3").val().length;
        if (tcount == 0) {
            $("#tad-taoanh").addClass("disabled")
        } else {
            $("#tad-taoanh").removeClass("disabled")
        }
    });
    $(".tad-in-texta").on("input", function() {
        var tcount = $(".tad-in-texta").val().length;
        if (tcount == 0) {
            $("#tad-taoanh").addClass("disabled")
        } else {
            $("#tad-taoanh").removeClass("disabled")
        }
    });
    $("#tad-taoanh").click(function() {
        t0 = $(".tad-in-text0").val();
        $(".tad-out-text0").html(t0);
        t1 = $(".tad-in-text1").val();
        $(".tad-out-text1").html(t1);
        t2 = $(".tad-in-text2").val();
        $(".tad-out-text2").html(t2);
        t3 = $(".tad-in-text3").val();
        $(".tad-out-text3").html(t3);
        ta = $(".tad-in-texta").val();
        if (ta) {
            $(".tad-out-texta").html(ta.replace(/\r?\n/g, '</div><div>'));
        }
        if ($(".cropanh").val() == "") {
            alert("Vui lòng chọn ảnh");
            $('#chonanhModal').modal('show');
            return false;
        }
        $(".load-anh").show();
        html2canvas(document.querySelector(".tad-main"), {
            useCORS: !0,
            scrollX: 0,
            scrollY: 0,
            width: rongh2,
            height: daih2,
            scale: 1,
            x: 0,
            y: 0
        }).then(canvas => {
            canvas.toBlob(function(blob) {
                var bloburl = URL.createObjectURL(blob);
                $("#img-out").html("<img src='" + bloburl + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");
                $("#tad-taianhve").attr("download", tenanhxuat).attr("href", bloburl);
            });
            $("#tad-taianhve").show();
            $(".tad-ketqua").show();
            $(".load-anh").hide();
        }, 'image/jpeg');
    });
});