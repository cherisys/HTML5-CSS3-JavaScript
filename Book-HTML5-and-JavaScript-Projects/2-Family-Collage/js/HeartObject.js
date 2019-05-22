function Heart(x,y,h,drx,color) {
	this.x = x;
	this.y = y;
	this.h = h;
	this.drx = drx;
	this.radsq = drx*drx;
	this.color = color;	
	this.draw = drawheart;
	this.overcheck = overheart;
	this.ang = .25*Math.PI;
}

function drawheart() {
	var leftctrx = this.x-this.drx;
	var rightctrx = this.x+this.drx;
	var cx = rightctrx+this.drx*Math.cos(this.ang);
	var cy = this.y + this.drx*Math.sin(this.ang);
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.moveTo(this.x,this.y);
	ctx.arc(leftctrx,this.y,this.drx,0,Math.PI-this.ang,true);
	ctx.lineTo(this.x,this.y+this.h);
	ctx.lineTo(cx,cy);
	ctx.arc(rightctrx,this.y,this.drx,this.ang,Math.PI,true);
	ctx.closePath();
	ctx.fill();	
}

function overheart(mx,my) {
	var leftctrx = this.x-this.drx;
	var rightctrx = this.x+this.drx;
	var qx = this.x-2*this.drx;
	var qy = this.y-this.drx;
	var qwidth = 4*this.drx;
	var qheight = this.drx+this.h;
	
    //quick test if it is in bounding rectangle	
	if (outside(qx,qy,qwidth,qheight,mx,my)) { return false; }

    //compare to two centers
	if (distsq(mx,my,leftctrx,this.y)<this.radsq) return true;
    if (distsq(mx,my,rightctrx,this.y)<this.radsq) return true;
    
    // if outside of circles AND less than equal to y, return false
    if (my<=this.y) return false;		
	
    // compare to each slope
    var x2 = this.x
    var y2 = this.y + this.h;
    var m = (this.h)/(2*this.drx);
    
    // left side
    if (mx<=this.x) {
        if (my < (m*(mx-x2)+y2)) { return true; }
        else { return false; }
    }
    else {
        m = -m;
        if (my < (m*(mx-x2)+y2)) { return true; }
        else return false;
    }
}