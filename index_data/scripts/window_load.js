window.addEventListener('load', function() {
  setTimeout(() => {
    document.getElementById("gameLogo").style.display = "none";
    loadTextures();
  }, 1000);
  languagesContents();
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
  levelsSystem();
  leagueSystem();
  if(localStorage.getItem("snakePosType") === "random") {
    document.getElementById("randomSnakePos").checked = true;
    document.getElementById("snakePositionContainer").classList.remove("drowed");
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
    document.getElementById("snakePositionContainer").classList.add("drowed");
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
  if(localStorage.getItem("adminTools") === "true") {
    document.getElementById("administratorToolsContent").classList.add("drowed");
    document.getElementById("administratorTools").checked = true;
  };
  if(localStorage.getItem("devTools") === "true") {
    document.getElementById("f12Tool").checked = true;
  };
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
  };
  updateFoodPosition();
  updateSnakePosition();
  costGoldShows();
});