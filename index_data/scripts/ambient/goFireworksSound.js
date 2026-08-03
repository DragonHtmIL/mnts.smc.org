let fireworksIntervalId;
function playFireworksSounds() {
  if(document.getElementById("loseModal").style.display === "block" && score >= localStorage.getItem("steelScore")) {
    document.getElementById("goFireworksSound").currentTime = 0;
    if(document.getElementById("ambientChecker").checked === true && document.getElementById("checkBaseVolum").checked === false) {
      document.getElementById("goFireworksSound").muted = false;
      document.getElementById("goFireworksSound").play();
    }else
    if(document.getElementById("ambientChecker").checked === false && document.getElementById("checkBaseVolum").checked === false) {
      document.getElementById("goFireworksSound").muted = true;
      document.getElementById("goFireworksSound").pause();
    }else
    if(document.getElementById("ambientChecker").checked === false && document.getElementById("checkBaseVolum").checked === true) {
      document.getElementById("goFireworksSound").muted = true;
      document.getElementById("goFireworksSound").pause();
    }else
    if(document.getElementById("ambientChecker").checked === true && document.getElementById("checkBaseVolum").checked === true) {
      document.getElementById("goFireworksSound").muted = true;
      document.getElementById("goFireworksSound").pause();
    }
    clearInterval(fireworksIntervalId);
  }
}
fireworksIntervalId = setInterval(playFireworksSounds, 1000);