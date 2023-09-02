
function openDoor(){
  
    document.getElementById("TVStatus").innerHTML = "The TV is ON";
    document.getElementById('mp4File').play();
}
function closeDoor(){
 
    document.getElementById("TVStatus").innerHTML = "The TV is OFF!";
    document.getElementById('mp4File').pause();
    document.getElementById('mp4File').currentTime = 0;
}
