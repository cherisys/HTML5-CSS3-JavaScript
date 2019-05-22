function startdragging(ev) {
	
	var mx;
	var my;
	if ( ev.layerX ||  ev.layerX == 0) { // Firefox, ???
   			mx= ev.layerX;
    		my = ev.layerY;
  		} else if (ev.offsetX || ev.offsetX == 0) { // Opera, ???
    		mx = ev.offsetX;
    		my = ev.offsetY;
  		}
	var endpt = stuff.length-1;
	for (var i=endpt;i>=0;i--) {  //reverse order
		if (stuff[i].overcheck(mx,my)) { 
		offsetx = mx-stuff[i].x;
		 offsety = my-stuff[i].y;
		 //move this item on top
		 var item = stuff[i];
		 thingInMotion = stuff.length-1;
		 stuff.splice(i,1);
		 stuff.push(item);
		 canvas1.style.cursor = "pointer";   // change to finger when dragging
		 canvas1.addEventListener('mousemove',moveit,false);
		 canvas1.addEventListener('mouseup',dropit,false);
		 break;
		}
	}
}

function moveit(ev) {
	var mx;
	var my;
	if ( ev.layerX ||  ev.layerX == 0) { // Firefox, ???
   			mx= ev.layerX;
    		my = ev.layerY;
  		} else if (ev.offsetX || ev.offsetX == 0) { // Opera, ???
    		mx = ev.offsetX;
    		my = ev.offsetY;
  		}
	stuff[thingInMotion].x = mx-offsetx; //adjust for flypaper dragging
	stuff[thingInMotion].y = my-offsety;
	
}

function dropit(ev) {
	canvas1.removeEventListener('mousemove',moveit,false);	
	canvas1.removeEventListener('mouseup',dropit,false);
	canvas1.style.cursor = "crosshair";  //change back to crosshair
}