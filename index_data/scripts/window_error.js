window.onerror = function() {
  errored = true;
  var alertcancel = document.getElementById("alertLeft");
  var alertconfirm = document.getElementById("alertRight");
  var alertnull = document.getElementById("alertCenter");
  document.getElementById("alert").style.display = "block";
  document.getElementById("alert").style.zIndex = "10";
  document.getElementById("alertService").style.display = "block";
  alertcancel.style.display = "none";
  alertconfirm.style.display = "block";
  alertnull.style.display = "none";
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("alertText").innerHTML = "Something error... Tell us if this alert is jump.";
    alertcancel.value = "...";
    alertconfirm.value = "Confirm";
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("alertText").innerHTML = "Произошла ошибка... Сообщите нам, если отображается это оповещение.";
    alertcancel.value = "...";
    alertconfirm.value = "Подтвердить";
  }else
  if(localStorage.getItem("lang") === "he") {
    document.getElementById("alertText").innerHTML = "משהו השתבש... ספרו לנו אם ההתראה הזו קופצת.";
    document.getElementById("alertText").style.direction = "rtl";
    alertcancel.value = "...";
    alertconfirm.value = "אישור";
  }
  alertconfirm.onclick = function() {
    document.getElementById("alert").style.display = "none";
    document.getElementById("alertService").style.display = "none";
    setTimeout(() => {
      document.getElementById("gameLogo").style.display = "none";
      loadTextures();
    }, 1000);
    defaultClickSound();
  }
  defaultClickSound();
};