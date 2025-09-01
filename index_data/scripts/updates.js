
let basicVersion = "1.2.3-v2";
let dateVersion = "[02/09/2025]";
let bugFixEn = "Some fixes.";
let bugFixRu = "Некоторые исправления.";
let bugFixHe = "כמה תיקונים.";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}
let text0en = "Now players can self select the Snake position in board.";
let text0ru = "Теперь игроки могут самостоятельно выбирать позицию Змеи на доске.";
let text0he = "כעת שחקנים יכולים לבחור בעצמם את מיקומו של הנחש בלוח.";
function updateTextLangs() {
  var updateTitle = document.getElementById("updateTitleLang");
  var updateContent = document.getElementById("updateNoticeContent");
  if(localStorage.getItem("lang") === "en") {
    updateTitle.innerHTML = "New in Version " + basicVersion;
    updateContent.innerHTML += "<h3>" + dateVersion + "</h3>" + "<br>";
    updateContent.innerHTML += bugFixEn + "<br>";
    updateContent.innerHTML += text0en + "<br>";
  }else
  if(localStorage.getItem("lang") === "ru") {
    updateTitle.innerHTML = "Что нового в версии " + basicVersion;
    updateContent.innerHTML += "<h3>" + dateVersion + "</h3>" + "<br>";
    updateContent.innerHTML += bugFixRu + "<br>";
    updateContent.innerHTML += text0ru + "<br>";
  }else
  if(localStorage.getItem("lang") === "he") {
    updateTitle.innerHTML = "מה חדש בגרסה " + basicVersion;
    updateTitle.style.textAlign = "right";
    updateTitle.style.direction = "rtl";
    updateTitle.style.width = "75%";
    updateContent.style.direction = "rtl";
    updateContent.style.textAlign = "right";

    updateContent.innerHTML += "<h3>" + dateVersion + "</h3>" + "<br>";
    updateContent.innerHTML += bugFixHe + "<br>";
    updateContent.innerHTML += text0he + "<br>";
  }
}