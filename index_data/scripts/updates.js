let basicVersion = "1.2.1-v2";
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
    updateContent.innerHTML += "<h3>[29/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "Removed languages: Japanese, Chinese (simplified), Chinese (Traditional), Korean and German." + "<br>";
    updateContent.innerHTML += "Added ''What this do'' buttons for settings." + "<br>";
  }else
  if(localStorage.getItem("lang") === "ru") {
    updateTitle.innerHTML = "Что нового в версии " + basicVersion;
    updateContent.innerHTML += "<h3>[29/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "Удалены языки: японский, китайский (упрощенный), китайский (традиционный), корейский и немецкий." + "<br>";
    updateContent.innerHTML += "Добавлены кнопки «Что это делать» для настройки." + "<br>";
  }else
  if(localStorage.getItem("lang") === "he") {
    updateTitle.innerHTML = "מה חדש בגרסה " + basicVersion;
    updateTitle.style.textAlign = "right";
    updateTitle.style.direction = "rtl";
    updateTitle.style.width = "75%";
    updateContent.style.direction = "rtl";
    updateContent.style.textAlign = "right";

    updateContent.innerHTML += "<h3>[29/08/2025]</h3>" + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "הוסרו שפות: יפנית, סינית (פשוטה), סינית (מסורתית), קוריאנית וגרמנית." + "<br>";
    updateContent.innerHTML += "נוספו כפתורים ''מה זה עושה'' להגדרות." + "<br>";
  }
}