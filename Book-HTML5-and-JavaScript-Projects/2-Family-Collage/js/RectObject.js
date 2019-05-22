function Rect(x,y,w,h,c) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.draw = drawrect;
	this.color = c;
	this.overcheck = overrect;
}

function drawrect() {
    ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.w, this.h);
}

function overrect (mx,my) {
	if ( (mx>=this.x)&&(mx<=(this.x+this.w))&&(my>=this.y)&&(my<=(this.y+this.h))) 
		{return true;}
	else {return false;}	
}