navigator.mediaDevices.getUserMedia({
  video: true
})

.then(function (stream) {
  
  var video = document.querySelector('#video');
  
  video.srcObject = stream;
  
  video.play();
})


document.querySelector('#capture').addEventListener('click', function (e) {
 
  var canvas = document.querySelector("#canvas");
  
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;
  
  var context = canvas.getContext('2d');
  
  context.drawImage(video, 0, 0)
})