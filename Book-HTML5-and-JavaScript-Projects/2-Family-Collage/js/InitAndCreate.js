var ctx;
var canvas1;
var stuff = [];
var thingInMotion;
var offsetx;
var offsety;
var tid;
var savedgco;
var images = [];
var videotext1 = "<video id=\"XXXX\"  preload=\"auto\" loop=\"loop\" autoplay muted controls> <source src=\"assets/XXXX.webm\" type=\'video/webm; codecs=\"vp8, vorbis\"\'> ";
var videotext2="<source src=\"assets/XXXX.mp4\" type=\'video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"\'> <source src=\"assets/XXXX.ogv\" type=\'video/ogg; codecs=\"theora, vorbis\"\'>";
var videotext3="Your browser does not accept the video tag.</video>";
var textmsg = "Loading videos";
var videocount =0;
var okaytogo = false;

function init() {
	 
    canvas1 = document.getElementById('canvas');
	canvas1.onmousedown = function () { return false; } ;  //prevents change of cursor to default
   
    canvas1.addEventListener('dblclick',makenewitem,false);
    canvas1.addEventListener('mousedown',startdragging,false);
	ctx = canvas1.getContext("2d");
	savedgco = ctx.globalCompositeOperation;
	createelements();
	drawstuff();
	ctx.fillText(textmsg,100,100);
	loadid = setInterval(loading,2000);
	ctx.strokeStyle = "blue";	
}

function createelements() {
	
	var name;
	var i;
	var type;
	var divelement;
	var videomarkup;
	var velref;
	
	var vb;
	var imgdummy;
	var pic;
	
	for (i=0;i<mediainfo.length;i++) {
		type = mediainfo[i].shift();  //removes 1st element from array
	    info = mediainfo[i];
	   
		switch(type) {

            case 'video':
            videocount++;
            name = info[0];
            divelement= document.createElement("div");
            videomarkup = videotext1+videotext2+videotext3;
            videomarkup = videomarkup.replace(/XXXX/g,name);
            divelement.innerHTML = videomarkup;
            document.body.appendChild(divelement);
            velref = document.getElementById(name);
            velref.addEventListener("ended",restart,false);
            velref.addEventListener("loadeddata",videoloaded,false);
            vb = new Videoblock(info[2],info[3],info[4],info[5],info[6],info[7],info[8],velref,info[9],info[1]); 
            stuff.push(vb);
            break;
            
            case 'picture':
            imgdummy = new Image();
            imgdummy.src = info[4];
            images.push(imgdummy);
            stuff.push( new Picture(info[0],info[1],info[2],info[3],images[images.length-1]));
            break;
            case 'heart':
            stuff.push(new Heart(info[0],info[1],info[2],info[3],info[4]));
            break;
            case 'oval':
            stuff.push(new Oval(info[0],info[1],info[2],info[3],info[4],info[5]));
            break;
            case 'rect':
            stuff.push(new Rect(info[0],info[1],info[2],info[3],info[4]));
            break;
		}
			
	 }
	
}