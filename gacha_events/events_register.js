function registerGachaEvents() {
  const gachaEventsRegContainer = document.getElementById("scriptsCreatesRegistrationEvents");
  const shadowEvent = document.createElement("script");
  const cosmicechoEvent = document.createElement("script");
  shadowEvent.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/shadow/load.js";
  cosmicechoEvent.src = "https://dragonhtmil.github.io/mnts.smc.org/gacha_events/cosmic_echo/load.js";
  gachaEventsRegContainer.appendChild(shadowEvent);
  gachaEventsRegContainer.appendChild(cosmicechoEvent);
  window.addEventListener('online', function() {
    gachaEventsRegContainer.appendChild(shadowEvent);
    gachaEventsRegContainer.appendChild(cosmicechoEvent);
  });
  window.addEventListener('offline', function() {
    gachaEventsRegContainer.removeChild(shadowEvent);
    gachaEventsRegContainer.removeChild(cosmicechoEvent);
  });
}
registerGachaEvents();