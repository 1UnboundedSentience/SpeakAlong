//= require jquery
//= require jquery_ujs

$(document).ready(function() {
  // slider feature
  $(function() {
    $( "#slider" ).slider();
  });
  $('#opacity-input').click(function(e) {
    $('#opacity-input').mousemove(function(e) {
      var mappedOpacity = parseInt($('#opacity-input').val())/100;
      $('#webrtc-video').css("opacity", mappedOpacity);
      $('#cur-opa').text("Opacity:" + mappedOpacity);
    })
  })
  var pane = $('#main'),
      webrtcFeed = $('#webrtc-video'),
      w = pane.width() - webrtcFeed.width(),
      d = {},
      x = 3;
  function newv(v,a,b) {
      var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
      return n < 0 ? 0 : n > w ? w : n;
  }

  $(window).keydown(function(e) { d[e.which] = true;});
  $(window).keyup(function(e) { d[e.which] = false;});

  setInterval(function() {
      webrtcFeed.css({
          left: function(i,v) { return newv(v, 37, 39); },
          top: function(i,v) { return newv(v, 38, 40); }
      });
  }, 20);
})