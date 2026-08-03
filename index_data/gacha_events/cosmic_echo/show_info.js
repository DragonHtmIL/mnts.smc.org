function showMechaCosmicPulse() {
  var itemInfo = document.getElementById("itemInfo");
  var itemInfoBg = document.getElementById("bgItemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  var mecha0 = "cosmic-pulse";
  var mecha1en = "Cosmic Pulse";
  var mecha1ru = "Космический Пульс";
  var mecha1he = "דופק קוסמי";
  var pilot1en = "Yutong";
  var pilot1ru = "Ютонг";
  var pilot1he = "יוטונג";
  if(localStorage.getItem(mecha1en) === "geted") {
    itemInfo.style.display = "flex";
    defaultClickSound();
  }else{
    cancelSound();
  }
  itemInfoBg.className = "item-info-bg shad-bg";
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
//  document.getElementById('collectionCenter').style.display = "none";
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
  itemInfoBg.className = "item-info-bg shad-bg";
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
//  document.getElementById('collectionCenter').style.display = "none";
};