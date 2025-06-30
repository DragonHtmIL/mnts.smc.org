function playCollectItem() {
  if(localStorage.getItem("foodStyle") === "imgMeow" ||
   localStorage.getItem("foodStyle") === "imgGold" ||
   localStorage.getItem("foodStyle") === "imgAlphacoin" ||
   localStorage.getItem("foodStyle") === "imgCrystal" ||
   localStorage.getItem("foodStyle") === "imgTicket" ||
   localStorage.getItem("foodStyle") === "imgCticket" ||
   localStorage.getItem("foodStyle") === "imgPticket" ||
   localStorage.getItem("foodStyle") === "imgPticket2" ||
   localStorage.getItem("foodStyle") === "imgVirtualToken" ||
   localStorage.getItem("foodStyle") === "img000food" ||
   localStorage.getItem("foodStyle") === "img001food" ||
   localStorage.getItem("foodStyle") === "img002food" ||
   localStorage.getItem("foodStyle") === "img003food" ||
   localStorage.getItem("foodStyle") === "img004food" ||
   localStorage.getItem("foodStyle") === "img005food" ||
   localStorage.getItem("foodStyle") === "img006food" ||
   localStorage.getItem("foodStyle") === "img007food" ||
   localStorage.getItem("foodStyle") === "img008food" ||
   localStorage.getItem("foodStyle") === "img009food" ||
   localStorage.getItem("foodStyle") === "img010food" ||
   localStorage.getItem("foodStyle") === "img011food" ||
   localStorage.getItem("foodStyle") === "img012food" ||
   localStorage.getItem("foodStyle") === "img013food" ||
   localStorage.getItem("foodStyle") === "img014food" ||
   localStorage.getItem("foodStyle") === "img015food" ||
   localStorage.getItem("foodStyle") === "img016food" ||
   localStorage.getItem("foodStyle") === "img017food" ||
   localStorage.getItem("foodStyle") === "img018food" ||
   localStorage.getItem("foodStyle") === "img019food" ||
   localStorage.getItem("foodStyle") === "img020food" ||
   localStorage.getItem("foodStyle") === "img021food" ||
   localStorage.getItem("foodStyle") === "img022food" ||
   localStorage.getItem("foodStyle") === "img023food" ||
   localStorage.getItem("foodStyle") === "img024food" ||
   localStorage.getItem("foodStyle") === "img025food" ||
   localStorage.getItem("foodStyle") === "img026food" ||
   localStorage.getItem("foodStyle") === "img027food" ||
   localStorage.getItem("foodStyle") === "img028food" ||
   localStorage.getItem("foodStyle") === "img029food" ||
   localStorage.getItem("foodStyle") === "img030food" ||
   localStorage.getItem("foodStyle") === "img031food" ||
   localStorage.getItem("foodStyle") === "img032food" ||
   localStorage.getItem("foodStyle") === "img033food" ||
   localStorage.getItem("foodStyle") === "img034food" ||
   localStorage.getItem("foodStyle") === "img035food" ||
   localStorage.getItem("foodStyle") === "img036food" ||
   localStorage.getItem("foodStyle") === "img037food" ||
   localStorage.getItem("foodStyle") === "img038food" ||
   localStorage.getItem("foodStyle") === "img039food" ||
   localStorage.getItem("foodStyle") === "img040food" ||
   localStorage.getItem("foodStyle") === "img041food" ||
   localStorage.getItem("foodStyle") === "img042food" ||
   localStorage.getItem("foodStyle") === "img043food" ||
   localStorage.getItem("foodStyle") === "img044food" ||
   localStorage.getItem("foodStyle") === "img045food" ||
   localStorage.getItem("foodStyle") === "img046food" ||
   localStorage.getItem("foodStyle") === "img047food" ||
   localStorage.getItem("foodStyle") === "img048food" ||
   localStorage.getItem("foodStyle") === "img049food" ||
   localStorage.getItem("foodStyle") === "img050food" ||
   localStorage.getItem("foodStyle") === "img051food" ||
   localStorage.getItem("foodStyle") === "img052food" ||
   localStorage.getItem("foodStyle") === "img053food" ||
   localStorage.getItem("foodStyle") === "img054food" ||
   localStorage.getItem("foodStyle") === "img055food" ||
   localStorage.getItem("foodStyle") === "img056food" ||
   localStorage.getItem("foodStyle") === "img057food" ||
   localStorage.getItem("foodStyle") === "img058food" ||
   localStorage.getItem("foodStyle") === "img059food" ||
   localStorage.getItem("foodStyle") === "img060food" ||
   localStorage.getItem("foodStyle") === "img061food" ||
   localStorage.getItem("foodStyle") === "img062food" ||
   localStorage.getItem("foodStyle") === "img063food" ||
   localStorage.getItem("foodStyle") === "img064food" ||
   localStorage.getItem("foodStyle") === "img065food" ||
   localStorage.getItem("foodStyle") === "img066food" ||
   localStorage.getItem("foodStyle") === "img067food" ||
   localStorage.getItem("foodStyle") === "img068food" ||
   localStorage.getItem("foodStyle") === "img069food" ||
   localStorage.getItem("foodStyle") === "img070food" ||
   localStorage.getItem("foodStyle") === "img071food" ||
   localStorage.getItem("foodStyle") === "img072food" ||
   localStorage.getItem("foodStyle") === "img073food" ||
   localStorage.getItem("foodStyle") === "img074food" ||
   localStorage.getItem("foodStyle") === "img075food" ||
   localStorage.getItem("foodStyle") === "img076food" ||
   localStorage.getItem("foodStyle") === "img077food") {
    document.getElementById("itemCollected").currentTime = 0;
    if(document.getElementById("ambientChecker").checked === true && document.getElementById("checkBaseVolum").checked === false) {
      document.getElementById("itemCollected").muted = false;
      document.getElementById("itemCollected").play();
    }else
    if(document.getElementById("ambientChecker").checked === false && document.getElementById("checkBaseVolum").checked === false) {
      document.getElementById("itemCollected").muted = true;
      document.getElementById("itemCollected").pause();
    }else
    if(document.getElementById("ambientChecker").checked === false && document.getElementById("checkBaseVolum").checked === true) {
      document.getElementById("itemCollected").muted = true;
      document.getElementById("itemCollected").pause();
    }else
    if(document.getElementById("ambientChecker").checked === true && document.getElementById("checkBaseVolum").checked === true) {
      document.getElementById("itemCollected").muted = true;
      document.getElementById("itemCollected").pause();
    }
  }
};