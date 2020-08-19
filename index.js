let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
var funcOutput =[];
let xGrid = 20;
let yGrid = 20;
let cellSize = 20;
var userFunction;

   userFunction = localStorage.getItem("FUNCTION");
document.getElementById("para").innerHTML = userFunction;
  for(var x = 0;x<1000; x = x + 0.5){
    funcOutput.push(eval(userFunction));
  }




// var userFunction = document.getElementById("userFunction").value;

function drawGrids(){
  ctx.beginPath();
  while(xGrid<canvas.height){
    ctx.moveTo(0,xGrid);
    ctx.lineTo(canvas.width,xGrid);
    xGrid+=cellSize;
  }

  while(yGrid<canvas.width){
    ctx.moveTo(yGrid,0);
    ctx.lineTo(yGrid,canvas.height);
    yGrid+=cellSize;
  }
ctx.strokeStyle = "grey";
  ctx.stroke();
}

function block(count){
  return count * 20;
}

function drawAxis(){
  ctx.beginPath();

  ctx.moveTo(block(2),block(2));
  ctx.lineTo(block(2),block(20));
  ctx.lineTo(block(50),block(20));
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(block(2),block(2));
  ctx.lineTo(block(1),block(3));
  ctx.lineTo(block(3),block(3));
  ctx.lineTo(block(2),block(2));
  ctx.stroke();
ctx.beginPath();
ctx.moveTo(block(49),block(20));
ctx.lineTo(block(49),block(19));
ctx.lineTo(block(50),block(20));
ctx.lineTo(block(49),block(21));
ctx.lineTo(block(49),block(20));
ctx.strokeStyle = "black";
ctx.stroke();
}

function drawMarkings(){
  ctx.moveTo(block(2),block(1));
  ctx.font = "30px Arial Green";
  ctx.fillStyle = "brown";
  ctx.fillText("Y",block(1),block(2));
  ctx.fillText("X",block(48.9),block(19));
  ctx.moveTo(block(2),block(20));
  var counter = 2;
  var yPlot = block(18);
  ctx.font = "15px Arial Green";
  ctx.fillStyle = "Green";
  ctx.fillText("0",block(1.5),block(21));
  for(var i =0; i<8; i++){
    ctx.fillText(counter, block(0.8),yPlot);
    counter = counter + 2;
    yPlot = yPlot - block(2);
  }
  var counter = 2;
  var xPlot = block(3.8);
  for(var i =0; i<50; i++){
    ctx.fillText(counter,xPlot,block(21));
    counter = counter + 2;
    xPlot = xPlot + block(2);
  }
}

function drawGraph(){
  ctx.beginPath();
  ctx.moveTo(block(2),block(20));

for (var x = 0; x < 1000; x = x + 0.5) {
     ctx.lineTo(block(2 + x), block(20) - block(funcOutput[x]));
     ctx.strokeStyle = "red";
  ctx.stroke();
}

}

drawGrids();
drawAxis();
drawMarkings();
drawGraph();
