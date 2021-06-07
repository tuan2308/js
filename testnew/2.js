$(document).ready(function() {

    $("body").append("<input class='cropanh1 d-none' value=''>");
    $("body").append("<input class='cropanh2 d-none' value=''>");

    var cra1 = $(".cropanh1");
    var cra2 = $(".cropanh2");
    var ti1 = $(".tad-in-text1");
    var ti2 = $(".tad-in-text2");
    var ti3 = $(".tad-in-text3");
    var tia = $(".tad-in-texta");


    $("#cropanh1").click(function() {
        $(".cropanh1").val(1);
        ktform();
    });
    $("#cropanh2").click(function() {
        $(".cropanh2").val(1);
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
        if (undefined !== cra1.val() && cra1.val().length == "") {
            $("#tad-taoanh").addClass("disabled")
        } else if (undefined !== cra2.val() && cra2.val().length == "") {
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




    function pt() {

        var c = document.createElement("canvas");
        c.width = 200;
        c.height = 200;
        var ctx = c.getContext("2d");
        x = c.width / 2;
        y = c.height / 2;
        lineHeight = 15;
        ctx.fillStyle = 'white';
        x = c.width / 2;
        y = c.height / 2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-Math.PI / 4);

        ctx.textAlign = 'center';
        var txt = $(".tad-in-text1").val()
        cr = ctx.measureText(txt).width;
        font = c.width * 13 / cr;
        ctx.font = font + 'px UTM Gloria';
        ctx.fillText(txt, 0, lineHeight / 2);


        c.toBlob(function(blob) {
            var bloburl = URL.createObjectURL(blob);

            var img = new Image();
            img.src = bloburl;
            img.onload = function() {
                draw(img);
            }


        });



    }




    function draw(img) {



        var c = document.getElementById("temp");
        var ctx = c.getContext("2d");

        ctx.clearRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#1a1b20";
        ctx.fillRect(0, 0, c.width, c.height);

        var img = img;
        var pat = ctx.createPattern(img, 'repeat');
        ctx.rect(0, 0, c.width, c.height);
        ctx.fillStyle = pat;
        ctx.fill();


        ctx.save();
        var Limg = document.getElementById("Limg");
        ctx.drawImage(Limg, 0, 0, c.width, c.height)
        ctx.restore();


        ctx.save();

        var Cimg = document.getElementById("Cimg");
        cdcover = 350;

        ctx.rotate(7 * Math.PI / 180);
        ctx.translate(415, 170);
        ctx.drawImage(Cimg, 0, 0, cdcover, cdcover * 6 / 9)
        ctx.restore();

        ctx.save();
        var Aimg = document.getElementById("Aimg");
        var sizeA = 180;

        ctx.rotate(7 * Math.PI / 180);
        ctx.translate(500, 300);
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 5;
        ctx.arc(sizeA / 2, sizeA / 2, sizeA / 2, 0, Math.PI * 2, true);
        ctx.stroke();

        ctx.closePath();
        ctx.clip();

        ctx.drawImage(Aimg, 0, 0, sizeA, sizeA);

        ctx.beginPath();
        ctx.arc(0, 0, sizeA / 2, 0, Math.PI * 2, true);
        ctx.clip();
        ctx.closePath();
        ctx.restore();




        ctx.save();
        lineHeight = 15;
        ctx.font = '700 30px Arial';
        ctx.translate(520, 580);
        ctx.rotate(7 * Math.PI / 180);

        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        txt1 = $(".tad-in-text1").val();
        ctx.fillText(txt1, 0, lineHeight / 2);

        ctx.restore();


        ctx.save();
        lineHeight = 15;
        ctx.font = '15px Arial';
        ctx.translate(515, 610);
        ctx.rotate(7 * Math.PI / 180);

        ctx.textAlign = 'center';
        ctx.fillStyle = '#555';
        txta = $(".tad-in-text2").val();
        ctx.fillText(txta, 0, lineHeight / 2);

        ctx.restore();


        ctx.save();
        ctx.globalCompositeOperation = "darken"
        var Limg = document.getElementById("Limg");
        ctx.drawImage(Limg, 0, 0, c.width, c.height)
        ctx.restore();

        //

        c.toBlob(function(blob) {
            var bloburl = URL.createObjectURL(blob);
            $("#img-out").html("<img src='" + bloburl + "' alt='Tạo ảnh đẹp' class='img-thumbnail'></img>");
            $("#tad-taianhve").attr("download", "taoanhdep-aowall.jpg").attr("href", bloburl);
        });

        $("#img-out").delay(2000).show(0);
        $("#tad-taianhve").delay(2000).show(0);
        $(".tad-ketqua").delay(2000).show(0);
        $(".load-anh").delay(2000).hide(0);


    }




    var dk1 = $("#dk1").val();
    var dk2 = $("#dk2").val();
    $("#img-out").hide();
    $("#tad-taianhve").hide();
    $(".tad-ketqua").hide();
    $("#tad-taoanh").addClass("disabled");

    $("#tad-taoanh").click(function() {
        $(".load-anh").show();
        document.fonts.load('10pt "UTM Gloria"').then(pt);

    });
    $(".btn-upanh1").click(function() {
        $(".cropanh-container1 .cropper-container").remove();
        'use strict';
        var Cropper = window.Cropper;
        var URL = window.URL || window.webkitURL;
        var container = document.querySelector('.img-container1');
        var image = container.getElementsByTagName('img').item(0);

        var actions = document.getElementById('actions1');
        var options = {
            aspectRatio: 1 / 1,
            viewMode: 1,
            preview: '.img-preview1',
            autoCrop: true,
            strict: true,
            background: true,
            autoCropArea: 1
        };
        var cropper = new Cropper(image, options);
        var originalImageURL = image.src;
        var uploadedImageType = 'image/jpeg';
        var uploadedImageURL;
        if (!document.createElement('canvas').getContext) {
            $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
        }
        if (typeof document.createElement('cropper').style.transition === 'undefined') {
            $('button[data-method="rotate"]').prop('disabled', true);
            $('button[data-method="scale"]').prop('disabled', true);
        }
        actions.querySelector('.docs-buttons1').onclick = function(event) {
            var e = event || window.event;
            var target = e.target || e.srcElement;
            var cropped;
            var result;
            var input;
            var data;
            if (!cropper) {
                return;
            }
            while (target !== this) {
                if (target.getAttribute('data-method')) {
                    break;
                }
                target = target.parentNode;
            }
            if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
                return;
            }
            data = {
                method: target.getAttribute('data-method'),
                target: target.getAttribute('data-target'),
                option: target.getAttribute('data-option') || undefined,
                secondOption: target.getAttribute('data-second-option') || undefined
            };
            cropped = cropper.cropped;
            if (data.method) {
                if (typeof data.target !== 'undefined') {
                    input = document.querySelector(data.target);
                    if (!target.hasAttribute('data-option') && data.target && input) {
                        try {
                            data.option = JSON.parse(input.value);
                        } catch (e) {
                            console.log(e.message);
                        }
                    }
                }
                switch (data.method) {
                    case 'rotate':
                        if (cropped) {
                            cropper.clear();
                        }
                        break;
                    case 'getCroppedCanvas':
                        try {
                            data.option = JSON.parse(data.option);
                        } catch (e) {
                            console.log(e.message);
                        }
                        if (uploadedImageType === 'image/jpeg') {
                            if (!data.option) {
                                data.option = {};
                            }
                            data.option.fillColor = '#fff';
                        }
                        break;
                }
                result = cropper[data.method](data.option, data.secondOption);
                switch (data.method) {
                    case 'rotate':
                        if (cropped) {
                            cropper.crop();
                        }
                        break;
                    case 'scaleX':
                    case 'scaleY':
                        target.setAttribute('data-option', -data.option);
                        break;
                    case 'getCroppedCanvas':
                        if (result) {
                            result.toBlob(function(blob) {
                                var bloburl = URL.createObjectURL(blob);
                                $("#Aimg").attr("src", bloburl);
                                $("#dk1").val(1);

                            });



                        }
                        break;
                    case 'destroy':
                        cropper = null;
                        if (uploadedImageURL) {
                            URL.revokeObjectURL(uploadedImageURL);
                            uploadedImageURL = '';
                            image.src = originalImageURL;
                        }
                        break;
                }
                if (typeof result === 'object' && result !== cropper && input) {
                    try {
                        input.value = JSON.stringify(result);
                    } catch (e) {
                        console.log(e.message);
                    }
                }
            }
        };
        document.body.onkeydown = function(event) {
            var e = event || window.event;
            if (!cropper || this.scrollTop > 300) {
                return;
            }
            switch (e.keyCode) {
                case 37:
                    e.preventDefault();
                    cropper.move(-1, 0);
                    break;
                case 38:
                    e.preventDefault();
                    cropper.move(0, -1);
                    break;
                case 39:
                    e.preventDefault();
                    cropper.move(1, 0);
                    break;
                case 40:
                    e.preventDefault();
                    cropper.move(0, 1);
                    break;
            }
        };
        $(".cropanh-container1").hide();
        var inputImage = document.getElementById('inputImage1');
        if (URL) {
            inputImage.onchange = function() {
                var files = this.files;
                var file;
                if (cropper && files && files.length) {
                    file = files[0];
                    if (/^image\/\w+/.test(file.type)) {
                        uploadedImageType = file.type;
                        if (uploadedImageURL) {
                            URL.revokeObjectURL(uploadedImageURL);
                        }
                        image.src = uploadedImageURL = URL.createObjectURL(file);
                        cropper.destroy();
                        cropper = new Cropper(image, options);
                        inputImage.value = null;
                        $(".cropanh-container1").show();
                        $(".btn-upanh1 span,.btn-chonanh1").html("<i class='fas fa-upload'></i> Chọn ảnh khác");
                    } else {
                        window.alert('Please choose an image file.');
                    }
                }
            };
        } else {
            inputImage.disabled = true;
            inputImage.parentNode.className += ' disabled';
        }
    });
    $(".btn-upanh2").click(function() {
        $(".cropanh-container2 .cropper-container").remove();
        'use strict';
        var Cropper = window.Cropper;
        var URL = window.URL || window.webkitURL;
        var container = document.querySelector('.img-container2');
        var image = container.getElementsByTagName('img').item(0);

        var actions = document.getElementById('actions2');
        var options = {
            aspectRatio: 9 / 6,
            viewMode: 1,
            preview: '.img-preview2',
            autoCrop: true,
            strict: true,
            background: true,
            autoCropArea: 1
        };
        var cropper = new Cropper(image, options);
        var originalImageURL = image.src;
        var uploadedImageType = 'image/jpeg';
        var uploadedImageURL;
        if (!document.createElement('canvas').getContext) {
            $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
        }
        if (typeof document.createElement('cropper').style.transition === 'undefined') {
            $('button[data-method="rotate"]').prop('disabled', true);
            $('button[data-method="scale"]').prop('disabled', true);
        }
        actions.querySelector('.docs-buttons2').onclick = function(event) {
            var e = event || window.event;
            var target = e.target || e.srcElement;
            var cropped;
            var result;
            var input;
            var data;
            if (!cropper) {
                return;
            }
            while (target !== this) {
                if (target.getAttribute('data-method')) {
                    break;
                }
                target = target.parentNode;
            }
            if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
                return;
            }
            data = {
                method: target.getAttribute('data-method'),
                target: target.getAttribute('data-target'),
                option: target.getAttribute('data-option') || undefined,
                secondOption: target.getAttribute('data-second-option') || undefined
            };
            cropped = cropper.cropped;
            if (data.method) {
                if (typeof data.target !== 'undefined') {
                    input = document.querySelector(data.target);
                    if (!target.hasAttribute('data-option') && data.target && input) {
                        try {
                            data.option = JSON.parse(input.value);
                        } catch (e) {
                            console.log(e.message);
                        }
                    }
                }
                switch (data.method) {
                    case 'rotate':
                        if (cropped) {
                            cropper.clear();
                        }
                        break;
                    case 'getCroppedCanvas':
                        try {
                            data.option = JSON.parse(data.option);
                        } catch (e) {
                            console.log(e.message);
                        }
                        if (uploadedImageType === 'image/jpeg') {
                            if (!data.option) {
                                data.option = {};
                            }
                            data.option.fillColor = '#fff';
                        }
                        break;
                }
                result = cropper[data.method](data.option, data.secondOption);
                switch (data.method) {
                    case 'rotate':
                        if (cropped) {
                            cropper.crop();
                        }
                        break;
                    case 'scaleX':
                    case 'scaleY':
                        target.setAttribute('data-option', -data.option);
                        break;
                    case 'getCroppedCanvas':
                        if (result) {
                            result.toBlob(function(blob) {
                                var bloburl = URL.createObjectURL(blob);
                                $("#Cimg").attr("src", bloburl);
                                $("#dk2").val(1);

                            });
                        }
                        break;
                    case 'destroy':
                        cropper = null;
                        if (uploadedImageURL) {
                            URL.revokeObjectURL(uploadedImageURL);
                            uploadedImageURL = '';
                            image.src = originalImageURL;
                        }
                        break;
                }
                if (typeof result === 'object' && result !== cropper && input) {
                    try {
                        input.value = JSON.stringify(result);
                    } catch (e) {
                        console.log(e.message);
                    }
                }
            }
        };
        document.body.onkeydown = function(event) {
            var e = event || window.event;
            if (!cropper || this.scrollTop > 300) {
                return;
            }
            switch (e.keyCode) {
                case 37:
                    e.preventDefault();
                    cropper.move(-1, 0);
                    break;
                case 38:
                    e.preventDefault();
                    cropper.move(0, -1);
                    break;
                case 39:
                    e.preventDefault();
                    cropper.move(1, 0);
                    break;
                case 40:
                    e.preventDefault();
                    cropper.move(0, 1);
                    break;
            }
        };
        $(".cropanh-container2").hide();
        var inputImage = document.getElementById('inputImage2');
        if (URL) {
            inputImage.onchange = function() {
                var files = this.files;
                var file;
                if (cropper && files && files.length) {
                    file = files[0];
                    if (/^image\/\w+/.test(file.type)) {
                        uploadedImageType = file.type;
                        if (uploadedImageURL) {
                            URL.revokeObjectURL(uploadedImageURL);
                        }
                        image.src = uploadedImageURL = URL.createObjectURL(file);
                        cropper.destroy();
                        cropper = new Cropper(image, options);
                        inputImage.value = null;
                        $(".cropanh-container2").show();
                        $(".btn-upanh2 span,.btn-chonanh2").html("<i class='fas fa-upload'></i> Chọn ảnh khác");
                    } else {
                        window.alert('Please choose an image file.');
                    }
                }
            };
        } else {
            inputImage.disabled = true;
            inputImage.parentNode.className += ' disabled';
        }
    });

});