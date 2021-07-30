$(document).ready(function() {

        // $("head").append(cssCrop);
        // $("head").append(jsCrop);
        // $("head").append(jqueryCrop);
        $("body").append("<img src='https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png' crossorigin='anonymous' id='Cimg' class='d-none'/>");
        $("body").append("<img src='https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png' crossorigin='anonymous' id='Mimg' class='d-none'/>");
        $("body").append("<img src='https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png' crossorigin='anonymous' id='Bimg' class='d-none'/>");
        $("body").append("<img src='https://1.bp.blogspot.com/-z3RZ2G93tVo/YHES6yUdnzI/AAAAAAAArsw/Jq_pD24Pn-sEW-XwzGl18qlgIYQZZOeqgCNcBGAsYHQ/s0/blank.png' crossorigin='anonymous' id='Muimg' class='d-none'/>");
        var e = document.getElementById("Cimg");
        var k = document.getElementById("Bimg");
        var a = document.getElementById("Mimg");
        var cb = document.getElementById("Muimg");

        window.onscroll = function() {
            var f = $(".xulyhinhanh").get(0).getBoundingClientRect();
            if (f.top < window.innerHeight) {
                $("#Bimg").attr("src", bgimg);
                $("#Mimg").attr("src", markimg);
                $("#Muimg").attr("src", multiply);
                window.onscroll = null
            }
        };
        $("#tad-taoanh").click(function() {
            $("#Bimg").attr("src", bgimg);
            $("#Mimg").attr("src", markimg);

            $("#img-out").hide();
            $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
            setTimeout(function() {
                document.fonts.load('10pt "UTM Avo Bold"').then(j)
            }, 200)
        });

        function j() {


           t0 = $(".tad-in-text0").val().toUpperCase();
           t1 = $(".tad-in-text1").val().toUpperCase();
           t2 = $(".tad-in-text2").val().toUpperCase();
           t3 = $(".tad-in-text3").val().toUpperCase();

            c = document.querySelector("canvas")
            ctx = c.getContext("2d");
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.save();
            ctx.drawImage(e,  390,330,440, 440);
     
            ctx.globalCompositeOperation = "destination-in";
            ctx.drawImage(a, 0, 0, c.width, c.height);
            ctx.restore();
            
            ctx.save();
            ctx.globalCompositeOperation = "destination-over";
            ctx.drawImage(k, 0, 0, c.width, c.height);
            ctx.restore();
         

            ctx.save();
            ctx.fillStyle = "#222222";
            ctx.font = "15px UTM Avo Bold";
            ctx.fillText(t1, 440, 200);
            ctx.restore();

            ctx.save();
            ctx.fillStyle = "#222222";
            ctx.font = "45px UTM Avo Bold";
            ctx.fillText(t2, 440, 260);
            ctx.restore();

            ctx.save();
            ctx.fillStyle = "#222222";
            ctx.font = "20px UTM Avo Bold";
            ctx.fillText(t3, 440, 300);
            ctx.restore();


            ctx.save();
            ctx.textAlign = "right";
            ctx.fillStyle = "#222222";
            ctx.font = "10px Arial";
            ctx.fillText(t0, 660, 123);
            ctx.restore();


            ctx.save();
            ctx.globalCompositeOperation = "multiply";
            ctx.drawImage(cb, 0, 0, c.width, c.height);
            ctx.restore();
         



            c.toBlob(function(m) {
                var o = URL.createObjectURL(m);
                $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + o + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + o + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_" + tenanhxuat + "'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                $("#img-out").show()
            }, "image/jpeg");

            
        }
    
});