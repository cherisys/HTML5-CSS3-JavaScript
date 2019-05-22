function Videoblock(sx,sy,x,y,w,h,scale,videoel,volume,angle) {
	this.sx = sx;
	this.sy = sy;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.videoelement = videoel;
	this.volume = volume;  
	this.draw = drawvideo;
	this.overcheck = overvideo;  //need more complex checking because of angle and scale
	this.angle = angle;
	this.cosine = Math.cos(angle);
	this.sine = Math.sin(angle);
	this.scale = scale;
	videoel.volume = 0;
	this.videoelement.play();
}

function drawvideo() {
	var savedalpha = ctx.globalAlpha;
	ctx.globalCompositeOperation = "lighter";
	ctx.globalAlpha = this.alpha;
   
    if (this.angle!=0) {
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle);
        ctx.translate(-this.x,-this.y)
        
        if (this.scale!=1) {
            ctx.scale(this.scale,this.scale); 
        }

        ctx.drawImage(this.videoelement,this.sx,this.sy,this.w,this.h,this.x,this.y, this.w, this.h);
        ctx.restore();
    }
    else {
        if (this.scale!=1) {
            ctx.save();
            ctx.scale(this.scale,this.scale);
            ctx.drawImage(this.videoelement,this.sx,this.sy,this.w,this.h,this.x,this.y, this.w, this.h);
            ctx.restore();
        }
        else {
            ctx.drawImage(this.videoelement,this.sx,this.sy,this.w,this.h,this.x,this.y, this.w, this.h);
        }
    }
    
	ctx.globalAlpha = savedalpha;
	ctx.globalCompositeOperation = savedgco;
}

function overvideo (mx,my) {
    //need to add code to check in rotation case and scaling
    omx = mx;
    omy = my;
          
    if (this.angle!=0) {
        omx = omx-this.x;
        omy = omy - this.y;
        mx = omx*this.cosine + omy*this.sine;
        my = -omx*this.sine + omy*this.cosine;
        mx = this.x +mx;
        my = this.y + my;	
        
    }

    if (this.scale!=1) {
        //alert("prescaling mx is "+mx+" prescaling my is "+my);
        mx = mx/this.scale;
        my = my/this.scale;
        //alert("post scaling mx is "+mx+" post scaling my is "+my);	
    }
      
    if ( (mx>=this.x)&&(mx<=(this.x+this.w))&&(my>=this.y)&&(my<=(this.y+this.h))) {return true;}
    else {return false;}	
  }