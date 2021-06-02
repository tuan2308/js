$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        $("head").append("<script src='" + tm + "tv/h2.js'>");
        if ($(".btn-chonanh").length !== 0) {
            $("head").append("<link href='" + tm + "css/cr.css' rel='stylesheet'/>");
            $("head").append("<script src='" + tm + "cr.js'>");
            $("head").append("<script src='" + tm + "tv/cr.js'>");
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

    }
});