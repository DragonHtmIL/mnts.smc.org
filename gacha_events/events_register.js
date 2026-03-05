function registerGachaEvents() {
  const gachaEventsRegContainer = document.getElementById("scriptsCreatesRegistrationEvents");
  const shadowEvent = document.createElement("script");
  const cosmicechoEvent = document.createElement("script");
  shadowEvent.src = "index_data/gacha_events/shadow/load.js";
  cosmicechoEvent.src = "index_data/gacha_events/cosmic_echo/load.js";
  gachaEventsRegContainer.appendChild(shadowEvent);
  gachaEventsRegContainer.appendChild(cosmicechoEvent);
}
registerGachaEvents();