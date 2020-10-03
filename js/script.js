$(document).ready(function(){
  $('.bxslider').bxSlider();
  $('#menu').slicknav();

});
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn").src="../img/play_icon.png";

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause";
  } else {
    video.pause();
    btn.innerHTML = "play";
  }
}
