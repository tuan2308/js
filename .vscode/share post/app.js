(function () {
    // Blob used for Facebook
    var blob;
    // Canvas
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    // load image from data url
    var imageObj = new Image();
    imageObj.onload = function () {
      ctx.drawImage(this, 0, 0);
    };
    
    imageObj.src = '1.jpeg';
    
    // Twitter oauth handler
    $.oauthpopup = function (options) {
      if (!options || !options.path) {
        throw new Error("options.path must not be empty");
      }
      options = $.extend({
        windowName: 'ConnectWithOAuth' // should not include space for IE
        , windowOptions: 'location=0,status=0,width=800,height=400'
        , callback: function () {
          debugger;
          //window.location.reload();
        }
      }, options);
      
      var oauthWindow = window.open(options.path, options.windowName, options.windowOptions);
      var oauthInterval = window.setInterval(function () {
        if (oauthWindow.closed) {
          window.clearInterval(oauthInterval);
          options.callback();
        }
      }, 1000);
    };
    // END Twitter oauth handler
    
    //bind to element and pop oauth when clicked
    $.fn.oauthpopup = function (options) {
      $this = $(this);
      $this.click($.oauthpopup.bind(this, options));
    };
    
    $('#shareFB').click(function () {
      FB.AppEvents.logEvent("canvasImageShareFB");
      var data = $('#canvas')[0].toDataURL("image/png");
      try {
        blob = dataURItoBlob(data);
      } catch (e) {
        swal(e);
      }
      FB.getLoginStatus(function (response) {
        console.log(response);
        if (response.status === "connected") {
          swal(response.status + ", posting to Facebook");
          postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, "http://bit.ly/1QK0Qbsz");
        } else if (response.status === "not_authorized") {
          console.log(response.status);
          FB.login(function (response) {
            postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, "http://bit.ly/1QK0Qbsz");
          }, {scope: "publish_actions"});
        } else {
          console.log(response);
          FB.login(function (response) {
            postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, "http://bit.ly/1QK0Qbsz");
          }, {scope: "publish_actions"});
        }
      });
    });
    
    $('#shareTW').click(function () {
      FB.AppEvents.logEvent("canvasImageShareTwitter");
      var dataURL = $('#canvas')[0].toDataURL("image/png");
      $.oauthpopup({
        path: './auth/twitter.php',
        callback: function () {
          console.log(window.twit);
          var data = new FormData();
          // Tweet text
          data.append('status', "Look at the cute panda! HTML5 Canvas to Facebook/Twitter http://bit.ly/1QK0Qbs @jerezb31");
          // Binary image
          data.append('image', dataURL);
          // oAuth Data
          data.append('oauth_token', window.twit.oauth_token);
          data.append('oauth_token_secret', window.twit.oauth_token_secret);
          // Post to Twitter as an update with
          
          return $.ajax({
            url: './auth/share-on-twitter.php',
            type: 'POST',
            data: data,
            cache: false,
            processData: false,
            contentType: false,
            success: function (data) {
              console.log('Posted to Twitter.');
              console.log(data);
            }
          });
        }
      });
    });
    
    function postImageToFacebook(token, filename, mimeType, imageData, message) {
      var fd = new FormData();
      fd.append("access_token", token);
      fd.append("source", imageData);
      fd.append("no_story", true);
      
      // Upload image to facebook without story(post to feed)
      $.ajax({
        url: "https://graph.facebook.com/me/photos?access_token=" + token,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (data) {
          console.log("success: ", data);
          
          // Get image source url
          FB.api(
            "/" + data.id + "?fields=images",
            function (response) {
              if (response && !response.error) {
                //console.log(response.images[0].source);
                
                // Create facebook post using image
                FB.api( "/me/feed", "POST",
                  {
                    "message": "",
                    "picture": response.images[0].source, // 90-Day Deprecation - https://developers.facebook.com/docs/apps/changelog
                    // "object_attachment": response.images[0].source, // 90-Day Deprecation - https://developers.facebook.com/docs/apps/changelog
                    "link": window.location.href,
                    "name": 'Look at the cute panda!',
                    "description": message,
                    "privacy": {
                      value: 'SELF'
                    }
                  },
                  function (response) {
                    if (response && !response.error) {
                      /* handle the result */
                      swal("Posted story to facebook successfully");
                      console.log("Posted story to facebook");
                      console.log(response);
                    } else {
                      swal("Failed to post story");
                      console.log("Failed to post story");
                      console.log(response);
                    }
                  }
                );
              } else {
                console.log(response);
                swal(response.error);
              }
            }
          );
        },
        error: function (shr, status, data) {
          console.log("error " + data + " Status " + shr.status);
        },
        complete: function (data) {
          //console.log('Post to facebook Complete');
        }
      });
    }
    
    function dataURItoBlob(dataURI) {
      var byteString = atob(dataURI.split(',')[1]);
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], {type: 'image/png'});
    }
    
  })();