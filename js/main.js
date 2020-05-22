var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width = window.innerWidth;
var height = window.innerHeight;
var xcenter = width / 2;
var ycenter = height /2;
canvas.width = width;
canvas.height = height; 
var xCoor, yCoor;
var stars = [];


function showCoords(event) {
    xCoor = event.clientX;
    yCoor = event.clientY;  
}


function Star(){

	this.x = this.x || width * Math.random();
	this.y = this.y || height * Math.random();
	this.angle = 0;
}

	Star.prototype.draw = function(a){
		var mod = a % 2;
		ctx.beginPath();
		ctx.arc(this.x, this.y,(2 + a/100),0,2*Math.PI);
		if(mod != 0){
			ctx.fillStyle = "#333333";
			}else{
			ctx.fillStyle = "#fff";
			}
		ctx.fill();
		
	}

	Star.prototype.connect = function(a) {
		if(this.x < xCoor + 200 && this.x > xCoor - 200 && this.y < yCoor + 200 && this.y > yCoor - 200){
			ctx.beginPath();
			ctx.moveTo(xCoor,yCoor);
			ctx.lineTo(this.x, this.y);
			var mod = a % 2;
			if(mod != 0){
			ctx.strokeStyle="#fff";
			}else{
			ctx.strokeStyle="#333333";
			}
			ctx.stroke();
		}
	}
	
	Star.prototype.move = function(a) {
		if(this.x >= width || this.x <= 0 || this.y >= height || this.y <= 0 ){
			this.x = width * Math.random();
			this.y = height * Math.random();			
		}else{
			this.x += a < 50 ? 1 : + Math.cos(a/3);
			this.y += a < 50 ? 0 : + Math.sin(a/3);	
		}
	}


var starArrayPopulating = (function (){
	for(var i = 0; i <= 100; i++){
		stars.push(new Star());
	}
})();


function singleCanvasDraw(){
	for(var i = 0; i <= 100; i++){
		stars[i].draw(i);
		stars[i].connect(i);
		stars[i].move(i);	
	}
}

function clear () {
		ctx.clearRect(0, 0, width, height);
	}

setInterval(
 	function(){
 		clear();
 		singleCanvasDraw();	
	 }, 1000/12);
	 





	//  

	// 
	// 
	// 






