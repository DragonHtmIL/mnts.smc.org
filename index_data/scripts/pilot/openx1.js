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
  const randomNumber = Math.random() * pilots.length;
  let pilot;
  // for pressed button
  document.getElementById("btnPress").currentTime = 0;
  document.getElementById("oponebtnDefPilotOne").disabled = true;
  document.getElementById("oponebtnDefPilotOne").classList.add("btnclicked");
  document.getElementById("btnPress").play();
  document.getElementById("btnPress").removeAttribute("loop");
  // start gacha animation
  setTimeout( function() {
    gachaAnim.src = "index_data/plugins/lucky_house/Index_data/animations/gacha_vid_start.gif";
    gachaAud.src = "index_data/plugins/lucky_house/Index_data/audio/Gacha aud start.mp3";
    animFrame.style.display = "flex";
    animationBlocker.style.display = "block";
    gachaAud.onloadeddata = () => {
      gachaAud.play();
    };
  },700);
  // video phaza for pressing
  setTimeout( function() {
    animationBlocker.style.display = "none";
    gachaAnim.src = "index_data/plugins/lucky_house/Index_data/animations/gacha_vid_press.gif";
    gachaAud.src = "index_data/plugins/lucky_house/Index_data/audio/Gacha aud press.mp3";
    gachaAud.setAttribute("loop","loop");
    gachaAud.onloadeddata = () => {
      gachaAud.play();
    };
  },5150);
  // Simplified rarity system (adjust probabilities as needed)
  if (randomNumber < 1.00) {
    pilot = pilots.find(c => c.rarity === Math.floor(Math.random() * pilots.length));
  } else {
    pilot = pilots.find(c => c.rarity === Math.floor(Math.random() * pilots.length));
  }
  if (!pilot) {
     // Handle cases where a pilot of a certain rarity is not found.
     const availableCommons = pilots.filter(c => c.rarity === "Default");
     pilot = availableCommons[Math.floor(Math.random() * availableCommons.length)];
     if(!pilot) {
        console.error("No pilots found for summoning!");
        return;
     }
  }
  displaypilot(pilot);
}
function displaypilot(pilot) {
  const displayArea = document.getElementById("prices-display");
  const pilotDiv = document.createElement("div");
  const imgBlocker = document.createElement("div");
  const animFrame = document.getElementById("animFrame");
  const gachaAnim = document.getElementById("sourceGachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const animationBlocker = document.getElementById("animationBlocker");
  pilotDiv.classList.add("card-continer");
  pilotDiv.classList.add(pilot.rarity);
  pilotDiv.innerHTML = `
    <img src="${pilot.image}" alt="${pilot.name}">
  `;
  imgBlocker.classList.add("img-blocker");
  localStorage.setItem(pilot.name, "geted");
  gachaAnim.addEventListener('click', function() {
    if(pilotDiv.classList.contains("Default")) {
      gachaAnim.src = "index_data/plugins/lucky_house/Index_data/animations/gacha_vid_pressed_0d.gif";
      gachaAud.src = "index_data/plugins/lucky_house/Index_data/audio/Gacha aud pressed.mp3";
    }else{
      console.log("class is not defined for video src display");
    }
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
  });
  document.getElementById("gachaPrises").addEventListener('click', function() {
    if(summonType === "m1") {
      displayArea.removeChild(mechaDiv);
      document.getElementById("oponebtnDefMechaOne").classList.remove("btnclicked");
      document.getElementById("oponebtnDefMechaOne").disabled = false;
      document.getElementById("gachaPrises").style.display = "none";
    }else
    if(summonType === "p1") {
      displayArea.removeChild(pilotDiv);
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
  });
  displayArea.appendChild(pilotDiv);
  pilotDiv.appendChild(imgBlocker);
}