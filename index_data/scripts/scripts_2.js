document.getElementById("reset").onclick = function() {
  closeModalSound();
  document.getElementById("loseModal").style.display = "none";
  gameOver = false;
  updateFoodPosition();
  updateSnakePosition();
  velocityX = 0;
  velocityY = 0;
  snakeBody = [];
  score = 0;
  if(localStorage.getItem("lang") === "en") {
    scoreElement.innerText = `Score: ${score}`;
  } else if(localStorage.getItem("lang") === "ru") {
    scoreElement.innerText = `Счет: ${score}`;
  } else if(localStorage.getItem("lang") === "he") {
    scoreElement.innerText = `ציון: ${score}`;
  }
  localStorage.setItem("steelScore", localStorage.getItem("high-score"));
  clearInterval(fireworksIntervalId);
  fireworksIntervalId = setInterval(playFireworksSounds, 1000);
};
function pauseGame() {
  var checkbox = document.getElementById("chechboxPausing");
  var alertcancel = document.getElementById("alertLeft");
  var alertconfirm = document.getElementById("alertRight");
  alertconfirm.style.display = "block";
  if(checkbox.checked === true) {
    clearInterval(setIntervalId);
    checkbox.classList.add("pauser");
    document.getElementById("btn000").classList.add("pauser");
    document.getElementById("alert").style.display = "block";
    alertcancel.value = "...";
    alertcancel.style.display = "none";
    if(localStorage.getItem("lang") === "en") {
      if(navigator.userAgent.match(/mobile/i)) {
        document.getElementById("alertText").innerHTML = "Game paused, press ''Continue'' to continue.";
      }else{
        document.getElementById("alertText").innerHTML = "Game paused, click ''Continue'' to continue.";
      };
      if(velocityY === -1) {
        document.getElementById("alertText").innerHTML += "<br>" + "You be continue to up.";
      }else
      if(velocityY === 1) {
        document.getElementById("alertText").innerHTML += "<br>" + "You be continue to down.";
      }else
      if(velocityX === -1) {
        document.getElementById("alertText").innerHTML += "<br>" + "You be continue to left.";
      }else
      if(velocityX === 1) {
        document.getElementById("alertText").innerHTML += "<br>" + "You be continue to right.";
      }
      alertconfirm.value = "Continue";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(navigator.userAgent.match(/mobile/i)) {
        document.getElementById("alertText").innerHTML = "Игра приостановлена, коснитесь ''Продолжить'', чтобы продолжить.";
      }else{
        document.getElementById("alertText").innerHTML = "Игра приостановлена, нажмите ''Продолжить'', чтобы продолжить.";
      };
      if(velocityY === -1) {
        document.getElementById("alertText").innerHTML += "<br>" + "Вы будете продолжать вверх.";
      }else
      if(velocityY === 1) {
        document.getElementById("alertText").innerHTML += "<br>" + "Вы будете продолжать вниз.";
      }else
      if(velocityX === -1) {
        document.getElementById("alertText").innerHTML += "<br>" + "Вы будете продолжать влево.";
      }else
      if(velocityX === 1) {
        document.getElementById("alertText").innerHTML += "<br>" + "Вы будете продолжать вправо.";
      }
      alertconfirm.value = "Продолжать";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(navigator.userAgent.match(/mobile/i)) {
        document.getElementById("alertText").innerHTML = "משחק נעצר, גע ''המשך'' בכדי להמשיך.";
      }else{
        document.getElementById("alertText").innerHTML = "משחק נעצר, לחץ ''המשך'' בכדי להמשיך.";
      };
      if(velocityY === -1) {
        document.getElementById("alertText").innerHTML += "<br>" + "אתם תמשיכו למעלה.";
      }else
      if(velocityY === 1) {
        document.getElementById("alertText").innerHTML += "<br>" + "אתם תמשיכו למטה.";
      }else
      if(velocityX === -1) {
        document.getElementById("alertText").innerHTML += "<br>" + "אתם תמשיכו שמאלה.";
      }else
      if(velocityX === 1) {
        document.getElementById("alertText").innerHTML += "<br>" + "אתם תמשיכו ימינה.";
      }
      alertconfirm.value = "המשך";
    }
    alertconfirm.onclick = function() {
      document.getElementById('chechboxPausing').click();
      alertconfirm.style.display = "none";
    }
  }else
  if(checkbox.checked === false) {
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("alertText").innerHTML = "Ready to continue in...";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("alertText").innerHTML = "Готово продолжить через...";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("alertText").innerHTML = "מוכן להמשיך בעוד...";
    }
    setTimeout(() => {
      document.getElementById("alertText").innerHTML = "3";
    },1000);
    setTimeout(() => {
      document.getElementById("alertText").innerHTML = "2";
    },2000);
    setTimeout(() => {
      document.getElementById("alertText").innerHTML = "1";
    },3000);
    setTimeout(() => {
      document.getElementById("alertText").innerHTML = "0";
      if(localStorage.getItem("difficulty") === "normal") {
        setIntervalId = setInterval(initGame, 140);
      }else
      if(localStorage.getItem("difficulty") === "hard") {
        setIntervalId = setInterval(initGame, 100);
      }else
      if(localStorage.getItem("difficulty") === "hell") {
        setIntervalId = setInterval(initGame, 50);
      }else{
        console.log("An error running in this script");
      }
      document.getElementById("alert").style.display = "none";
      checkbox.classList.remove("pauser");
      document.getElementById("btn000").classList.remove("pauser");
      playActiveMoveSound();
    },4000);
  }
  menuPauseWalkSound();
  defaultClickSound();
};
const dimensions = [
  "16",
  "32",
  "48",
  "76",
  "96",
  "120",
  "128",
  "144",
  "152",
  "167",
  "180",
  "192",
  "196",
  "228",
  "256",
  "300",
  "384",
  "512"
];
function iconAllLoad() {
  var favicon = document.createElement('link');
  var favicon16 = document.createElement('link');
  var favicon32 = document.createElement('link');
  var favicon48 = document.createElement('link');
  var favicon76 = document.createElement('link');
  var favicon96 = document.createElement('link');
  var favicon120 = document.createElement('link');
  var favicon128 = document.createElement('link');
  var favicon144 = document.createElement('link');
  var favicon152 = document.createElement('link');
  var favicon167 = document.createElement('link');
  var favicon180 = document.createElement('link');
  var favicon192 = document.createElement('link');
  var favicon196 = document.createElement('link');
  var favicon228 = document.createElement('link');
  var favicon256 = document.createElement('link');
  var favicon300 = document.createElement('link');
  var favicon384 = document.createElement('link');
  var favicon512 = document.createElement('link');
  subiconCode = "index_data/textures/system/icon_0.png";
  subiconCode16 = "index_data/textures/system/icon_" + dimensions[0] + ".png";
  subiconCode32 = "index_data/textures/system/icon_" + dimensions[1] + ".png";
  subiconCode48 = "index_data/textures/system/icon_" + dimensions[2] + ".png";
  subiconCode76 = "index_data/textures/system/icon_" + dimensions[3] + ".png";
  subiconCode96 = "index_data/textures/system/icon_" + dimensions[4] + ".png";
  subiconCode120 = "index_data/textures/system/icon_" + dimensions[5] + ".png";
  subiconCode128 = "index_data/textures/system/icon_" + dimensions[6] + ".png";
  subiconCode144 = "index_data/textures/system/icon_" + dimensions[7] + ".png";
  subiconCode152 = "index_data/textures/system/icon_" + dimensions[8] + ".png";
  subiconCode167 = "index_data/textures/system/icon_" + dimensions[9] + ".png";
  subiconCode180 = "index_data/textures/system/icon_" + dimensions[10] + ".png";
  subiconCode192 = "index_data/textures/system/icon_" + dimensions[11] + ".png";
  subiconCode196 = "index_data/textures/system/icon_" + dimensions[12] + ".png";
  subiconCode228 = "index_data/textures/system/icon_" + dimensions[13] + ".png";
  subiconCode256 = "index_data/textures/system/icon_" + dimensions[14] + ".png";
  subiconCode300 = "index_data/textures/system/icon_" + dimensions[15] + ".png";
  subiconCode384 = "index_data/textures/system/icon_" + dimensions[16] + ".png";
  subiconCode512 = "index_data/textures/system/icon_" + dimensions[17] + ".png";
  favicon.href = subiconCode;
  favicon.rel = 'icon';
  favicon16.href = subiconCode16;
  favicon16.rel = 'icon';
  favicon16.sizes = dimensions[0] + "x" + dimensions[0];
  favicon32.href = subiconCode32;
  favicon32.rel = 'icon';
  favicon32.sizes = dimensions[1] + "x" + dimensions[1];
  favicon48.href = subiconCode48;
  favicon48.rel = 'icon';
  favicon48.sizes = dimensions[2] + "x" + dimensions[2];
  favicon76.href = subiconCode76;
  favicon76.rel = 'icon';
  favicon76.sizes = dimensions[3] + "x" + dimensions[3];
  favicon96.href = subiconCode96;
  favicon96.rel = 'icon';
  favicon96.sizes = dimensions[4] + "x" + dimensions[4];
  favicon120.href = subiconCode120;
  favicon120.rel = 'icon';
  favicon120.sizes = dimensions[5] + "x" + dimensions[5];
  favicon128.href = subiconCode128;
  favicon128.rel = 'icon';
  favicon128.sizes = dimensions[6] + "x" + dimensions[6];
  favicon144.href = subiconCode144;
  favicon144.rel = 'icon';
  favicon144.sizes = dimensions[7] + "x" + dimensions[7];
  favicon152.href = subiconCode152;
  favicon152.rel = 'icon';
  favicon152.sizes = dimensions[8] + "x" + dimensions[8];
  favicon167.href = subiconCode167;
  favicon167.rel = 'icon';
  favicon167.sizes = dimensions[9] + "x" + dimensions[9];
  favicon180.href = subiconCode180;
  favicon180.rel = 'icon';
  favicon180.sizes = dimensions[10] + "x" + dimensions[10];
  favicon192.href = subiconCode192;
  favicon192.rel = 'icon';
  favicon192.sizes = dimensions[11] + "x" + dimensions[11];
  favicon196.href = subiconCode196;
  favicon196.rel = 'icon';
  favicon196.sizes = dimensions[12] + "x" + dimensions[12];
  favicon228.href = subiconCode228;
  favicon228.rel = 'icon';
  favicon228.sizes = dimensions[13] + "x" + dimensions[13];
  favicon256.href = subiconCode256;
  favicon256.rel = 'icon';
  favicon256.sizes = dimensions[14] + "x" + dimensions[14];
  favicon300.href = subiconCode300;
  favicon300.rel = 'icon';
  favicon300.sizes = dimensions[15] + "x" + dimensions[15];
  favicon384.href = subiconCode384;
  favicon384.rel = 'icon';
  favicon384.sizes = dimensions[16] + "x" + dimensions[16];
  favicon512.href = subiconCode512;
  favicon512.rel = 'icon';
  favicon512.sizes = dimensions[17] + "x" + dimensions[17];
  document.head.appendChild(favicon);
  document.head.appendChild(favicon16);
  document.head.appendChild(favicon32);
  document.head.appendChild(favicon48);
  document.head.appendChild(favicon76);
  document.head.appendChild(favicon96);
  document.head.appendChild(favicon120);
  document.head.appendChild(favicon128);
  document.head.appendChild(favicon144);
  document.head.appendChild(favicon152);
  document.head.appendChild(favicon167);
  document.head.appendChild(favicon180);
  document.head.appendChild(favicon192);
  document.head.appendChild(favicon196);
  document.head.appendChild(favicon228);
  document.head.appendChild(favicon256);
  document.head.appendChild(favicon300);
  document.head.appendChild(favicon384);
  document.head.appendChild(favicon512);
}
iconAllLoad();
function centerController() {
  document.getElementById("ccLang").classList.add("active");
  document.getElementById("clLang").classList.remove("active");
  document.getElementById("crLang").classList.remove("active");
  selectionSound();
};
function leftController() {
  document.getElementById("ccLang").classList.remove("active");
  document.getElementById("clLang").classList.add("active");
  document.getElementById("crLang").classList.remove("active");
  selectionSound();
};
function rightController() {
  document.getElementById("ccLang").classList.remove("active");
  document.getElementById("clLang").classList.remove("active");
  document.getElementById("crLang").classList.add("active");
  selectionSound();
};
function positioningController() {
  if(localStorage.getItem("controllerPosition") === "center") {
    document.getElementById("ccLang").classList.add("active");
    document.getElementById("clLang").classList.remove("active");
    document.getElementById("crLang").classList.remove("active");
    document.getElementById("controller").style.left = "auto";
    document.getElementById("controller").style.right = "auto";
  }else
  if(localStorage.getItem("controllerPosition") === "left") {
    document.getElementById("ccLang").classList.remove("active");
    document.getElementById("clLang").classList.add("active");
    document.getElementById("crLang").classList.remove("active");
    document.getElementById("controller").style.left = "0";
    document.getElementById("controller").style.right = "auto";
  }else
  if(localStorage.getItem("controllerPosition") === "right") {
    document.getElementById("ccLang").classList.remove("active");
    document.getElementById("clLang").classList.remove("active");
    document.getElementById("crLang").classList.add("active");
    document.getElementById("controller").style.left = "auto";
    document.getElementById("controller").style.right = "0";
  }
};
positioningController();
function checkDeviceType() {
  if(navigator.userAgent.match(/mobile/i)) {
    document.getElementById("controller").style.display = "grid";
    document.getElementById("selectOptionsControllerPosition").style.display = "flex";
    document.getElementById("cspLang").style.display = "block";
    document.getElementById("controllerSettingsLangs").style.display = "block";
    document.getElementById("navBtn").style.display = "none";
    document.getElementById("navBtn").style.top = "auto";
    document.getElementById("navBtn").style.bottom = "100px";
    document.getElementById("chechboxPausing").style.display = "none";
    document.getElementById("chechboxPausing").style.bottom = "100px";
    document.getElementById("devCheck").style.display = "block";
    document.getElementById("hr0hiddenTuggle").style.display = "block";
    document.getElementById("hideInMobileAdminTools").style.display = "none";
    document.getElementById("hideInMobileAdminTools").style.display = "none";
  }else{
    document.getElementById("controller").style.display = "none";
    document.getElementById("selectOptionsControllerPosition").style.display = "none";
    document.getElementById("cspLang").style.display = "none";
    document.getElementById("controllerSettingsLangs").style.display = "none";
    document.getElementById("navBtn").style.display = "flex";
    document.getElementById("navBtn").style.top = "auto";
    document.getElementById("navBtn").style.bottom = "0";
    document.getElementById("chechboxPausing").style.display = "block";
    document.getElementById("devCheck").style.display = "none";
    document.getElementById("hr0hiddenTuggle").style.display = "none";
    document.getElementById("hideInMobileAdminTools").style.display = "block";
    document.getElementById("hideInMobileAdminTools").style.display = "block";
  }
};
checkDeviceType();
function autoSnakeLoadNew() {
  if(localStorage.getItem("snakeStyle") === null) {
    // load snake
    localStorage.setItem("snakeStyle", "imgSnakeOne");
    localStorage.setItem("number","one");
    window.location.reload();
  }else
  if(localStorage.getItem("snakeStyle") === "") {
    // load snake
    localStorage.setItem("snakeStyle", "imgSnakeOne");
    localStorage.setItem("number","one");
    window.location.reload();
  }else{
    return false;
  }
};
function autoDifficultyLoadNew() {
  if(localStorage.getItem("difficulty") === null) {
    // load difficulty
    localStorage.setItem("difficulty", "normal");
    window.location.reload();
  }else
  if(localStorage.getItem("difficulty") === "") {
    // load difficulty
    localStorage.setItem("difficulty", "normal");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFoodsLoadNew() {
  if(localStorage.getItem("foodStyle") === null) {
    // load food
    localStorage.setItem("foodStyle", "imgMeow");
    localStorage.setItem("reapitfood","meow");
    window.location.reload();
  }else
  if(localStorage.getItem("foodStyle") === "") {
    // load food
    localStorage.setItem("foodStyle", "imgMeow");
    localStorage.setItem("reapitfood","meow");
    window.location.reload();
  }else{
    return false;
  }
};
function autoBoardsLoadNew() {
  if(localStorage.getItem("boardStyle") === null) {
    // load board
    localStorage.setItem("boardStyle", "imgAlpha");
    window.location.reload();
  }else
  if(localStorage.getItem("boardStyle") === "") {
    // load board
    localStorage.setItem("boardStyle", "imgAlpha");
    window.location.reload();
  }else{
    return false;
  }
};
function autoControllerPoseLoadNew() {
  if(localStorage.getItem("controllerPosition") === null) {
    // load controller position
    localStorage.setItem("controllerPosition", "center");
    window.location.reload();
  }else
  if(localStorage.getItem("controllerPosition") === "") {
    // load controller position
    localStorage.setItem("controllerPosition", "center");
    window.location.reload();
  }else{
    return false;
  }
};
function autoLanguageLoadNew() {
  if(localStorage.getItem("lang") === null) {
    // load language
    localStorage.setItem("lang", "en");
    window.location.reload();
  }else
  if(localStorage.getItem("lang") === "") {
    // load language
    localStorage.setItem("lang", "en");
    window.location.reload();
  }else{
    return false;
  }
};
function autoMusicLoadNew() {
  if(localStorage.getItem("musicbg") === null) {
    // load music
    localStorage.setItem("musicbg", "sauMusic");
    document.getElementById("checkMusicMute").click();
    window.location.reload();
  }else
  if(localStorage.getItem("musicbg") === "") {
    // load music
    localStorage.setItem("musicbg", "sauMusic");
    document.getElementById("checkMusicMute").click();
    window.location.reload();
  }else{
    return false;
  }
};
function autoDynamicControllerLoadNew() {
  if(localStorage.getItem("controllerTypeDev") === null) {
    // load music
    localStorage.setItem("controllerTypeDev", "classic");
    window.location.reload();
  }else
  if(localStorage.getItem("controllerTypeDev") === "") {
    // load music
    localStorage.setItem("controllerTypeDev", "classic");
    window.location.reload();
  }else{
    return false;
  }
};
function autoMusicCheckLoadNew() {
  if(localStorage.getItem("musicPlay") === null) {
    // load music checkbox
    localStorage.setItem("musicPlay", "true");
    window.location.reload();
  }else
  if(localStorage.getItem("musicPlay") === "") {
    // load music checkbox
    localStorage.setItem("musicPlay", "true");
    window.location.reload();
  }else{
    return false;
  }
};
function autoSfxProgLoadNew() {
  if(localStorage.getItem("sfxvolumedata") === null) {
    // load sfx volume
    localStorage.setItem("sfxvolumedata", "1.0");
    window.location.reload();
  }else
  if(localStorage.getItem("sfxvolumedata") === "") {
    // load sfx volume
    localStorage.setItem("sfxvolumedata", "1.0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoMusicProgLoadNew() {
  if(localStorage.getItem("musicvolumedata") === null) {
    // load music volume
    localStorage.setItem("musicvolumedata", "1.0");
    window.location.reload();
  }else
  if(localStorage.getItem("musicvolumedata") === "") {
    // load music volume
    localStorage.setItem("musicvolumedata", "1.0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoMovementLoadNew() {
  if(localStorage.getItem("movementbg") === null) {
    // load walk
    localStorage.setItem("movementbg", "playerWalk");
    window.location.reload();
  }else
  if(localStorage.getItem("movementbg") === "") {
    // load walk
    localStorage.setItem("movementbg", "playerWalk");
    window.location.reload();
  }else{
    return false;
  }
};
function autoMeawStorageLoadNew() {
  if(localStorage.getItem("meawTokenStorage") === null) {
    localStorage.setItem("meawTokenStorage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("meawTokenStorage") === "") {
    localStorage.setItem("meawTokenStorage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoGoldStorageLoadNew() {
  if(localStorage.getItem("goldStorage") === null) {
    localStorage.setItem("goldStorage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("goldStorage") === "") {
    localStorage.setItem("goldStorage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoAlphaStorageLoadNew() {
  if(localStorage.getItem("alphaCoinStorage") === null) {
    localStorage.setItem("alphaCoinStorage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("alphaCoinStorage") === "") {
    localStorage.setItem("alphaCoinStorage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoCrystalStorageLoadNew() {
  if(localStorage.getItem("crystalStorage") === null) {
    localStorage.setItem("crystalStorage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("crystalStorage") === "") {
    localStorage.setItem("crystalStorage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoTicketStorageLoadNew() {
  if(localStorage.getItem("ticketStorage") === null) {
    localStorage.setItem("ticketStorage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("ticketStorage") === "") {
    localStorage.setItem("ticketStorage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoTicketChStorageLoadNew() {
  if(localStorage.getItem("ticketChromaticStorage") === null) {
    localStorage.setItem("ticketChromaticStorage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("ticketChromaticStorage") === "") {
    localStorage.setItem("ticketChromaticStorage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoTicketPrStorageLoadNew() {
  if(localStorage.getItem("ticketPremiumStorage") === null) {
    localStorage.setItem("ticketPremiumStorage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("ticketPremiumStorage") === "") {
    localStorage.setItem("ticketPremiumStorage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoTicketP2rStorageLoadNew() {
  if(localStorage.getItem("ticketPremium2Storage") === null) {
    localStorage.setItem("ticketPremium2Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("ticketPremium2Storage") === "") {
    localStorage.setItem("ticketPremium2Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoVirtualTokenrStorageLoadNew() {
  if(localStorage.getItem("virtualTokenStorage") === null) {
    localStorage.setItem("virtualTokenStorage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("virtualTokenStorage") === "") {
    localStorage.setItem("virtualTokenStorage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood000StorageLoadNew() {
  if(localStorage.getItem("food000Storage") === null) {
    localStorage.setItem("food000Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food000Storage") === "") {
    localStorage.setItem("food000Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood001StorageLoadNew() {
  if(localStorage.getItem("food001Storage") === null) {
    localStorage.setItem("food001Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food001Storage") === "") {
    localStorage.setItem("food001Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood002StorageLoadNew() {
  if(localStorage.getItem("food002Storage") === null) {
    localStorage.setItem("food002Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food002Storage") === "") {
    localStorage.setItem("food002Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood003StorageLoadNew() {
  if(localStorage.getItem("food003Storage") === null) {
    localStorage.setItem("food003Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food003Storage") === "") {
    localStorage.setItem("food003Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood004StorageLoadNew() {
  if(localStorage.getItem("food004Storage") === null) {
    localStorage.setItem("food004Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food004Storage") === "") {
    localStorage.setItem("food004Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood005StorageLoadNew() {
  if(localStorage.getItem("food005Storage") === null) {
    localStorage.setItem("food005Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food005Storage") === "") {
    localStorage.setItem("food005Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood006StorageLoadNew() {
  if(localStorage.getItem("food006Storage") === null) {
    localStorage.setItem("food006Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food006Storage") === "") {
    localStorage.setItem("food006Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood007StorageLoadNew() {
  if(localStorage.getItem("food007Storage") === null) {
    localStorage.setItem("food007Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food007Storage") === "") {
    localStorage.setItem("food007Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood008StorageLoadNew() {
  if(localStorage.getItem("food008Storage") === null) {
    localStorage.setItem("food008Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food008Storage") === "") {
    localStorage.setItem("food008Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood009StorageLoadNew() {
  if(localStorage.getItem("food009Storage") === null) {
    localStorage.setItem("food009Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food009Storage") === "") {
    localStorage.setItem("food009Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood010StorageLoadNew() {
  if(localStorage.getItem("food010Storage") === null) {
    localStorage.setItem("food010Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food010Storage") === "") {
    localStorage.setItem("food010Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood011StorageLoadNew() {
  if(localStorage.getItem("food011Storage") === null) {
    localStorage.setItem("food011Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food011Storage") === "") {
    localStorage.setItem("food011Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood012StorageLoadNew() {
  if(localStorage.getItem("food012Storage") === null) {
    localStorage.setItem("food012Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food012Storage") === "") {
    localStorage.setItem("food012Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood013StorageLoadNew() {
  if(localStorage.getItem("food013Storage") === null) {
    localStorage.setItem("food013Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food013Storage") === "") {
    localStorage.setItem("food013Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood014StorageLoadNew() {
  if(localStorage.getItem("food014Storage") === null) {
    localStorage.setItem("food014Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food014Storage") === "") {
    localStorage.setItem("food014Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood015StorageLoadNew() {
  if(localStorage.getItem("food015Storage") === null) {
    localStorage.setItem("food015Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food015Storage") === "") {
    localStorage.setItem("food015Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood016StorageLoadNew() {
  if(localStorage.getItem("food016Storage") === null) {
    localStorage.setItem("food016Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food016Storage") === "") {
    localStorage.setItem("food016Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood017StorageLoadNew() {
  if(localStorage.getItem("food017Storage") === null) {
    localStorage.setItem("food017Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food017Storage") === "") {
    localStorage.setItem("food017Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood018StorageLoadNew() {
  if(localStorage.getItem("food018Storage") === null) {
    localStorage.setItem("food018Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food018Storage") === "") {
    localStorage.setItem("food018Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood019StorageLoadNew() {
  if(localStorage.getItem("food019Storage") === null) {
    localStorage.setItem("food019Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food019Storage") === "") {
    localStorage.setItem("food019Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood020StorageLoadNew() {
  if(localStorage.getItem("food020Storage") === null) {
    localStorage.setItem("food020Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food020Storage") === "") {
    localStorage.setItem("food020Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood021StorageLoadNew() {
  if(localStorage.getItem("food021Storage") === null) {
    localStorage.setItem("food021Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food021Storage") === "") {
    localStorage.setItem("food021Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood022StorageLoadNew() {
  if(localStorage.getItem("food022Storage") === null) {
    localStorage.setItem("food022Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food022Storage") === "") {
    localStorage.setItem("food022Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood023StorageLoadNew() {
  if(localStorage.getItem("food023Storage") === null) {
    localStorage.setItem("food023Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food023Storage") === "") {
    localStorage.setItem("food023Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood024StorageLoadNew() {
  if(localStorage.getItem("food024Storage") === null) {
    localStorage.setItem("food024Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food024Storage") === "") {
    localStorage.setItem("food024Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood025StorageLoadNew() {
  if(localStorage.getItem("food025Storage") === null) {
    localStorage.setItem("food025Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food025Storage") === "") {
    localStorage.setItem("food025Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood026StorageLoadNew() {
  if(localStorage.getItem("food026Storage") === null) {
    localStorage.setItem("food026Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food026Storage") === "") {
    localStorage.setItem("food026Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood027StorageLoadNew() {
  if(localStorage.getItem("food027Storage") === null) {
    localStorage.setItem("food027Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food027Storage") === "") {
    localStorage.setItem("food027Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood028StorageLoadNew() {
  if(localStorage.getItem("food028Storage") === null) {
    localStorage.setItem("food028Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food028Storage") === "") {
    localStorage.setItem("food028Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood029StorageLoadNew() {
  if(localStorage.getItem("food029Storage") === null) {
    localStorage.setItem("food029Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food029Storage") === "") {
    localStorage.setItem("food029Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood030StorageLoadNew() {
  if(localStorage.getItem("food030Storage") === null) {
    localStorage.setItem("food030Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food030Storage") === "") {
    localStorage.setItem("food030Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood031StorageLoadNew() {
  if(localStorage.getItem("food031Storage") === null) {
    localStorage.setItem("food031Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food031Storage") === "") {
    localStorage.setItem("food031Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood032StorageLoadNew() {
  if(localStorage.getItem("food032Storage") === null) {
    localStorage.setItem("food032Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food032Storage") === "") {
    localStorage.setItem("food032Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood033StorageLoadNew() {
  if(localStorage.getItem("food033Storage") === null) {
    localStorage.setItem("food033Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food033Storage") === "") {
    localStorage.setItem("food033Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood034StorageLoadNew() {
  if(localStorage.getItem("food034Storage") === null) {
    localStorage.setItem("food034Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food034Storage") === "") {
    localStorage.setItem("food034Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood035StorageLoadNew() {
  if(localStorage.getItem("food035Storage") === null) {
    localStorage.setItem("food035Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food035Storage") === "") {
    localStorage.setItem("food035Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood036StorageLoadNew() {
  if(localStorage.getItem("food036Storage") === null) {
    localStorage.setItem("food036Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food036Storage") === "") {
    localStorage.setItem("food036Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood037StorageLoadNew() {
  if(localStorage.getItem("food037Storage") === null) {
    localStorage.setItem("food037Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food037Storage") === "") {
    localStorage.setItem("food037Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood038StorageLoadNew() {
  if(localStorage.getItem("food038Storage") === null) {
    localStorage.setItem("food038Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food038Storage") === "") {
    localStorage.setItem("food038Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood039StorageLoadNew() {
  if(localStorage.getItem("food039Storage") === null) {
    localStorage.setItem("food039Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food039Storage") === "") {
    localStorage.setItem("food039Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood040StorageLoadNew() {
  if(localStorage.getItem("food040Storage") === null) {
    localStorage.setItem("food040Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food040Storage") === "") {
    localStorage.setItem("food040Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood041StorageLoadNew() {
  if(localStorage.getItem("food041Storage") === null) {
    localStorage.setItem("food041Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food041Storage") === "") {
    localStorage.setItem("food041Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood042StorageLoadNew() {
  if(localStorage.getItem("food042Storage") === null) {
    localStorage.setItem("food042Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food042Storage") === "") {
    localStorage.setItem("food042Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood043StorageLoadNew() {
  if(localStorage.getItem("food043Storage") === null) {
    localStorage.setItem("food043Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food043Storage") === "") {
    localStorage.setItem("food043Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood044StorageLoadNew() {
  if(localStorage.getItem("food044Storage") === null) {
    localStorage.setItem("food044Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food044Storage") === "") {
    localStorage.setItem("food044Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood045StorageLoadNew() {
  if(localStorage.getItem("food045Storage") === null) {
    localStorage.setItem("food045Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food045Storage") === "") {
    localStorage.setItem("food045Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood046StorageLoadNew() {
  if(localStorage.getItem("food046Storage") === null) {
    localStorage.setItem("food046Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food046Storage") === "") {
    localStorage.setItem("food046Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood047StorageLoadNew() {
  if(localStorage.getItem("food047Storage") === null) {
    localStorage.setItem("food047Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food047Storage") === "") {
    localStorage.setItem("food047Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood048StorageLoadNew() {
  if(localStorage.getItem("food048Storage") === null) {
    localStorage.setItem("food048Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food048Storage") === "") {
    localStorage.setItem("food048Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood049StorageLoadNew() {
  if(localStorage.getItem("food049Storage") === null) {
    localStorage.setItem("food049Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food049Storage") === "") {
    localStorage.setItem("food049Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood050StorageLoadNew() {
  if(localStorage.getItem("food050Storage") === null) {
    localStorage.setItem("food050Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food050Storage") === "") {
    localStorage.setItem("food050Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood051StorageLoadNew() {
  if(localStorage.getItem("food051Storage") === null) {
    localStorage.setItem("food051Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food051Storage") === "") {
    localStorage.setItem("food051Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood052StorageLoadNew() {
  if(localStorage.getItem("food052Storage") === null) {
    localStorage.setItem("food052Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food052Storage") === "") {
    localStorage.setItem("food052Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood053StorageLoadNew() {
  if(localStorage.getItem("food053Storage") === null) {
    localStorage.setItem("food053Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food053Storage") === "") {
    localStorage.setItem("food053Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood054StorageLoadNew() {
  if(localStorage.getItem("food054Storage") === null) {
    localStorage.setItem("food054Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food054Storage") === "") {
    localStorage.setItem("food054Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood055StorageLoadNew() {
  if(localStorage.getItem("food055Storage") === null) {
    localStorage.setItem("food055Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food055Storage") === "") {
    localStorage.setItem("food055Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood056StorageLoadNew() {
  if(localStorage.getItem("food056Storage") === null) {
    localStorage.setItem("food056Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food056Storage") === "") {
    localStorage.setItem("food056Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood057StorageLoadNew() {
  if(localStorage.getItem("food057Storage") === null) {
    localStorage.setItem("food057Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food057Storage") === "") {
    localStorage.setItem("food057Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood058StorageLoadNew() {
  if(localStorage.getItem("food058Storage") === null) {
    localStorage.setItem("food058Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food058Storage") === "") {
    localStorage.setItem("food058Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood059StorageLoadNew() {
  if(localStorage.getItem("food059Storage") === null) {
    localStorage.setItem("food059Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food059Storage") === "") {
    localStorage.setItem("food059Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood060StorageLoadNew() {
  if(localStorage.getItem("food060Storage") === null) {
    localStorage.setItem("food060Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food060Storage") === "") {
    localStorage.setItem("food060Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood061StorageLoadNew() {
  if(localStorage.getItem("food061Storage") === null) {
    localStorage.setItem("food061Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food061Storage") === "") {
    localStorage.setItem("food061Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood062StorageLoadNew() {
  if(localStorage.getItem("food062Storage") === null) {
    localStorage.setItem("food062Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food062Storage") === "") {
    localStorage.setItem("food062Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood063StorageLoadNew() {
  if(localStorage.getItem("food063Storage") === null) {
    localStorage.setItem("food063Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food063Storage") === "") {
    localStorage.setItem("food063Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood064StorageLoadNew() {
  if(localStorage.getItem("food064Storage") === null) {
    localStorage.setItem("food064Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food064Storage") === "") {
    localStorage.setItem("food064Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood065StorageLoadNew() {
  if(localStorage.getItem("food065Storage") === null) {
    localStorage.setItem("food065Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food065Storage") === "") {
    localStorage.setItem("food065Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood066StorageLoadNew() {
  if(localStorage.getItem("food066Storage") === null) {
    localStorage.setItem("food066Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food066Storage") === "") {
    localStorage.setItem("food066Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood067StorageLoadNew() {
  if(localStorage.getItem("food067Storage") === null) {
    localStorage.setItem("food067Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food067Storage") === "") {
    localStorage.setItem("food067Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood068StorageLoadNew() {
  if(localStorage.getItem("food068Storage") === null) {
    localStorage.setItem("food068Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food068Storage") === "") {
    localStorage.setItem("food068Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood069StorageLoadNew() {
  if(localStorage.getItem("food069Storage") === null) {
    localStorage.setItem("food069Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food069Storage") === "") {
    localStorage.setItem("food069Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood070StorageLoadNew() {
  if(localStorage.getItem("food070Storage") === null) {
    localStorage.setItem("food070Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food070Storage") === "") {
    localStorage.setItem("food070Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood071StorageLoadNew() {
  if(localStorage.getItem("food071Storage") === null) {
    localStorage.setItem("food071Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food071Storage") === "") {
    localStorage.setItem("food071Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood072StorageLoadNew() {
  if(localStorage.getItem("food072Storage") === null) {
    localStorage.setItem("food072Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food072Storage") === "") {
    localStorage.setItem("food072Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood073StorageLoadNew() {
  if(localStorage.getItem("food073Storage") === null) {
    localStorage.setItem("food073Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food073Storage") === "") {
    localStorage.setItem("food073Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood074StorageLoadNew() {
  if(localStorage.getItem("food074Storage") === null) {
    localStorage.setItem("food074Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food074Storage") === "") {
    localStorage.setItem("food074Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood075StorageLoadNew() {
  if(localStorage.getItem("food075Storage") === null) {
    localStorage.setItem("food075Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food075Storage") === "") {
    localStorage.setItem("food075Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood076StorageLoadNew() {
  if(localStorage.getItem("food076Storage") === null) {
    localStorage.setItem("food076Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food076Storage") === "") {
    localStorage.setItem("food076Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood077StorageLoadNew() {
  if(localStorage.getItem("food077Storage") === null) {
    localStorage.setItem("food077Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food077Storage") === "") {
    localStorage.setItem("food077Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoFood077StorageLoadNew() {
  if(localStorage.getItem("food077Storage") === null) {
    localStorage.setItem("food077Storage", "0");
    window.location.reload();
  }else
  if(localStorage.getItem("food077Storage") === "") {
    localStorage.setItem("food077Storage", "0");
    window.location.reload();
  }else{
    return false;
  }
};
function autoLoadingAnimLogoLoadNew() {
  if(localStorage.getItem("loadingStyle") === null) {
    localStorage.setItem("loadingStyle", "classic");
    window.location.reload();
  }else
  if(localStorage.getItem("loadingStyle") === "") {
    localStorage.setItem("loadingStyle", "classic");
    window.location.reload();
  }else{
    return false;
  }
};
function autoAmbientCheckLoadNew() {
  if(localStorage.getItem("ambients") === null) {
    localStorage.setItem("ambients", "true");
    window.location.reload();
  }else
  if(localStorage.getItem("ambients") === "") {
    localStorage.setItem("ambients", "true");
    window.location.reload();
  }else{
    return false;
  }
};
function autoSnakeColorerLoadNew() {
  if(localStorage.getItem("snakeColor") === null) {
    localStorage.setItem("snakeColor", "#ddaaff");
    window.location.reload();
  }else
  if(localStorage.getItem("snakeColor") === "") {
    localStorage.setItem("snakeColor", "#ddaaff");
    window.location.reload();
  }else{
    return false;
  }
};
function autoSnakeLettersLoadNew() {
  if(localStorage.getItem("snakeLetter") === null) {
    localStorage.setItem("snakeLetter", " ");
    window.location.reload();
  }else
  if(localStorage.getItem("snakeLetter") === "") {
    localStorage.setItem("snakeLetter", " ");
    window.location.reload();
  }else{
    return false;
  }
};
function autoSnakePosLoadNew() {
  if(localStorage.getItem("snakePosType") === null) {
    localStorage.setItem("snakePosType", "custom");
    window.location.reload();
  }else
  if(localStorage.getItem("snakePosType") === "") {
    localStorage.setItem("snakePosType", "custom");
    window.location.reload();
  }else{
    return false;
  }
};
function autoSnakePosXLoadNew() {
  if(localStorage.getItem("snakePosX") === null) {
    localStorage.setItem("snakePosX", "5");
    window.location.reload();
  }else
  if(localStorage.getItem("snakePosX") === "") {
    localStorage.setItem("snakePosX", "5");
    window.location.reload();
  }else{
    return false;
  }
};
function autoSnakePosYLoadNew() {
  if(localStorage.getItem("snakePosY") === null) {
    localStorage.setItem("snakePosY", "5");
    window.location.reload();
  }else
  if(localStorage.getItem("snakePosY") === "") {
    localStorage.setItem("snakePosY", "5");
    window.location.reload();
  }else{
    return false;
  }
};
function levelsSystem() {
  var star = document.getElementById("star");
  var substar = document.getElementById("substar");
  if(localStorage.getItem("high-score") == "0" || localStorage.getItem("high-score") == null) {
    document.getElementById("leaguelevel").innerHTML = "0";
    star.classList.add("null-league");
    substar.classList.add("null-league");
  }else
  if(localStorage.getItem("high-score") == "1" || localStorage.getItem("high-score") == "2" || localStorage.getItem("high-score") == "11" || localStorage.getItem("high-score") == "12" || localStorage.getItem("high-score") == "21" || localStorage.getItem("high-score") == "22" ||  localStorage.getItem("high-score") == "31" || localStorage.getItem("high-score") == "32" || localStorage.getItem("high-score") == "41" || localStorage.getItem("high-score") == "42" || localStorage.getItem("high-score") == "51" || localStorage.getItem("high-score") == "52" || localStorage.getItem("high-score") == "61" || localStorage.getItem("high-score") == "62" || localStorage.getItem("high-score") == "71" || localStorage.getItem("high-score") == "72") {
    document.getElementById("leaguelevel").innerHTML = "1";
    document.getElementById("subleaguelevel").innerHTML = "1";
  }else
  if(localStorage.getItem("high-score") == "3" || localStorage.getItem("high-score") == "4" || localStorage.getItem("high-score") == "13" || localStorage.getItem("high-score") == "14" || localStorage.getItem("high-score") == "23" || localStorage.getItem("high-score") == "24" || localStorage.getItem("high-score") == "33" || localStorage.getItem("high-score") == "34" || localStorage.getItem("high-score") == "43" || localStorage.getItem("high-score") == "44" || localStorage.getItem("high-score") == "53" || localStorage.getItem("high-score") == "54" || localStorage.getItem("high-score") == "63" || localStorage.getItem("high-score") == "64" || localStorage.getItem("high-score") == "73" || localStorage.getItem("high-score") == "74") {
    document.getElementById("leaguelevel").innerHTML = "2";
    document.getElementById("subleaguelevel").innerHTML = "2";
  }else
  if(localStorage.getItem("high-score") == "5" || localStorage.getItem("high-score") == "6" || localStorage.getItem("high-score") == "15" || localStorage.getItem("high-score") == "16" || localStorage.getItem("high-score") == "25" || localStorage.getItem("high-score") == "26" || localStorage.getItem("high-score") == "35" || localStorage.getItem("high-score") == "36" || localStorage.getItem("high-score") == "45" || localStorage.getItem("high-score") == "46" || localStorage.getItem("high-score") == "55" || localStorage.getItem("high-score") == "56" || localStorage.getItem("high-score") == "65" || localStorage.getItem("high-score") == "66" || localStorage.getItem("high-score") == "75" || localStorage.getItem("high-score") == "76") {
    document.getElementById("leaguelevel").innerHTML = "3";
    document.getElementById("subleaguelevel").innerHTML = "3";
  }else
  if(localStorage.getItem("high-score") == "7" || localStorage.getItem("high-score") == "8" || localStorage.getItem("high-score") == "17" || localStorage.getItem("high-score") == "18" || localStorage.getItem("high-score") == "27" || localStorage.getItem("high-score") == "28" || localStorage.getItem("high-score") == "37" || localStorage.getItem("high-score") == "38" || localStorage.getItem("high-score") == "47" || localStorage.getItem("high-score") == "48" || localStorage.getItem("high-score") == "57" || localStorage.getItem("high-score") == "58" || localStorage.getItem("high-score") == "67" || localStorage.getItem("high-score") == "68" || localStorage.getItem("high-score") == "77" || localStorage.getItem("high-score") == "78") {
    document.getElementById("leaguelevel").innerHTML = "4";
    document.getElementById("subleaguelevel").innerHTML = "4";
  }else
  if(localStorage.getItem("high-score") == "9" || localStorage.getItem("high-score") == "19" || localStorage.getItem("high-score") == "29" || localStorage.getItem("high-score") == "39" || localStorage.getItem("high-score") == "49" || localStorage.getItem("high-score") == "59" || localStorage.getItem("high-score") == "69" || localStorage.getItem("high-score") == "79" || localStorage.getItem("high-score") == "80" || localStorage.getItem("high-score") == "10" || localStorage.getItem("high-score") == "20" || localStorage.getItem("high-score") == "30" || localStorage.getItem("high-score") == "40" || localStorage.getItem("high-score") == "50" || localStorage.getItem("high-score") == "60" || localStorage.getItem("high-score") == "70") {
    document.getElementById("leaguelevel").innerHTML = "5";
    document.getElementById("subleaguelevel").innerHTML = "5";
  }else
  if(localStorage.getItem("high-score") > "80") {
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leaguelevel").innerHTML = "5 (MAX)";
      document.getElementById("subleaguelevel").innerHTML = "5 (MAX)";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leaguelevel").innerHTML = "5 (МАКС)";
      document.getElementById("subleaguelevel").innerHTML = "5 (МАКС)";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leaguelevel").innerHTML = "5 (מקס)";
      document.getElementById("subleaguelevel").innerHTML = "5 (מקס)";
    }
  }
}
levelsSystem();
function leagueSystem() {
  if(localStorage.getItem("high-score") == "0" || localStorage.getItem("high-score") == null) {
    document.getElementById("leagueImage").classList.add("null-league");
    document.getElementById("subleagueImage").classList.add("null-league");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Non league";
      document.getElementById("subleagueType").innerHTML = "Non league";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Нет лиге";
      document.getElementById("subleagueType").innerHTML = "Нет лиге";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "לא בליגה";
      document.getElementById("subleagueType").innerHTML = "לא בליגה";
    }
  }else
  if(localStorage.getItem("high-score") == "1" || localStorage.getItem("high-score") == "2" || localStorage.getItem("high-score") == "3" || localStorage.getItem("high-score") == "4" || localStorage.getItem("high-score") == "5" || localStorage.getItem("high-score") == "6" || localStorage.getItem("high-score") == "7" || localStorage.getItem("high-score") == "8" || localStorage.getItem("high-score") == "9" || localStorage.getItem("high-score") == "10") {
    document.getElementById("leagueImage").classList.add("bronze");
    document.getElementById("leagueImage").classList.remove("null-league");
    document.getElementById("subleagueImage").classList.add("bronze");
    document.getElementById("subleagueImage").classList.remove("null-league");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Bronze League";
      document.getElementById("subleagueType").innerHTML = "Bronze League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Бронзовая лига";
      document.getElementById("subleagueType").innerHTML = "Бронзовая лига";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "ליגת הארד";
      document.getElementById("subleagueType").innerHTML = "ליגת הארד";
    }
    star.classList.remove("null-league");
    substar.classList.remove("null-league");
    star.classList.add("bronze");
    substar.classList.add("bronze");
  }else
  if(localStorage.getItem("high-score") == "11" || localStorage.getItem("high-score") == "12" || localStorage.getItem("high-score") == "13" || localStorage.getItem("high-score") == "14" || localStorage.getItem("high-score") == "15" || localStorage.getItem("high-score") == "16" || localStorage.getItem("high-score") == "17" || localStorage.getItem("high-score") == "18" || localStorage.getItem("high-score") == "19" || localStorage.getItem("high-score") == "20") {
    document.getElementById("leagueImage").classList.add("silver");
    document.getElementById("leagueImage").classList.remove("bronze");
    document.getElementById("subleagueImage").classList.add("silver");
    document.getElementById("subleagueImage").classList.remove("bronze");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Silver League";
      document.getElementById("subleagueType").innerHTML = "Silver League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Серебряная лига";
      document.getElementById("subleagueType").innerHTML = "Серебряная лига";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "ליגת הכסף";
      document.getElementById("subleagueType").innerHTML = "ליגת הכסף";
    }
    star.classList.remove("bronze");
    substar.classList.remove("bronze");
    star.classList.add("silver");
    substar.classList.add("silver");
  }else
  if(localStorage.getItem("high-score") == "21" || localStorage.getItem("high-score") == "22" || localStorage.getItem("high-score") == "23" || localStorage.getItem("high-score") == "24" || localStorage.getItem("high-score") == "25" || localStorage.getItem("high-score") == "26" || localStorage.getItem("high-score") == "27" || localStorage.getItem("high-score") == "28" || localStorage.getItem("high-score") == "29" || localStorage.getItem("high-score") == "30") {
    document.getElementById("leagueImage").classList.add("goldleague");
    document.getElementById("leagueImage").classList.remove("silver");
    document.getElementById("subleagueImage").classList.add("goldleague");
    document.getElementById("subleagueImage").classList.remove("silver");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Gold League";
      document.getElementById("subleagueType").innerHTML = "Gold League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Золотая лига";
      document.getElementById("subleagueType").innerHTML = "Золотая лига";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "ליגת הזהב";
      document.getElementById("subleagueType").innerHTML = "ליגת הזהב";
    }
    star.classList.remove("silver");
    substar.classList.remove("silver");
    star.classList.add("goldleague");
    substar.classList.add("goldleague");
  }else
  if(localStorage.getItem("high-score") == "31" || localStorage.getItem("high-score") == "32" || localStorage.getItem("high-score") == "33" || localStorage.getItem("high-score") == "34" || localStorage.getItem("high-score") == "35" || localStorage.getItem("high-score") == "36" || localStorage.getItem("high-score") == "37" || localStorage.getItem("high-score") == "38" || localStorage.getItem("high-score") == "39" || localStorage.getItem("high-score") == "40") {
    document.getElementById("leagueImage").classList.add("platinium");
    document.getElementById("leagueImage").classList.remove("goldleague");
    document.getElementById("subleagueImage").classList.add("platinium");
    document.getElementById("subleagueImage").classList.remove("goldleague");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Platinum League";
      document.getElementById("subleagueType").innerHTML = "Platinum League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Платиновая лига";
      document.getElementById("subleagueType").innerHTML = "Платиновая лига";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "ליגת פלטינה";
      document.getElementById("subleagueType").innerHTML = "ליגת פלטינה";
    }
    star.classList.remove("goldleague");
    substar.classList.remove("goldleague");
    star.classList.add("platinium");
    substar.classList.add("platinium");
  }else
  if(localStorage.getItem("high-score") == "41" || localStorage.getItem("high-score") == "42" || localStorage.getItem("high-score") == "43" || localStorage.getItem("high-score") == "44" || localStorage.getItem("high-score") == "45" || localStorage.getItem("high-score") == "46" || localStorage.getItem("high-score") == "47" || localStorage.getItem("high-score") == "48" || localStorage.getItem("high-score") == "49" || localStorage.getItem("high-score") == "50") {
    document.getElementById("leagueImage").classList.add("diamond");
    document.getElementById("leagueImage").classList.remove("platinium");
    document.getElementById("subleagueImage").classList.add("diamond");
    document.getElementById("subleagueImage").classList.remove("platinium");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Diamond League";
      document.getElementById("subleagueType").innerHTML = "Diamond League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Алмазная лига";
      document.getElementById("subleagueType").innerHTML = "Алмазная лига";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "ליגת היהלום";
      document.getElementById("subleagueType").innerHTML = "ליגת היהלום";
    }
    star.classList.remove("platinium");
    substar.classList.remove("platinium");
    star.classList.add("diamond");
    substar.classList.add("diamond");
  }else
  if(localStorage.getItem("high-score") == "51" || localStorage.getItem("high-score") == "52" || localStorage.getItem("high-score") == "53" || localStorage.getItem("high-score") == "54" || localStorage.getItem("high-score") == "55" || localStorage.getItem("high-score") == "56" || localStorage.getItem("high-score") == "57" || localStorage.getItem("high-score") == "58" || localStorage.getItem("high-score") == "59" || localStorage.getItem("high-score") == "60") {
    document.getElementById("leagueImage").classList.add("super");
    document.getElementById("leagueImage").classList.remove("diamond");
    document.getElementById("subleagueImage").classList.add("super");
    document.getElementById("subleagueImage").classList.remove("diamond");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Super League";
      document.getElementById("subleagueType").innerHTML = "Super League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Супер лига";
      document.getElementById("subleagueType").innerHTML = "Супер лига";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "ליגת העל";
      document.getElementById("subleagueType").innerHTML = "ליגת העל";
    }
    star.classList.remove("diamond");
    substar.classList.remove("diamond");
    star.classList.add("super");
    substar.classList.add("super");
  }else
  if(localStorage.getItem("high-score") == "61" || localStorage.getItem("high-score") == "62" || localStorage.getItem("high-score") == "63" || localStorage.getItem("high-score") == "64" || localStorage.getItem("high-score") == "65" || localStorage.getItem("high-score") == "66" || localStorage.getItem("high-score") == "67" || localStorage.getItem("high-score") == "68" || localStorage.getItem("high-score") == "69" || localStorage.getItem("high-score") == "70") {
    document.getElementById("leagueImage").classList.add("legendary");
    document.getElementById("leagueImage").classList.remove("super");
    document.getElementById("subleagueImage").classList.add("legendary");
    document.getElementById("subleagueImage").classList.remove("super");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Legendary League";
      document.getElementById("subleagueType").innerHTML = "Legendary League";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Легендарная лига";
      document.getElementById("subleagueType").innerHTML = "Легендарная лига";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "ליגה האגדית";
      document.getElementById("subleagueType").innerHTML = "ליגה האגדית";
    }
    star.classList.remove("super");
    substar.classList.remove("super");
    star.classList.add("legendary");
    substar.classList.add("legendary");
  }else
  if(localStorage.getItem("high-score") == "71" || localStorage.getItem("high-score") == "72" || localStorage.getItem("high-score") == "73" || localStorage.getItem("high-score") == "74" || localStorage.getItem("high-score") == "75" || localStorage.getItem("high-score") == "76" || localStorage.getItem("high-score") == "77" || localStorage.getItem("high-score") == "78" || localStorage.getItem("high-score") == "79" || localStorage.getItem("high-score") == "80") {
    document.getElementById("leagueImage").classList.add("alphaknight");
    document.getElementById("leagueImage").classList.remove("legendary");
    document.getElementById("subleagueImage").classList.add("alphaknight");
    document.getElementById("subleagueImage").classList.remove("legendary");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Alpha Knight";
      document.getElementById("subleagueType").innerHTML = "Alpha Knight";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Альфа Рыцарь";
      document.getElementById("subleagueType").innerHTML = "Альфа Рыцарь";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "אביר אלפא";
      document.getElementById("subleagueType").innerHTML = "אביר אלפא";
    }
    star.classList.remove("legendary");
    substar.classList.remove("legendary");
    star.classList.add("alphaknight");
    substar.classList.add("alphaknight");
  }else
  if(localStorage.getItem("high-score") > "80") {
    document.getElementById("leagueImage").classList.add("alphaknight");
    document.getElementById("subleagueImage").classList.add("alphaknight");
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("leagueType").innerHTML = "Alpha Knight (MAX)";
      document.getElementById("subleagueType").innerHTML = "Alpha Knight (MAX)";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("leagueType").innerHTML = "Альфа Рыцарь (МАКС)";
      document.getElementById("subleagueType").innerHTML = "Альфа Рыцарь (МАКС)";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("leagueType").innerHTML = "אביר אלפא (מקס)";
      document.getElementById("subleagueType").innerHTML = "אביר אלפא (מקס)";
    }
    star.classList.add("alphaknight");
    substar.classList.add("alphaknight");
  }
}
leagueSystem();
function changeControllerType() {
  if(document.getElementById("cTypeChenger").value === localStorage.getItem("controllerTypeDev")) {
    if(document.getElementById("cTypeChenger").value === "classic") {
      document.getElementById("clLang").removeAttribute("disabled");
      document.getElementById("ccLang").removeAttribute("disabled");
      document.getElementById("crLang").removeAttribute("disabled");
    }else
    if(document.getElementById("cTypeChenger").value === "dynamic") {
      document.getElementById("clLang").setAttribute("disabled", "");
      document.getElementById("ccLang").setAttribute("disabled", "");
      document.getElementById("crLang").setAttribute("disabled", "");
    }else
    if(document.getElementById("cTypeChenger").value === "swap") {
      document.getElementById("clLang").setAttribute("disabled", "");
      document.getElementById("ccLang").setAttribute("disabled", "");
      document.getElementById("crLang").setAttribute("disabled", "");
    }
  }else{
    if(document.getElementById("cTypeChenger").value === "classic") {
      document.getElementById("clLang").removeAttribute("disabled");
      document.getElementById("ccLang").removeAttribute("disabled");
      document.getElementById("crLang").removeAttribute("disabled");
    }else
    if(document.getElementById("cTypeChenger").value === "dynamic") {
      document.getElementById("clLang").setAttribute("disabled", "");
      document.getElementById("ccLang").setAttribute("disabled", "");
      document.getElementById("crLang").setAttribute("disabled", "");
    }else
    if(document.getElementById("cTypeChenger").value === "swap") {
      document.getElementById("clLang").setAttribute("disabled", "");
      document.getElementById("ccLang").setAttribute("disabled", "");
      document.getElementById("crLang").setAttribute("disabled", "");
    }
  }
};
function loadControllerType() {
  if(localStorage.getItem("controllerTypeDev") === "classic" && navigator.userAgent.match(/mobile/i)) {
    document.getElementById("cTypeChenger").value = "classic";
    document.getElementById("btn000").style.display = "block";
    document.getElementById("btn002").style.display = "flex";
    document.getElementById("chechboxPausing").style.display = "none";
    document.getElementById("navBtn").style.display = "none";
    document.getElementById("chechboxPausing").style.top = "auto";
    document.getElementById("navBtn").style.top = "auto";
    document.getElementById("btn001").style.position = "relative";
    document.getElementById("btn001").style.bottom = "auto";
    document.getElementById("btn001").style.left = "auto";
    document.getElementById("btn004").style.position = "relative";
    document.getElementById("btn004").style.bottom = "auto";
    document.getElementById("btn004").style.left = "auto";
    document.getElementById("btn003").style.position = "relative";
    document.getElementById("btn003").style.bottom = "auto";
    document.getElementById("btn003").style.right = "auto";
    document.getElementById("btn005").style.position = "relative";
    document.getElementById("btn005").style.bottom = "auto";
    document.getElementById("btn005").style.right = "auto";
  } else
  if(localStorage.getItem("controllerTypeDev") === "dynamic" && navigator.userAgent.match(/mobile/i)) {
    document.getElementById("cTypeChenger").value = "dynamic";
    document.getElementById("btn000").style.display = "none";
    document.getElementById("btn002").style.display = "none";
    document.getElementById("chechboxPausing").style.display = "block";
    document.getElementById("navBtn").style.display = "flex";
    document.getElementById("chechboxPausing").style.top = "auto";
    document.getElementById("navBtn").style.top = "auto";
    document.getElementById("navBtn").style.right = "35px";
    document.getElementById("chechboxPausing").style.right = "108px";
    document.getElementById("btn001").style.position = "fixed";
    document.getElementById("btn001").style.bottom = "78px";
    document.getElementById("btn001").style.left = "35px";
    document.getElementById("btn004").style.position = "fixed";
    document.getElementById("btn004").style.bottom = "0";
    document.getElementById("btn004").style.left = "35px";
    document.getElementById("btn003").style.position = "fixed";
    document.getElementById("btn003").style.bottom = "0";
    document.getElementById("btn003").style.right = "108px";
    document.getElementById("btn005").style.position = "fixed";
    document.getElementById("btn005").style.bottom = "0";
    document.getElementById("btn005").style.right = "35px";
  } else
  if(localStorage.getItem("controllerTypeDev") === "swap" && navigator.userAgent.match(/mobile/i)) {
    let touchStartX = null;
    let touchStartY = null;
    const SWIPE_THRESHOLD = 20; // Adjust this value as needed
    // Get the game canvas or the element that will capture swipes
    const gameCanvas = document.getElementById("touchBoard"); // Replace with your canvas ID
    gameCanvas.addEventListener('touchstart', (event) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    });
    gameCanvas.addEventListener('touchend', (event) => {
      const touchScreen = document.getElementById("cTypeChenger");
      if(touchScreen.value === "swap") {
        if (touchStartX === null || touchStartY === null) {
          return;
        }
        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        // Determine the swipe direction based on the larger displacement
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
          // Horizontal swipe
          if (deltaX < 0) {
            // Swiped Left
            document.getElementById("left").click();
          } else {
            // Swiped Right
            document.getElementById("right").click();
          }
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > SWIPE_THRESHOLD) {
          // Vertical swipe
          if (deltaY < 0) {
            // Swiped Up
            document.getElementById("up").click();
          } else {
            // Swiped Down
            document.getElementById("down").click();
          }
        }
        // Reset touch coordinates
        touchStartX = null;
        touchStartY = null;
      }
    });
    document.getElementById("cTypeChenger").value = "swap";
    document.getElementById("chechboxPausing").style.display = "block";
    document.getElementById("chechboxPausing").style.bottom = "100px";
    document.getElementById("chechboxPausing").style.left = "10px";
    document.getElementById("navBtn").style.display = "flex";
    document.getElementById("navBtn").style.bottom = "100px";
    document.getElementById("navBtn").style.right = "10px";

    document.getElementById("btn000").style.display = "none";
    document.getElementById("btn002").style.display = "none";
    document.getElementById("btn001").style.display = "none";
    document.getElementById("btn004").style.display = "none";
    document.getElementById("btn003").style.display = "none";
    document.getElementById("btn005").style.display = "none";
    document.getElementById("touchBoard").style.display = "block";
  }else
  if(localStorage.getItem("controllerTypeDev") === "classic" && navigator.userAgent.match(/Windows/i) ||
    localStorage.getItem("controllerTypeDev") === "dynamic" && navigator.userAgent.match(/Windows/i) ||
    localStorage.getItem("controllerTypeDev") === "swap" && navigator.userAgent.match(/Windows/i) ||
    localStorage.getItem("controllerTypeDev") === "classic" && navigator.userAgent.match(/Linux/i) ||
    localStorage.getItem("controllerTypeDev") === "dynamic" && navigator.userAgent.match(/Linux/i) ||
    localStorage.getItem("controllerTypeDev") === "swap" && navigator.userAgent.match(/Linux/i)) {
    let startX = null;
    let startY = null;
    let isMouseDown = false;
    const SWIPE_THRESHOLD = 20;
    const gameCanvas = document.getElementById("mouseBoard");
    gameCanvas.addEventListener('mousedown', (event) => {
      isMouseDown = true;
      startX = event.clientX;
      startY = event.clientY;
      if(gameCanvas.className === "out-controller upcur") {
        gameCanvas.classList.remove("upcur");
      }else
      if(gameCanvas.className === "out-controller downcur") {
        gameCanvas.classList.remove("downcur");
      }else
      if(gameCanvas.className === "out-controller rightcur") {
        gameCanvas.classList.remove("rightcur");
      }else
      if(gameCanvas.className === "out-controller leftcur") {
        gameCanvas.classList.remove("leftcur");
      }
    });
    gameCanvas.addEventListener('mouseup', (event) => {
      if (isMouseDown) {
        const endX = event.clientX;
        const endY = event.clientY;
        handleSwipe(startX, startY, endX, endY);
        isMouseDown = false;
        startX = null;
        startY = null;
        if(gameCanvas.className === "out-controller upcur") {
          gameCanvas.classList.remove("upcur");
        }else
        if(gameCanvas.className === "out-controller downcur") {
          gameCanvas.classList.remove("downcur");
        }else
        if(gameCanvas.className === "out-controller rightcur") {
          gameCanvas.classList.remove("rightcur");
        }else
        if(gameCanvas.className === "out-controller leftcur") {
          gameCanvas.classList.remove("leftcur");
        }
      }
    });
    gameCanvas.addEventListener('mousemove', (event) => {
      if(isMouseDown && (startX !== null && startY !== null)) {
        const currentX = event.clientX;
        const currentY = event.clientY;
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX < -SWIPE_THRESHOLD) {
            gameCanvas.className = "out-controller leftcur";
          } else if (deltaX > SWIPE_THRESHOLD) {
            gameCanvas.className = "out-controller rightcur";
          } else {
            if(gameCanvas.className === "out-controller upcur") {
              gameCanvas.classList.remove("upcur");
            }else
            if(gameCanvas.className === "out-controller downcur") {
              gameCanvas.classList.remove("downcur");
            }else
            if(gameCanvas.className === "out-controller rightcur") {
              gameCanvas.classList.remove("rightcur");
            }else
            if(gameCanvas.className === "out-controller leftcur") {
              gameCanvas.classList.remove("leftcur");
            }
          }
        } else {
          if (deltaY < -SWIPE_THRESHOLD) {
            gameCanvas.className = "out-controller upcur";
          } else if (deltaY > SWIPE_THRESHOLD) {
            gameCanvas.className = "out-controller downcur";
          } else {
            if(gameCanvas.className === "out-controller upcur") {
              gameCanvas.classList.remove("upcur");
            }else
            if(gameCanvas.className === "out-controller downcur") {
              gameCanvas.classList.remove("downcur");
            }else
            if(gameCanvas.className === "out-controller rightcur") {
              gameCanvas.classList.remove("rightcur");
            }else
            if(gameCanvas.className === "out-controller leftcur") {
              gameCanvas.classList.remove("leftcur");
            }
          }
        }
      }else{
        if(gameCanvas.className === "out-controller upcur") {
          gameCanvas.classList.remove("upcur");
        }else
        if(gameCanvas.className === "out-controller downcur") {
          gameCanvas.classList.remove("downcur");
        }else
        if(gameCanvas.className === "out-controller rightcur") {
          gameCanvas.classList.remove("rightcur");
        }else
        if(gameCanvas.className === "out-controller leftcur") {
          gameCanvas.classList.remove("leftcur");
        }
      }
    });
    document.addEventListener('mouseup', () => {
      if (isMouseDown) {
        isMouseDown = false;
        startX = null;
        startY = null;
        if(gameCanvas){
          if(gameCanvas.className === "out-controller upcur") {
            gameCanvas.classList.remove("upcur");
          }else
          if(gameCanvas.className === "out-controller downcur") {
            gameCanvas.classList.remove("downcur");
          }else
          if(gameCanvas.className === "out-controller rightcur") {
            gameCanvas.classList.remove("rightcur");
          }else
          if(gameCanvas.className === "out-controller leftcur") {
            gameCanvas.classList.remove("leftcur");
          }
        }
      };
    });
    function handleSwipe(startClientX, startClientY, endClientX, endClientY) {
      const deltaX = endClientX - startClientX;
      const deltaY = endClientY - startClientY;
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX < 0) {
          document.getElementById("left").click();
        } else {
          document.getElementById("right").click();
        }
      } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > SWIPE_THRESHOLD) {
        if (deltaY < 0) {
          document.getElementById("up").click();
        } else {
          document.getElementById("down").click();
        }
      }
    }
  }
}
loadControllerType();
function mouseBoard() {
  if(navigator.userAgent.match(/mobile/i)) {
    document.getElementById("mouseBoard").style.display = "none";
  }else{
    document.getElementById("mouseBoard").style.display = "block";
  }
};
function touchstart(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
}
function menuPauseWalkSound() {
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "shiranuiWalk") {
    document.getElementById("shiranuiWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "akashicWalk") {
    document.getElementById("akashicWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "skyfallWalk") {
    document.getElementById("skyfallWalk").pause();
  }else
  if(localStorage.getItem("movementbg") === "tempestWalk") {
    document.getElementById("tempestWalk").pause();
  }
};
function openProfileCenter() {
  document.getElementById("accenter").style.display = "block";
};
function handleInterval() {
  if(velocityX === 0 && velocityY === 0) {
    if(localStorage.getItem("difficulty") === "normal") {
      setIntervalId = setInterval(initGame, 140);
    }else
    if(localStorage.getItem("difficulty") === "hard") {
      setIntervalId = setInterval(initGame, 100);
    }else
    if(localStorage.getItem("difficulty") === "hell") {
      setIntervalId = setInterval(initGame, 50);
    }else{
      console.log("An error running with this script")
    }
  }else{
    document.getElementById("chechboxPausing").click();
  }
};
function loadingClassic() {
  document.getElementById("loadClassicCon").classList.add("active");
  document.getElementById("loadAnimeCon").classList.remove("active");
  document.getElementById("loadMikuCon").classList.remove("active");
  document.getElementById("loadNakanoCon").classList.remove("active");
  document.getElementById("loadAnimeCon2").classList.remove("active");
  document.getElementById("loadAnimeCon3").classList.remove("active");
  selectionSound();
};
function loadingAnime() {
  document.getElementById("loadClassicCon").classList.remove("active");
  document.getElementById("loadAnimeCon").classList.add("active");
  document.getElementById("loadMikuCon").classList.remove("active");
  document.getElementById("loadNakanoCon").classList.remove("active");
  document.getElementById("loadAnimeCon2").classList.remove("active");
  document.getElementById("loadAnimeCon3").classList.remove("active");
  selectionSound();
};
function loadingMiku() {
  document.getElementById("loadClassicCon").classList.remove("active");
  document.getElementById("loadAnimeCon").classList.remove("active");
  document.getElementById("loadMikuCon").classList.add("active");
  document.getElementById("loadNakanoCon").classList.remove("active");
  document.getElementById("loadAnimeCon2").classList.remove("active");
  document.getElementById("loadAnimeCon3").classList.remove("active");
  selectionSound();
};
function loadingNakano() {
  document.getElementById("loadClassicCon").classList.remove("active");
  document.getElementById("loadAnimeCon").classList.remove("active");
  document.getElementById("loadMikuCon").classList.remove("active");
  document.getElementById("loadNakanoCon").classList.add("active");
  document.getElementById("loadAnimeCon2").classList.remove("active");
  document.getElementById("loadAnimeCon3").classList.remove("active");
  selectionSound();
};
function loadingAnime2() {
  document.getElementById("loadClassicCon").classList.remove("active");
  document.getElementById("loadAnimeCon").classList.remove("active");
  document.getElementById("loadMikuCon").classList.remove("active");
  document.getElementById("loadNakanoCon").classList.remove("active");
  document.getElementById("loadAnimeCon2").classList.add("active");
  document.getElementById("loadAnimeCon3").classList.remove("active");
  selectionSound();
};
function loadingAnime3() {
  document.getElementById("loadClassicCon").classList.remove("active");
  document.getElementById("loadAnimeCon").classList.remove("active");
  document.getElementById("loadMikuCon").classList.remove("active");
  document.getElementById("loadNakanoCon").classList.remove("active");
  document.getElementById("loadAnimeCon2").classList.remove("active");
  document.getElementById("loadAnimeCon3").classList.add("active");
  selectionSound();
};
function loadingAnimationLoader() {
  if(localStorage.getItem("loadingStyle") === "classic") {
    document.getElementById("animateImg").classList.add("classicload");
    document.getElementById("loadClassicCon").classList.add("active");
  }else
  if(localStorage.getItem("loadingStyle") === "anime") {
    document.getElementById("animateImg").classList.add("animeload");
    document.getElementById("loadAnimeCon").classList.add("active");
  }else
  if(localStorage.getItem("loadingStyle") === "miku") {
    document.getElementById("animateImg").classList.add("mikuload");
    document.getElementById("loadMikuCon").classList.add("active");
    document.getElementById("loadingContiner").style.height = "192px";
  }else
  if(localStorage.getItem("loadingStyle") === "nakano") {
    document.getElementById("animateImg").classList.add("nakanoload");
    document.getElementById("loadNakanoCon").classList.add("active");
    document.getElementById("loadingContiner").style.height = "192px";
  }else
  if(localStorage.getItem("loadingStyle") === "anime2") {
    document.getElementById("animateImg").classList.add("anime2load");
    document.getElementById("loadAnimeCon2").classList.add("active");
  }else
  if(localStorage.getItem("loadingStyle") === "anime3") {
    document.getElementById("animateImg").classList.add("anime3load");
    document.getElementById("loadAnimeCon3").classList.add("active");
  }
}
loadingAnimationLoader();
function openRange(evt, rangeName) {
  var i, menuscroller;
  menuscroller = document.getElementsByClassName("menuscroller");
  for (i = 0; i < menuscroller.length; i++) {
    menuscroller[i].style.display = "none";
  }
  document.getElementById(rangeName).style.display = "block";
  evt.currentTarget.className += " ranged";
};
document.addEventListener('DOMContentLoaded', function() {
  const scrollableElementA = document.getElementById('about');
  const scrollableElementB = document.getElementById('system');
  const scrollableElementC = document.getElementById('snake');
  const scrollableElementD = document.getElementById('food');
  const scrollableElementE = document.getElementById('board');
  const scrollableElementF = document.getElementById('audio');
  const scrollableElementG = document.getElementById('game');
  const scrollRangeA = document.getElementById('conOne');
  const scrollRangeB = document.getElementById('conTwo');
  const scrollRangeC = document.getElementById('conThree');
  const scrollRangeD = document.getElementById('conFour');
  const scrollRangeE = document.getElementById('conFive');
  const scrollRangeF = document.getElementById('conSix');
  const scrollRangeG = document.getElementById('conSeven');
  scrollRangeA.addEventListener('input', function() {
    const percentage = this.value;
    const maxScrollTop = scrollableElementA.scrollHeight - scrollableElementA.clientHeight;
    const scrollTopPosition = (percentage / 100) * maxScrollTop;
    scrollableElementA.scrollTop = scrollTopPosition;
  });
  scrollRangeB.addEventListener('input', function() {
    const percentage = this.value;
    const maxScrollTop = scrollableElementB.scrollHeight - scrollableElementB.clientHeight;
    const scrollTopPosition = (percentage / 100) * maxScrollTop;
    scrollableElementB.scrollTop = scrollTopPosition;
  });
  scrollRangeC.addEventListener('input', function() {
    const percentage = this.value;
    const maxScrollTop = scrollableElementC.scrollHeight - scrollableElementC.clientHeight;
    const scrollTopPosition = (percentage / 100) * maxScrollTop;
    scrollableElementC.scrollTop = scrollTopPosition;
  });
  scrollRangeD.addEventListener('input', function() {
    const percentage = this.value;
    const maxScrollTop = scrollableElementD.scrollHeight - scrollableElementD.clientHeight;
    const scrollTopPosition = (percentage / 100) * maxScrollTop;
    scrollableElementD.scrollTop = scrollTopPosition;
  });
  scrollRangeE.addEventListener('input', function() {
    const percentage = this.value;
    const maxScrollTop = scrollableElementE.scrollHeight - scrollableElementE.clientHeight;
    const scrollTopPosition = (percentage / 100) * maxScrollTop;
    scrollableElementE.scrollTop = scrollTopPosition;
  });
  scrollRangeF.addEventListener('input', function() {
    const percentage = this.value;
    const maxScrollTop = scrollableElementF.scrollHeight - scrollableElementF.clientHeight;
    const scrollTopPosition = (percentage / 100) * maxScrollTop;
    scrollableElementF.scrollTop = scrollTopPosition;
  });
  scrollRangeG.addEventListener('input', function() {
    const percentage = this.value;
    const maxScrollTop = scrollableElementG.scrollHeight - scrollableElementG.clientHeight;
    const scrollTopPosition = (percentage / 100) * maxScrollTop;
    scrollableElementG.scrollTop = scrollTopPosition;
  });
  scrollableElementA.addEventListener('scroll', function() {
    const maxScrollTop = this.scrollHeight - this.clientHeight;
    const currentScrollTop = this.scrollTop;
    const scrollPercentage = (currentScrollTop / maxScrollTop) * 100;
    scrollRangeA.value = scrollPercentage;
  });
  scrollableElementB.addEventListener('scroll', function() {
    const maxScrollTop = this.scrollHeight - this.clientHeight;
    const currentScrollTop = this.scrollTop;
    const scrollPercentage = (currentScrollTop / maxScrollTop) * 100;
    scrollRangeB.value = scrollPercentage;
  });
  scrollableElementC.addEventListener('scroll', function() {
    const maxScrollTop = this.scrollHeight - this.clientHeight;
    const currentScrollTop = this.scrollTop;
    const scrollPercentage = (currentScrollTop / maxScrollTop) * 100;
    scrollRangeC.value = scrollPercentage;
  });
  scrollableElementD.addEventListener('scroll', function() {
    const maxScrollTop = this.scrollHeight - this.clientHeight;
    const currentScrollTop = this.scrollTop;
    const scrollPercentage = (currentScrollTop / maxScrollTop) * 100;
    scrollRangeD.value = scrollPercentage;
  });
  scrollableElementE.addEventListener('scroll', function() {
    const maxScrollTop = this.scrollHeight - this.clientHeight;
    const currentScrollTop = this.scrollTop;
    const scrollPercentage = (currentScrollTop / maxScrollTop) * 100;
    scrollRangeE.value = scrollPercentage;
  });
  scrollableElementF.addEventListener('scroll', function() {
    const maxScrollTop = this.scrollHeight - this.clientHeight;
    const currentScrollTop = this.scrollTop;
    const scrollPercentage = (currentScrollTop / maxScrollTop) * 100;
    scrollRangeF.value = scrollPercentage;
  });
  scrollableElementG.addEventListener('scroll', function() {
    const maxScrollTop = this.scrollHeight - this.clientHeight;
    const currentScrollTop = this.scrollTop;
    const scrollPercentage = (currentScrollTop / maxScrollTop) * 100;
    scrollRangeG.value = scrollPercentage;
  });
});
function saveAmbientChecker() {
  if(document.getElementById("ambientChecker").checked === true) {
    localStorage.setItem("ambients", "true");
  }else{
    localStorage.setItem("ambients", "false");
  }
};
function saveAutoScoreCheckboxPhasa() {
  if(document.getElementById("autoSaveScoreCheck").checked === true) {
    localStorage.setItem("autoSaveScoreCheck", "true");
  }else{
    localStorage.setItem("autoSaveScoreCheck", "false");
  }
};
function openDiscordService() {
  window.open("https://discord.gg/9qapnUDKsW",'_blank');
};
const fpsDisplay = document.getElementById('fpsDisplay');
let frameCount = 0;
let lastTime = performance.now();
const updateInterval = 1000;
function fpsDisplaying() {
  const now = performance.now();
  const deltaTime = now - lastTime;
  frameCount++;
  if (deltaTime >= updateInterval) {
    const fps = Math.round((frameCount * 1000) / deltaTime);
    fpsDisplay.textContent = `FPS: ${fps}`;
    frameCount = 0;
    lastTime = now;
  }
  requestAnimationFrame(fpsDisplaying);
}
requestAnimationFrame(fpsDisplaying);
function showFpsDisplaying() {
  var checkbox = document.getElementById("cFpsDisplay");
  var fps = document.getElementById("fpsDisplay");
  if(checkbox.checked === true) {
    fps.style.display = "block";
    localStorage.setItem("showFPS", "true");
  }else{
    fps.style.display = "none";
    localStorage.setItem("showFPS", "false");
  }
};
function loadCdisplatFPS() {
  var checkbox = document.getElementById("cFpsDisplay");
  var fps = document.getElementById("fpsDisplay");
  if(localStorage.getItem("showFPS") === "true") {
    fps.style.display = "block";
    checkbox.checked = true;
  }else{
    fps.style.display = "none";
    checkbox.checked = false;
  }
};
function openWIDmModalDelProg() {
  var modal = document.getElementById("miniModal");
  var title = document.getElementById("mmTitle");
  var content = document.getElementById("mmBottom");
  modal.style.display = "block";
  if(localStorage.getItem("lang") === "en") {
    title.innerHTML = "Delete Progress";
    content.innerHTML = "This function will delete all collected foods from inventory also saved score and high score. <br>";
    content.innerHTML += "[✓]Many think about it, if you want start new game from 0.";
  }else
  if(localStorage.getItem("lang") === "ru") {
    title.innerHTML = "Удалить прогресс";
    content.innerHTML = "Эта функция удалит все собранные еды из инвентаря, а также сохраненные очки и рекорды. <br>";
    content.innerHTML += "[✓]Много подумайте об этом, если вы хотите начать новую игру с 0.";
  }else
  if(localStorage.getItem("lang") === "he") {
    title.innerHTML = "מחיקת התקדמות";
    content.innerHTML = "פונקציה זו תמחק את כל סוגי האוכל שנאספו מהלאי, גם ציון שנישמר וציון גבוה. <br>";
    content.innerHTML += "[✓]תחשבו על זה הרבה, אם אתם רוצים להתחיל משחק חדש מ- 0.";
    title.style.textAlign = "right";
    content.style.direction = "rtl";
    content.style.textAlign = "right";
  }
};
function openWIDmModalSavDat() {
  var modal = document.getElementById("miniModal");
  var title = document.getElementById("mmTitle");
  var content = document.getElementById("mmBottom");
  modal.style.display = "block";
  if(localStorage.getItem("lang") === "en") {
    title.innerHTML = "Data from saved data";
    content.innerHTML = "This give you save all progress in .js file and load your progress again. <br>";
    content.innerHTML += "also you can use it for copy data to other devices if you don't want start game from 0 again. <br>";
    content.innerHTML += " [1]Save data. <br>";
    content.innerHTML += " [2]Click/press on ''Upload(.js)'': Upload the file. <br>";
    content.innerHTML += " [3]Click/press on ''Load'': Be load all content inside the file. <br>";
    content.innerHTML += "[✓]You also can cheat with this file. <br>";
    content.innerHTML += "[!]Take a risk if you get bugs from changing content in file.";
  }else
  if(localStorage.getItem("lang") === "ru") {
    title.innerHTML = "Данные из сохраненных данных";
    content.innerHTML = "Это дает вам сохранить весь прогресс в файле .js и загрузит ваш прогресс. <br>";
    content.innerHTML += "Кроме того, вы можете использовать его для копирования данных для другие устройства, если вы не хотите начать игру с 0 снова. <br>";
    content.innerHTML += " [1]Сохраните данные. <br>";
    content.innerHTML += " [2]Нажмите/коснитесь на «Загрузить(.js)»: загрузит файл. <br>";
    content.innerHTML += " [3]Нажмите/коснитесь «Загрузить»: загрузите все содержимое внутри файла. <br>";
    content.innerHTML += "[✓]Вы также можете жульничать с этим файлом. <br>";
    content.innerHTML += "[!]Возьмите риск, если вы получите ошибки от изменениe контент в файле.";
  }else
  if(localStorage.getItem("lang") === "he") {
    title.innerHTML = "נתונים מנתונים שנשמרו";
    content.innerHTML = "זה נותן לכם לשמור את כל ההתקדמות בקובץ .js ולטעון שוב את ההתקדמות שלכם. <br>";
    content.innerHTML += "כמו כן אתם יכולים להשתמש בו בכדי להעתיק נתונים למכשירים אחרים אם אינכם רוצים להתחיל לשחק מהתחלה מ- 0 שוב. <br>";
    content.innerHTML += " [1]שימורו נתונים. <br>";
    content.innerHTML += " [2]לחצו/געו ב- '' העלאה (.js) '': העלו את הקובץ. <br>";
    content.innerHTML += " [3]לחצו/געו ב- '' טעינה '': כל התוכן בתוך הקובץ יטען. <br>";
    content.innerHTML += "[✓]אתם יכולים גם לרמות עם הקובץ הזה. <br>";
    content.innerHTML += "[!]קחו סיכון אם אתם מקבלים באגים משינוי תוכן בקובץ.";
    title.style.textAlign = "right";
    content.style.direction = "rtl";
    content.style.textAlign = "right";
  }
};
function checkSettingsChanges() {
  let settingsChanged = false;
  function checkSettingCategory(elementsMap, inputType, localStorageKey) {
    const storedValue = localStorage.getItem(localStorageKey);
      let currentValue;
    for (const item of elementsMap) {
      const element = document.getElementById(item.id);
      if (!element) {
        console.warn(`Element with ID "${item.id}" not found.`);
      }
      if (inputType === 'className') {
        currentValue = element.className;
      } else if (inputType === 'value') {
        currentValue = element.value;
      } else if (inputType === 'checked') {
        currentValue = element.checked.toString();
      }
      if (currentValue === storedValue) {
      } else {
        settingsChanged = true;
        return;
      }
      if ((inputType === 'className' && currentValue === "select active" && localStorage.getItem(localStorageKey) === item.localStorageValue) ||
        (inputType === 'value' && currentValue === item.localStorageValue && localStorage.getItem(localStorageKey) === item.localStorageValue)) {
      } else if ((inputType === 'className' && currentValue === "select active" && localStorage.getItem(localStorageKey) !== item.localStorageValue) ||
             (inputType === 'value' && currentValue === item.localStorageValue && localStorage.getItem(localStorageKey) !== item.localStorageValue)) {
        settingsChanged = true;
        return;
      }
    }
    let currentActiveElementValue = null;
    for (const item of elementsMap) {
      const element = document.getElementById(item.id);
      if (element && ((inputType === 'className' && element.className.includes("active")) || (inputType === 'value' && element.value === item.localStorageValue))) {
        currentActiveElementValue = item.localStorageValue;
        break;
      }
    }
    if (currentActiveElementValue !== storedValue) {
      settingsChanged = true;
    }
  }
  checkSettingCategory([
    { id: "randomSnakePos", localStorageValue: "random" }
  ], 'checked', "snakePosType");
  if (settingsChanged) {
    document.getElementById("applySettings").style.display = "block";
    return;
  }
  checkSettingCategory([
    { id: "origoMap", localStorageValue: "imgOrigo" },
    { id: "alphaMap2", localStorageValue: "imgAlpha2" },
    { id: "alphaMap", localStorageValue: "imgAlpha" },
    { id: "conBoard000img", localStorageValue: "img000board" },
    { id: "conBoard001img", localStorageValue: "img001board" },
    { id: "conBoard002img", localStorageValue: "img002board" },
    { id: "conBoard003img", localStorageValue: "img003board" },
    { id: "conBoard004img", localStorageValue: "img004board" },
    { id: "conBoard005img", localStorageValue: "img005board" },
    { id: "conBoard006img", localStorageValue: "img006board" },
    { id: "conBoard007img", localStorageValue: "img007board" },
    { id: "conBoard008img", localStorageValue: "img008board" },
    { id: "conBoard009img", localStorageValue: "img009board" },
    { id: "conBoard010img", localStorageValue: "img010board" },
    { id: "conBoard011img", localStorageValue: "img011board" },
    { id: "conBoard012img", localStorageValue: "img012board" },
    { id: "conBoard013img", localStorageValue: "img013board" },
    { id: "conBoard014img", localStorageValue: "img014board" },
    { id: "conBoard015img", localStorageValue: "img015board" },
    { id: "conBoard016img", localStorageValue: "img016board" },
    { id: "conBoard017img", localStorageValue: "img017board" },
    { id: "conBoard018img", localStorageValue: "img018board" },
    { id: "conBoard019img", localStorageValue: "img019board" },
    { id: "conBoard020img", localStorageValue: "img020board" },
    { id: "conBoard021img", localStorageValue: "img021board" },
    { id: "conBoard022img", localStorageValue: "img022board" },
    { id: "conBoard023img", localStorageValue: "img023board" },
    { id: "conBoard024img", localStorageValue: "img024board" },
    { id: "conBoard025img", localStorageValue: "img025board" },
    { id: "conBoard026img", localStorageValue: "img026board" },
    { id: "conBoard027img", localStorageValue: "img027board" },
    { id: "conBoard028img", localStorageValue: "img028board" },
    { id: "conBoard029img", localStorageValue: "img029board" },
    { id: "conBoard030img", localStorageValue: "img030board" },
    { id: "conBoard031img", localStorageValue: "img031board" },
    { id: "conBoard032img", localStorageValue: "img032board" },
    { id: "conBoard033img", localStorageValue: "img033board" },
    { id: "conBoard034img", localStorageValue: "img034board" },
    { id: "conBoard035img", localStorageValue: "img035board" },
    { id: "conBoard036img", localStorageValue: "img036board" },
    { id: "conBoard037img", localStorageValue: "img037board" },
    { id: "conBoard038img", localStorageValue: "img038board" },
    { id: "conBoard039img", localStorageValue: "img039board" },
    { id: "conBoard040img", localStorageValue: "img040board" },
    { id: "conBoard041img", localStorageValue: "img041board" },
    { id: "conBoard042img", localStorageValue: "img042board" },
    { id: "conBoard043img", localStorageValue: "img043board" },
    { id: "conBoard044img", localStorageValue: "img044board" },
    { id: "conBoard045img", localStorageValue: "img045board" },
    { id: "conBoard046img", localStorageValue: "img046board" },
    { id: "conBoard047img", localStorageValue: "img047board" },
    { id: "conBoard048img", localStorageValue: "img048board" },
    { id: "conBoard049img", localStorageValue: "img049board" },
    { id: "conBoard050img", localStorageValue: "img050board" },
    { id: "conBoard051img", localStorageValue: "img051board" },
    { id: "conBoard052img", localStorageValue: "img052board" },
    { id: "conBoard053img", localStorageValue: "img053board" },
    { id: "conBoard054img", localStorageValue: "img054board" },
    { id: "conBoard055img", localStorageValue: "img055board" },
    { id: "conBoard056img", localStorageValue: "img056board" },
    { id: "conBoard057img", localStorageValue: "img057board" },
    { id: "conBoard058img", localStorageValue: "img058board" },
    { id: "conBoard059img", localStorageValue: "img059board" },
    { id: "conBoard060img", localStorageValue: "img060board" },
    { id: "conBoard061img", localStorageValue: "img061board" },
    { id: "conBoard062img", localStorageValue: "img062board" },
    { id: "conBoard063img", localStorageValue: "img063board" },
    { id: "conBoard064img", localStorageValue: "img064board" },
    { id: "conBoard065img", localStorageValue: "img065board" },
    { id: "conBoard066img", localStorageValue: "img066board" },
    { id: "conBoard067img", localStorageValue: "img067board" },
    { id: "conBoard068img", localStorageValue: "img068board" },
    { id: "conBoard069img", localStorageValue: "img069board" },
    { id: "conBoard070img", localStorageValue: "img070board" },
    { id: "conBoard071img", localStorageValue: "img071board" },
    { id: "conBoard072img", localStorageValue: "img072board" },
    { id: "conBoard073img", localStorageValue: "img073board" }
  ], 'className', "boardStyle");
  if (settingsChanged) {
    document.getElementById("applySettings").style.display = "block";
    return;
  }
  checkSettingCategory([
    { id: "meowItem", localStorageValue: "imgMeow" },
    { id: "goldItem", localStorageValue: "imgGold" },
    { id: "alphacoinItem", localStorageValue: "imgAlphacoin" },
    { id: "crystalItem", localStorageValue: "imgCrystal" },
    { id: "ticketItem", localStorageValue: "imgTicket" },
    { id: "cTicketItem", localStorageValue: "imgCticket" },
    { id: "pTicketItem", localStorageValue: "imgPticket" },
    { id: "pTicket2Item", localStorageValue: "imgPticket2" },
    { id: "virtualTokenItem", localStorageValue: "imgVirtualToken" },
    { id: "food000Item0", localStorageValue: "img000food" },
    { id: "food001Item0", localStorageValue: "img001food" },
    { id: "food002Item0", localStorageValue: "img002food" },
    { id: "food003Item0", localStorageValue: "img003food" },
    { id: "food004Item0", localStorageValue: "img004food" },
    { id: "food005Item0", localStorageValue: "img005food" },
    { id: "food006Item0", localStorageValue: "img006food" },
    { id: "food007Item0", localStorageValue: "img007food" },
    { id: "food008Item0", localStorageValue: "img008food" },
    { id: "food009Item0", localStorageValue: "img009food" },
    { id: "food010Item0", localStorageValue: "img010food" },
    { id: "food011Item0", localStorageValue: "img011food" },
    { id: "food012Item0", localStorageValue: "img012food" },
    { id: "food013Item0", localStorageValue: "img013food" },
    { id: "food014Item0", localStorageValue: "img014food" },
    { id: "food015Item0", localStorageValue: "img015food" },
    { id: "food016Item0", localStorageValue: "img016food" },
    { id: "food017Item0", localStorageValue: "img017food" },
    { id: "food018Item0", localStorageValue: "img018food" },
    { id: "food019Item0", localStorageValue: "img019food" },
    { id: "food020Item0", localStorageValue: "img020food" },
    { id: "food021Item0", localStorageValue: "img021food" },
    { id: "food022Item0", localStorageValue: "img022food" },
    { id: "food023Item0", localStorageValue: "img023food" },
    { id: "food024Item0", localStorageValue: "img024food" },
    { id: "food025Item0", localStorageValue: "img025food" },
    { id: "food026Item0", localStorageValue: "img026food" },
    { id: "food027Item0", localStorageValue: "img027food" },
    { id: "food028Item0", localStorageValue: "img028food" },
    { id: "food029Item0", localStorageValue: "img029food" },
    { id: "food030Item0", localStorageValue: "img030food" },
    { id: "food031Item0", localStorageValue: "img031food" },
    { id: "food032Item0", localStorageValue: "img032food" },
    { id: "food033Item0", localStorageValue: "img033food" },
    { id: "food034Item0", localStorageValue: "img034food" },
    { id: "food035Item0", localStorageValue: "img035food" },
    { id: "food036Item0", localStorageValue: "img036food" },
    { id: "food037Item0", localStorageValue: "img037food" },
    { id: "food038Item0", localStorageValue: "img038food" },
    { id: "food039Item0", localStorageValue: "img039food" },
    { id: "food040Item0", localStorageValue: "img040food" },
    { id: "food041Item0", localStorageValue: "img041food" },
    { id: "food042Item0", localStorageValue: "img042food" },
    { id: "food043Item0", localStorageValue: "img043food" },
    { id: "food044Item0", localStorageValue: "img044food" },
    { id: "food045Item0", localStorageValue: "img045food" },
    { id: "food046Item0", localStorageValue: "img046food" },
    { id: "food047Item0", localStorageValue: "img047food" },
    { id: "food048Item0", localStorageValue: "img048food" },
    { id: "food049Item0", localStorageValue: "img049food" },
    { id: "food050Item0", localStorageValue: "img050food" },
    { id: "food051Item0", localStorageValue: "img051food" },
    { id: "food052Item0", localStorageValue: "img052food" },
    { id: "food053Item0", localStorageValue: "img053food" },
    { id: "food054Item0", localStorageValue: "img054food" },
    { id: "food055Item0", localStorageValue: "img055food" },
    { id: "food056Item0", localStorageValue: "img056food" },
    { id: "food057Item0", localStorageValue: "img057food" },
    { id: "food058Item0", localStorageValue: "img058food" },
    { id: "food059Item0", localStorageValue: "img059food" },
    { id: "food060Item0", localStorageValue: "img060food" },
    { id: "food061Item0", localStorageValue: "img061food" },
    { id: "food062Item0", localStorageValue: "img062food" },
    { id: "food063Item0", localStorageValue: "img063food" },
    { id: "food064Item0", localStorageValue: "img064food" },
    { id: "food065Item0", localStorageValue: "img065food" },
    { id: "food066Item0", localStorageValue: "img066food" },
    { id: "food067Item0", localStorageValue: "img067food" },
    { id: "food068Item0", localStorageValue: "img068food" },
    { id: "food069Item0", localStorageValue: "img069food" },
    { id: "food070Item0", localStorageValue: "img070food" },
    { id: "food071Item0", localStorageValue: "img071food" },
    { id: "food072Item0", localStorageValue: "img072food" },
    { id: "food073Item0", localStorageValue: "img073food" },
    { id: "food074Item0", localStorageValue: "img074food" },
    { id: "food075Item0", localStorageValue: "img075food" },
    { id: "food076Item0", localStorageValue: "img076food" },
    { id: "food077Item0", localStorageValue: "img077food" }
  ], 'className', "foodStyle");
  if (settingsChanged) {
    document.getElementById("applySettings").style.display = "block";
    return;
  }
  checkSettingCategory([
    { id: "normalDif", localStorageValue: "normal" },
    { id: "hardDif", localStorageValue: "hard" },
    { id: "hellDif", localStorageValue: "hell" }
  ], 'className', "difficulty");
  if (settingsChanged) {
    document.getElementById("applySettings").style.display = "block";
    return;
  }
  checkSettingCategory([
    { id: "languageEn", localStorageValue: "en" },
    { id: "languageRu", localStorageValue: "ru" },
    { id: "languageHe", localStorageValue: "he" }
  ], 'className', "lang");
  if (settingsChanged) {
    document.getElementById("applySettings").style.display = "block";
    return;
  }
  checkSettingCategory([
    { id: "ccLang", localStorageValue: "center" },
    { id: "clLang", localStorageValue: "left" },
    { id: "crLang", localStorageValue: "right" }
  ], 'className', "controllerPosition");
  if (settingsChanged) {
    document.getElementById("applySettings").style.display = "block";
    return;
  }
  checkSettingCategory([
    { id: "cTypeChenger", localStorageValue: "dynamic" },
    { id: "cTypeChenger", localStorageValue: "classic" },
    { id: "cTypeChenger", localStorageValue: "swap" }
  ], 'value', "controllerTypeDev");
  if (settingsChanged) {
    document.getElementById("applySettings").style.display = "block";
    return;
  }
  checkSettingCategory([
    { id: "pwAlang", localStorageValue: "playerWalk" },
    { id: "mwAlang", localStorageValue: "alboradaWalk" },
    { id: "mwBlang", localStorageValue: "andromedaWalk" },
    { id: "mwClang", localStorageValue: "arthurWalk" },
    { id: "mwDlang", localStorageValue: "auroraWalk" },
    { id: "mwElang", localStorageValue: "boltusWalk" },
    { id: "mwFlang", localStorageValue: "caramelWalk" },
    { id: "mwGlang", localStorageValue: "doomlightlWalk" },
    { id: "mwHlang", localStorageValue: "firefoxWalk" },
    { id: "mwIlang", localStorageValue: "firestarWalk" },
    { id: "mwJlang", localStorageValue: "flamencoWalk" },
    { id: "mwKlang", localStorageValue: "gabrielWalk" },
    { id: "mwLlang", localStorageValue: "hotsteelWalk" },
    { id: "mwMlang", localStorageValue: "hurricaneWalk" },
    { id: "mwNlang", localStorageValue: "jojoWalk" },
    { id: "mwOlang", localStorageValue: "michaelWalk" },
    { id: "mwPlang", localStorageValue: "neutronWalk" },
    { id: "mwQlang", localStorageValue: "northernWalk" },
    { id: "mwRlang", localStorageValue: "pulsarWalk" },
    { id: "mwSlang", localStorageValue: "rangerWalk" },
    { id: "mwTlang", localStorageValue: "ravenWalk" },
    { id: "mwUlang", localStorageValue: "skylarkWalk" },
    { id: "mwVlang", localStorageValue: "snowWalk" },
    { id: "mwWlang", localStorageValue: "trioWalk" },
    { id: "mwXlang", localStorageValue: "ventorusWalk" },
    { id: "mwYlang", localStorageValue: "deathKnellWalk" },
    { id: "mwZlang", localStorageValue: "dreadwolfWalk" },
    { id: "mwAAlang", localStorageValue: "gaialWalk" },
    { id: "mwABlang", localStorageValue: "guerillaHunterWalk" },
    { id: "mwAClang", localStorageValue: "lancelotWalk" },
    { id: "mwADlang", localStorageValue: "moonRabbitWalk" },
    { id: "mwAElang", localStorageValue: "nebulaWalk" },
    { id: "mwAFlang", localStorageValue: "shiranuiWalk" },
    { id: "mwAGlang", localStorageValue: "skyfireWalk" },
    { id: "mwAHlang", localStorageValue: "twilightWalk" },
    { id: "mwAIlang", localStorageValue: "akashicWalk" },
    { id: "mwAJlang", localStorageValue: "skyfallWalk" },
    { id: "mwAKlang", localStorageValue: "tempestWalk" }
  ], 'className', "movementbg");
  if (settingsChanged) {
    document.getElementById("applySettings").style.display = "block";
    return;
  }
  checkSettingCategory([
    { id: "loadClassicCon", localStorageValue: "classic" },
    { id: "loadAnimeCon", localStorageValue: "anime" },
    { id: "loadMikuCon", localStorageValue: "miku" },
    { id: "loadNakanoCon", localStorageValue: "nakano" },
    { id: "loadAnimeCon2", localStorageValue: "anime2" },
    { id: "loadAnimeCon3", localStorageValue: "anime3" }
  ], 'className', "loadingStyle");
  if (settingsChanged) {
    document.getElementById("applySettings").style.display = "block";
    return;
  }
  document.getElementById("applySettings").style.display = "none";
};
function randomSnakePosChange() {
  var checkbox = document.getElementById("randomSnakePos");
  if(checkbox.checked) {
    document.getElementById("posCx").style.display = "none";
    document.getElementById("posCy").style.display = "none";
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("randomSnakePosLang").innerHTML = "Random Position";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("randomSnakePosLang").innerHTML = "Случайная позиция";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("randomSnakePosLang").innerHTML = "מיקום אקראי";
    }
  }else{
    document.getElementById("posCx").style.display = "flex";
    document.getElementById("posCy").style.display = "flex";
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("randomSnakePosLang").innerHTML = "Custom Position";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("randomSnakePosLang").innerHTML = "Пользовательская позиция";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("randomSnakePosLang").innerHTML = "מיקום מותאם אישית";
    }
  }
};
function randomSnakePosXInput() {
  var input = document.getElementById("xSnakeValue");
  localStorage.setItem("snakePosX", input.value);
  var numValue = parseInt(input.value, 10);
  if(numValue > 30) {
    input.value = 30;
    cancelSound();
  } else if(numValue < 0) {
    input.value = 0;
    cancelSound();
  }
};
function randomSnakePosYInput() {
  var input = document.getElementById("ySnakeValue");
  localStorage.setItem("snakePosY", input.value);
  var numValue = parseInt(input.value, 10);
  if(numValue > 30) {
    input.value = 30;
    cancelSound();
  } else if(numValue < 0) {
    input.value = 0;
    cancelSound();
  }
};
function plusPosX() {
  const input = document.getElementById('xSnakeValue');
  let currentValue = parseInt(input.value);
  if (currentValue < 30) {
    input.value = currentValue + 1;
    defaultClickSound();
  } else {
    cancelSound();
  }
  localStorage.setItem("snakePosX", input.value);
};
function minusPosX() {
  const input = document.getElementById('xSnakeValue');
  let currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
    defaultClickSound();
  } else {
    input.value = 1;
    cancelSound();
  }
  localStorage.setItem("snakePosX", input.value);
};
function plusPosY() {
  const input = document.getElementById('ySnakeValue');
  let currentValue = parseInt(input.value);
  if (currentValue < 30) {
    input.value = currentValue + 1;
    defaultClickSound();
  } else {
    cancelSound();
  }
  localStorage.setItem("snakePosY", input.value);
};
function minusPosY() {
  const input = document.getElementById('ySnakeValue');
  let currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
    defaultClickSound();
  } else {
    input.value = 1;
    cancelSound();
  }
  localStorage.setItem("snakePosY", input.value);
};
function miniModalClose() {
  var object = document.getElementById("miniModal");
  if(object.style.display = "block") {
    object.style.display = "none";
  }
};
window.addEventListener('load', function() {
  languagesContents();
  loadTextures();
  updateTextLangs();
  autoSnakeLoadNew();
  autoDifficultyLoadNew();
  autoFoodsLoadNew();
  autoBoardsLoadNew();
  autoControllerPoseLoadNew();
  autoLanguageLoadNew();
  autoMusicLoadNew();
  autoDynamicControllerLoadNew();
  autoMusicCheckLoadNew();
  autoSfxProgLoadNew();
  autoMusicProgLoadNew();
  autoMovementLoadNew();
  autoMeawStorageLoadNew();
  autoGoldStorageLoadNew();
  autoAlphaStorageLoadNew();
  autoCrystalStorageLoadNew();
  autoTicketStorageLoadNew();
  autoTicketChStorageLoadNew();
  autoTicketPrStorageLoadNew();
  autoTicketP2rStorageLoadNew();
  autoVirtualTokenrStorageLoadNew();
  autoLoadingAnimLogoLoadNew();
  autoAmbientCheckLoadNew();
  autoSnakeColorerLoadNew();
  autoSnakeLettersLoadNew();
  autoSnakePosLoadNew();
  autoSnakePosXLoadNew();
  autoSnakePosYLoadNew();
  autoFood000StorageLoadNew();
  autoFood001StorageLoadNew();
  autoFood002StorageLoadNew();
  autoFood003StorageLoadNew();
  autoFood004StorageLoadNew();
  autoFood005StorageLoadNew();
  autoFood006StorageLoadNew();
  autoFood007StorageLoadNew();
  autoFood008StorageLoadNew();
  autoFood009StorageLoadNew();
  autoFood010StorageLoadNew();
  autoFood011StorageLoadNew();
  autoFood012StorageLoadNew();
  autoFood013StorageLoadNew();
  autoFood014StorageLoadNew();
  autoFood015StorageLoadNew();
  autoFood016StorageLoadNew();
  autoFood017StorageLoadNew();
  autoFood018StorageLoadNew();
  autoFood019StorageLoadNew();
  autoFood020StorageLoadNew();
  autoFood021StorageLoadNew();
  autoFood022StorageLoadNew();
  autoFood023StorageLoadNew();
  autoFood024StorageLoadNew();
  autoFood025StorageLoadNew();
  autoFood026StorageLoadNew();
  autoFood027StorageLoadNew();
  autoFood028StorageLoadNew();
  autoFood029StorageLoadNew();
  autoFood030StorageLoadNew();
  autoFood031StorageLoadNew();
  autoFood032StorageLoadNew();
  autoFood033StorageLoadNew();
  autoFood034StorageLoadNew();
  autoFood035StorageLoadNew();
  autoFood036StorageLoadNew();
  autoFood037StorageLoadNew();
  autoFood038StorageLoadNew();
  autoFood039StorageLoadNew();
  autoFood040StorageLoadNew();
  autoFood041StorageLoadNew();
  autoFood042StorageLoadNew();
  autoFood043StorageLoadNew();
  autoFood044StorageLoadNew();
  autoFood045StorageLoadNew();
  autoFood046StorageLoadNew();
  autoFood047StorageLoadNew();
  autoFood048StorageLoadNew();
  autoFood049StorageLoadNew();
  autoFood050StorageLoadNew();
  autoFood051StorageLoadNew();
  autoFood052StorageLoadNew();
  autoFood053StorageLoadNew();
  autoFood054StorageLoadNew();
  autoFood055StorageLoadNew();
  autoFood056StorageLoadNew();
  autoFood057StorageLoadNew();
  autoFood058StorageLoadNew();
  autoFood059StorageLoadNew();
  autoFood060StorageLoadNew();
  autoFood061StorageLoadNew();
  autoFood062StorageLoadNew();
  autoFood063StorageLoadNew();
  autoFood064StorageLoadNew();
  autoFood065StorageLoadNew();
  autoFood066StorageLoadNew();
  autoFood067StorageLoadNew();
  autoFood068StorageLoadNew();
  autoFood069StorageLoadNew();
  autoFood070StorageLoadNew();
  autoFood071StorageLoadNew();
  autoFood072StorageLoadNew();
  autoFood073StorageLoadNew();
  autoFood074StorageLoadNew();
  autoFood075StorageLoadNew();
  autoFood076StorageLoadNew();
  autoFood077StorageLoadNew();
  snakeColorerValueLoad();
  mouseBoard();
  loadCdisplatFPS();
  changeControllerType();
  keysRegistering();
  randomSnakePosChange();
  if(localStorage.getItem("snakePosType") === "random") {
    document.getElementById("randomSnakePos").checked = true;
    document.getElementById("posCx").style.display = "none";
    document.getElementById("posCy").style.display = "none";
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("randomSnakePosLang").innerHTML = "Random Position";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("randomSnakePosLang").innerHTML = "Случайная позиция";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("randomSnakePosLang").innerHTML = "מיקום אקראי";
    }
  }else{
    document.getElementById("randomSnakePos").checked = false;
    document.getElementById("posCx").style.display = "flex";
    document.getElementById("posCy").style.display = "flex";
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("randomSnakePosLang").innerHTML = "Custom Position";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("randomSnakePosLang").innerHTML = "Пользовательская позиция";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("randomSnakePosLang").innerHTML = "מיקום מותאם אישית";
    }
  }
  document.getElementById("xSnakeValue").value = localStorage.getItem("snakePosX");
  document.getElementById("ySnakeValue").value = localStorage.getItem("snakePosY");
  localStorage.setItem("steelScore", localStorage.getItem("high-score"));
  document.getElementById("collectedMeow").innerHTML = localStorage.getItem("meawTokenStorage");
  document.getElementById("collectedGold").innerHTML = localStorage.getItem("goldStorage");
  document.getElementById("collectedAlphacoin").innerHTML = localStorage.getItem("alphaCoinStorage");
  document.getElementById("collectedCrystal").innerHTML = localStorage.getItem("crystalStorage");
  document.getElementById("collectedTicket").innerHTML = localStorage.getItem("ticketStorage");
  document.getElementById("collectedCticket").innerHTML = localStorage.getItem("ticketChromaticStorage");
  document.getElementById("collectedPticket").innerHTML = localStorage.getItem("ticketPremiumStorage");
  document.getElementById("collectedPticket2").innerHTML = localStorage.getItem("ticketPremium2Storage");
  document.getElementById("collectedVirtualToken").innerHTML = localStorage.getItem("virtualTokenStorage");
  document.getElementById("collected000Food").innerHTML = localStorage.getItem("food000Storage");
  document.getElementById("collected001Food").innerHTML = localStorage.getItem("food001Storage");
  document.getElementById("collected002Food").innerHTML = localStorage.getItem("food002Storage");
  document.getElementById("collected003Food").innerHTML = localStorage.getItem("food003Storage");
  document.getElementById("collected004Food").innerHTML = localStorage.getItem("food004Storage");
  document.getElementById("collected005Food").innerHTML = localStorage.getItem("food005Storage");
  document.getElementById("collected006Food").innerHTML = localStorage.getItem("food006Storage");
  document.getElementById("collected007Food").innerHTML = localStorage.getItem("food007Storage");
  document.getElementById("collected008Food").innerHTML = localStorage.getItem("food008Storage");
  document.getElementById("collected009Food").innerHTML = localStorage.getItem("food009Storage");
  document.getElementById("collected010Food").innerHTML = localStorage.getItem("food010Storage");
  document.getElementById("collected011Food").innerHTML = localStorage.getItem("food011Storage");
  document.getElementById("collected012Food").innerHTML = localStorage.getItem("food012Storage");
  document.getElementById("collected013Food").innerHTML = localStorage.getItem("food013Storage");
  document.getElementById("collected014Food").innerHTML = localStorage.getItem("food014Storage");
  document.getElementById("collected015Food").innerHTML = localStorage.getItem("food015Storage");
  document.getElementById("collected016Food").innerHTML = localStorage.getItem("food016Storage");
  document.getElementById("collected017Food").innerHTML = localStorage.getItem("food017Storage");
  document.getElementById("collected018Food").innerHTML = localStorage.getItem("food018Storage");
  document.getElementById("collected019Food").innerHTML = localStorage.getItem("food019Storage");
  document.getElementById("collected020Food").innerHTML = localStorage.getItem("food020Storage");
  document.getElementById("collected021Food").innerHTML = localStorage.getItem("food021Storage");
  document.getElementById("collected022Food").innerHTML = localStorage.getItem("food022Storage");
  document.getElementById("collected023Food").innerHTML = localStorage.getItem("food023Storage");
  document.getElementById("collected024Food").innerHTML = localStorage.getItem("food024Storage");
  document.getElementById("collected025Food").innerHTML = localStorage.getItem("food025Storage");
  document.getElementById("collected026Food").innerHTML = localStorage.getItem("food026Storage");
  document.getElementById("collected027Food").innerHTML = localStorage.getItem("food027Storage");
  document.getElementById("collected028Food").innerHTML = localStorage.getItem("food028Storage");
  document.getElementById("collected029Food").innerHTML = localStorage.getItem("food029Storage");
  document.getElementById("collected030Food").innerHTML = localStorage.getItem("food030Storage");
  document.getElementById("collected031Food").innerHTML = localStorage.getItem("food031Storage");
  document.getElementById("collected032Food").innerHTML = localStorage.getItem("food032Storage");
  document.getElementById("collected033Food").innerHTML = localStorage.getItem("food033Storage");
  document.getElementById("collected034Food").innerHTML = localStorage.getItem("food034Storage");
  document.getElementById("collected035Food").innerHTML = localStorage.getItem("food035Storage");
  document.getElementById("collected036Food").innerHTML = localStorage.getItem("food036Storage");
  document.getElementById("collected037Food").innerHTML = localStorage.getItem("food037Storage");
  document.getElementById("collected038Food").innerHTML = localStorage.getItem("food038Storage");
  document.getElementById("collected039Food").innerHTML = localStorage.getItem("food039Storage");
  document.getElementById("collected040Food").innerHTML = localStorage.getItem("food040Storage");
  document.getElementById("collected041Food").innerHTML = localStorage.getItem("food041Storage");
  document.getElementById("collected042Food").innerHTML = localStorage.getItem("food042Storage");
  document.getElementById("collected043Food").innerHTML = localStorage.getItem("food043Storage");
  document.getElementById("collected044Food").innerHTML = localStorage.getItem("food044Storage");
  document.getElementById("collected045Food").innerHTML = localStorage.getItem("food045Storage");
  document.getElementById("collected046Food").innerHTML = localStorage.getItem("food046Storage");
  document.getElementById("collected047Food").innerHTML = localStorage.getItem("food047Storage");
  document.getElementById("collected048Food").innerHTML = localStorage.getItem("food048Storage");
  document.getElementById("collected049Food").innerHTML = localStorage.getItem("food049Storage");
  document.getElementById("collected050Food").innerHTML = localStorage.getItem("food050Storage");
  document.getElementById("collected051Food").innerHTML = localStorage.getItem("food051Storage");
  document.getElementById("collected052Food").innerHTML = localStorage.getItem("food052Storage");
  document.getElementById("collected053Food").innerHTML = localStorage.getItem("food053Storage");
  document.getElementById("collected054Food").innerHTML = localStorage.getItem("food054Storage");
  document.getElementById("collected055Food").innerHTML = localStorage.getItem("food055Storage");
  document.getElementById("collected056Food").innerHTML = localStorage.getItem("food056Storage");
  document.getElementById("collected057Food").innerHTML = localStorage.getItem("food057Storage");
  document.getElementById("collected058Food").innerHTML = localStorage.getItem("food058Storage");
  document.getElementById("collected059Food").innerHTML = localStorage.getItem("food059Storage");
  document.getElementById("collected060Food").innerHTML = localStorage.getItem("food060Storage");
  document.getElementById("collected061Food").innerHTML = localStorage.getItem("food061Storage");
  document.getElementById("collected062Food").innerHTML = localStorage.getItem("food062Storage");
  document.getElementById("collected063Food").innerHTML = localStorage.getItem("food063Storage");
  document.getElementById("collected064Food").innerHTML = localStorage.getItem("food064Storage");
  document.getElementById("collected065Food").innerHTML = localStorage.getItem("food065Storage");
  document.getElementById("collected066Food").innerHTML = localStorage.getItem("food066Storage");
  document.getElementById("collected067Food").innerHTML = localStorage.getItem("food067Storage");
  document.getElementById("collected068Food").innerHTML = localStorage.getItem("food068Storage");
  document.getElementById("collected069Food").innerHTML = localStorage.getItem("food069Storage");
  document.getElementById("collected070Food").innerHTML = localStorage.getItem("food070Storage");
  document.getElementById("collected071Food").innerHTML = localStorage.getItem("food071Storage");
  document.getElementById("collected072Food").innerHTML = localStorage.getItem("food072Storage");
  document.getElementById("collected073Food").innerHTML = localStorage.getItem("food073Storage");
  document.getElementById("collected074Food").innerHTML = localStorage.getItem("food074Storage");
  document.getElementById("collected075Food").innerHTML = localStorage.getItem("food075Storage");
  document.getElementById("collected076Food").innerHTML = localStorage.getItem("food076Storage");
  document.getElementById("collected077Food").innerHTML = localStorage.getItem("food077Storage");
  document.getElementById("snakeColor").value = localStorage.getItem("snakeColor");
  document.getElementById("snakeLatter").className = "ltr" + localStorage.getItem("snakeLetter");
  if(localStorage.getItem("ambients") === "true") {
    document.getElementById("ambientChecker").checked = true;
  }else{
    document.getElementById("ambientChecker").checked = false;
  };
  if(localStorage.getItem("autoSaveScoreCheck") === "true") {
    document.getElementById("autoSaveScoreCheck").checked = true;
    score = localStorage.getItem("currentScore");
    if(localStorage.getItem("lang") === "en") {
      scoreElement.innerText = `Score: ${score}`;
    }else
    if(localStorage.getItem("lang") === "ru") {
      scoreElement.innerText = `Счет: ${score}`;
    }else
    if(localStorage.getItem("lang") === "he") {
      scoreElement.innerText = `ציון: ${score}`;
      document.getElementById("getscore").style.textAlign = "right";
      document.getElementById("gethighscore").style.textAlign = "right";
    }
  }else{
    document.getElementById("autoSaveScoreCheck").checked = false;
    localStorage.setItem("currentScore", "0");
  };
  if(document.getElementById("autoSaveScoreCheck").checked === true) {
    score = localStorage.getItem("currentScore");
  }else{
    console.log("Saved score = " + localStorage.getItem("currentScore"));
  };
  updateFoodPosition();
  updateSnakePosition();
});
window.oncontextmenu=function(){
  return false
};
window.onerror=function(){
  if(localStorage.getItem("lang") === "en") {
    alert("Something error.., Tell us if this alert is jump.");
  }else
  if(localStorage.getItem("lang") === "ru") {
    alert("Произошла ошибка.. Сообщите нам, если отображается это оповещение.");
  }else
  if(localStorage.getItem("lang") === "he") {
    alert("נמצאה שגיאה... ספרו לנו אם ההתראה הזו קופצת.");
  }
};