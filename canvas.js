var canvas = document.querySelector('canvas');
var c= canvas.getContext("2d");

/*c.fillStyle="#696969"
c.fillRect(100,100,100,100);
c.fillStyle="red"
c.fillRect(200,200,100,100);
c.fillStyle="orange"
c.fillRect(300,100,100,100);*/


//console.log(canvas);

//line

/*c.beginPath();
c.moveTo(50,200);
c.lineTo(20,100);
c.lineTo(30,50);
c.strokeStyle= "#696969";
c.stroke();*/

//arc


/*for (var i = 0; i <100 ; i++) {
	var x= Math.random() * innerWidth;
	var y=Math.random()* innerHeight;
	c.beginPath();
	c.arc(x,y,30,0,Math.PI * 2, false);
	c.strokeStyle= "blue";
	c.stroke();
	//x+=2;y+=2;
}*/
	


/*function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	
	c.beginPath();
	c.arc(x,y,radius,0,Math.PI *2 , false);
	c.strokeStyle="blue"
	c.stroke();

	if(x + radius > innerWidth || x-radius < 0){
		dx = -dx;
	}

	if(y + radius> innerHeight || y-radius < 0){
		dy = -dy;
	}

	x+= dx; 
	y+= dy;
	
}
animate();*/
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

var a;
var b;

 window.addEventListener("resize", 
 	function(){
 		canvas.width= window.innerWidth;
		canvas.height= window.innerHeight;
		init();
 	})

var mouse= {
	x:undefined,
	y:undefined
}

var maxRadius=40;
//var minRadius=3;

var colorArray=[
	'#2ecc71',
	'#95a5a6',
	'#2980b9',
	'#d35400',
	'#8e44ad'
]

function Circle(x , y , dx , dy , radius){
	this.x= x;
	this.y= y;
	this.dx= dx;
	this.dy= dy;
	this.radius= radius;
	this.color= colorArray[Math.floor(Math.random() * colorArray.length)];
	this.minRadius= radius;

	this.draw= function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI *2 , false);
		c.fillStyle= this.color
		c.stroke();
		c.fill();
	}

	this.update= function() {
		
	if(this.x + this.radius > innerWidth || this.x-this.radius < 0){
		this.dx = -this.dx;
	}

	if(this.y + this.radius> innerHeight || this.y-this.radius < 0){
		this.dy = -this.dy;
	}

	this.x+= this.dx; 
	this.y+= this.dy;

	if(mouse.x-this.x < 50 && mouse.x-this.x > -50 && mouse.y-this.y < 50 && mouse.y-this.y > -50){
		if(this.radius < maxRadius){
		this.radius+=1;
		}
	}
	else if(this.radius > this.minRadius){
		this.radius-=1;
	}
	
	this.draw();	
	}
	
}
var circleArray= [];



function init(){
	circleArray=[]

	for (var i = 0; i < 300 ; i++) {
	var x= Math.random() * (innerWidth - 2*radius) + radius;
	var y= Math.random() * (innerHeight - 2*radius) + radius;
	var dx= (Math.random() - 0.5) * 2 ;
	var dy= (Math.random() -0.5) * 2;
	var radius = Math.random() * 3 + 1;

	circleArray.push(new Circle(x,y,dx,dy,radius));
}
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	c.font="60px Maven Pro ";
	c.fillStyle="#e74c3c";
	c.fillText("Sailok Chinta",innerWidth/2-170,innerHeight/2);
	
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
} 
animate();
init();

window.addEventListener("mousemove",
		 function(event){
		 	mouse.x = event.x;
		 	mouse.y = event.y;
});