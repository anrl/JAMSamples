jdata {
    char *mymsg as broadcaster;
}


setInterval(function() {

    if (jsys.type == "fog") {
	if (jsys.tags != undefined)
	    mymsg.broadcast(jsys.tags);
	else
	    mymsg.broadcast("notags");
    }
//    else
//    {
//	jsys.setLong(jsys.long - 1);
//	jsys.setLat(jsys.lat - 1);
//    }

    console.log("Coords ", jsys.long, jsys.lat);
}, 1000);