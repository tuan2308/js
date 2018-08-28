document.write( '<script src=\"https://rawgit.com/tuan2308/js/master/startuan-template.js\" type=\"text/javascript\"></script>' );


$(document).ready(function () {
  $('#copyright').html('<a href="https://www.startuanit.net">Star Tuấn IT</a>');
  setInterval(function () {
      if (!$('#copyright:visible').length) window.location.href = 'https://www.startuanit.net/p/ban-quyen-website.html'
  }, 1000)
})
