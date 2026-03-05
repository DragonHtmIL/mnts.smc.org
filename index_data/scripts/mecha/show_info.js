function showMechaAkashic() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "akashic";
  var mecha1en = "Akashic";
  var mecha1ru = "Акашик";
  var mecha1he = "אקשיכ";
  var pilot1en = "Opal";
  var pilot1ru = "Опал";
  var pilot1he = "אופל";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaAlborada() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "alborada";
  var mecha1en = "Alborada";
  var mecha1ru = "Альборада";
  var mecha1he = "אלבורדה";
  var pilot1en = "Serena";
  var pilot1ru = "Серена";
  var pilot1he = "סרנה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaAndromeda() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "andromeda";
  var mecha1en = "Andromeda";
  var mecha1ru = "Андромеда";
  var mecha1he = "אנדרומדה";
  var pilot1en = "Joanna";
  var pilot1ru = "Джоанна";
  var pilot1he = "ג'ואנה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaArthur() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "arthur";
  var mecha1en = "Arthur";
  var mecha1ru = "Артур";
  var mecha1he = "ארתור";
  var pilot1en = "Rom";
  var pilot1ru = "Ром";
  var pilot1he = "רום";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaAurora() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "aurora";
  var mecha1en = "Aurora";
  var mecha1ru = "Аврора";
  var mecha1he = "אורורה";
  var pilot1en = "Yutong";
  var pilot1ru = "Ютонг";
  var pilot1he = "יוטונג";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaBoltus() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "boltus";
  var mecha1en = "Boltus";
  var mecha1ru = "Болтус";
  var mecha1he = "בולטוס";
  var pilot1en = "Norma";
  var pilot1ru = "Норма";
  var pilot1he = "נורמה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaCaramel() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "caramel";
  var mecha1en = "Caramel";
  var mecha1ru = "Карамель";
  var mecha1he = "קרמל";
  var pilot1en = "Mila";
  var pilot1ru = "Мила";
  var pilot1he = "מילה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaDeathKnell() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "death-knell";
  var mecha1en = "Death Knell";
  var mecha1ru = "Погребальный звон";
  var mecha1he = "קת המוות";
  var pilot1en = "Belladonna";
  var pilot1ru = "Белладонна";
  var pilot1he = "בלדונה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaDoomlight() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "doomlight";
  var mecha1en = "Doomlight";
  var mecha1ru = "Думлайт";
  var mecha1he = "דומלייט";
  var pilot1en = "Tarantula";
  var pilot1ru = "Тарантул";
  var pilot1he = "טרנטולה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaDreadwolf() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "dreadwolf";
  var mecha1en = "Dreadwolf";
  var mecha1ru = "Дредвулф";
  var mecha1he = "דרידוולף";
  var pilot1en = "Yulia";
  var pilot1ru = "Юлия";
  var pilot1he = "יוליה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaFirefox() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "firefox";
  var mecha1en = "Firefox";
  var mecha1ru = "файрфокс";
  var mecha1he = "פיירפוקס";
  var pilot1en = "Ning";
  var pilot1ru = "Нинг";
  var pilot1he = "נינג";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaFirestar() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "firestar";
  var mecha1en = "Firestar";
  var mecha1ru = "файрстар";
  var mecha1he = "פיירסטאר";
  var pilot1en = "R.E.D";
  var pilot1ru = "Р.Э.Д";
  var pilot1he = "ר.א.ד";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaFlamenco() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "flamenco";
  var mecha1en = "Flamenco";
  var mecha1ru = "Фламенко";
  var mecha1he = "פלמנקו";
  var pilot1en = "Zoe";
  var pilot1ru = "Зои";
  var pilot1he = "זואי";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaGabriel() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "gabriel";
  var mecha1en = "Gabriel";
  var mecha1ru = "Габриэль";
  var mecha1he = "גבריאל";
  var pilot1en = "Silver Deacon";
  var pilot1ru = "Серебряный Дьякон";
  var pilot1he = "דיקון כסף";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaGaia() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "gaia";
  var mecha1en = "Gaia";
  var mecha1ru = "Гайя";
  var mecha1he = "גאיה";
  var pilot1en = "Lysa";
  var pilot1ru = "Лиза";
  var pilot1he = "ליסה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaGuerillaHunter() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "guerilla-hunter";
  var mecha1en = "Guerilla Hunter";
  var mecha1ru = "Партизан Охотник";
  var mecha1he = "צייד גרילה";
  var pilot1en = "Kije";
  var pilot1ru = "Каидж";
  var pilot1he = "קייג'";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaHotsteel() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "hotsteel";
  var mecha1en = "Hotsteel";
  var mecha1ru = "Хотстил";
  var mecha1he = "הוטסטיל";
  var pilot1en = "Ivan";
  var pilot1ru = "Иван";
  var pilot1he = "איוון";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaHurricane() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "hurricane";
  var mecha1en = "Hurricane";
  var mecha1ru = "Ураган";
  var mecha1he = "הוריקן";
  var pilot1en = "Vita";
  var pilot1ru = "Вита";
  var pilot1he = "ויטה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaJOJO() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "jojo";
  var mecha1en = "JOJO";
  var mecha1ru = "ДЖОДЖО";
  var mecha1he = "ג'וג'ו";
  var pilot1en = "Kikina";
  var pilot1ru = "Кикина";
  var pilot1he = "קיקינה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaLancelot() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "lancelot";
  var mecha1en = "Lancelot";
  var mecha1ru = "Ланселот";
  var mecha1he = "לנסלוט";
  var pilot1en = "Matilda";
  var pilot1ru = "Матильда";
  var pilot1he = "מטילדה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaMichael() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "michael";
  var mecha1en = "Michael";
  var mecha1ru = "Михаэль";
  var mecha1he = "מיכאל";
  var pilot1en = "Mobius";
  var pilot1ru = "Мобиус";
  var pilot1he = "מוביוס";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaMoonRabbit() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "moon-rabbit";
  var mecha1en = "Moon Rabbit";
  var mecha1ru = "Лунный Кролик";
  var mecha1he = "ארנב ירח";
  var pilot1en = "None pilot belong to " + mecha1en;
  var pilot1ru = "Ни один пилот не принадлежит " + mecha1ru + "у";
  var pilot1he = "אף טייס לא שייך ל " + mecha1he;
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס/ת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaNebula() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "nebula";
  var mecha1en = "Nebula";
  var mecha1ru = "Небула";
  var mecha1he = "נבולה";
  var pilot1en = "Mia";
  var pilot1ru = "Миа";
  var pilot1he = "מיה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaNeutronStar() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "neutron-star";
  var mecha1en = "Neutron Star";
  var mecha1ru = "Нейтронная Звезда";
  var mecha1he = "כוכב ניוטרון";
  var pilot1en = "Lillian";
  var pilot1ru = "Лилиан";
  var pilot1he = "ליליאן";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaNorthernKnight() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "northern-knight";
  var mecha1en = "Northern Knight";
  var mecha1ru = "Северный Рыцарь";
  var mecha1he = "אביר צפוני";
  var pilot1en = "Jaka";
  var pilot1ru = "Джака";
  var pilot1he = "ג'קה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaPulsar() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "pulsar";
  var mecha1en = "Pulsar";
  var mecha1ru = "Пульсар";
  var mecha1he = "פולסר";
  var pilot1en = "Purity";
  var pilot1ru = "Пурити";
  var pilot1he = "פוריטי";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס/ת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaRanger() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "ranger";
  var mecha1en = "Ranger";
  var mecha1ru = "Рейнджер";
  var mecha1he = "ריינג'ר";
  var pilot1en = "Shin";
  var pilot1ru = "Шин";
  var pilot1he = "שין";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaRaven() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "raven";
  var mecha1en = "Raven";
  var mecha1ru = "Ворон";
  var mecha1he = "עורב";
  var pilot1en = "Nighthawk";
  var pilot1ru = "Ночной Ястреб";
  var pilot1he = "נייטוק";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaShiranui() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "shiranui";
  var mecha1en = "Shiranui";
  var mecha1ru = "Ширануи";
  var mecha1he = "שיראנוי";
  var pilot1en = "Aya";
  var pilot1ru = "Ая";
  var pilot1he = "איה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaSkyfall() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "skyfall";
  var mecha1en = "Skyfall";
  var mecha1ru = "Скайфолл";
  var mecha1he = "סקייפול";
  var pilot1en = "Vanessa";
  var pilot1ru = "Ванесса";
  var pilot1he = "ונסה";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaSkyfire() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "skyfire";
  var mecha1en = "Skyfire";
  var mecha1ru = "Скайфайр";
  var mecha1he = "סקייפייר";
  var pilot1en = "Yang";
  var pilot1ru = "Янг";
  var pilot1he = "יאנג";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaSkylark() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "skylark";
  var mecha1en = "Skylark";
  var mecha1ru = "Скайларк";
  var mecha1he = "סקיילארק";
  var pilot1en = "Iori";
  var pilot1ru = "Иори";
  var pilot1he = "איורי";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaSnowMirage() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "snow-mirage";
  var mecha1en = "Snow Mirage";
  var mecha1ru = "Снежный Мираж";
  var mecha1he = "מיראז' השלג";
  var pilot1en = "Villar";
  var pilot1ru = "Виллар";
  var pilot1he = "וילאר";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaTempest() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "tempest";
  var mecha1en = "Tempest";
  var mecha1ru = "Темпест";
  var mecha1he = "טמפסט";
  var pilot1en = "Furanku";
  var pilot1ru = "Фуранку";
  var pilot1he = "פורנקו";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaTrioofEnders() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "trio-of-enders";
  var mecha1en = "Trio of Enders";
  var mecha1ru = "Трио Эндеров";
  var mecha1he = "שלישייה של אנדרים";
  var pilot1en = "Cyrus";
  var pilot1ru = "Сайрус";
  var pilot1he = "סיירוס";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaTwilight() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "twilight";
  var mecha1en = "Twilight";
  var mecha1ru = "Сумерки";
  var mecha1he = "דמדום";
  var pilot1en = "Fran";
  var pilot1ru = "Фран";
  var pilot1he = "פרן";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};
function showMechaVentorus() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "ventorus";
  var mecha1en = "Ventorus";
  var mecha1ru = "Венторус";
  var mecha1he = "ונטורוס";
  var pilot1en = "Jiu Chong";
  var pilot1ru = "Джю Чонг";
  var pilot1he = "ג'יו צ'ונג";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg def-bg";
  if(localStorage.getItem("lang") === "en") {
    itemName.innerHTML = mecha1en;
    textInfoBelong.innerHTML = "Pilot: " + pilot1en;
  }else
  if(localStorage.getItem("lang") === "ru") {
    itemName.innerHTML = mecha1ru;
    textInfoBelong.innerHTML = "Пилот: " + pilot1ru;
  }else
  if(localStorage.getItem("lang") === "he") {
    itemName.innerHTML = mecha1he;
    textInfoBelong.innerHTML = "טייסת: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};