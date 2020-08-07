var box;
var mouseDown=false;
var drawingSpace=document.getElementById("DrawingSpace");
var canvasArea = drawingSpace.getContext("2d");
var slider= document.getElementById("myRange").value;
var slider1= document.getElementById("myRange");
var output = document.getElementById("outputValue");
output.innerHTML = slider1.value;
var colorChoice= document.getElementById("colorPicker").value;
const clearButton= document.getElementById("clear");
var pos = { x: 0, y: 0 };
canvasArea.fillStyle = 'gray';

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}
function draw(e){
  if (e.buttons !== 1) return;

  var color = "#" + colorChoice;

  canvasArea.beginPath();

  canvasArea.lineWidth = slider;
  canvasArea.lineCap = "round";
  canvasArea.strokeStyle = color;

  canvasArea.moveTo(pos.x, pos.y);
  setPosition(e);
  canvasArea.lineTo(pos.x, pos.y);

  canvasArea.stroke();
}

function changeButtonFunction(){
  slider=document.getElementById("myRange").value;
    output.innerHTML = slider1.value;
}

function changeColor(){
  colorChoice= document.getElementById("colorPicker").value;

}

function clearArea() {
  canvasArea.clearRect(0, 0, drawingSpace.width, drawingSpace.height);
  // canvasArea.beginPath();
  // canvasArea.arc(37.5, 37.5, 25, 0, Math.PI * 2, true);
  // canvasArea.lineWidth = 2;
  // canvasArea.strokeStyle = "black";
  // canvasArea.stroke();
}

slider1.oninput = function() {
  output.innerHTML = this.value;
}



clearButton.addEventListener("click",clearArea);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
