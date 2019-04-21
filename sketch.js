
function setup() {
    getCurrentPosition(doThisOnLocation);
}

function doThisOnLocation(position){
    print("lat: " + position.latitude);
    print("long: " + position.longitude);
}

function draw() {
  
}