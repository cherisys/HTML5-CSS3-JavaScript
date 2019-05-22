function makenewitem(ev) {
	
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
	var item;
	for (var i=endpt;i>=0;i--) {  //reverse order
		if (stuff[i].overcheck(mx,my)) { 
		   item = clone(stuff[i]);
		   item.x +=20;
		   item.y += 20;
		   stuff.push(item);
		   break;
		}
	}
	
}

function clone(obj) {
	var item = new Object();
	for (var info in obj) {
		item[info] = obj[info];
	}
	return item;
}