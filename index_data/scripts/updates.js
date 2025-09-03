
let basicVersion = "1.2.4-v2";
let dateVersion = "[03/09/2025]";
let bugFixEn = "Some fixes.";
let bugFixRu = "Некоторые исправления.";
let bugFixHe = "כמה תיקונים.";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}
let text0en = "In newbie window and in texts.";
let text0ru = "В окне новичка и втекстах.";
let text0he = "בחלון למשתמשים חדשים ובטקסטים.";
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