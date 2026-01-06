function summonPilotOne() {
  let gold = parseInt(localStorage.getItem("goldStorage")) || 0;
  let ticket = parseInt(localStorage.getItem("ticketStorage")) || 0;
  summonType = "p1";
  if (gold < 10 && ticket < 1) {
    return;
  }
  if (ticket >= 1) {
    ticket -= 1;
    localStorage.setItem("ticketStorage", ticket);
  } else {
    gold -= 10;
    localStorage.setItem("goldStorage", gold);
  }
  costGoldShows();
  localStorage.setItem("goldStorage", gold);
  const animFrame = document.getElementById("animFrame");
  const gachaAnim = document.getElementById("sourceGachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const animationBlocker = document.getElementById("animationBlocker");
  const skipBtn = document.getElementById("skipAnim");
  // for pressed button
  document.getElementById("btnPress").currentTime = 0;
  document.getElementById("oponebtnDefPilotOne").disabled = true;
  document.getElementById("oponebtnDefPilotOne").classList.add("btnclicked");
  document.getElementById("btnPress").play();
  document.getElementById("btnPress").removeAttribute("loop");
  // start gacha animation
  setTimeout( function() {
    gachaAnim.src = "index_data/animations/gacha/gacha_vid_start.gif";
    gachaAud.src = "index_data/audio/interface/gacha/Gacha aud start.mp3";
    animFrame.style.display = "flex";
    animationBlocker.style.display = "block";
    gachaAud.onloadeddata = () => {
      gachaAud.play();
    };
  },700);
  // video phaza for pressing
  setTimeout( function() {
    animationBlocker.style.display = "none";
    gachaAnim.src = "index_data/animations/gacha/gacha_vid_press.gif";
    gachaAud.src = "index_data/audio/interface/gacha/Gacha aud press.mp3";
    gachaAud.setAttribute("loop","loop");
    gachaAud.onloadeddata = () => {
      gachaAud.play();
    };
    skipBtn.style.display = "block";
  },5150);
  // generate 1 pilots
  const results = [];
  let containsArank = false;
  const availableCommons = pilots.filter(p => p.rarity === "Default");
  const availableArank = pilots.filter(p => p.rarity === "Arank");
  for (let i = 0; i < 1; i++) {
    let pilot;
    const roll = Math.random();
    if (roll < 0.97) {
      pilot = availableCommons[Math.floor(Math.random() * availableCommons.length)];
    } else {
      pilot = availableArank[Math.floor(Math.random() * availableArank.length)];
    }
    if (!pilot) {
      pilot = availableCommons[0]; 
    }
    if (pilot.rarity === "Arank") containsArank = true;
    results.push(pilot);
  }
  results.forEach(pilot => displaypilot(pilot, containsArank));
}
function displaypilot(pilot, isArankPull) {
  const displayArea = document.getElementById("prices-display");
  const pilotDiv = document.createElement("div");
  const imgBlocker = document.createElement("div");
  const animFrame = document.getElementById("animFrame");
  const gachaAnim = document.getElementById("sourceGachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const animationBlocker = document.getElementById("animationBlocker");
  const skipBtn = document.getElementById("skipAnim");
  pilotDiv.classList.add("card-continer");
  pilotDiv.classList.add(pilot.rarity);
  pilotDiv.innerHTML = `
    <img src="${pilot.image}" alt="${pilot.name}">
  `;
  imgBlocker.classList.add("img-blocker");
  localStorage.setItem(pilot.name, "geted");
  gachaAnim.onclick = function() {
    if(isArankPull) {
      gachaAnim.src = "index_data/animations/gacha/gacha_vid_pressed_3a.gif";
    } else {
      gachaAnim.src = "index_data/animations/gacha/gacha_vid_pressed_0d.gif";
    };
    gachaAud.src = "index_data/audio/interface/gacha/Gacha aud pressed.mp3";
    defaultClickSound();
    gachaAud.onloadeddata = () => {
      gachaAud.play();
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
    if(summonType === "m1") {
      if (displayArea.contains(mechaDiv)) {
        displayArea.removeChild(mechaDiv);
      }
      document.getElementById("oponebtnDefPilotOne").classList.remove("btnclicked");
      document.getElementById("oponebtnDefPilotOne").disabled = false;
      document.getElementById("gachaPrises").style.display = "none";
    }else
    if(summonType === "p1") {
      if (displayArea.contains(pilotDiv)) {
        displayArea.removeChild(pilotDiv);
      }
      document.getElementById("oponebtnDefPilotOne").classList.remove("btnclicked");
      document.getElementById("oponebtnDefPilotOne").disabled = false;
      document.getElementById("gachaPrises").style.display = "none";
    }else
    if(summonType === "m10") {
      const cards = displayArea.querySelectorAll(".card-continer");
      cards.forEach(card => card.remove());
      document.getElementById("oponebtnDefMechaTen").classList.remove("btnclicked");
      document.getElementById("oponebtnDefMechaTen").disabled = false;
      document.getElementById("gachaPrises").style.display = "none";
    }else
    if(summonType === "p10") {
      const cards = displayArea.querySelectorAll(".card-continer");
      cards.forEach(card => card.remove());
      document.getElementById("oponebtnDefPilotTen").classList.remove("btnclicked");
      document.getElementById("oponebtnDefPilotTen").disabled = false;
      document.getElementById("gachaPrises").style.display = "none";
    }
    defaultClickSound();
    summonType = "none";
    skipBtn.style.display = "none";
  });
  displayArea.appendChild(pilotDiv);
  pilotDiv.appendChild(imgBlocker);
}