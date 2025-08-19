let basicVersion = "1.1.9-v2";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}
function updateTextLangs() {
  var updateTitle = document.getElementById("updateTitleLang");
  var updateContent = document.getElementById("updateNoticeContent");
  if(localStorage.getItem("lang") === "en") {
    updateTitle.innerHTML = "New in Version " + basicVersion;
    updateContent.innerHTML += "<h3>[19/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
  }else
  if(localStorage.getItem("lang") === "ru") {
    updateTitle.innerHTML = "Что нового в версии " + basicVersion;
    updateContent.innerHTML += "<h3>[19/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
  }else
  if(localStorage.getItem("lang") === "ja") {
    updateTitle.innerHTML = "バージョン " + basicVersion + " の新機能";
    updateContent.innerHTML += "<h3>[19/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "いくつかの修正。" + "<br>";
  }else
  if(localStorage.getItem("lang") === "chs") {
    updateTitle.innerHTML = basicVersion + " 版新增功能";
    updateContent.innerHTML += "<h3>[19/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修复。" + "<br>";
  }else
  if(localStorage.getItem("lang") === "cht") {
    updateTitle.innerHTML = basicVersion + " 版新增功能";
    updateContent.innerHTML += "<h3>[19/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修復。" + "<br>";
  }else
  if(localStorage.getItem("lang") === "ko") {
    updateTitle.innerHTML = "버전" + basicVersion + "의 새로운 기능";
    updateContent.innerHTML += "<h3>[19/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
  }else
  if(localStorage.getItem("lang") === "he") {
    updateTitle.innerHTML = "מה חדש בגרסה " + basicVersion;
    updateTitle.style.textAlign = "right";
    updateTitle.style.direction = "rtl";
    updateTitle.style.width = "75%";
    updateContent.style.direction = "rtl";
    updateContent.style.textAlign = "right";

    updateContent.innerHTML += "<h3>[19/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
  }else
  if(localStorage.getItem("lang") === "de") {
    updateTitle.innerHTML = "Was ist neu in Version " + basicVersion;
    updateContent.innerHTML += "<h3>[19/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
  }
}