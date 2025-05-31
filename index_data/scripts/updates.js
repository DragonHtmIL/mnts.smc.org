let basicVersion = "1.0.9-v2";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}
function updateTextLangs() {
  var updateTitle = document.getElementById("updateTitleLang");
  var updateContent = document.getElementById("updateNoticeContent");
  if(localStorage.getItem("lang") === "en") {
    updateTitle.innerHTML = "What new in Version " + basicVersion;
    updateContent.innerHTML = "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[30/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[27/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[26/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Added Mouse Board that give control snake direction with mouse click→move→leave." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[20/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Added direction of snake walk in pause." + "<br>";
    updateContent.innerHTML += "Added Automatic saving of the score, in case of accidental exit." + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
  }else
  if(localStorage.getItem("lang") === "ru") {
    updateTitle.innerHTML = "Что нового в версии " + basicVersion;
    updateContent.innerHTML = "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[30/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[27/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[26/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Добавлена ​​панель управления мышью, которая позволяет управлять направлением змеи с помощью щелчка мыши→переместить→отпустить." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[20/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Добавлено направление змеиного шага в паузе." + "<br>";
    updateContent.innerHTML += "Добавлено автоматическое сохранение счета, в случае случайного выхода." + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
  }else
  if(localStorage.getItem("lang") === "jp") {
    updateTitle.innerHTML = "バージョン " + basicVersion + " の新機能";
    updateContent.innerHTML = "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "いくつかの修正." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[30/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "いくつかの修正." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[27/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "いくつかの修正." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[26/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "マウスのクリック→移動→離脱でヘビの方向を制御できるマウスボードを追加しました。." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[20/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一時停止中にスネークウォークの方向を変更できるようにしました。" + "<br>";
    updateContent.innerHTML += "誤ってゲームを終了した場合に備えて、スコアの自動保存機能を追加しました。" + "<br>";
    updateContent.innerHTML += "いくつかの修正." + "<br>";
  }else
  if(localStorage.getItem("lang") === "chs") {
    updateTitle.innerHTML = basicVersion + " 版新增功能";
    updateContent.innerHTML = "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修复." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[30/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修复." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[27/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修复." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[26/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "添加了鼠标板，通过鼠标单击→移动→离开来控制蛇的方向。" + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[20/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "新增暂停时蛇行方向。" + "<br>";
    updateContent.innerHTML += "新增自动保存分数功能，以防意外退出。" + "<br>";
    updateContent.innerHTML += "一些修复." + "<br>";
  }else
  if(localStorage.getItem("lang") === "cht") {
    updateTitle.innerHTML = basicVersion + " 版新增功能";
    updateContent.innerHTML = "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修復." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML = "<h3>[30/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修復." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[27/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修復." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[26/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "新增了滑鼠板，透過滑鼠點擊→移動→離開來控制蛇的方向。" + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[20/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "增加了蛇在暫停時行走的方向。" + "<br>";
    updateContent.innerHTML += "增加了自動儲存分數的功能，以防意外退出。" + "<br>";
    updateContent.innerHTML += "一些修復." + "<br>";
  }else
  if(localStorage.getItem("lang") === "ko") {
    updateTitle.innerHTML = "버전" + basicVersion + "의 새로운 기능";
    updateContent.innerHTML = "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[30/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[27/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[26/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "新增了滑鼠板，透過滑鼠點擊→移動→離開來控制蛇的方向。" + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[20/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "일시 정지 시 뱀의 걸음 방향을 추가했습니다." + "<br>";
    updateContent.innerHTML += "실수로 게임을 종료할 경우 점수를 자동으로 저장하는 기능을 추가했습니다." + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
  }else
  if(localStorage.getItem("lang") === "he") {
    updateTitle.innerHTML = "מה חדש בגרסה " + basicVersion;
    updateTitle.style.textAlign = "right";
    updateTitle.style.direction = "rtl";
    updateTitle.style.width = "75%";
    updateContent.style.direction = "rtl";
    updateContent.style.textAlign = "right";
    updateContent.innerHTML = "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[30/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[27/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[26/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "נוסף לוח עכבר שנותן שליטה על כיוון הנחש באמצעות לחיצת עכבר → הזזה → עזיבה." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[20/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "נוסף כיוון של הליכה של נחש בהשהיה." + "<br>";
    updateContent.innerHTML += "נוספה שמירה אוטומטית של הניקוד, במקרה של יציאה מקרית." + "<br>";
  }else
  if(localStorage.getItem("lang") === "de") {
    updateTitle.innerHTML = "Was ist neu in Version " + basicVersion;
    updateContent.innerHTML = "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[30/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[27/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[26/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Maussteuerung hinzugefügt, die die Steuerung der Schlangenrichtung durch Mausklick → Bewegen → Verlassen ermöglicht." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[20/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Die Richtung des Schlangengangs wurde in der Pause hinzugefügt." + "<br>";
    updateContent.innerHTML += "Der Spielstand wird nun automatisch gespeichert, falls das Spiel versehentlich beendet wird." + "<br>";
  }
}