const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");
let gameOver = false;
let foodX, foodY;
let snakeX = Math.floor(Math.random() * 30) + 1, snakeY = Math.floor(Math.random() * 30) + 1;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
// Scores
let score = 0;
let meaw_token_item = localStorage.getItem("meawTokenStorage") || 0;
let gold_item = localStorage.getItem("goldStorage") || 0;
let alpha_coin_item = localStorage.getItem("alphaCoinStorage") || 0;
let crystal_item = localStorage.getItem("crystalStorage") || 0;
let ticket_item = localStorage.getItem("ticketStorage") || 0;
let ticket_chromatic_item = localStorage.getItem("ticketChromaticStorage") || 0;
let ticket_premium_item = localStorage.getItem("ticketPremiumStorage") || 0;
let ticket_premium_2_item = localStorage.getItem("ticketPremium2Storage") || 0;
let virtual_Token_item = localStorage.getItem("virtualTokenStorage") || 0;
let food_id_000 = localStorage.getItem("food000Storage") || 0;
let food_id_001 = localStorage.getItem("food001Storage") || 0;
let food_id_002 = localStorage.getItem("food002Storage") || 0;
let food_id_003 = localStorage.getItem("food003Storage") || 0;
let food_id_004 = localStorage.getItem("food004Storage") || 0;
let food_id_005 = localStorage.getItem("food005Storage") || 0;
let food_id_006 = localStorage.getItem("food006Storage") || 0;
let food_id_007 = localStorage.getItem("food007Storage") || 0;
let food_id_008 = localStorage.getItem("food008Storage") || 0;
let food_id_009 = localStorage.getItem("food009Storage") || 0;
let food_id_010 = localStorage.getItem("food010Storage") || 0;
let food_id_011 = localStorage.getItem("food011Storage") || 0;
let food_id_012 = localStorage.getItem("food012Storage") || 0;
let food_id_013 = localStorage.getItem("food013Storage") || 0;
let food_id_014 = localStorage.getItem("food014Storage") || 0;
let food_id_015 = localStorage.getItem("food015Storage") || 0;
let food_id_016 = localStorage.getItem("food016Storage") || 0;
let food_id_017 = localStorage.getItem("food017Storage") || 0;
let food_id_018 = localStorage.getItem("food018Storage") || 0;
let food_id_019 = localStorage.getItem("food019Storage") || 0;
let food_id_020 = localStorage.getItem("food020Storage") || 0;
let food_id_021 = localStorage.getItem("food021Storage") || 0;
let food_id_022 = localStorage.getItem("food022Storage") || 0;
let food_id_023 = localStorage.getItem("food023Storage") || 0;
let food_id_024 = localStorage.getItem("food024Storage") || 0;
let food_id_025 = localStorage.getItem("food025Storage") || 0;
let food_id_026 = localStorage.getItem("food026Storage") || 0;
let food_id_027 = localStorage.getItem("food027Storage") || 0;
let food_id_028 = localStorage.getItem("food028Storage") || 0;
let food_id_029 = localStorage.getItem("food029Storage") || 0;
let food_id_030 = localStorage.getItem("food030Storage") || 0;
let food_id_031 = localStorage.getItem("food031Storage") || 0;
let food_id_032 = localStorage.getItem("food032Storage") || 0;
let food_id_033 = localStorage.getItem("food033Storage") || 0;
let food_id_034 = localStorage.getItem("food034Storage") || 0;
let food_id_035 = localStorage.getItem("food035Storage") || 0;
let food_id_036 = localStorage.getItem("food036Storage") || 0;
let food_id_037 = localStorage.getItem("food037Storage") || 0;
let food_id_038 = localStorage.getItem("food038Storage") || 0;
let food_id_039 = localStorage.getItem("food039Storage") || 0;
let food_id_040 = localStorage.getItem("food040Storage") || 0;
let food_id_041 = localStorage.getItem("food041Storage") || 0;
let food_id_042 = localStorage.getItem("food042Storage") || 0;
let food_id_043 = localStorage.getItem("food043Storage") || 0;
let food_id_044 = localStorage.getItem("food044Storage") || 0;
let food_id_045 = localStorage.getItem("food045Storage") || 0;
let food_id_046 = localStorage.getItem("food046Storage") || 0;
let food_id_047 = localStorage.getItem("food047Storage") || 0;
let food_id_048 = localStorage.getItem("food048Storage") || 0;
let food_id_049 = localStorage.getItem("food049Storage") || 0;
let food_id_050 = localStorage.getItem("food050Storage") || 0;
let food_id_051 = localStorage.getItem("food051Storage") || 0;
let food_id_052 = localStorage.getItem("food052Storage") || 0;
let food_id_053 = localStorage.getItem("food053Storage") || 0;
let food_id_054 = localStorage.getItem("food054Storage") || 0;
let food_id_055 = localStorage.getItem("food055Storage") || 0;
let food_id_056 = localStorage.getItem("food056Storage") || 0;
let food_id_057 = localStorage.getItem("food057Storage") || 0;
let food_id_058 = localStorage.getItem("food058Storage") || 0;
let food_id_059 = localStorage.getItem("food059Storage") || 0;
let food_id_060 = localStorage.getItem("food060Storage") || 0;
let food_id_061 = localStorage.getItem("food061Storage") || 0;
let food_id_062 = localStorage.getItem("food062Storage") || 0;
let food_id_063 = localStorage.getItem("food063Storage") || 0;
let food_id_064 = localStorage.getItem("food064Storage") || 0;
let food_id_065 = localStorage.getItem("food065Storage") || 0;
let food_id_066 = localStorage.getItem("food066Storage") || 0;
let food_id_067 = localStorage.getItem("food067Storage") || 0;
let food_id_068 = localStorage.getItem("food068Storage") || 0;
let food_id_069 = localStorage.getItem("food069Storage") || 0;
let food_id_070 = localStorage.getItem("food070Storage") || 0;
let food_id_071 = localStorage.getItem("food071Storage") || 0;
let food_id_072 = localStorage.getItem("food072Storage") || 0;
let food_id_073 = localStorage.getItem("food073Storage") || 0;
let food_id_074 = localStorage.getItem("food074Storage") || 0;
let food_id_075 = localStorage.getItem("food075Storage") || 0;
let food_id_076 = localStorage.getItem("food076Storage") || 0;
let food_id_077 = localStorage.getItem("food077Storage") || 0;
// End scores
let highScore = localStorage.getItem("high-score") || 0;
if(localStorage.getItem("lang") === "en") {
  highScoreElement.innerText = `High Score: ${highScore}`;
}else
if(localStorage.getItem("lang") === "ru") {
  highScoreElement.innerText = `Высокий счет: ${highScore}`;
}else
if(localStorage.getItem("lang") === "jp") {
  highScoreElement.innerText = `ハイスコ​​ア: ${highScore}`;
}else
if(localStorage.getItem("lang") === "chs") {
  highScoreElement.innerText = `高分： ${highScore}`;
}else
if(localStorage.getItem("lang") === "cht") {
  highScoreElement.innerText = `高分： ${highScore}`;
}else
if(localStorage.getItem("lang") === "ko") {
  highScoreElement.innerText = `높은 점수: ${highScore}`;
}else
if(localStorage.getItem("lang") === "he") {
  highScoreElement.innerText = `ציון גבוהה: ${highScore}`;
  highScoreElement.style.textAlign = "right";
}else
if(localStorage.getItem("lang") === "de") {
  highScoreElement.innerText = `hohes punktzahl: ${highScore}`;
};
const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};
const handleGameOver = () => {
  document.getElementById("loseModal").style.display = "block";
  document.getElementById("loseScore").innerHTML = scoreElement.innerText;
  updateFoodPosition();
  clearInterval(playFireworksSounds);
  if(score <= localStorage.getItem("steelScore")) {
    document.getElementById("loseNewRecordScore").innerHTML = "";
  }else
  if(score === localStorage.getItem("steelScore")) {
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("loseNewRecordScore").innerHTML = "So close to a new record!";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("loseNewRecordScore").innerHTML = "Так близко к новому рекорду!";
    }else
    if(localStorage.getItem("lang") === "jp") {
      document.getElementById("loseNewRecordScore").innerHTML = "新記録にかなり近づいています!";
    }else
    if(localStorage.getItem("lang") === "chs") {
      document.getElementById("loseNewRecordScore").innerHTML = "距离新纪录仅一步之遥！";
    }else
    if(localStorage.getItem("lang") === "cht") {
      document.getElementById("loseNewRecordScore").innerHTML = "距離新紀錄只有一步之遙！";
    }else
    if(localStorage.getItem("lang") === "ko") {
      document.getElementById("loseNewRecordScore").innerHTML = "새로운 기록에 정말 가까워요!";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("loseNewRecordScore").innerHTML = "קרוב להשג חדש!";
      document.getElementById("loseNewRecordScore").style.direction = "rtl";
    }else
    if(localStorage.getItem("lang") === "de") {
      document.getElementById("loseNewRecordScore").innerHTML = "so nah dran, einen neuen Rekord aufzustellen!";
    }
  }else
  if(score >= localStorage.getItem("steelScore")) {
    if(localStorage.getItem("lang") === "en") {
      document.getElementById("loseNewRecordScore").innerHTML = "Congrats, you achieved a new record!";
    }else
    if(localStorage.getItem("lang") === "ru") {
      document.getElementById("loseNewRecordScore").innerHTML = "Поздравляем, вы установили новый рекорд!";
    }else
    if(localStorage.getItem("lang") === "jp") {
      document.getElementById("loseNewRecordScore").innerHTML = "おめでとうございます、新記録を達成しました！";
    }else
    if(localStorage.getItem("lang") === "chs") {
      document.getElementById("loseNewRecordScore").innerHTML = "恭喜您，创造了新纪录！";
    }else
    if(localStorage.getItem("lang") === "cht") {
      document.getElementById("loseNewRecordScore").innerHTML = "恭喜您，創造了新紀錄！";
    }else
    if(localStorage.getItem("lang") === "ko") {
      document.getElementById("loseNewRecordScore").innerHTML = "축하합니다! 새로운 기록을 달성했습니다!";
    }else
    if(localStorage.getItem("lang") === "he") {
      document.getElementById("loseNewRecordScore").innerHTML = "מזל טוב, השגת שיא חדש!";
      document.getElementById("loseNewRecordScore").style.direction = "rtl";
    }else
    if(localStorage.getItem("lang") === "de") {
      document.getElementById("loseNewRecordScore").innerHTML = "Glückwunsch, Sie haben einen neuen Rekord aufgestellt!";
    }
  };
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
const changeDirection = e => {
  if(e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  } else if(e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
    if(document.getElementById("chechboxPausing").checked === false) {
      playActiveMoveSound();
    }else{
      return false;
    }
  }
};
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));
const initGame = () => {
  if(gameOver) return handleGameOver();
  let html = `<div class="food ` + localStorage.getItem("reapitfood") + `" style="grid-area: ${foodY} / ${foodX}"></div>`;
  if(snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();
    playCollectItem();
    snakeBody.push([foodY, foodX]);
    score++;
    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);
    if(localStorage.getItem("lang") === "en") {
      scoreElement.innerText = `Score: ${score}`;
      highScoreElement.innerText = `High Score: ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "ru") {
      scoreElement.innerText = `Счет: ${score}`;
      highScoreElement.innerText = `Высокий счет: ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "jp") {
      scoreElement.innerText = `チェック： ${score}`;
      highScoreElement.innerText = `ハイスコ​​ア: ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "chs") {
      scoreElement.innerText = `分数： ${score}`;
      highScoreElement.innerText = `高分： ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "cht") {
      scoreElement.innerText = `分數： ${score}`;
      highScoreElement.innerText = `高分： ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "ko") {
      scoreElement.innerText = `점수: ${score}`;
      highScoreElement.innerText = `높은 점수: ${highScore}`;
    }else
    if(localStorage.getItem("lang") === "he") {
      scoreElement.innerText = `ציון: ${score}`;
      highScoreElement.innerText = `ציון גבוהה: ${highScore}`;
      document.getElementById("getscore").style.textAlign = "right";
      document.getElementById("gethighscore").style.textAlign = "right";
    }else
    if(localStorage.getItem("lang") === "de") {
      scoreElement.innerText = `punktzahl: ${score}`;
      highScoreElement.innerText = `hohes punktzahl: ${highScore}`;
    }
    if(localStorage.getItem("foodStyle") === "imgMeow") {
      meaw_token_item++;
      document.getElementById("collectedMeow").innerHTML = meaw_token_item;
      localStorage.setItem("meawTokenStorage", meaw_token_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgGold") {
      gold_item++;
      document.getElementById("collectedGold").innerHTML = gold_item;
      localStorage.setItem("goldStorage", gold_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgAlphacoin") {
      alpha_coin_item++;
      document.getElementById("collectedAlphacoin").innerHTML = alpha_coin_item;
      localStorage.setItem("alphaCoinStorage", alpha_coin_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgCrystal") {
      crystal_item++;
      document.getElementById("collectedCrystal").innerHTML = crystal_item;
      localStorage.setItem("crystalStorage", crystal_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgTicket") {
      ticket_item++;
      document.getElementById("collectedTicket").innerHTML = ticket_item;
      localStorage.setItem("ticketStorage", ticket_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgCticket") {
      ticket_chromatic_item++;
      document.getElementById("collectedCticket").innerHTML = ticket_chromatic_item;
      localStorage.setItem("ticketChromaticStorage", ticket_chromatic_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgPticket") {
      ticket_premium_item++;
      document.getElementById("collectedPticket").innerHTML = ticket_premium_item;
      localStorage.setItem("ticketPremiumStorage", ticket_premium_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgPticket2") {
      ticket_premium_2_item++;
      document.getElementById("collectedPticket2").innerHTML = ticket_premium_2_item;
      localStorage.setItem("ticketPremium2Storage", ticket_premium_2_item);
    }else
    if(localStorage.getItem("foodStyle") === "imgVirtualToken") {
      virtual_Token_item++;
      document.getElementById("collectedVirtualToken").innerHTML = virtual_Token_item;
      localStorage.setItem("virtualTokenStorage", virtual_Token_item);
    }else
    if(localStorage.getItem("foodStyle") === "img000food") {
      food_id_000++;
      document.getElementById("collected000Food").innerHTML = food_id_000;
      localStorage.setItem("food000Storage", food_id_000);
    }else
    if(localStorage.getItem("foodStyle") === "img001food") {
      food_id_001++;
      document.getElementById("collected001Food").innerHTML = food_id_001;
      localStorage.setItem("food001Storage", food_id_001);
    }else
    if(localStorage.getItem("foodStyle") === "img002food") {
      food_id_002++;
      document.getElementById("collected002Food").innerHTML = food_id_002;
      localStorage.setItem("food002Storage", food_id_002);
    }else
    if(localStorage.getItem("foodStyle") === "img003food") {
      food_id_003++;
      document.getElementById("collected003Food").innerHTML = food_id_003;
      localStorage.setItem("food003Storage", food_id_003);
    }else
    if(localStorage.getItem("foodStyle") === "img004food") {
      food_id_004++;
      document.getElementById("collected004Food").innerHTML = food_id_004;
      localStorage.setItem("food004Storage", food_id_004);
    }else
    if(localStorage.getItem("foodStyle") === "img005food") {
      food_id_005++;
      document.getElementById("collected005Food").innerHTML = food_id_005;
      localStorage.setItem("food005Storage", food_id_005);
    }else
    if(localStorage.getItem("foodStyle") === "img006food") {
      food_id_006++;
      document.getElementById("collected006Food").innerHTML = food_id_006;
      localStorage.setItem("food006Storage", food_id_006);
    }else
    if(localStorage.getItem("foodStyle") === "img007food") {
      food_id_007++;
      document.getElementById("collected007Food").innerHTML = food_id_007;
      localStorage.setItem("food007Storage", food_id_007);
    }else
    if(localStorage.getItem("foodStyle") === "img008food") {
      food_id_008++;
      document.getElementById("collected008Food").innerHTML = food_id_008;
      localStorage.setItem("food008Storage", food_id_008);
    }else
    if(localStorage.getItem("foodStyle") === "img009food") {
      food_id_009++;
      document.getElementById("collected009Food").innerHTML = food_id_009;
      localStorage.setItem("food009Storage", food_id_009);
    }else
    if(localStorage.getItem("foodStyle") === "img010food") {
      food_id_010++;
      document.getElementById("collected010Food").innerHTML = food_id_010;
      localStorage.setItem("food010Storage", food_id_010);
    }else
    if(localStorage.getItem("foodStyle") === "img011food") {
      food_id_011++;
      document.getElementById("collected011Food").innerHTML = food_id_011;
      localStorage.setItem("food011Storage", food_id_011);
    }else
    if(localStorage.getItem("foodStyle") === "img012food") {
      food_id_012++;
      document.getElementById("collected012Food").innerHTML = food_id_012;
      localStorage.setItem("food012Storage", food_id_012);
    }else
    if(localStorage.getItem("foodStyle") === "img013food") {
      food_id_013++;
      document.getElementById("collected013Food").innerHTML = food_id_013;
      localStorage.setItem("food013Storage", food_id_013);
    }else
    if(localStorage.getItem("foodStyle") === "img014food") {
      food_id_014++;
      document.getElementById("collected014Food").innerHTML = food_id_014;
      localStorage.setItem("food014Storage", food_id_014);
    }else
    if(localStorage.getItem("foodStyle") === "img015food") {
      food_id_015++;
      document.getElementById("collected015Food").innerHTML = food_id_015;
      localStorage.setItem("food015Storage", food_id_015);
    }else
    if(localStorage.getItem("foodStyle") === "img016food") {
      food_id_016++;
      document.getElementById("collected016Food").innerHTML = food_id_016;
      localStorage.setItem("food016Storage", food_id_016);
    }else
    if(localStorage.getItem("foodStyle") === "img017food") {
      food_id_017++;
      document.getElementById("collected017Food").innerHTML = food_id_017;
      localStorage.setItem("food017Storage", food_id_017);
    }else
    if(localStorage.getItem("foodStyle") === "img018food") {
      food_id_018++;
      document.getElementById("collected018Food").innerHTML = food_id_018;
      localStorage.setItem("food018Storage", food_id_018);
    }else
    if(localStorage.getItem("foodStyle") === "img019food") {
      food_id_019++;
      document.getElementById("collected019Food").innerHTML = food_id_019;
      localStorage.setItem("food019Storage", food_id_019);
    }else
    if(localStorage.getItem("foodStyle") === "img020food") {
      food_id_020++;
      document.getElementById("collected020Food").innerHTML = food_id_020;
      localStorage.setItem("food020Storage", food_id_020);
    }else
    if(localStorage.getItem("foodStyle") === "img021food") {
      food_id_021++;
      document.getElementById("collected021Food").innerHTML = food_id_021;
      localStorage.setItem("food021Storage", food_id_021);
    }else
    if(localStorage.getItem("foodStyle") === "img022food") {
      food_id_022++;
      document.getElementById("collected022Food").innerHTML = food_id_022;
      localStorage.setItem("food022Storage", food_id_022);
    }else
    if(localStorage.getItem("foodStyle") === "img023food") {
      food_id_023++;
      document.getElementById("collected023Food").innerHTML = food_id_023;
      localStorage.setItem("food023Storage", food_id_023);
    }else
    if(localStorage.getItem("foodStyle") === "img024food") {
      food_id_024++;
      document.getElementById("collected024Food").innerHTML = food_id_024;
      localStorage.setItem("food024Storage", food_id_024);
    }else
    if(localStorage.getItem("foodStyle") === "img025food") {
      food_id_025++;
      document.getElementById("collected025Food").innerHTML = food_id_025;
      localStorage.setItem("food025Storage", food_id_025);
    }else
    if(localStorage.getItem("foodStyle") === "img026food") {
      food_id_026++;
      document.getElementById("collected026Food").innerHTML = food_id_026;
      localStorage.setItem("food026Storage", food_id_026);
    }else
    if(localStorage.getItem("foodStyle") === "img027food") {
      food_id_027++;
      document.getElementById("collected027Food").innerHTML = food_id_027;
      localStorage.setItem("food027Storage", food_id_027);
    }else
    if(localStorage.getItem("foodStyle") === "img028food") {
      food_id_028++;
      document.getElementById("collected028Food").innerHTML = food_id_028;
      localStorage.setItem("food028Storage", food_id_028);
    }else
    if(localStorage.getItem("foodStyle") === "img029food") {
      food_id_029++;
      document.getElementById("collected029Food").innerHTML = food_id_029;
      localStorage.setItem("food029Storage", food_id_029);
    }else
    if(localStorage.getItem("foodStyle") === "img030food") {
      food_id_030++;
      document.getElementById("collected030Food").innerHTML = food_id_030;
      localStorage.setItem("food030Storage", food_id_030);
    }else
    if(localStorage.getItem("foodStyle") === "img031food") {
      food_id_031++;
      document.getElementById("collected031Food").innerHTML = food_id_031;
      localStorage.setItem("food031Storage", food_id_031);
    }else
    if(localStorage.getItem("foodStyle") === "img032food") {
      food_id_032++;
      document.getElementById("collected032Food").innerHTML = food_id_032;
      localStorage.setItem("food032Storage", food_id_032);
    }else
    if(localStorage.getItem("foodStyle") === "img033food") {
      food_id_033++;
      document.getElementById("collected033Food").innerHTML = food_id_033;
      localStorage.setItem("food033Storage", food_id_033);
    }else
    if(localStorage.getItem("foodStyle") === "img034food") {
      food_id_034++;
      document.getElementById("collected034Food").innerHTML = food_id_034;
      localStorage.setItem("food034Storage", food_id_034);
    }else
    if(localStorage.getItem("foodStyle") === "img035food") {
      food_id_035++;
      document.getElementById("collected035Food").innerHTML = food_id_035;
      localStorage.setItem("food035Storage", food_id_035);
    }else
    if(localStorage.getItem("foodStyle") === "img036food") {
      food_id_036++;
      document.getElementById("collected036Food").innerHTML = food_id_036;
      localStorage.setItem("food036Storage", food_id_036);
    }else
    if(localStorage.getItem("foodStyle") === "img037food") {
      food_id_037++;
      document.getElementById("collected037Food").innerHTML = food_id_037;
      localStorage.setItem("food037Storage", food_id_037);
    }else
    if(localStorage.getItem("foodStyle") === "img038food") {
      food_id_038++;
      document.getElementById("collected038Food").innerHTML = food_id_038;
      localStorage.setItem("food038Storage", food_id_038);
    }else
    if(localStorage.getItem("foodStyle") === "img039food") {
      food_id_039++;
      document.getElementById("collected039Food").innerHTML = food_id_039;
      localStorage.setItem("food039Storage", food_id_039);
    }else
    if(localStorage.getItem("foodStyle") === "img040food") {
      food_id_040++;
      document.getElementById("collected040Food").innerHTML = food_id_040;
      localStorage.setItem("food040Storage", food_id_040);
    }else
    if(localStorage.getItem("foodStyle") === "img041food") {
      food_id_041++;
      document.getElementById("collected041Food").innerHTML = food_id_041;
      localStorage.setItem("food041Storage", food_id_041);
    }else
    if(localStorage.getItem("foodStyle") === "img042food") {
      food_id_042++;
      document.getElementById("collected042Food").innerHTML = food_id_042;
      localStorage.setItem("food042Storage", food_id_042);
    }else
    if(localStorage.getItem("foodStyle") === "img043food") {
      food_id_043++;
      document.getElementById("collected043Food").innerHTML = food_id_043;
      localStorage.setItem("food043Storage", food_id_043);
    }else
    if(localStorage.getItem("foodStyle") === "img044food") {
      food_id_044++;
      document.getElementById("collected044Food").innerHTML = food_id_044;
      localStorage.setItem("food044Storage", food_id_044);
    }else
    if(localStorage.getItem("foodStyle") === "img045food") {
      food_id_045++;
      document.getElementById("collected045Food").innerHTML = food_id_045;
      localStorage.setItem("food045Storage", food_id_045);
    }else
    if(localStorage.getItem("foodStyle") === "img046food") {
      food_id_046++;
      document.getElementById("collected046Food").innerHTML = food_id_046;
      localStorage.setItem("food046Storage", food_id_046);
    }else
    if(localStorage.getItem("foodStyle") === "img047food") {
      food_id_047++;
      document.getElementById("collected047Food").innerHTML = food_id_047;
      localStorage.setItem("food047Storage", food_id_047);
    }else
    if(localStorage.getItem("foodStyle") === "img048food") {
      food_id_048++;
      document.getElementById("collected048Food").innerHTML = food_id_048;
      localStorage.setItem("food048Storage", food_id_048);
    }else
    if(localStorage.getItem("foodStyle") === "img049food") {
      food_id_049++;
      document.getElementById("collected049Food").innerHTML = food_id_049;
      localStorage.setItem("food049Storage", food_id_049);
    }else
    if(localStorage.getItem("foodStyle") === "img050food") {
      food_id_050++;
      document.getElementById("collected050Food").innerHTML = food_id_050;
      localStorage.setItem("food050Storage", food_id_050);
    }else
    if(localStorage.getItem("foodStyle") === "img051food") {
      food_id_051++;
      document.getElementById("collected051Food").innerHTML = food_id_051;
      localStorage.setItem("food051Storage", food_id_051);
    }else
    if(localStorage.getItem("foodStyle") === "img052food") {
      food_id_052++;
      document.getElementById("collected052Food").innerHTML = food_id_052;
      localStorage.setItem("food052Storage", food_id_052);
    }else
    if(localStorage.getItem("foodStyle") === "img053food") {
      food_id_053++;
      document.getElementById("collected053Food").innerHTML = food_id_053;
      localStorage.setItem("food053Storage", food_id_053);
    }else
    if(localStorage.getItem("foodStyle") === "img054food") {
      food_id_054++;
      document.getElementById("collected054Food").innerHTML = food_id_054;
      localStorage.setItem("food054Storage", food_id_054);
    }else
    if(localStorage.getItem("foodStyle") === "img055food") {
      food_id_055++;
      document.getElementById("collected055Food").innerHTML = food_id_055;
      localStorage.setItem("food055Storage", food_id_055);
    }else
    if(localStorage.getItem("foodStyle") === "img056food") {
      food_id_056++;
      document.getElementById("collected056Food").innerHTML = food_id_056;
      localStorage.setItem("food056Storage", food_id_056);
    }else
    if(localStorage.getItem("foodStyle") === "img057food") {
      food_id_057++;
      document.getElementById("collected057Food").innerHTML = food_id_057;
      localStorage.setItem("food057Storage", food_id_057);
    }else
    if(localStorage.getItem("foodStyle") === "img058food") {
      food_id_058++;
      document.getElementById("collected058Food").innerHTML = food_id_058;
      localStorage.setItem("food058Storage", food_id_058);
    }else
    if(localStorage.getItem("foodStyle") === "img059food") {
      food_id_059++;
      document.getElementById("collected059Food").innerHTML = food_id_059;
      localStorage.setItem("food059Storage", food_id_059);
    }else
    if(localStorage.getItem("foodStyle") === "img060food") {
      food_id_060++;
      document.getElementById("collected060Food").innerHTML = food_id_060;
      localStorage.setItem("food060Storage", food_id_060);
    }else
    if(localStorage.getItem("foodStyle") === "img061food") {
      food_id_061++;
      document.getElementById("collected061Food").innerHTML = food_id_061;
      localStorage.setItem("food061Storage", food_id_061);
    }else
    if(localStorage.getItem("foodStyle") === "img062food") {
      food_id_062++;
      document.getElementById("collected062Food").innerHTML = food_id_062;
      localStorage.setItem("food062Storage", food_id_062);
    }else
    if(localStorage.getItem("foodStyle") === "img063food") {
      food_id_063++;
      document.getElementById("collected063Food").innerHTML = food_id_063;
      localStorage.setItem("food063Storage", food_id_063);
    }else
    if(localStorage.getItem("foodStyle") === "img064food") {
      food_id_064++;
      document.getElementById("collected064Food").innerHTML = food_id_064;
      localStorage.setItem("food064Storage", food_id_064);
    }else
    if(localStorage.getItem("foodStyle") === "img065food") {
      food_id_065++;
      document.getElementById("collected065Food").innerHTML = food_id_065;
      localStorage.setItem("food065Storage", food_id_065);
    }else
    if(localStorage.getItem("foodStyle") === "img066food") {
      food_id_066++;
      document.getElementById("collected066Food").innerHTML = food_id_066;
      localStorage.setItem("food066Storage", food_id_066);
    }else
    if(localStorage.getItem("foodStyle") === "img067food") {
      food_id_067++;
      document.getElementById("collected067Food").innerHTML = food_id_067;
      localStorage.setItem("food067Storage", food_id_067);
    }else
    if(localStorage.getItem("foodStyle") === "img068food") {
      food_id_068++;
      document.getElementById("collected068Food").innerHTML = food_id_068;
      localStorage.setItem("food068Storage", food_id_068);
    }else
    if(localStorage.getItem("foodStyle") === "img069food") {
      food_id_069++;
      document.getElementById("collected069Food").innerHTML = food_id_069;
      localStorage.setItem("food069Storage", food_id_069);
    }else
    if(localStorage.getItem("foodStyle") === "img070food") {
      food_id_070++;
      document.getElementById("collected070Food").innerHTML = food_id_070;
      localStorage.setItem("food070Storage", food_id_070);
    }else
    if(localStorage.getItem("foodStyle") === "img071food") {
      food_id_071++;
      document.getElementById("collected071Food").innerHTML = food_id_071;
      localStorage.setItem("food071Storage", food_id_071);
    }else
    if(localStorage.getItem("foodStyle") === "img072food") {
      food_id_072++;
      document.getElementById("collected072Food").innerHTML = food_id_072;
      localStorage.setItem("food072Storage", food_id_072);
    }else
    if(localStorage.getItem("foodStyle") === "img073food") {
      food_id_073++;
      document.getElementById("collected073Food").innerHTML = food_id_073;
      localStorage.setItem("food073Storage", food_id_073);
    }else
    if(localStorage.getItem("foodStyle") === "img074food") {
      food_id_074++;
      document.getElementById("collected074Food").innerHTML = food_id_074;
      localStorage.setItem("food074Storage", food_id_074);
    }else
    if(localStorage.getItem("foodStyle") === "img075food") {
      food_id_075++;
      document.getElementById("collected075Food").innerHTML = food_id_075;
      localStorage.setItem("food075Storage", food_id_075);
    }else
    if(localStorage.getItem("foodStyle") === "img076food") {
      food_id_076++;
      document.getElementById("collected076Food").innerHTML = food_id_076;
      localStorage.setItem("food076Storage", food_id_076);
    }else
    if(localStorage.getItem("foodStyle") === "img077food") {
      food_id_077++;
      document.getElementById("collected077Food").innerHTML = food_id_077;
      localStorage.setItem("food077Storage", food_id_077);
    }
  };
  snakeX += velocityX;
  snakeY += velocityY;
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  };
  snakeBody[0] = [snakeX, snakeY];
  if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    return gameOver = true;
  };
  for (let i = 0; i < snakeBody.length; i++) {
    html += `<div class="head ltr` + localStorage.getItem("snakeLetter") + `" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}` + `;background-color:` + localStorage.getItem("snakeColor") + `;"></div>`;
    if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
      gameOver = true;
    }
  };
  playBoard.innerHTML = html;
  levelsSystem();
  leagueSystem();
};
updateFoodPosition();
if(localStorage.getItem("difficulty") === "normal") {
  setIntervalId = setInterval(initGame, 140);
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "shiranuiWalk") {
    document.getElementById("shiranuiWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "akashicWalk") {
    document.getElementById("akashicWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skyfallWalk") {
    document.getElementById("skyfallWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "tempestWalk") {
    document.getElementById("tempestWalk").playbackRate = 1.0;
  }
}else
if(localStorage.getItem("difficulty") === "hard") {
  setIntervalId = setInterval(initGame, 100);
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "shiranuiWalk") {
    document.getElementById("shiranuiWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "akashicWalk") {
    document.getElementById("akashicWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "skyfallWalk") {
    document.getElementById("skyfallWalk").playbackRate = 1.5;
  }else
  if(localStorage.getItem("movementbg") === "tempestWalk") {
    document.getElementById("tempestWalk").playbackRate = 1.5;
  }
}else
if(localStorage.getItem("difficulty") === "hell") {
  setIntervalId = setInterval(initGame, 50);
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "shiranuiWalk") {
    document.getElementById("shiranuiWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "akashicWalk") {
    document.getElementById("akashicWalk").playbackRate = 2.0;
  }else
  if(localStorage.getItem("movementbg") === "skyfallWalk") {
    document.getElementById("skyfallWalk").playbackRate = 2.0;
  }
}else
if(localStorage.getItem("difficulty") === "") {
  setIntervalId = setInterval(initGame, 140);
  if(localStorage.getItem("movementbg") === "playerWalk") {
    document.getElementById("playerWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "alboradaWalk") {
    document.getElementById("alboradaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "andromedaWalk") {
    document.getElementById("andromedaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "arthurWalk") {
    document.getElementById("arthurWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "auroraWalk") {
    document.getElementById("auroraWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "boltusWalk") {
    document.getElementById("boltusWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "caramelWalk") {
    document.getElementById("caramelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "doomlightlWalk") {
    document.getElementById("doomlightlWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "firefoxWalk") {
    document.getElementById("firefoxWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "firestarWalk") {
    document.getElementById("firestarWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "flamencoWalk") {
    document.getElementById("flamencoWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "gabrielWalk") {
    document.getElementById("gabrielWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "hotsteelWalk") {
    document.getElementById("hotsteelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "hurricaneWalk") {
    document.getElementById("hurricaneWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "jojoWalk") {
    document.getElementById("jojoWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "michaelWalk") {
    document.getElementById("michaelWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "neutronWalk") {
    document.getElementById("neutronWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "northernWalk") {
    document.getElementById("northernWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "pulsarWalk") {
    document.getElementById("pulsarWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "rangerWalk") {
    document.getElementById("rangerWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "ravenWalk") {
    document.getElementById("ravenWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skylarkWalk") {
    document.getElementById("skylarkWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "snowWalk") {
    document.getElementById("snowWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "trioWalk") {
    document.getElementById("trioWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "ventorusWalk") {
    document.getElementById("ventorusWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "deathKnellWalk") {
    document.getElementById("deathKnellWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "dreadwolfWalk") {
    document.getElementById("dreadwolfWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "gaialWalk") {
    document.getElementById("gaialWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "guerillaHunterWalk") {
    document.getElementById("guerillaHunterWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "lancelotWalk") {
    document.getElementById("lancelotWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "moonRabbitWalk") {
    document.getElementById("moonRabbitWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "nebulaWalk") {
    document.getElementById("nebulaWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "shiranuiWalk") {
    document.getElementById("shiranuiWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skyfireWalk") {
    document.getElementById("skyfireWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "twilightWalk") {
    document.getElementById("twilightWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "akashicWalk") {
    document.getElementById("akashicWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "skyfallWalk") {
    document.getElementById("skyfallWalk").playbackRate = 1.0;
  }else
  if(localStorage.getItem("movementbg") === "tempestWalk") {
    document.getElementById("tempestWalk").playbackRate = 1.0;
  }
};
document.addEventListener("keydown", changeDirection);