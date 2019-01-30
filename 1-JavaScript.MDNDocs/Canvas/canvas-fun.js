//canvas fun
var width = window.innerWidth; 
var height = window.innerHeight; 
var timerID = 0;
var c = document.getElementById('canvas')
var ctx = c.getContext('2d');
c.width = width;
c.height = height;


	var speed = 1;
	var size = 8;
	var boids = [];
	var totalBoids = 150;
	
	var init = function(){
	
		for (var i = 0; i < totalBoids; i++) {
		
			boids.push({
				x: Math.random() * width,
				y: Math.random() * height,
				v: {
					x: Math.random() * 2 - 1,
					y: Math.random() * 2 - 1
				},
				c: 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ', 1.0)'
			});
		}
		setInterval(update, 40);	
	}
	
	var calculateDistance = function(v1, v2){
		x = Math.abs(v1.x - v2.x);
		y = Math.abs(v1.y - v2.y);
		
		return Math.sqrt((x * x) + (y * y));
	}
	
	var checkWallCollisions = function(index){
		if (boids[index].x > width) {
			boids[index].x = 0;
		}
		else 
			if (boids[index].x < 0) {
				boids[index].x = width;
			}
		
		if (boids[index].y > height) {
			boids[index].y = 0;
		}
		else 
			if (boids[index].y < 0) {
				boids[index].y = height;
			}
	}
	
	var addForce = function(index, force){
	
		boids[index].v.x += force.x;
		boids[index].v.y += force.y;
		
		magnitude = calculateDistance({
			x: 0,
			y: 0
		}, {
			x: boids[index].v.x,
			y: boids[index].v.y
		});
		
		boids[index].v.x = boids[index].v.x / magnitude;
		boids[index].v.y = boids[index].v.y / magnitude;
	}
	
	//This should be in multiple functions, but this will
	//save tons of looping - Gross!
	var applyForces = function(index){
		percievedCenter = {
			x: 0,
			y: 0
		};
		flockCenter = {
			x: 0,
			y: 0
		};
		percievedVelocity = {
			x: 0,
			y: 0
		};
		count = 0;
		for (var i = 0; i < boids.length; i++) {
			if (i != index) {
			
				//Allignment
				dist = calculateDistance(boids[index], boids[i]);
				
				//console.log(dist);
				if (dist > 0 && dist < 50) {
					count++;
					
					//Alignment
					percievedCenter.x += boids[i].x;
					percievedCenter.y += boids[i].y;
					
					//Cohesion
					percievedVelocity.x += boids[i].v.x;
					percievedVelocity.y += boids[i].v.y;
					//Seperation
					if (calculateDistance(boids[i], boids[index]) < 12) {
						flockCenter.x -= (boids[i].x - boids[index].x);
						flockCenter.y -= (boids[i].y - boids[index].y);
					}
				}
			}
		}
		if (count > 0) {
			percievedCenter.x = percievedCenter.x / count;
			percievedCenter.y = percievedCenter.y / count;
			
			percievedCenter.x = (percievedCenter.x - boids[index].x) / 400;
			percievedCenter.y = (percievedCenter.y - boids[index].y) / 400;
			
			percievedVelocity.x = percievedVelocity.x / count;
			percievedVelocity.y = percievedVelocity.y / count;
			
			flockCenter.x /= count;
			flockCenter.y /= count;
		}
		
		addForce(index, percievedCenter);
		
		addForce(index, percievedVelocity);
		
		addForce(index, flockCenter);
	}
	
	var update = function(){
	
		for (var i = 0; i < boids.length; i++) {
		
			//Draw boid
			
			ctx.beginPath();
			ctx.strokeStyle = boids[i].c;

			ctx.lineWidth = size;
			ctx.moveTo(boids[i].x, boids[i].y);
			boids[i].x += boids[i].v.x * speed;
			boids[i].y += boids[i].v.y * speed;
			applyForces(i);
			ctx.lineTo(boids[i].x, boids[i].y);
			ctx.stroke();
			ctx.fill();
			
			checkWallCollisions(i);	
			
		}
	}
	
	//Gui uses this to clear the canvas
	 var clearCanvas = function(){
		ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		ctx.beginPath();
		ctx.rect(0, 0, width, height);
		ctx.closePath();
		ctx.fill();
	}
    
    init();