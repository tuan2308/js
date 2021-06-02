$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        $("#tad-taianhve").hide();
        $(".tad-ketqua").hide();
        $("#tad-taoanh").addClass("disabled");
        $("head").append("<script src='" + tm + "tv/h2.js'>");
        if ($(".btn-chonanh").length !== 0) {
            $("head").append("<link href='" + tm + "css/cr.css' rel='stylesheet'/>");
            $("head").append("<script src='" + tm + "cr.js'>");
            $("head").append("<script src='" + tm + "tv/cr.js'>");
            $("body").append("<input class='cropanh d-none' value=''>")
        }
        var cra = $(".cropanh");
        var ti0 = $(".tad-in-text0");
        var ti1 = $(".tad-in-text1");
        var ti2 = $(".tad-in-text2");
        var ti3 = $(".tad-in-text3");
        var tia = $(".tad-in-texta");
        $("#cropanh").click(function() {
            $(".cropanh").val(1);
            ktform();
        });
        ti0.on("input", function() {
            ktform();
        });
        ti1.on("input", function() {
            ktform();
        });
        ti2.on("input", function() {
            ktform();
        });
        ti3.on("input", function() {
            ktform();
        });
        tia.on("input", function() {
            ktform();
        });

        function ktform() {
            if (undefined !== cra.val() && cra.val().length == "") {
                $("#tad-taoanh").addClass("disabled")
            } else if (undefined !== ti0.val() && ti0.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else if (undefined !== ti1.val() && ti1.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else if (undefined !== ti2.val() && ti2.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else if (undefined !== ti3.val() && ti3.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else if (undefined !== tia.val() && tia.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else {
                $("#tad-taoanh").removeClass("disabled")
            }
        }
        $("#tad-taoanh").click(function() {
            t0 = $(".tad-in-text0").val();
            $(".tad-out-text0").html(ti0.val());
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
                alert("Bạn chưa chọn ảnh");
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
    }
});