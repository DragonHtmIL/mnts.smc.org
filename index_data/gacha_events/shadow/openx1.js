function summonshadowOne() {
  let crystal = parseInt(localStorage.getItem("crystalStorage")) || 0;
  let ticketPremium = parseInt(localStorage.getItem("ticketPremiumStorage")) || 0;
  let skipedGachaAnim = "no";
  if (crystal < 16 && ticketPremium < 1) {
    document.getElementById("opshadowbtnOne").classList.add("null");
    setTimeout( function() {
      document.getElementById("opshadowbtnOne").classList.remove("null");
    },1000);
    cancelSound();
    return;
  }
  if (ticketPremium >= 1) {
    ticketPremium -= 1;
    localStorage.setItem("ticketPremiumStorage", ticketPremium);
  } else {
    crystal -= 16;
    localStorage.setItem("crystalStorage", crystal);
  }
  costShows();
  localStorage.setItem("crystalStorage", crystal);
  localStorage.setItem("ticketPremiumStorage", ticketPremium);
  const animFrame = document.getElementById("animFrame");
  const gachaAnim = document.getElementById("sourceGachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const animationBlocker = document.getElementById("animationBlocker");
  const skipBtn = document.getElementById("skipAnim");
  // for pressed button
  document.getElementById("btnPress").currentTime = 0;
  document.getElementById("oponebtnDefMechaOne").disabled = true;
  document.getElementById("oponebtnDefMechaOne").classList.add("btnclicked");
  document.getElementById("oponebtnDefPilotOne").disabled = true;
  document.getElementById("oponebtnDefPilotOne").classList.add("btnclicked");
  document.getElementById("oponebtnDefMechaTen").disabled = true;
  document.getElementById("oponebtnDefMechaTen").classList.add("btnclicked");
  document.getElementById("oponebtnDefPilotTen").disabled = true;
  document.getElementById("oponebtnDefPilotTen").classList.add("btnclicked");
  document.getElementById("opshadowbtnOne").disabled = true;
  document.getElementById("opshadowbtnOne").classList.add("btnclicked");
  document.getElementById("opshadowbtnTen").disabled = true;
  document.getElementById("opshadowbtnTen").classList.add("btnclicked");
  if(document.getElementById("checkBaseVolum").checked === false) {
    document.getElementById("btnPress").play();
  };
  document.getElementById("btnPress").removeAttribute("loop");
  // start gacha animation
  setTimeout( function() {
    gachaAnim.src = "index_data/animations/gacha/gacha_vid_start.gif";
    gachaAud.src = "index_data/audio/interface/gacha/Gacha aud start.mp3";
    animFrame.style.display = "flex";
    animationBlocker.style.display = "block";
    gachaAud.onloadeddata = () => {
      if(document.getElementById("checkBaseVolum").checked === false) {
        gachaAud.play();
      }
    };
  },700);
  // Dislay skip button
  setTimeout( function() {
    skipBtn.style.display = "block";
  },3000);
  skipBtn.addEventListener('click', function() {
    gachaAud.pause();
    gachaAud.removeAttribute("loop");
    gachaAud.currentTime = 0;
    animFrame.style.display = "none";
    document.getElementById("gachaPrises").style.display = "block";
    skipedGachaAnim = "yes";
    defaultClickSound();
  });
  // video phaza for pressing
  setTimeout( function() {
    animationBlocker.style.display = "none";
    gachaAnim.src = "index_data/animations/gacha/gacha_vid_press.gif";
    gachaAud.src = "index_data/audio/interface/gacha/Gacha aud press.mp3";
    gachaAud.setAttribute("loop","loop");
    gachaAud.onloadeddata = () => {
      if(skipedGachaAnim === "no" && document.getElementById("checkBaseVolum").checked === false) {
        gachaAud.play();
      };
    };
  },5150);
  // generate 1 shadows
  const results = [];
  let containsArank = false;
  let containsSrank = false;
  const availableCommons = shadows.filter(p => p.rarity === "Default");
  const availableArank = shadows.filter(p => p.rarity === "Arank");
  const availableSrank = shadows.filter(p => p.rarity === "Srank");
  for (let i = 0; i < 1; i++) {
    let shadow;
    const roll = Math.random();
    if (roll < 0.3) {
      shadow = availableSrank[Math.floor(Math.random() * availableSrank.length)];
    } else
    if (roll < 0.20) {
      shadow = availableArank[Math.floor(Math.random() * availableArank.length)];
    } else {
      shadow = availableCommons[Math.floor(Math.random() * availableCommons.length)];
    }
    if (!shadow) {
      shadow = availableCommons[0]; 
    }
    if (shadow.rarity === "Srank") containsSrank = true;
    if (shadow.rarity === "Arank") containsArank = true;
    results.push(shadow);
  }
  results.forEach(shadow => 
    displayshadow(shadow, containsArank, containsSrank)
  );
}
function displayshadow(shadow, isArankPull, isSrankPull) {
  const displayArea = document.getElementById("prices-display");
  const shadowDiv = document.createElement("div");
  const imgBlocker = document.createElement("div");
  const animFrame = document.getElementById("animFrame");
  const gachaAnim = document.getElementById("sourceGachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const animationBlocker = document.getElementById("animationBlocker");
  const skipBtn = document.getElementById("skipAnim");
  shadowDiv.classList.add("card-continer");
  shadowDiv.classList.add(shadow.rarity);
  shadowDiv.innerHTML = `
    <img src="${shadow.image}" alt="${shadow.name}">
  `;
  imgBlocker.classList.add("img-blocker");
  localStorage.setItem(shadow.name, "geted");
  gachaAnim.onclick = function() {
    if (isSrankPull) {
      gachaAnim.src = "index_data/animations/gacha/gacha_vid_pressed_4s.gif";
    } 
    else if (isArankPull) {
      gachaAnim.src = "index_data/animations/gacha/gacha_vid_pressed_3a.gif";
    } 
    else {
      gachaAnim.src = "index_data/animations/gacha/gacha_vid_pressed_0d.gif";
    }
    gachaAud.src = "index_data/audio/interface/gacha/Gacha aud pressed.mp3";
    defaultClickSound();
    gachaAud.onloadeddata = () => {
      if(document.getElementById("checkBaseVolum").checked === false) {
        gachaAud.play();
      }
    };
    animationBlocker.style.display = "block";
    setTimeout( function() {
      gachaAud.removeAttribute("loop");
      gachaAud.pause();
      animFrame.style.display = "none";
      document.getElementById("gachaPrises").style.display = "block";
    },2550);
  };
  document.getElementById("gachaPrises").addEventListener('click', function() {
    const cards = displayArea.querySelectorAll(".card-continer");
    document.getElementById("gachaPrises").style.display = "none";
    cards.forEach(card => card.remove());
    document.getElementById("oponebtnDefMechaOne").classList.remove("btnclicked");
    document.getElementById("oponebtnDefMechaOne").disabled = false;
    document.getElementById("oponebtnDefPilotOne").classList.remove("btnclicked");
    document.getElementById("oponebtnDefPilotOne").disabled = false;
    document.getElementById("oponebtnDefMechaTen").classList.remove("btnclicked");
    document.getElementById("oponebtnDefMechaTen").disabled = false;
    document.getElementById("oponebtnDefPilotTen").classList.remove("btnclicked");
    document.getElementById("oponebtnDefPilotTen").disabled = false;
    document.getElementById("opshadowbtnOne").classList.remove("btnclicked");
    document.getElementById("opshadowbtnOne").disabled = false;
    document.getElementById("opshadowbtnTen").classList.remove("btnclicked");
    document.getElementById("opshadowbtnTen").disabled = false;
    defaultClickSound();
    skipBtn.style.display = "none";
    gachaAnim.src = "index_data/textures/empty.png";
  });
  displayArea.appendChild(shadowDiv);
  shadowDiv.appendChild(imgBlocker);
}