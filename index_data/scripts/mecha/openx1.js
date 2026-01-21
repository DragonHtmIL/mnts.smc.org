function summonMechaOne() {
  let gold = parseInt(localStorage.getItem("goldStorage")) || 0;
  let ticket = parseInt(localStorage.getItem("ticketStorage")) || 0;
  let skipedGachaAnim = "no";
  if (gold < 10 && ticket < 1) {
    document.getElementById("oponebtnDefMechaOne").classList.add("null");
    setTimeout( function() {
      document.getElementById("oponebtnDefMechaOne").classList.remove("null");
    },1000);
    cancelSound();
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
  const randomNumber = Math.random() * mechas.length;
  let mecha;
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
  // Simplified rarity system (adjust probabilities as needed)
  if (randomNumber < 1.00) {
    mecha = mechas.find(c => c.rarity === Math.floor(Math.random() * mechas.length));
  } else {
    mecha = mechas.find(c => c.rarity === Math.floor(Math.random() * mechas.length));
  }
  if (!mecha) {
     // Handle cases where a mecha of a certain rarity is not found.
     const availableCommons = mechas.filter(c => c.rarity === "Default");
     mecha = availableCommons[Math.floor(Math.random() * availableCommons.length)];
     if(!mecha) {
        console.error("No mechas found for summoning!");
        return;
     }
  }
  displaymecha(mecha);
}
function displaymecha(mecha) {
  const displayArea = document.getElementById("prices-display");
  const mechaDiv = document.createElement("div");
  const imgBlocker = document.createElement("div");
  const animFrame = document.getElementById("animFrame");
  const gachaAnim = document.getElementById("sourceGachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const animationBlocker = document.getElementById("animationBlocker");
  const skipBtn = document.getElementById("skipAnim");
  mechaDiv.classList.add("card-continer");
  mechaDiv.classList.add(mecha.rarity);
  mechaDiv.innerHTML = `
    <img src="${mecha.image}" alt="${mecha.name}">
  `;
  imgBlocker.classList.add("img-blocker");
  localStorage.setItem(mecha.name, "geted");
  gachaAnim.addEventListener('click', function() {
    if(mechaDiv.classList.contains("Default")) {
      gachaAnim.src = "index_data/animations/gacha/gacha_vid_pressed_0d.gif";
      gachaAud.src = "index_data/audio/interface/gacha/Gacha aud pressed.mp3";
    }else{
      console.log("class is not defined for video src display");
    }
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
  });
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
    defaultClickSound();
    skipBtn.style.display = "none";
    gachaAnim.src = "index_data/textures/empty.png";
  });
  displayArea.appendChild(mechaDiv);
  mechaDiv.appendChild(imgBlocker);
}