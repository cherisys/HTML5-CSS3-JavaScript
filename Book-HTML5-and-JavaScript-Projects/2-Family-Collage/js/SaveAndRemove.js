function saveasimage() {
	
    try {
        window.open(canvas1.toDataURL("image/png"));}
    catch(err) {
        alert("You need to change browsers AND/OR upload the file to a server.");
    }
}

function removeobj() {
	stuff.pop();
	drawstuff();
}