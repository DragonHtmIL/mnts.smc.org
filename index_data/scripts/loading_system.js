let widthcont = 0.0;
let loadedcont = 0;
let errorscont = 0;
const png = ".png";
const gif = ".gif";

const boards = "index_data/textures/boards/";
const foods = "index_data/textures/foods/";
const guis = "index_data/textures/gui/";
const leagues = "index_data/textures/league/";
const snakes = "index_data/textures/snake/";
const systems = "index_data/textures/system/";
const loadingLogos = "index_data/animations/";
const cursorsClickable = "index_data/animations/cursour/clickable/";
const cursorsDelault = "index_data/animations/cursour/delault/";
const cursorsDisabled = "index_data/animations/cursour/disabled/";
const cursorsLeft = "index_data/animations/cursour/left/";
const cursorsRight = "index_data/animations/cursour/right/";
const cursorsUp = "index_data/animations/cursour/up/";
const cursorsDown = "index_data/animations/cursour/down/";
const others = "index_data/textures/";

const tassetBoards = [
  "alpha_map",
  "alpha_map_2",
  "origo_map",
  "img_000",
  "img_001",
  "img_002",
  "img_003",
  "img_004",
  "img_005",
  "img_006",
  "img_007",
  "img_008",
  "img_009",
  "img_010",
  "img_011",
  "img_012",
  "img_013",
  "img_014",
  "img_015",
  "img_016",
  "img_017",
  "img_018",
  "img_019",
  "img_020",
  "img_021",
  "img_022",
  "img_023",
  "img_024",
  "img_025",
  "img_026",
  "img_027",
  "img_028",
  "img_029",
  "img_030",
  "img_031",
  "img_032",
  "img_033",
  "img_034",
  "img_035",
  "img_036",
  "img_037",
  "img_038",
  "img_039",
  "img_040",
  "img_041",
  "img_042",
  "img_043",
  "img_044",
  "img_045",
  "img_046",
  "img_047",
  "img_048",
  "img_049",
  "img_050",
  "img_051",
  "img_052",
  "img_053",
  "img_054",
  "img_055",
  "img_056",
  "img_057",
  "img_058",
  "img_059",
  "img_060",
  "img_061",
  "img_062",
  "img_063",
  "img_064",
  "img_065",
  "img_066",
  "img_067",
  "img_068",
  "img_069",
  "img_070",
  "img_071",
  "img_072",
];
const tassetFoods = [
  "alpha_coin",
  "crystal",
  "gold",
  "meaw_token",
  "ticket",
  "ticket_chromatic",
  "ticket_premium",
  "ticket_premium_2",
  "virtual_token",
  "img_0_000",
  "img_0_001",
  "img_0_002",
  "img_0_003",
  "img_0_004",
  "img_0_005",
  "img_0_006",
  "img_0_007",
  "img_0_008",
  "img_0_009",
  "img_0_010",
  "img_0_011",
  "img_0_012",
  "img_0_013",
  "img_0_014",
  "img_0_015",
  "img_0_016",
  "img_0_017",
  "img_0_018",
  "img_0_019",
  "img_0_020",
  "img_0_021",
  "img_0_022",
  "img_0_023",
  "img_0_024",
  "img_0_025",
  "img_0_026",
  "img_0_027",
  "img_0_028",
  "img_0_029",
  "img_0_030",
  "img_0_031",
  "img_0_032",
  "img_0_033",
  "img_0_034",
  "img_0_035",
  "img_0_036",
  "img_0_037",
  "img_0_038",
  "img_0_039",
  "img_0_040",
  "img_0_041",
  "img_0_042",
  "img_0_043",
  "img_0_044",
  "img_0_045",
  "img_0_046",
  "img_0_047",
  "img_0_048",
  "img_0_049",
  "img_0_050",
  "img_0_051",
  "img_0_052",
  "img_0_053",
  "img_0_054",
  "img_0_055",
  "img_0_056",
  "img_0_057",
  "img_0_058",
  "img_0_059",
  "img_0_060",
  "img_0_061",
  "img_0_062",
  "img_0_063",
  "img_0_064",
  "img_0_065",
  "img_0_066",
  "img_0_067",
  "img_0_068",
  "img_0_069",
  "img_0_070",
  "img_0_071",
  "img_0_072",
  "img_0_073",
  "img_0_074",
  "img_0_075",
  "img_0_076",
  "img_0_077"
];
const tassetGuis = [
  "border",
  "btn_control_dn",
  "btn_control_dn_hover",
  "btn_control_lt",
  "btn_control_lt_hover",
  "btn_control_rt",
  "btn_control_rt_hover",
  "btn_control_up",
  "btn_control_up_hover",
  "btn_function_pe",
  "btn_function_py",
  "button",
  "button_true",
  "cube_bg",
  "exit",
  "first_modal_bg",
  "hard_on",
  "hell_on",
  "line",
  "loading_yi_logo_2x",
  "long_button",
  "long_button_hover",
  "nav_menu",
  "new_modal_content",
  "normal_on",
  "range_bar",
  "range_thumb",
  "selected",
  "tab_horizontal",
  "tab_off",
  "unselected",
  "up_note",
  "key_bg",
  "key_bg_hover",
  "htp_button",
  "actived_frame_cube",
  "loading_progress",
  "alert",
  "bg_overlay",
  "changed_bg",
  "checkbox_off",
  "checkbox_on",
  "services_bg",
  "close",
  "wrapper_bg",
  "tab_vertical",
  "notice",
  "menu",
  "menu_close",
  "icon_bg",
  "windows_bg"
];
const tassetLeagues = [
  "league_1_bronze",
  "league_2_silver",
  "league_3_gold",
  "league_4_platinum",
  "league_5_diamond",
  "league_6_super",
  "league_7_legendary",
  "league_8_alpha_knight",
  "non",
  "league_1_bronze_star",
  "league_2_silver_star",
  "league_3_gold_star",
  "league_4_platinum_star",
  "league_5_diamond_star",
  "league_6_super_star",
  "league_7_legendary_star",
  "league_8_alpha_knight_star",
  "non_star"
];
const tassetSnakes = [
  "0",
  "0s",
  "1",
  "1s",
  "2",
  "2s",
  "3",
  "3s",
  "4",
  "4s",
  "5",
  "5s",
  "6",
  "6s",
  "7",
  "7s",
  "8",
  "8s",
  "9",
  "9s",
  "a",
  "As",
  "b",
  "Bs",
  "c",
  "Cs",
  "d",
  "Ds",
  "e",
  "Es",
  "f",
  "Fs",
  "g",
  "Gs",
  "h",
  "Hs",
  "i",
  "Is",
  "j",
  "Js",
  "k",
  "Ks",
  "l",
  "Ls",
  "m",
  "Ms",
  "n",
  "Ns",
  "o",
  "Os",
  "p",
  "Ps",
  "q",
  "Qs",
  "r",
  "Rs",
  "s",
  "Ss",
  "t",
  "Ts",
  "u",
  "Us",
  "v",
  "Vs",
  "w",
  "Ws",
  "x",
  "Xs",
  "y",
  "Ys",
  "z",
  "Zs"
];
const tassetSystems = [
  "battery_charging",
  "battery_low",
  "battery_normal",
  "battery_main_charging",
  "battery_main_low",
  "battery_main_normal",
  "icon_0",
  "icon_16",
  "icon_32",
  "icon_48",
  "icon_76",
  "icon_96",
  "icon_120",
  "icon_128",
  "icon_144",
  "icon_152",
  "icon_167",
  "icon_180",
  "icon_192",
  "icon_196",
  "icon_228",
  "icon_256",
  "icon_300",
  "icon_384",
  "icon_512",
  "discord",
  "Google_en",
  "Google_ru",
  "Google_he"
];
const tassetLoadingLogos = [
  "anime",
  "classic",
  "miku",
  "nakano_azusa",
  "anime_2",
  "anime_3"
];
const tassetCursors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15"
];
const tassetCursorsSides = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13"
];
const tassetOthers = [
  "empty"
];
function loadTextures() {
  for(var board = 0; board < tassetBoards.length; board++) {
    const assetboard = document.createElement('img');
    assetboard.src = boards + tassetBoards[board] + png;
    assetboard.style.width = "1px";
    assetboard.style.height = "1px";
    assetboard.style.opacity = "0";
    assetboard.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetboard.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetboard);
  };
  for(var food = 0; food < tassetFoods.length; food++) {
    const assetFood = document.createElement('img');
    assetFood.src = foods + tassetFoods[food] + png;
    assetFood.style.width = "1px";
    assetFood.style.height = "1px";
    assetFood.style.opacity = "0";
    assetFood.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetFood.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetFood);
  };
  for(var gui = 0; gui < tassetGuis.length; gui++) {
    const assetGui = document.createElement('img');
    assetGui.src = guis + tassetGuis[gui] + png;
    assetGui.style.width = "1px";
    assetGui.style.height = "1px";
    assetGui.style.opacity = "0";
    assetGui.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetGui.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetGui);
  };
  for(var league = 0; league < tassetLeagues.length; league++) {
    const assetLeague = document.createElement('img');
    assetLeague.src = leagues + tassetLeagues[league] + png;
    assetLeague.style.width = "1px";
    assetLeague.style.height = "1px";
    assetLeague.style.opacity = "0";
    assetLeague.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetLeague.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetLeague);
  };
  for(var snake = 0; snake < tassetSnakes.length; snake++) {
    const assetSnake = document.createElement('img');
    assetSnake.src = snakes + tassetSnakes[snake] + png;
    assetSnake.style.width = "1px";
    assetSnake.style.height = "1px";
    assetSnake.style.opacity = "0";
    assetSnake.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetSnake.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetSnake);
  };
  for(var system = 0; system < tassetSystems.length; system++) {
    const assetSystem = document.createElement('img');
    assetSystem.src = systems + tassetSystems[system] + png;
    assetSystem.style.width = "1px";
    assetSystem.style.height = "1px";
    assetSystem.style.opacity = "0";
    assetSystem.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetSystem.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetSystem);
  };
  for(var loadinglogo = 0; loadinglogo < tassetLoadingLogos.length; loadinglogo++) {
    const assetLoadingLogo = document.createElement('img');
    assetLoadingLogo.src = loadingLogos + tassetLoadingLogos[loadinglogo] + gif;
    assetLoadingLogo.style.width = "1px";
    assetLoadingLogo.style.height = "1px";
    assetLoadingLogo.style.opacity = "0";
    assetLoadingLogo.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetLoadingLogo.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetLoadingLogo);
  };
  for(var cursordef = 0; cursordef < tassetCursors.length; cursordef++) {
    const assetCursorDef = document.createElement('img');
    assetCursorDef.src = cursorsDelault + tassetCursors[cursordef] + png;
    assetCursorDef.style.width = "1px";
    assetCursorDef.style.height = "1px";
    assetCursorDef.style.opacity = "0";
    assetCursorDef.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetCursorDef.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetCursorDef);
  };
  for(var cursorcli = 0; cursorcli < tassetCursors.length; cursorcli++) {
    const assetCursorCli = document.createElement('img');
    assetCursorCli.src = cursorsClickable + tassetCursors[cursorcli] + png;
    assetCursorCli.style.width = "1px";
    assetCursorCli.style.height = "1px";
    assetCursorCli.style.opacity = "0";
    assetCursorCli.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetCursorCli.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetCursorCli);
  };
  for(var cursordis = 0; cursordis < tassetCursors.length; cursordis++) {
    const assetCursorDis = document.createElement('img');
    assetCursorDis.src = cursorsDisabled + tassetCursors[cursordis] + png;
    assetCursorDis.style.width = "1px";
    assetCursorDis.style.height = "1px";
    assetCursorDis.style.opacity = "0";
    assetCursorDis.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetCursorDis.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetCursorDis);
  };
  for(var cursorL = 0; cursorL < tassetCursorsSides.length; cursorL++) {
    const assetCursorLeft = document.createElement('img');
    assetCursorLeft.src = cursorsLeft + tassetCursorsSides[cursorL] + png;
    assetCursorLeft.style.width = "1px";
    assetCursorLeft.style.height = "1px";
    assetCursorLeft.style.opacity = "0";
    assetCursorLeft.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetCursorLeft.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetCursorLeft);
  };
  for(var cursorR = 0; cursorR < tassetCursorsSides.length; cursorR++) {
    const assetCursorRight = document.createElement('img');
    assetCursorRight.src = cursorsRight + tassetCursorsSides[cursorR] + png;
    assetCursorRight.style.width = "1px";
    assetCursorRight.style.height = "1px";
    assetCursorRight.style.opacity = "0";
    assetCursorRight.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetCursorRight.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetCursorRight);
  };
  for(var cursorU = 0; cursorU < tassetCursorsSides.length; cursorU++) {
    const assetCursorUp = document.createElement('img');
    assetCursorUp.src = cursorsUp + tassetCursorsSides[cursorU] + png;
    assetCursorUp.style.width = "1px";
    assetCursorUp.style.height = "1px";
    assetCursorUp.style.opacity = "0";
    assetCursorUp.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetCursorUp.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetCursorUp);
  };
  for(var cursorD = 0; cursorD < tassetCursorsSides.length; cursorD++) {
    const assetCursorDown = document.createElement('img');
    assetCursorDown.src = cursorsDown + tassetCursorsSides[cursorD] + png;
    assetCursorDown.style.width = "1px";
    assetCursorDown.style.height = "1px";
    assetCursorDown.style.opacity = "0";
    assetCursorDown.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetCursorDown.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetCursorDown);
  };
  for(var other = 0; other < tassetOthers.length; other++) {
    const assetOther = document.createElement('img');
    assetOther.src = others + tassetOthers[other] + png;
    assetOther.style.width = "1px";
    assetOther.style.height = "1px";
    assetOther.style.opacity = "0";
    assetOther.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetOther.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
        document.getElementById("loadingText").innerHTML += "<br>" + "maybe try reload, if again not loaded tell us.";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
        document.getElementById("loadingText").innerHTML += "<br>" + "попробуйте перезагрузить, если снова не загрузится, сообщите нам.";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
        document.getElementById("loadingText").innerHTML += "<br>" + "אולי תנסה לטעון מחדש, אם שוב לא נטען הודיעו לנו.";
      }
      document.getElementById("loadingService").style.display = "flex";
    });
    document.getElementById("loadedbar").appendChild(assetOther);
  };
};
function toDisplayNone() {
  if(document.getElementById('widther').style.width === "44.4%") {
    if(localStorage.getItem("firstModal") === null) {
      document.getElementById("firstModal").style.display = "block";
    }else
    if(localStorage.getItem("firstModal") === "") {
      document.getElementById("firstModal").style.display = "block";
    }else{
      alertAccept();
    }
    document.getElementById("loading").style.display = "none";
  }
};