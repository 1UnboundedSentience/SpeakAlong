
// navigator.getUserMedia = navigator.getUserMedia ||
//                          navigator.webkitGetUserMedia ||
//                          navigator.mozGetUserMedia;
// if (navigator.getUserMedia) {
//    navigator.getUserMedia({audio: false,
// video: true },
//       function(stream) {
//          var video = document.getElementById('webrtc-video');
//          video.src = window.URL.createObjectURL(stream);
//          video.onloadedmetadata = function(e) {
//            video.play();
//          };
//       },
//       function(err) {
//          console.log("The following error occured: " + err.name);
//       }
//    );
// } else {
//    console.log("getUserMedia not supported");
// }