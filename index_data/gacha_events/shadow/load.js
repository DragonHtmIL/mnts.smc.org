function eventId00000000() {
  var name = "shadow";
  const namesEn =[
    "Shadow",
    "Shadow Watcher",
    "Yellow Dwarf"
  ];
  const namesRu =[
    "Тень",
    "Теневой Наблюдатель",
    "Жёлтый Гном"
  ];
  const namesHe =[
    "צל",
    "צופה צללים",
    "גמד צהוב"
  ];
  // where to create
  const tabs = document.getElementById("tabsGacha");
  const containers = document.getElementById("gachaContent");
  const skin0 = document.getElementById("skinsRaven");
  const skin1 = document.getElementById("skinsPulsar");
  const scripts = document.getElementById("scriptsCreates");
  const head = document.head;
  // create tab
  const btn = document.createElement("button");
  btn.className = "gachatab " + name;
  btn.setAttribute("onclick", "openGacha(event, '" + name + "content');selectionSound();");
  btn.id = name + "Event";
  // create summon container
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
  // add skins
  const mecha0 = document.createElement("div");
  const img0 = document.createElement("div");
  const rank0 = document.createElement("div");
  const name0 = document.createElement("div");
  const mecha1 = document.createElement("div");
  const img1 = document.createElement("div");
  const rank1 = document.createElement("div");
  const name1 = document.createElement("div");
  mecha0.className = "gallery-card s-rank";
  mecha0.setAttribute("onclick", "showMechaShadowWatcher();");
  if(localStorage.getItem("Shadow Watcher") === "geted") {
    img0.className = "item-image shadow-watcher";
    rank0.className = "class sss";
  }else{
    img0.className = "item-image shadow-watcher locked";
    rank0.className = "class sss locked";
  }
  img0.id = "imgLockShadowWatcher";
  rank0.id = "classesShadowWatcher";
  name0.className = "name shadow-watcher name-shadow-watcher";
  mecha1.className = "gallery-card a-rank";
  mecha1.setAttribute("onclick", "showMechaYellowDwarf();");
  if(localStorage.getItem("Yellow Dwarf") === "geted") {
    img1.className = "item-image yellow-dwarf";
    rank1.className = "class aaa";
  }else{
    img1.className = "item-image yellow-dwarf locked";
    rank1.className = "class aaa locked";
  }
  img1.id = "imgLockYellowDwarf";
  rank1.id = "classesYellowDwarf";
  name1.className = "name yellow-dwarf name-yellow-dwarf";
  // languages translations
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
  // create styles and scripts
  const css0 = document.createElement("link");
  const scriptList = document.createElement("script");
  const scriptInfo = document.createElement("script");
  const scriptOne = document.createElement("script");
  const scriptTen = document.createElement("script");
  css0.setAttribute("rel", "stylesheet");
  css0.href = "index_data/gacha_events/shadow/style.css";
  scriptList.src = "index_data/gacha_events/shadow/list.js";
  scriptInfo.src = "index_data/gacha_events/shadow/show_info.js";
  scriptOne.src = "index_data/gacha_events/shadow/openx1.js";
  scriptTen.src = "index_data/gacha_events/shadow/openx10.js";
  // add to
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
  head.appendChild(css0);
  scripts.appendChild(scriptList);
  scripts.appendChild(scriptInfo);
  scripts.appendChild(scriptOne);
  scripts.appendChild(scriptTen);
}
eventId00000000();