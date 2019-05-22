function Oval(x,y,r,hor,ver,c) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.radsq = r*r;
	this.hor = hor;
	this.ver = ver;
	this.draw = drawoval;
	this.color = c;
	this.overcheck = overoval;
}

function drawoval() {
	ctx.save();
	ctx.translate(this.x,this.y);
	ctx.scale(this.hor,this.ver);
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(0,0,this.r,0,2*Math.PI,true);
	ctx.closePath();
	ctx.fill();
	ctx.restore();	
}

function overoval(mx,my) {
	//computes positions in the translated and scaled coordinate system
	var x1 = 0;  //this is this.x - this.x
	var y1 = 0;
	var x2 = (mx-this.x)/this.hor;
	var y2 = (my-this.y)/this.ver;
	if (distsq(x1,y1,x2,y2)<=(this.radsq) ){
		return true
	}
	else {return false}
}