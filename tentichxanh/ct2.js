$(document).ready(function() {
    // if (window.location.hostname == tmbq) {
        var dk1 = $(".dk1").val();
        var dk2 = $(".dk1").val();

        $("#tad-taianhve").hide();
        $(".tad-ketqua").hide();

        $(".tad-in-text5").on("blur", function() {
              
            var f = $(this).val().split(".").join("").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
              $(this).val(f)
         
       
           
          });
          
          
            $(".tad-in-text2").on("blur", function() {
            
              
                   if($(this).val() != ""){
          
                    var c = $(this).val().split("(").join("").split(")").join("");
              $(this).val("("+c+")")
              
                   }
              
          });


        $("#tad-taoanh").click(function() {



            
            if ($(".dk1").val() == "") {
                alert("Vui lòng chọn avatar");
                $('#chonanhModal1').modal('show');
                return false;
            }
            if ($(".dk2").val() == "") {
                alert("Vui lòng chọn ảnh bìa");
                $('#chonanhModal2').modal('show');
                return false;
            }
            if ($(".tad-in-text1").val() == "") {
                alert("Bạn chưa nhập tên");
                $(".tad-in-text1").focus();
                return false;
            }

            if ($(".tad-in-text1").val() == "") {
                alert("Vui lòng nhập tên");
                $(".tad-in-text1").focus();
                return false;
            }


            if ($(".tad-in-text3").val() == "") {
                alert("Vui lòng địa chỉ");
                $(".tad-in-text3").focus();
                return false;
            }
            if ($(".tad-in-text4").val() == "") {
                alert("Vui lòng nhập  tình trạng");
                $(".tad-in-text4").focus();
                return false;
            }

            if ($(".tad-in-text5").val() == "") {
                alert("Vui lòng nhập  số lượng follow");
                $(".tad-in-text5").focus();
                return false;
            }


            t1 = $(".tad-in-text1").val();
            $(".tad-out-text1").html(t1);
            t2 = $(".tad-in-text2").val();
            $(".tad-out-text2").html(t2);
            t3 = $(".tad-in-text3").val();
            $(".tad-out-text3").html(t3);
            t4 = $(".tad-in-text4").val();
            $(".tad-out-text4").html(t4);
            t5 = $(".tad-in-text5").val();
            $(".tad-out-text5").html(t5);
            ta = $(".tad-in-texta").val();
            if (ta) {
                $(".tad-out-texta").html(ta.replace(/\r?\n/g, '</div><div>'));
            }


           
            if($(".tad-in-text1").val().length > 20)
            {
            

              var nt = $(".tad-in-text1").val().split(' ').slice(-2).join(' ')

            $(".tad-out-text1.top").text(nt)
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
        $(".btn-upanh1").click(function() {
            $(".cropanh-container1 .cropper-container").remove();
            'use strict';
            var Cropper = window.Cropper;
            var URL = window.URL || window.webkitURL;
            var container = document.querySelector('.img-container1');
            var image = container.getElementsByTagName('img').item(0);
            var download = document.getElementById('download1');
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
                                $(".anhdacat1").html(result);
                                $(".dk1").val(1);
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
            var download = document.getElementById('download2');
            var actions = document.getElementById('actions2');
            var options = {
                aspectRatio: 828 / 465,
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
                                $(".anhdacat2").html(result);
                                $(".dk2").val(1);
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
    // }
});