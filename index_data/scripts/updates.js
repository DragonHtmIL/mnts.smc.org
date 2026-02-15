
let basicVersion = "1.4.3-v2";
let dateVersion = "[15/02/2026]";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}

let text0en = "Fixed some errors." + "<br>";
let text0ru = "Исправлены некоторые ошибки." + "<br>";
let text0he = "תוקנו כמה שגיעות." + "<br>";

let text1en = "Shadow prize pool now available." + "<br>";
let text1ru = "Теперь доступен теневой призовой фонд." + "<br>";
let text1he = "פרסי צל זמינים כעת." + "<br>";

let text2en = "<br>Bats light up the lamps in the castle as crows lift the red moon into the sky<br>The phantom of the night hides in the shadow of the moon—A shadow has returned to end all enemies with an arrow to the throat!<br>S-level ''Shadow Watcher'' appearance for Raven, A-level ''Yellow Dwarf'' appearance for Pulsar will be available in this prize pool." + "<br>";
let text2ru = "<br>Летучие мыши освещают фонари в замке, а вороны поднимают красную луну в небо<br>Призрак ночи прячется в тени луны — тень вернулась, чтобы погубить всех врагов стрелой в горло!<br>В этом призовом фонде будут доступны внешний вид S-уровня «Теневой наблюдатель» для Ворона и внешний вид A-уровня «Жёлтый Гном» для Пульсара." + "<br>";
let text2he = "<br>עטלפים מדליקים את המנורות בטירה בעוד עורבים מרימים את הירח האדום לשמיים.<br>רוח הלילה מסתתרת בצל הירח - צל חזר כדי לחסל את כל האויבים בחץ בגרון!<br>הופעה ברמה S של ''צופה צללים'' עבור העורב, הופעה ברמה A של ''גמד צהוב'' עבור פולסר תהיה זמינה בקופת הפרסים הזו." + "<br>";

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