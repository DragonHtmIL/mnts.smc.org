function ambientSound() {
  if(document.getElementById("ambientChecker").checked === true && document.getElementById("checkBaseVolum").checked === false) {
    document.getElementById("basicAmbientSound").muted = false;
    document.getElementById("basicAmbientSound").play();
  }else
  if(document.getElementById("ambientChecker").checked === false && document.getElementById("checkBaseVolum").checked === false) {
    document.getElementById("basicAmbientSound").muted = true;
    document.getElementById("basicAmbientSound").pause();
  }else
  if(document.getElementById("ambientChecker").checked === false && document.getElementById("checkBaseVolum").checked === true) {
    document.getElementById("basicAmbientSound").muted = true;
    document.getElementById("basicAmbientSound").pause();
  }else
  if(document.getElementById("ambientChecker").checked === true && document.getElementById("checkBaseVolum").checked === true) {
    document.getElementById("basicAmbientSound").muted = true;
    document.getElementById("basicAmbientSound").pause();
  }
}