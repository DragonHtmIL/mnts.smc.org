function eventId00000001() {
  var name = "cosmic";
  const namesEn =[
    "Cosmic Echo",
    "Cosmic Pulse",
    "DJ Hacker"
  ];
  const namesRu =[
    "Космическое Эхо",
    "Космический Пульс",
    "DJ Хакер"
  ];
  const namesHe =[
    "הד קוסמי",
    "דופק קוסמי",
    "DJ הקר"
  ];
  const tabs = document.getElementById("tabsGacha");
  const containers = document.getElementById("gachaContent");
  const skin0 = document.getElementById("skinsAurora");
  const skin1 = document.getElementById("skinsCyrus");
  const scripts = document.getElementById("scriptsCreates");
  const head = document.head;
  const btn = document.createElement("button");
  btn.className = "gachatab " + name;
  btn.setAttribute("onclick", "openGacha(event, '" + name + "content');selectionSound();");
  btn.id = name + "Event";
  const content = document.createElement("div");
  const costs = document.createElement("div");
  const crystal = document.createElement("div");
  const costContainer = document.createElement("div");
  const ticket = document.createElement("div");
  const add = document.createElement("div");
  const btns = document.createElement("div");
  const btnOne = document.createElement("button");
  const btnTen = document.createElement("button");
  content.id = name + "content";
  content.className = "gacha-continer";
  content.setAttribute("style", "background-image: url('https://dragonhtmil.github.io/mnts.smc.org/gacha_events/cosmic_echo/image_cosmic_pulse_1.png');");
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
  const mecha0 = document.createElement("div");
  const img0 = document.createElement("div");
  const rank0 = document.createElement("div");
  const name0 = document.createElement("div");
  const effect0 = document.createElement("div");
  const piot1 = document.createElement("div");
  const img1 = document.createElement("div");
  const rank1 = document.createElement("div");
  const name1 = document.createElement("div");
  const effect1 = document.createElement("div");
  mecha0.className = "gallery-card ss-rank";
  mecha0.setAttribute("onclick", "showMechaCosmicPulse();");
  if(localStorage.getItem("Cosmic Pulse") === "geted") {
    img0.className = "item-image cosmic-pulse";
    rank0.className = "class ssssss";
  }else{
    img0.className = "item-image cosmic-pulse locked";
    rank0.className = "class ssssss locked";
  }
  img0.id = "imgLockCosmicPulse";
  rank0.id = "classesCosmicPulse";
  name0.className = "name cosmic-pulse name-cosmic-pulse";
  piot1.className = "gallery-card s-rank";
  piot1.setAttribute("onclick", "showPilotDjHacker();");
  if(localStorage.getItem("Dj Hacker") === "geted") {
    img1.className = "item-image dj-hacker";
    rank1.className = "class sss";
  }else{
    img1.className = "item-image dj-hacker locked";
    rank1.className = "class sss locked";
  }
  img1.id = "imgLockDjHacker";
  rank1.id = "classesDjHacker";
  name1.className = "name dj-hacker name-dj-hacker";
  effect0.className = "gallery-card-effect";
  effect1.className = "gallery-card-effect";
  if(localStorage.getItem("lang") === "en") {
    btn.textContent = namesEn[0];
    name0.textContent = namesEn[1];
    name1.textContent = namesEn[2];
  }else
  if(localStorage.getItem("lang") === "ru") {
    btn.textContent = namesRu[0];
    name0.textContent = namesRu[1];
    name1.textContent = namesRu[2];
  }else
  if(localStorage.getItem("lang") === "he") {
    btn.textContent = namesHe[0];
    name0.textContent = namesHe[1];
    name1.textContent = namesHe[2];
  }
  const css0 = document.createElement("link");
  const scriptList = document.createElement("script");
  const scriptInfo = document.createElement("script");
  const scriptOne = document.createElement("script");
  const scriptTen = document.createElement("script");
  css0.setAttribute("rel", "stylesheet");
  css0.href = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/cosmic_echo/style.css";
  scriptList.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/cosmic_echo/list.js";
  scriptInfo.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/cosmic_echo/show_info.js";
  scriptOne.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/cosmic_echo/openx1.js";
  scriptTen.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/cosmic_echo/openx10.js";
  tabs.appendChild(btn);
  containers.appendChild(content);
  content.appendChild(costs);
  costs.appendChild(crystal);
  costs.appendChild(costContainer);
  costContainer.appendChild(ticket);
  costContainer.appendChild(add);
  content.appendChild(btns);
  btns.appendChild(btnOne);
  btns.appendChild(btnTen);
  skin0.appendChild(mecha0);
  mecha0.appendChild(img0);
  mecha0.appendChild(rank0);
  mecha0.appendChild(name0);
  mecha0.appendChild(effect0);
  skin1.appendChild(piot1);
  piot1.appendChild(img1);
  piot1.appendChild(rank1);
  piot1.appendChild(name1);
  piot1.appendChild(effect1);
  head.appendChild(css0);
  scripts.appendChild(scriptList);
  scripts.appendChild(scriptInfo);
  scripts.appendChild(scriptOne);
  scripts.appendChild(scriptTen);
  window.addEventListener('online', function() {
    tabs.appendChild(btn);
    containers.appendChild(content);
    content.appendChild(costs);
    costs.appendChild(crystal);
    costs.appendChild(costContainer);
    costContainer.appendChild(ticket);
    costContainer.appendChild(add);
    content.appendChild(btns);
    btns.appendChild(btnOne);
    btns.appendChild(btnTen);
    skin0.appendChild(mecha0);
    mecha0.appendChild(img0);
    mecha0.appendChild(rank0);
    mecha0.appendChild(name0);
    mecha0.appendChild(effect0);
    skin1.appendChild(piot1);
    piot1.appendChild(img1);
    piot1.appendChild(rank1);
    piot1.appendChild(name1);
    piot1.appendChild(effect1);
    head.appendChild(css0);
    scripts.appendChild(scriptList);
    scripts.appendChild(scriptInfo);
    scripts.appendChild(scriptOne);
    scripts.appendChild(scriptTen);
  });
  window.addEventListener('offline', function() {
    tabs.removeChild(btn);
    containers.removeChild(content);
    content.removeChild(costs);
    costs.removeChild(crystal);
    costs.removeChild(costContainer);
    costContainer.removeChild(ticket);
    costContainer.removeChild(add);
    content.removeChild(btns);
    btns.removeChild(btnOne);
    btns.removeChild(btnTen);
    skin0.removeChild(mecha0);
    mecha0.removeChild(img0);
    mecha0.removeChild(rank0);
    mecha0.removeChild(name0);
    mecha0.removeChild(effect0);
    skin1.removeChild(piot1);
    piot1.removeChild(img1);
    piot1.removeChild(rank1);
    piot1.removeChild(name1);
    piot1.removeChild(effect1);
    head.removeChild(css0);
    scripts.removeChild(scriptList);
    scripts.removeChild(scriptInfo);
    scripts.removeChild(scriptOne);
    scripts.removeChild(scriptTen);
  });
}
eventId00000001();
window.addEventListener('online', function() {
  eventId00000001();
});
window.addEventListener('offline', function() {
  eventId00000001();
});