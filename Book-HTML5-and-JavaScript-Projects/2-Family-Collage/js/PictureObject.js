function Picture(x,y,w,h,imagename) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.imagename = imagename;
	this.draw = drawpic;
	this.overcheck = overrect;
}

function drawpic() {
    ctx.globalAlpha = 1.0;
	ctx.drawImage(this.imagename,this.x,this.y,this.w,this.h);	
}