function successCallback(stream) {
    var options = {
      mimeType: 'video/webm', // or video/mp4 or audio/ogg
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    var video = document.getElementById('webrtc-video');
    video.src = window.URL.createObjectURL(stream);
    video.onloadedmetadata = function(e) {
      video.play();
    };

    $('#start-button').click(function(e) {
        recordRTC = RecordRTC(stream, options);
        recordRTC.startRecording();
        $('#rec-state').text('Is Recording');
    });

    $('#stop-button').click(function(e) {
        recordRTC.stopRecording(function (audioVideoWebMURL) {
            var recordedBlob = recordRTC.getBlob();
            var recordingLink = audioVideoWebMURL.replace('video/webm','');
            $('#rec-link').empty();
            $('#rec-link').append("<a target='_blank' href='" + recordingLink + "'>Recording Link</a><br>");
            $('#rec-link').append("<a id='dl-rec' target='_blank' href='" + recordingLink + "'>Download Recording</a><br>");
            recordRTC.getDataURL(function(dataURL) { });
            $('#rec-state').text('Not Recording');
        });
    });

    $('#dl-rec').click(function(e) {
        e.preventDefault();
        console.log('should save')
        recordRTC.save();
    })
}

function errorCallback(error) {
    console.log('error occured with video streaming');
}



var mediaConstraints = { video: true, audio: true };

navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
