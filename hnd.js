$(document).ready(function(){if(window.location.hostname==tmbq){$("#tad-taianhve").click(function(){$("#img-out").toggleClass("tad-annut");});$("#tad-taoanh").click(function(){$("#img-out").show().addClass("tad-annut");$(".load-anh").show();});$("#tad-taianhve").hide();$(".tad-ketqua").hide();$("#img-out").hide();$("#tad-taoanh").attr("disabled","false");$("#cropanh").click(function(){$("#tad-taoanh").removeAttr("disabled");});var $btn=document.getElementById('tad-taoanh');var getimg="";$btn.addEventListener('mousedown',onScreenShotClick);function onScreenShotClick(ev){html2canvas(document.querySelector(".tad-main"),{useCORS:!0,scrollX:0,scrollY:0,width:1125,height:2000,scale:1,x:1125,y:0}).then(canvas=>{blob=canvas.toBlob(function(blob){url=window.URL.createObjectURL(blob);$(".tad-anh2").html("<div style=' position: relative; '><a href='"+
url+"'  download='taoanhdep_hinhnen_2.jpg' style='position: absolute;z-index: 999; margin: 10px;bottom: 0;right:0' class='btn btn-primary'><i class='fas fa-cloud-download-alt'></i> 2</a><img src='"+
url+"' alt='Tạo ảnh đẹp'></img><img src='https://1.bp.blogspot.com/-MXa89uJVSL8/XzjhYKWxmOI/AAAAAAAAjAE/xkQwwcwb6AIgxrYGiY1HqbCokweghh1ewCNcBGAsYHQ/s1000/manhinh.png' alt='Màn hình iphone' class='tad-manhinh'></img></div>")},'image/jpeg',1.0);});html2canvas(document.querySelector(".tad-main"),{useCORS:!0,scrollX:0,scrollY:0,width:1125,height:2000,scale:1,x:0,y:0}).then(canvas=>{blob=canvas.toBlob(function(blob){url=window.URL.createObjectURL(blob);$(".tad-anh1").html("<div style=' position: relative; '><a href='"+
url+"'  download='taoanhdep_hinhnen_1.jpg' style='position: absolute;z-index: 999; margin: 10px;bottom: 0;right:0' class='btn btn-primary'><i class='fas fa-cloud-download-alt'></i> 1</a><img src='"+
url+"' alt='Tạo ảnh đẹp'></img><img src='https://1.bp.blogspot.com/-MXa89uJVSL8/XzjhYKWxmOI/AAAAAAAAjAE/xkQwwcwb6AIgxrYGiY1HqbCokweghh1ewCNcBGAsYHQ/s1000/manhinh.png' alt='Màn hình iphone' class='tad-manhinh'></img></div>")},'image/jpeg',1.0);$(".load-anh").hide();$(".tad-ketqua").show();$("#tad-taianhve").show();});}
var tyle=18/16;var vmode=1;window.onload=function(){'use strict';var Cropper=window.Cropper;var URL=window.URL||window.webkitURL;var container=document.querySelector('.img-container');var image=container.getElementsByTagName('img').item(0);var download=document.getElementById('download');var actions=document.getElementById('actions');var options={aspectRatio:tyle,viewMode:vmode,preview:'.img-preview',autoCrop:true,strict:true,background:true,autoCropArea:1};var cropper=new Cropper(image,options);var originalImageURL=image.src;var uploadedImageType='image/jpeg';var uploadedImageURL;if(!document.createElement('canvas').getContext){$('button[data-method="getCroppedCanvas"]').prop('disabled',true);}
if(typeof document.createElement('cropper').style.transition==='undefined'){$('button[data-method="rotate"]').prop('disabled',true);$('button[data-method="scale"]').prop('disabled',true);}
actions.querySelector('.docs-buttons').onclick=function(event){var e=event||window.event;var target=e.target||e.srcElement;var cropped;var result;var input;var data;if(!cropper){return;}
while(target!==this){if(target.getAttribute('data-method')){break;}
target=target.parentNode;}
if(target===this||target.disabled||target.className.indexOf('disabled')>-
1){return;}
data={method:target.getAttribute('data-method'),target:target.getAttribute('data-target'),option:target.getAttribute('data-option')||undefined,secondOption:target.getAttribute('data-second-option')||undefined};cropped=cropper.cropped;if(data.method){if(typeof data.target!=='undefined'){input=document.querySelector(data.target);if(!target.hasAttribute('data-option')&&data.target&&input){try{data.option=JSON.parse(input.value);}catch(e){console.log(e.message);}}}
switch(data.method){case'rotate':if(cropped){cropper.clear();}
break;case'getCroppedCanvas':try{data.option=JSON.parse(data.option);}catch(e){console.log(e.message);}
if(uploadedImageType==='image/jpeg'){if(!data.option){data.option={};}
data.option.fillColor='#fff';}
break;}
result=cropper[data.method](data.option,data.secondOption);switch(data.method){case'rotate':if(cropped){cropper.crop();}
break;case'scaleX':case'scaleY':target.setAttribute('data-option',-data.option);break;case'getCroppedCanvas':if(result){$(".anhdacat").html(result);if(!download.disabled){download.href=result.toDataURL(uploadedImageType);}}
break;case'destroy':cropper=null;if(uploadedImageURL){URL.revokeObjectURL(uploadedImageURL);uploadedImageURL='';image.src=originalImageURL;}
break;}
if(typeof result==='object'&&result!==cropper&&input){try{input.value=JSON.stringify(result);}catch(e){console.log(e.message);}}}};document.body.onkeydown=function(event){var e=event||window.event;if(!cropper||this.scrollTop>300){return;}
switch(e.keyCode){case 37:e.preventDefault();cropper.move(-1,0);break;case 38:e.preventDefault();cropper.move(0,-1);break;case 39:e.preventDefault();cropper.move(1,0);break;case 40:e.preventDefault();cropper.move(0,1);break;}};$(".cropanh-container").hide();var inputImage=document.getElementById('inputImage');if(URL){inputImage.onchange=function(){var files=this.files;var file;if(cropper&&files&&files.length){file=files[0];if(/^image\/\w+/.test(file.type)){uploadedImageType=file.type;if(uploadedImageURL){URL.revokeObjectURL(uploadedImageURL);}
image.src=uploadedImageURL=URL.createObjectURL(file);cropper.destroy();cropper=new Cropper(image,options);inputImage.value=null;$(".cropanh-container").show();$(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Chọn ảnh khác");}else{window.alert('Please choose an image file.');}}};}else{inputImage.disabled=true;inputImage.parentNode.className+=' disabled';}};}});; 