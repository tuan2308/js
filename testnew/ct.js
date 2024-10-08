
$(document).ready(function() {
   
    $("#tad-taianhve").hide();
    $(".tad-ketqua").hide();
    $("#tad-taoanh").addClass("disabled");
    $("#cropanh").click(function() {
        $("#tad-taoanh").removeClass("disabled");
    });
    $(".tad-in-text0").on("input", function() {
        var t1count = $(".tad-in-text0").val().length;
        if (t1count == 0) {
            $("#tad-taoanh").addClass("disabled")
        } else {
            $("#tad-taoanh").removeClass("disabled")
        }
    });
    $(".tad-in-text1").on("input", function() {
        var t1count = $(".tad-in-text1").val().length;
        if (t1count == 0) {
            $("#tad-taoanh").addClass("disabled")
        } else {
            $("#tad-taoanh").removeClass("disabled")
        }
    });
    $(".tad-in-text2").on("input", function() {
        var t1count = $(".tad-in-text2").val().length;
        if (t1count == 0) {
            $("#tad-taoanh").addClass("disabled")
        } else {
            $("#tad-taoanh").removeClass("disabled")
        }
    });
    $(".tad-in-texta").on("input", function() {
        var t1count = $(".tad-in-texta").val().length;
        if (t1count == 0) {
            $("#tad-taoanh").addClass("disabled")
        } else {
            $("#tad-taoanh").removeClass("disabled")
        }
    });
    $(".tad-in-texta1").on("input", function() {
        var t1count = $(".tad-in-texta1").val().length;
        if (t1count == 0) {
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
        ta = $(".tad-in-texta").val();
        ta1 = $(".tad-in-texta1").val();
        if (ta) {
            $(".tad-out-texta").html(ta.replace(/\r?\n/g, '</div><div>'));
        }
        if (ta1) {
            $(".tad-out-texta1").html(ta.replace(/\r?\n/g, '</div><div>'));
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
    window.onload = function() {
        'use strict';
        var Cropper = window.Cropper;
        var URL = window.URL || window.webkitURL;
        var container = document.querySelector('.img-container');
        var image = container.getElementsByTagName('img').item(0);
        var download = document.getElementById('download');
        var actions = document.getElementById('actions');
        var options = {
            aspectRatio: tyle,
            viewMode: vmode,
            preview: '.img-preview',
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
        actions.querySelector('.docs-buttons').onclick = function(event) {
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
                            $(".anhdacat").html(result);
                            if (!download.disabled) {
                                download.href = result.toDataURL(uploadedImageType);
                            }
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
        $(".cropanh-container").hide();
        var inputImage = document.getElementById('inputImage');
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
                        $(".cropanh-container").show();
                        $(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác");
                    } else {
                        window.alert('Please choose an image file.');
                    }
                }
            };
        } else {
            inputImage.disabled = true;
            inputImage.parentNode.className += ' disabled';
        }
    };

});
