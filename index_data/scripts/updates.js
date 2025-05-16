let basicVersion = "1.0.4-v2";
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
    updateContent.innerHTML = "<h3>[10/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[16/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[03/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[02/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Added more boards." + "<br>";
    updateContent.innerHTML += "Added more foods." + "<br>";
    updateContent.innerHTML += "Added hebrew language." + "<br>";
    updateContent.innerHTML += "Added german language." + "<br>";
  }else
  if(localStorage.getItem("lang") === "ru") {
    updateTitle.innerHTML = "Что нового в версии " + basicVersion;
    updateContent.innerHTML = "<h3>[16/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[10/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[03/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[02/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Добавлено больше досок." + "<br>";
    updateContent.innerHTML += "Добавлено больше продуктов." + "<br>";
    updateContent.innerHTML += "Добавлен язык иврит." + "<br>";
    updateContent.innerHTML += "Добавлен немецкий язык." + "<br>";
  }else
  if(localStorage.getItem("lang") === "jp") {
    updateTitle.innerHTML = "バージョン " + basicVersion + " の新機能";
    updateContent.innerHTML = "<h3>[16/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "いくつかの修正." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[10/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "いくつかの修正." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[03/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "いくつかの修正." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[02/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "ボードを追加しました." + "<br>";
    updateContent.innerHTML += "食べ物を追加しました." + "<br>";
    updateContent.innerHTML += "ヘブライ語を追加しました." + "<br>";
    updateContent.innerHTML += "ドイツ語を追加しました." + "<br>";
  }else
  if(localStorage.getItem("lang") === "chs") {
    updateTitle.innerHTML = basicVersion + " 版新增功能";
    updateContent.innerHTML = "<h3>[16/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修复." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[10/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修复." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[03/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修复." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[02/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "增加了更多板." + "<br>";
    updateContent.innerHTML += "添加了更多食物." + "<br>";
    updateContent.innerHTML += "添加希伯来语." + "<br>";
    updateContent.innerHTML += "添加德语." + "<br>";
  }else
  if(localStorage.getItem("lang") === "cht") {
    updateTitle.innerHTML = basicVersion + " 版新增功能";
    updateContent.innerHTML = "<h3>[16/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修復." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[10/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修復." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[03/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修復." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[02/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "增加了更多板." + "<br>";
    updateContent.innerHTML += "添加了更多食物." + "<br>";
    updateContent.innerHTML += "添加希伯來語." + "<br>";
    updateContent.innerHTML += "加入德語." + "<br>";
  }else
  if(localStorage.getItem("lang") === "ko") {
    updateTitle.innerHTML = "버전" + basicVersion + "의 새로운 기능";
    updateContent.innerHTML = "<h3>[16/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[10/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[03/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[02/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "더 많은 보드를 추가했습니다." + "<br>";
    updateContent.innerHTML += "더 많은 음식을 추가했습니다." + "<br>";
    updateContent.innerHTML += "히브리어 언어 추가됨." + "<br>";
    updateContent.innerHTML += "독일어 추가됨." + "<br>";
  }else
  if(localStorage.getItem("lang") === "he") {
    updateTitle.innerHTML = "מה חדש בגרסה " + basicVersion;
    updateTitle.style.textAlign = "right";
    updateTitle.style.direction = "rtl";
    updateTitle.style.width = "75%";
    updateContent.style.direction = "rtl";
    updateContent.style.textAlign = "right";
    updateContent.innerHTML = "<h3>[16/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[10/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[03/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[02/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "נוספו עוד לוחות." + "<br>";
    updateContent.innerHTML += "נוספו עוד מאכלים." + "<br>";
    updateContent.innerHTML += "נוספה השפה העברית." + "<br>";
    updateContent.innerHTML += "נוספה שפה גרמנית." + "<br>";
  }else
  if(localStorage.getItem("lang") === "de") {
    updateTitle.innerHTML = "Was ist neu in Version " + basicVersion;
    updateContent.innerHTML = "<h3>[16/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[10/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[03/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";
    updateContent.innerHTML += "<h3>[02/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Weitere Boards hinzugefügt." + "<br>";
    updateContent.innerHTML += "Weitere Lebensmittel hinzugefügt." + "<br>";
    updateContent.innerHTML += "Hebräische Sprache hinzugefügt." + "<br>";
    updateContent.innerHTML += "Deutsche Sprache hinzugefügt." + "<br>";
  }
}