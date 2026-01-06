
let basicVersion = "1.3.8-v2";
let dateVersion = "[06/01/2026]";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}

let text0en = "Some Fixes for Android users." + "<br>";
let text0ru = "Некоторые Исправления для ползеватели Android." + "<br>";
let text0he = "כמה תיקונים למשתמשי Android." + "<br>";

let text1en = "" + "<br>";
let text1ru = "" + "<br>";
let text1he = "" + "<br>";

let text2en = "" + "<br>";
let text2ru = "" + "<br>";
let text2he = "" + "<br>";

let text3en = "";
let text3ru = "";
let text3he = "";

function updateTextLangs() {
  var updateTitle = document.getElementById("updateTitleLang");
  var updateContent = document.getElementById("updateNoticeContent");
  if(localStorage.getItem("lang") === "en") {
    updateTitle.innerHTML = "New in Version " + basicVersion;
    updateContent.innerHTML += "<h3>" + dateVersion + "</h3>" + "<br>";
    updateContent.innerHTML += text0en;
    updateContent.innerHTML += text1en;
    updateContent.innerHTML += text2en;
    updateContent.innerHTML += text3en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    updateTitle.innerHTML = "Что нового в версии " + basicVersion;
    updateContent.innerHTML += "<h3>" + dateVersion + "</h3>" + "<br>";
    updateContent.innerHTML += text0ru;
    updateContent.innerHTML += text1ru;
    updateContent.innerHTML += text2ru;
    updateContent.innerHTML += text3ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    updateTitle.innerHTML = "מה חדש בגרסה " + basicVersion;
    updateTitle.style.textAlign = "right";
    updateTitle.style.direction = "rtl";
    updateTitle.style.width = "75%";
    updateContent.style.direction = "rtl";
    updateContent.style.textAlign = "right";
    updateContent.innerHTML += "<h3>" + dateVersion + "</h3>" + "<br>";
    updateContent.innerHTML += text0he;
    updateContent.innerHTML += text1he;
    updateContent.innerHTML += text2he;
    updateContent.innerHTML += text3he;
  }
}