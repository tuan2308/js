$(document).ready(function() {
    if (window.location.hostname == tmbq) {
        var d = document.getElementById("tad-chonkieu");
        dsAnime.forEach(function(e) {
            var f = document.createElement("div");
            f.style.backgroundImage = "url(" + e.imgAnime + ")";
            f.setAttribute("dataImg", e.imgAnime);
            f.setAttribute("dataColor", e.colorBg);
            d.appendChild(f)
        });
        $("#doimaunen").colorpicker().change(function() {
            var e = $("#doimaunen").val();
            $(".demomau").css("background-color", e);
            colorBg = e
        });
        $("#tad-chonkieu>div").click(function() {
            $("#tad-chonkieu>div").removeClass("active");
            $(this).addClass("active");
            var f = $(this).attr("dataImg").replace(/s120/g, "s0");
            var e = $(this).attr("dataColor");
            imgAnime = f;
            colorBg = e;
            $("#doimaunen").val(e).trigger("change");
            $("#doimaunen").colorpicker("setValue", e)
        });
        $("#tad-chonkieu").children("div:first-child").click();
        var c = $(".tad-in-text1");
        var b = $(".tad-in-text2");
        c.on("input", function() {
            a()
        });
        b.on("input", function() {
            a()
        });

        function a() {
            if (undefined !== c.val() && c.val().length == 0) {
                $("#tad-taoanh").addClass("disabled")
            } else {
                if (undefined !== b.val() && b.val().length == 0) {
                    $("#tad-taoanh").addClass("disabled")
                } else {
                    $("#tad-taoanh").removeClass("disabled")
                }
            }
        }
        $("#tad-taoanh").click(function() {
            $("#img-out").hide();
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            setTimeout(function() {
                document.fonts.load('10pt "MTD William Letter"').then(function() {
                    document.fonts.load('10pt "Steelfish"').then(function() {
                        var e = new Image;
                        e.crossOrigin = "Anonymous";
                        e.src = "https://1.bp.blogspot.com/-5SECGn_32Co/YQkQ-ZyDSPI/AAAAAAAAv1o/nZYKV0s_UPY41XlfWfNIX0HbVoRLhnlogCNcBGAsYHQ/s0/line.png";
                        e.onload = function() {
                            var f = new Image;
                            f.crossOrigin = "Anonymous";
                            f.src = imgAnime;
                            f.onload = function() {
                                t1 = $(".tad-in-text1").val();
                                t2 = $(".tad-in-text2").val().toUpperCase();
                                var h = document.getElementById("temp");
                                var g = h.getContext("2d");
                                g.clearRect(0, 0, h.width, h.height);
                                g.save();
                                g.fillStyle = "#fff";
                                g.fillRect(0, 0, h.width, h.height);
                                g.restore();
                                g.save();
                                g.fillStyle = colorBg;
                                g.fillRect(0, 0, h.width, h.height);
                                g.restore();
                                g.save();
                                g.fillStyle = "#fff";
                                g.font = "300px MTD William Letter";
                                g.textAlign = "center";
                                g.fillText(t1, h.width / 2, 350);
                                g.restore();
                                g.save();
                                g.strokeStyle = "white";
                                g.lineWidth = 7;
                                g.font = "450px Steelfish";
                                g.textAlign = "center";
                                g.strokeText(t2, h.width / 2, 900);
                                g.restore();
                                g.save();
                                g.fillStyle = "rgb(255 255 255 / 70%)";
                                g.font = "450px Steelfish";
                                g.textAlign = "center";
                                g.fillText(t2, h.width / 2, 1350);
                                g.restore();
                                g.save();
                                g.strokeStyle = "white";
                                g.lineWidth = 7;
                                g.font = "450px Steelfish";
                                g.textAlign = "center";
                                g.strokeText(t2, h.width / 2, 1800);
                                g.restore();
                                g.save();
                                g.drawImage(e, 0, 0, h.width, h.height);
                                g.restore();
                                g.save();
                                gradient2 = g.createLinearGradient(0, 0, 0, 2000);
                                gradient2.addColorStop(0, "rgba(0,0,0,0.05)");
                                gradient2.addColorStop(0.5, "rgba(0,0,0,0)");
                                gradient2.addColorStop(1, "rgba(0,0,0,0.1)");
                                g.fillStyle = gradient2;
                                g.fillRect(0, 0, 2000, 2000);
                                g.restore();
                                g.save();
                                g.drawImage(f, 0, 0, h.width, h.height);
                                g.restore();
                                h.toBlob(function(i) {
                                    var j = URL.createObjectURL(i);
                                    $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + j + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + j + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                                    $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                                    $("#img-out").show()
                                }, "image/jpeg")
                            }
                        }
                    })
                })
            }, 1000)
        })
    }
});