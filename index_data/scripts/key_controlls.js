document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 27) {
    if(document.getElementById('menu').style.display === 'block') {
      document.getElementById('menuCloseBtn').click();
    }else{
      if(document.getElementById('accenter').style.display === 'block' || document.getElementById('alert').style.display === 'block') {
        return false;
      } else {
        document.getElementById('navBtn').click();
      }
    }
  }else
  if (event.keyCode == 32) {
    document.getElementById('chechboxPausing').click();
  }else
  if (event.keyCode == 87) {
    document.getElementById('btn001').click();
  }else
  if (event.keyCode == 83) {
    document.getElementById('btn004').click();
  }else
  if (event.keyCode == 65) {
    document.getElementById('btn003').click();
  }else
  if (event.keyCode == 68) {
    document.getElementById('btn005').click();
  }else
  if(event.keyCode == 69) {
    if(document.getElementById('accenter').style.display === 'block') {
      document.getElementById("closeacc").click();
    } else {
      if(document.getElementById('menu').style.display === 'block' || document.getElementById('alert').style.display === 'block') {
        return false;
      } else {
        document.getElementById("profileOpener").click();
      }
    }
  }else
  if((event.key === 'F12') ||
    (event.ctrlKey && event.shiftKey && event.key === 'I') ||
    (event.ctrlKey && event.shiftKey && event.key === 'C') ||
    (event.metaKey && event.altKey && event.key === 'I') ||
    (event.metaKey && event.shiftKey && event.key === 'C')
  ) {
    if(document.getElementById("f12Tool").checked === false && document.getElementById("administratorTools").checked === false
    || document.getElementById("f12Tool").checked === false && document.getElementById("administratorTools").checked === true
    || document.getElementById("f12Tool").checked === true && document.getElementById("administratorTools").checked === false) {
      event.preventDefault();
    }
  }else
  if (event.keyCode == 13) {
    if(document.getElementById("alert").style.display === "block") {
      document.getElementById("alertRight").click();
    }else
    if(document.getElementById("loseModal").style.display === "block") {
      document.getElementById("reset").click();
    }
  }
};