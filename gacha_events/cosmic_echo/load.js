const cosmicName = "cosmic";
const namesEnCosmic = ["Cosmic Echo", "Cosmic Pulse", "DJ Hacker"];
const namesRuCosmic = ["Космическое Эхо", "Космический Пульс", "DJ Хакер"];
const namesHeCosmic = ["הד קוסמי", "דופק קוסמי", "DJ הקר"];
const btnCosmic = document.createElement("button");
const contentCosmic = document.createElement("div");
const costsCosmic = document.createElement("div");
const crystalCosmic = document.createElement("div");
const costContainerCosmic = document.createElement("div");
const ticketCosmic = document.createElement("div");
const addCosmic = document.createElement("div");
const btnsCosmic = document.createElement("div");
const btnOneCosmic = document.createElement("button");
const btnTenCosmic = document.createElement("button");
const mechaCosmic0 = document.createElement("div");
const imgCosmic0 = document.createElement("div");
const rankCosmic0 = document.createElement("div");
const nameCosmic0 = document.createElement("div");
const effectCosmic0 = document.createElement("div");
const pilotCosmic1 = document.createElement("div");
const imgCosmic1 = document.createElement("div");
const rankCosmic1 = document.createElement("div");
const nameCosmic1 = document.createElement("div");
const effectCosmic1 = document.createElement("div");
const cssCosmic0 = document.createElement("link");
const scriptListCosmic = document.createElement("script");
const scriptInfoCosmic = document.createElement("script");
const scriptOneCosmic = document.createElement("script");
const scriptTenCosmic = document.createElement("script");
function setupCosmicElements() {
  btnCosmic.className = "gachatab " + cosmicName;
  btnCosmic.id = cosmicName + "Event";
  btnCosmic.setAttribute("onclick", "openGacha(event, '" + cosmicName + "content'); selectionSound();");
  contentCosmic.id = cosmicName + "content";
  contentCosmic.className = "gacha-continer";
  contentCosmic.style.backgroundImage = "url('index_data/gacha_events/cosmic_echo/image_cosmic_pulse_1.png')";
  costsCosmic.className = "costs-container";
  crystalCosmic.className = "cost-have-crystal";
  crystalCosmic.textContent = "0";
  costContainerCosmic.className = "cost-container";
  ticketCosmic.className = "cost-have-premium-ticket";
  ticketCosmic.textContent = "0";
  addCosmic.className = "add-more";
  addCosmic.setAttribute("onclick", "openShopModalPremiumTickets();");
  addCosmic.textContent = "+";
  btnsCosmic.className = "gacha-btn-container";
  btnOneCosmic.className = "opone";
  btnOneCosmic.id = "op" + cosmicName + "btnOne";
  btnOneCosmic.setAttribute("onclick", "summon" + cosmicName + "One();");
  btnTenCosmic.className = "opten";
  btnTenCosmic.id = "op" + cosmicName + "btnTen";
  btnTenCosmic.setAttribute("onclick", "summon" + cosmicName + "Ten();");
  mechaCosmic0.className = "gallery-card ss-rank";
  mechaCosmic0.setAttribute("onclick", "showMechaCosmicPulse();");
  pilotCosmic1.className = "gallery-card s-rank";
  pilotCosmic1.setAttribute("onclick", "showPilotDjHacker();");
  const isPulseGeted = localStorage.getItem("Cosmic Pulse") === "geted";
  const isHackerGeted = localStorage.getItem("Dj Hacker") === "geted";
  const lang = localStorage.getItem("lang") || "en";
  imgCosmic0.className = "item-image cosmic-pulse" + (isPulseGeted ? "" : " locked");
  rankCosmic0.className = "class ssssss" + (isPulseGeted ? "" : " locked");
  imgCosmic1.className = "item-image dj-hacker" + (isHackerGeted ? "" : " locked");
  rankCosmic1.className = "class sss" + (isHackerGeted ? "" : " locked");
  if (lang === "ru") {
    btnCosmic.textContent = namesRuCosmic[0];
    nameCosmic0.textContent = namesRuCosmic[1];
    nameCosmic1.textContent = namesRuCosmic[2];
  } else if (lang === "he") {
    btnCosmic.textContent = namesHeCosmic[0];
    nameCosmic0.textContent = namesHeCosmic[1];
    nameCosmic1.textContent = namesHeCosmic[2];
  } else {
    btnCosmic.textContent = namesEnCosmic[0];
    nameCosmic0.textContent = namesEnCosmic[1];
    nameCosmic1.textContent = namesEnCosmic[2];
  }
  cssCosmic0.rel = "stylesheet";
  cssCosmic0.href = "index_data/gacha_events/cosmic_echo/style.css";
  scriptListCosmic.src = "index_data/gacha_events/cosmic_echo/list.js";
  scriptInfoCosmic.src = "index_data/gacha_events/cosmic_echo/show_info.js";
  scriptOneCosmic.src = "index_data/gacha_events/cosmic_echo/openx1.js";
  scriptTenCosmic.src = "index_data/gacha_events/cosmic_echo/openx10.js";
  contentCosmic.append(costsCosmic, btnsCosmic);
  costsCosmic.append(crystalCosmic, costContainerCosmic);
  costContainerCosmic.append(ticketCosmic, addCosmic);
  btnsCosmic.append(btnOneCosmic, btnTenCosmic);
  mechaCosmic0.append(imgCosmic0, rankCosmic0, nameCosmic0, effectCosmic0);
  pilotCosmic1.append(imgCosmic1, rankCosmic1, nameCosmic1, effectCosmic1);
}
function toggleCosmicEvent() {
  const tabs = document.getElementById("tabsGacha");
  const containers = document.getElementById("gachaContent");
  const skin0 = document.getElementById("skinsAurora");
  const skin1 = document.getElementById("skinsCyrus");
  const scripts = document.getElementById("scriptsCreates");
  if (navigator.onLine) {
    if (tabs) tabs.appendChild(btnCosmic);
    if (containers) containers.appendChild(contentCosmic);
    if (skin0) skin0.appendChild(mechaCosmic0);
    if (skin1) skin1.appendChild(pilotCosmic1);
    if (scripts) scripts.append(scriptListCosmic, scriptInfoCosmic, scriptOneCosmic, scriptTenCosmic);
    document.head.appendChild(cssCosmic0);
  } else {
    btnCosmic.remove();
    contentCosmic.remove();
    mechaCosmic0.remove();
    pilotCosmic1.remove();
    scriptListCosmic.remove();
    scriptInfoCosmic.remove();
    scriptOneCosmic.remove();
    scriptTenCosmic.remove();
    cssCosmic0.remove();
  }
}
setupCosmicElements();
toggleCosmicEvent();
window.addEventListener('online', toggleCosmicEvent);
window.addEventListener('offline', toggleCosmicEvent);