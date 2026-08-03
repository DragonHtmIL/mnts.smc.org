function setDev() {
  const administratorTools = document.getElementById("administratorTools");
  if(administratorTools.checked) {
    localStorage.setItem("adminTools", "true");
  }else{
    localStorage.setItem("adminTools", "false");
  }
}
function checkDev() {
  if(localStorage.getItem("adminTools") === null || localStorage.getItem("adminTools") === undefined || localStorage.getItem("adminTools") === "") {
    localStorage.setItem("adminTools", "false");
  }
};
function loadDev() {
  const toolsTabContainer = document.getElementById("tools");
  const menucontent = document.getElementById("menucontent");
  const tabContainer = document.getElementById("tools");
  if(localStorage.getItem("adminTools") === "true") {
    const buttonOpenDevTab = document.createElement("button");
    const devContent = document.createElement("div");
    buttonOpenDevTab.className = "menu-btn dev-tools";
    devContent.id = "devToolsContainer";
    devContent.className = "content";
    buttonOpenDevTab.innerHTML = "DevTools";
    buttonOpenDevTab.onclick = function() {
      toolsTabContainer.style.display = "none";
      devContent.style.display = "block";
    }
    tabContainer.appendChild(buttonOpenDevTab);
    menucontent.appendChild(devContent);
  }
};
loadDev();
function loadDevSettingF12() {
  if (localStorage.getItem("adminTools") === "false") {
    return;
  }
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if(isAndroid || isIOS) {
    return;
  }
  const devContent = document.getElementById("devToolsContainer");
  if(!devContent) return;
  const content = document.createElement("div");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const span = document.createElement("span");
  span.className = "mini-modal-opener";
  content.className = "checkbox-content";
  checkbox.type = "checkbox";
  checkbox.id = "f12Tool";
  label.setAttribute("for", "f12Tool");
  label.id = "f12ToolLang";
  label.textContent = "Enable Shortkeys for Dev-Tools.";
  checkbox.addEventListener("click", function() {
    selectionSound();
  });
  span.addEventListener("click", function() {
    openWIDmModalF12();
    defaultClickSound();
  });
  content.appendChild(checkbox);
  content.appendChild(label);
  content.appendChild(span);
  devContent.appendChild(content);
}
loadDevSettingF12();
function loadDevSettingFoodStorageEditor() {
  if(localStorage.getItem("adminTools") === "false") {
    return;
  }
  const devContent = document.getElementById("devToolsContainer");
  if(!devContent) return;
  const content = document.createElement("div");
  const select = document.createElement("select");
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  const option4 = document.createElement("option");
  let text1 = document.createTextNode('Set ');
  let text2 = document.createTextNode(" Storage to ");
  const input = document.createElement("input");
  const button = document.createElement("button");
  input.type = "number";
  input.id = "foodStorageInput";
  input.min = "0";
  input.max = "9999";
  content.className = "checkbox-content";
  select.id = "foodStorageList";
  option1.value = "gold";
  option2.value = "crystal";
  option3.value = "ticket";
  option4.value = "premiumTicket";
  button.onclick = function() {
    if(input.value === "") {
      return;
    }
    if(select.value === "gold") {
      localStorage.setItem("goldStorage", input.value);
    }else if(select.value === "crystal") {
      localStorage.setItem("crystalStorage", input.value);
    }else if(select.value === "ticket") {
      localStorage.setItem("ticketStorage", input.value);
    }else if(select.value === "premiumTicket") {
      localStorage.setItem("ticketPremiumStorage", input.value);
    }
  };
  option1.textContent = "Gold";
  option2.textContent = "Crystal";
  option3.textContent = "Ticket";
  option4.textContent = "Premium Ticket";
  button.textContent = "Set";
  content.style.display = "flex";
  content.style.flexDirection = "row-reverse";
  content.style.flexWrap = "nowrap";
  content.style.alignItems = "center";
  select.style = "width: auto; height: auto; padding: 2px; margin: 5px;background-image: none;";
  devContent.appendChild(content);
  content.appendChild(button);
  content.appendChild(input);
  content.appendChild(text2);
  content.appendChild(select);
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);
  content.appendChild(text1);
};
loadDevSettingFoodStorageEditor();
function openWIDmModalF12() {
  var modal = document.getElementById("miniModal");
  var title = document.getElementById("mmTitle");
  var content = document.getElementById("mmBottom");
  modal.style.display = "block";
  title.innerHTML = "Developer tools";
  content.innerHTML = "Allow open Developer tools with keyboard. <br>";
  content.innerHTML += "[F12],<br>[Ctrl]+[Shift]+[i],<br>[Ctrl]+[Shift]+[c],<br>[Meta]+[Alt]+[i],<br>[Meta]+[Shift]+[c]. <br>";
};
document.addEventListener("keydown", function (event) {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && ["I", "C"].includes(event.key)) ||
    (event.metaKey && event.altKey && event.key === "I") ||
    (event.metaKey && event.shiftKey && event.key === "C")
  ) {
    const f12Tool = document.getElementById("f12Tool");
    const adminTools = document.getElementById("administratorTools");
    const allowDevTools = f12Tool?.checked && adminTools?.checked;
    if (!allowDevTools) {
      event.preventDefault();
    }
  }
});