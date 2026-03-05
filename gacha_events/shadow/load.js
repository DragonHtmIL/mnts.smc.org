const name = "shadow";
const namesEn = ["Shadow", "Shadow Watcher", "Yellow Dwarf"];
const namesRu = ["Тень", "Теневой Наблюдатель", "Жёлтый Гном"];
const namesHe = ["צל", "צופה צללים", "גמד צהוב"];
const btn = document.createElement("button");
const content = document.createElement("div");
const costs = document.createElement("div");
const crystal = document.createElement("div");
const costContainer = document.createElement("div");
const ticket = document.createElement("div");
const add = document.createElement("div");
const btns = document.createElement("div");
const btnOne = document.createElement("button");
const btnTen = document.createElement("button");
const mecha0 = document.createElement("div");
const img0 = document.createElement("div");
const rank0 = document.createElement("div");
const name0 = document.createElement("div");
const effect0 = document.createElement("div");
const mecha1 = document.createElement("div");
const img1 = document.createElement("div");
const rank1 = document.createElement("div");
const name1 = document.createElement("div");
const effect1 = document.createElement("div");
const css0 = document.createElement("link");
const scriptList = document.createElement("script");
const scriptInfo = document.createElement("script");
const scriptOne = document.createElement("script");
const scriptTen = document.createElement("script");
function setupShadowElements() {
  btn.className = "gachatab " + name;
  btn.id = name + "Event";
  btn.setAttribute("onclick", "openGacha(event, '" + name + "content'); selectionSound();");
  content.id = name + "content";
  content.className = "gacha-continer";
  content.style.backgroundImage = "url('https://dragonhtmil.github.io/mnts.smc.org/gacha_events/shadow/image_shadow_watcher.png')";
  costs.className = "costs-container";
  crystal.className = "cost-have-crystal";
  crystal.textContent = "0";
  costContainer.className = "cost-container";
  ticket.className = "cost-have-premium-ticket";
  ticket.textContent = "0";
  add.className = "add-more";
  add.setAttribute("onclick", "openShopModalPremiumTickets();");
  add.textContent = "+";
  btns.className = "gacha-btn-container";
  btnOne.className = "opone";
  btnOne.id = "op" + name + "btnOne";
  btnOne.setAttribute("onclick", "summon" + name + "One();");
  btnTen.className = "opten";
  btnTen.id = "op" + name + "btnTen";
  btnTen.setAttribute("onclick", "summon" + name + "Ten();");
  mecha0.className = "gallery-card s-rank";
  mecha0.setAttribute("onclick", "showMechaShadowWatcher();");
  mecha1.className = "gallery-card a-rank";
  mecha1.setAttribute("onclick", "showMechaYellowDwarf();");
  const isShadowGeted = localStorage.getItem("Shadow Watcher") === "geted";
  const isYellowGeted = localStorage.getItem("Yellow Dwarf") === "geted";
  const lang = localStorage.getItem("lang") || "en";
  img0.className = "item-image shadow-watcher" + (isShadowGeted ? "" : " locked");
  rank0.className = "class sss" + (isShadowGeted ? "" : " locked");
  img1.className = "item-image yellow-dwarf" + (isYellowGeted ? "" : " locked");
  rank1.className = "class aaa" + (isYellowGeted ? "" : " locked");
  if (lang === "ru") {
    btn.textContent = namesRu[0];
    name0.textContent = namesRu[1];
    name1.textContent = namesRu[2];
  } else if (lang === "he") {
    btn.textContent = namesHe[0];
    name0.textContent = namesHe[1];
    name1.textContent = namesHe[2];
  } else {
    btn.textContent = namesEn[0];
    name0.textContent = namesEn[1];
    name1.textContent = namesEn[2];
  }
  css0.rel = "stylesheet";
  css0.href = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/shadow/style.css";
  scriptList.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/shadow/list.js";
  scriptInfo.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/shadow/show_info.js";
  scriptOne.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/shadow/openx1.js";
  scriptTen.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/shadow/openx10.js";
  content.append(costs, btns);
  costs.append(crystal, costContainer);
  costContainer.append(ticket, add);
  btns.append(btnOne, btnTen);
  mecha0.append(img0, rank0, name0, effect0);
  mecha1.append(img1, rank1, name1, effect1);
}
function toggleEventPresence() {
  const tabs = document.getElementById("tabsGacha");
  const containers = document.getElementById("gachaContent");
  const skin0 = document.getElementById("skinsRaven");
  const skin1 = document.getElementById("skinsPulsar");
  const scripts = document.getElementById("scriptsCreates");
  if (navigator.onLine) {
    if (tabs) tabs.appendChild(btn);
    if (containers) containers.appendChild(content);
    if (skin0) skin0.appendChild(mecha0);
    if (skin1) skin1.appendChild(mecha1);
    if (scripts) scripts.append(scriptList, scriptInfo, scriptOne, scriptTen);
    document.head.appendChild(css0);
  } else {
    btn.remove();
    content.remove();
    mecha0.remove();
    mecha1.remove();
    scriptList.remove();
    scriptInfo.remove();
    scriptOne.remove();
    scriptTen.remove();
    css0.remove();
  }
}
setupShadowElements();
toggleEventPresence();
window.addEventListener('online', toggleEventPresence);
window.addEventListener('offline', toggleEventPresence);