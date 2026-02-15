function showMechaShadowWatcher() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "shadow-watcher";
  var mecha1en = "Shadow Watcher";
  var mecha1ru = "Теневой Страж";
  var mecha1he = "צופה צללים";
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
function showMechaYellowDwarf() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "yellow-dwarf";
  var mecha1en = "Yellow Dwarf";
  var mecha1ru = "Жёлтый Гном";
  var mecha1he = "גמד צהוב";
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
    textInfoBelong.innerHTML = "טייס: " + pilot1he;
    textInfoBelong.style.direction = "rtl"
  }
  itemImage.className = "image-preview " + mecha0;
  document.getElementById('collectionCenter').style.display = "none";
};