
let basicVersion = "1.3.3-v2";
let dateVersion = "[25/10/2025]";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}

let text0en = "Gacha is moved to here, so if you have installed ''SMC Lucky House'', uninstall them." + "<br>";
let text0ru = "Gacha перемещена сюда, поэтому, если у вас установлен «SMC Lucky House», удалите его." + "<br>";
let text0he = "גאצ'ה הועבר לכאן, אז אם התקנת את ''SMC Lucky House'', הסר את ההתקנה שלו." + "<br>";

let text1en = "Now menu have button with more tools with Notice, Shop, Gacha and more." + "<br>";
let text1ru = "Теперь в меню есть кнопки с большим инструментов с Уведомление, Магазин, Gacha и более." + "<br>";
let text1he = "כעת בתפריט יש כפתור עם כלים נוספים עם הודעות, חנות, גאצ'ה ועוד." + "<br>";

let text2en = "Items removed is tickets for by them and use in Gacha." + "<br>";
let text2ru = "Удалённые предметы это билеты для  купки и использовать в Gacha." + "<br>";
let text2he = "הפריטים שהוסרו הם כרטיסים לקנייה ולשימוש בגאצ'ה." + "<br>";

let text3en = "Some Fixes and Changes.";
let text3ru = "Некоторые Исправления и Изменение.";
let text3he = "כמה תיקונים ושינויים.";

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