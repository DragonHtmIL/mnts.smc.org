
let basicVersion = "1.3.1-v2";
let dateVersion = "[20/10/2025]";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}
let text0en = "devTools is updated and fixed iPads and Tablets support.";
let text0ru = "Инструменты разработчика обновлены и исправлена ​​поддержка iPadы и планшетов.";
let text0he = "כלי הפיתוח עודכנו ותוקן תמיכה בiPadים ובטאבלטים.";

let text1en = "";
let text1ru = "";
let text1he = "";
function updateTextLangs() {
  var updateTitle = document.getElementById("updateTitleLang");
  var updateContent = document.getElementById("updateNoticeContent");
  if(localStorage.getItem("lang") === "en") {
    updateTitle.innerHTML = "New in Version " + basicVersion;
    updateContent.innerHTML += "<h3>" + dateVersion + "</h3>" + "<br>";
    updateContent.innerHTML += text0en + "<br>";
    updateContent.innerHTML += text1en + "<br>";
  }else
  if(localStorage.getItem("lang") === "ru") {
    updateTitle.innerHTML = "Что нового в версии " + basicVersion;
    updateContent.innerHTML += "<h3>" + dateVersion + "</h3>" + "<br>";
    updateContent.innerHTML += text0ru + "<br>";
    updateContent.innerHTML += text1ru + "<br>";
  }else
  if(localStorage.getItem("lang") === "he") {
    updateTitle.innerHTML = "מה חדש בגרסה " + basicVersion;
    updateTitle.style.textAlign = "right";
    updateTitle.style.direction = "rtl";
    updateTitle.style.width = "75%";
    updateContent.style.direction = "rtl";
    updateContent.style.textAlign = "right";

    updateContent.innerHTML += "<h3>" + dateVersion + "</h3>" + "<br>";
    updateContent.innerHTML += text0he + "<br>";
    updateContent.innerHTML += text1he + "<br>";
  }
}