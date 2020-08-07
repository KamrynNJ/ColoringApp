var introCanvas= document.getElementById("IntroDraw");
const startButton= document.getElementById("startButton");

var introCanvas = document.querySelector("canvas").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 5,
    txt = "Time to Draw!", x = 30, i = 0;

introCanvas.font = "100px Crafty Girls, cursive, sans-serif";
introCanvas.lineWidth = 2.5; introCanvas.lineJoin = "round"; introCanvas.globalAlpha = 2/3;
introCanvas.strokeStyle = introCanvas.fillStyle = "#ffffff";

(function loop() {
  introCanvas.clearRect(x, 0, 60, 150);
  introCanvas.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  introCanvas.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    introCanvas.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += introCanvas.measureText(txt[i++]).width + introCanvas.lineWidth * Math.random();
    introCanvas.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    introCanvas.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();
