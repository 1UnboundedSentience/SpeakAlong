$(document).ready(function() {
  $('#url-bar').blur(function(e) {
    console.log('hi snake')
    var enteredYoutubeID = $('#url-bar').val();
    var newYTVidLink = "//www.youtube.com/v/" + enteredYoutubeID + "?color2=FBE9EC&amp;version=3";
    var newObj = "<object id='vid-obj' type='application/x-shockwave-flash' style='width:450px; height:366px;'><param name='movie' value='http://www.youtube.com/v/" + enteredYoutubeID + "'/><param name='allowFullScreen' value='true' /><param name='allowscriptaccess' value='always' /></object>";
    console.log(newObj)
    $('#yt-embed').empty();
    $('#yt-embed').append(newObj);
  });
})