
jdata {
    int x as logger;
    int y as broadcaster;
    int y2 as broadcaster;
    float q as logger;
    float q2 as logger;
}

jcond {
    cloudonly: sys.type == "cloud", nocloud;
    devonly: sys.type == "device", nodevice;
    numcheck: x == y && x == y2, notequal;
}

jasync {numcheck} function pong() {
    console.log("================ Pong!");
}

jasync {cloudonly} function pong2() {
    console.log("In pong2..");
    pong();
}


jasync {devonly} function pong3() {
    console.log("pong......");
}

setInterval(()=> {
   console.log("Calling pong...");
   pong2();

}, 2000);


function notequal() {

	return;
}

function nodevice() {

	return;
}

function nocloud() {
	return;
}

