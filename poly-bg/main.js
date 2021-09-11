$(document).ready(function() {
	if (window.location.hostname == tmbq) {
		var b = $(".dk1").val();

		function a() {
			$(".chonnen").html("");
			for (let i = 1; i < hinhnen + 1; i++) {
				$(".chonnen").append("<div class='col mb-3 text-center'><img alt='Hình nền' class='img-thumbnail' src='https://cdn.taoanhdep.com/poly-bg/" + i + ".jpg'></div>")
			}
			$(".chonnen div").click(function() {
				$(".btn-chonnen").html("<i class='fas fa-image'></i> Chọn nền khác");
				$(".dk1").val(1);
				$(".chonnen div").removeClass("active");
				$(this).addClass("active");
				var c = $(this).children().attr("src");
				$(".img-preview").css("background-image", "url(" + c + ")").css("background-size", "cover");
				$("#bg").attr("src", c);
				$("#chonanhModal").modal("hide")
			})
		}
		$(".btn-chonnen").one("click", function() {
			a()
		});

		function e(c) {
			c = c.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
			c = c.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
			c = c.replace(/ì|í|ị|ỉ|ĩ/g, "i");
			c = c.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
			c = c.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
			c = c.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
			c = c.replace(/đ/g, "d");
			c = c.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
			c = c.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
			c = c.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
			c = c.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
			c = c.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
			c = c.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
			c = c.replace(/Đ/g, "D");
			c = c.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
			c = c.replace(/\u02C6|\u0306|\u031B/g, "");
			c = c.replace(/ + /g, " ");
			c = c.trim();
			c = c.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
			return c
		}


		$(".tad-in-text2,.tad-in-text1,.tad-in-text0").click(function() {
			$("#tad-taoanh").removeClass("disabled")
		});
		$("#tad-taoanh").click(function() {
			document.fonts.load('10pt "UTM Avo Bold"').then(function(){

                document.fonts.load('10pt "Arial-b"').then(function(){


                
                    if ($(".dk1").val() == "") {
                        alert("Vui lòng chọn nền");
                        a();
                        $("#chonanhModal").modal("show");
                        return false
                    }
                    t1 = $(".tad-in-text1").val();
                    $(".tad-out-text1").html(t1);
                    t2 = $(".tad-in-text2").val();
                    $(".tad-out-text2").html(t2);
                    const j = document.getElementById("temp");
                    const u = j.getContext("2d");
                    u.clearRect(0, 0, j.width, j.height);
                    u.save();
                    u.fillStyle = "white";
                    u.beginPath();
                    u.arc(j.width / 2, j.width / 2, 800, 0, 2 * Math.PI);
                    u.fill();
                    u.restore();
                    var t = t1.length;
                    var o = t2.length;
                    if (t == 0) {
                        alert("Vui lòng nhập chữ");
                        $(".tad-in-text1").focus();
                        return false
                    }
                    if (o == 0) {
                        alert("Vui lòng nhập chữ");
                        $(".tad-in-text2").focus();
                        return false
                    }
                    $("#img-out").hide();
                    $("#tad-taoanh").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Đang tạo ảnh");
                    u.save();
                    u.textAlign = "center";
                    j.style.letterSpacing = "0px";
                    u.fillStyle = "black";
                    var h = e(t1.toUpperCase());
                    var g = "";
                    if (h.length == 1) {
                        g = 250;
                        u.font = "900 750px Arial-b";
                        u.fillText(h, j.width / 2, j.height / 2 + g)
                    }
                    if (h.length == 2) {
                        g = 200;
                        u.font = "900 650px Arial-b";
                        u.fillText(h, j.width / 2, j.height / 2 + g)
                    }
                    if (h.length == 3) {
                        g = 150;
                        u.font = "900 550px Arial-b";
                        u.fillText(h, j.width / 2, j.height / 2 + g)
                    }
                    if (h.length == 4) {
                        u.font = "900 450px Arial-b";
                        g = 130;
                        u.fillText(h, j.width / 2, j.height / 2 + g)
                    }
                    if (h.length == 5) {
                        u.font = "900 350px Arial-b";
                        g = 100;
                        u.fillText(h, j.width / 2, j.height / 2 + g)
                    }
                    u.restore();
                    u.save();
                    j.style.letterSpacing = "10px";
                    u.fillStyle = "black";
                    u.font = "80px UTM Avo Bold";
                    u.textAlign = "center";
                    var c = t2.toUpperCase();
                    var s = u.measureText(c).width;
                    u.fillText(c, j.width / 2, 1150 + g);
                    u.restore();
                    u.save();
                    u.globalCompositeOperation = "lighten";
                    var k = document.getElementById("bg");
                    u.drawImage(k, 0, 0, j.width, j.height);
                    u.restore();
                    u.save();
                    u.globalCompositeOperation = "overlay";
                    u.globalAlpha = 0.2;
                    u.fillStyle = "black";
                    u.beginPath();
                    u.arc(j.width / 2, j.width / 2, 800, 0, 2 * Math.PI);
                    u.lineWidth = 100;
                    u.stroke();
                    u.restore();
                    j.toBlob(function(m) {
                        var l = URL.createObjectURL(m);
                        setTimeout(function() {
                            $("#img-out").html("<label class='mt-2'> Kết quả: </label><img src='" + l + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img><a href='" + l + "' class='btn btn-block btn-primary mt-2'  download='taoanhdep_logo-poly.png'><i class='fas fa-cloud-download-alt'></i> Tải ảnh về</a>");
                            $("#tad-taoanh").removeClass("disabled").html("<i class='fas fa-cut'></i> Tạo ảnh");
                            $("#img-out").show()
                        }, 1000)
                    })
                
            })

            });

		});
	
	}
});