
let basicVersion = "1.2.9-v2";
let dateVersion = "[16/10/2025]";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}
let text0en = "Removed rating system, at it no ways do it updateble and show for other users.";
let text0ru = "Удалена рейтинговая система, нет возможности сделать ее обновляемой и отображаемой для других пользователей.";
let text0he = "מערכת דירוג הוסרה, לא ניתן לעשות אותה מעודכנת ולהצה למשתמשים אחרים.";

let text1en = "Loading style is changed to SMC like style.";
let text1ru = "Стиль загрузки изменен на както стиль SMC.";
let text1he = "סגנון הטעינה שונה למשהו בסגנון SMC.";
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