function summoncosmicTen() {
  let crystal = parseInt(localStorage.getItem("crystalStorage")) || 0;
  let ticketPremium = parseInt(localStorage.getItem("ticketPremiumStorage")) || 0;
  let skipedGachaAnim = "no";
  const COSMIC_RATES = {
    SSrank: 0.03,
    Srank:  0.07,
    Default: 0.90
  };
  if (crystal < 150 && ticketPremium < 10) {
    document.getElementById("opcosmicbtnTen").classList.add("null");
    setTimeout( function() {
      document.getElementById("opcosmicbtnTen").classList.remove("null");
    },1000);
    cancelSound();
    return;
  }
  if (ticketPremium >= 10) {
    ticketPremium -= 10;
    localStorage.setItem("ticketPremiumStorage", ticketPremium);
  } else {
    crystal -= 150;
    localStorage.setItem("crystalStorage", crystal);
  }
  costShows();
  localStorage.setItem("crystalStorage", crystal);
  localStorage.setItem("ticketPremiumStorage", ticketPremium);
  function weightedRoll(rates) {
    let roll = Math.random();
    let sum = 0;
    for (const [key, chance] of Object.entries(rates)) {
      sum += chance;
      if (roll < sum) return key;
    }
    return "Default";
  }
  const animFrame = document.getElementById("animFrame");
  const gachaAnim = document.getElementById("sourceGachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const animationBlocker = document.getElementById("animationBlocker");
  const skipBtn = document.getElementById("skipAnim");
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
  document.getElementById("opcosmicbtnOne").disabled = true;
  document.getElementById("opcosmicbtnOne").classList.add("btnclicked");
  document.getElementById("opcosmicbtnTen").disabled = true;
  document.getElementById("opcosmicbtnTen").classList.add("btnclicked");
  if(document.getElementById("checkBaseVolum").checked === false) {
    document.getElementById("btnPress").play();
  };
  document.getElementById("btnPress").removeAttribute("loop");
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
  const results = [];
  let containsSSrank = false;
  let containsSrank = false;
  const availableCommons = cosmicechos.filter(p => p.rarity === "Default");
  const availableSSrank = cosmicechos.filter(p => p.rarity === "SSrank");
  const availableSrank = cosmicechos.filter(p => p.rarity === "Srank");
  for (let i = 0; i < 10; i++) {
    let cosmicecho;
    const rarity = weightedRoll(COSMIC_RATES);
    if (rarity === "SSrank") {
      cosmicecho = availableSSrank[Math.floor(Math.random() * availableSSrank.length)];
    } 
    else if (rarity === "Srank") {
      cosmicecho = availableSrank[Math.floor(Math.random() * availableSrank.length)];
    } 
    else {
      cosmicecho = availableCommons[Math.floor(Math.random() * availableCommons.length)];
    }
    if (!cosmicecho) {
      cosmicecho = availableCommons[0]; 
    }
    if (cosmicecho.rarity === "SSrank") containsSSrank = true;
    if (cosmicecho.rarity === "Srank") containsSrank = true;
    results.push(cosmicecho);
  }
  results.forEach(cosmicecho => 
    displaycosmic(cosmicecho, containsSSrank, containsSrank)
  );
}
function displaycosmic(cosmicecho, isSSrankPull, isSrankPull) {
  const displayArea = document.getElementById("prices-display");
  const cosmicDiv = document.createElement("div");
  const imgBlocker = document.createElement("div");
  const animFrame = document.getElementById("animFrame");
  const gachaAnim = document.getElementById("sourceGachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const animationBlocker = document.getElementById("animationBlocker");
  const skipBtn = document.getElementById("skipAnim");
  cosmicDiv.classList.add("card-continer");
  cosmicDiv.classList.add(cosmicecho.rarity);
  cosmicDiv.innerHTML = `
    <img src="${cosmicecho.image}" alt="${cosmicecho.name}">
  `;
  imgBlocker.classList.add("img-blocker");
  localStorage.setItem(cosmicecho.name, "geted");
  if (cosmicecho.rarity === "SSrank") {
    if (localStorage.getItem(cosmicecho.name) === "geted") {
      let sscard = Number(localStorage.getItem("FlashPassStorage")) || 0;
      sscard++;
      localStorage.setItem("FlashPassStorage", sscard);
    } else {
      localStorage.setItem(cosmicecho.name, "geted");
    }
  }
  gachaAnim.onclick = function() {
    if (isSSrankPull) {
      gachaAnim.src = "index_data/animations/gacha/gacha_vid_pressed_6ss.gif";
    } 
    else if (isSrankPull) {
      gachaAnim.src = "index_data/animations/gacha/gacha_vid_pressed_4s.gif";
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
    document.getElementById("opcosmicbtnOne").classList.remove("btnclicked");
    document.getElementById("opcosmicbtnOne").disabled = false;
    document.getElementById("opcosmicbtnTen").classList.remove("btnclicked");
    document.getElementById("opcosmicbtnTen").disabled = false;
    defaultClickSound();
    skipBtn.style.display = "none";
    gachaAnim.src = "index_data/textures/empty.png";
  });
  displayArea.appendChild(cosmicDiv);
  cosmicDiv.appendChild(imgBlocker);
}