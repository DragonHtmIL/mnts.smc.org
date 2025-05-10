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
const cursors = "index_data/animations/blue/";

const tassetBoards = [//76
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
const tassetFoods = [//9
  "alpha_coin",
  "crystal",
  "gold",
  "meaw_token",
  "ticket",
  "ticket_chromatic",
  "ticket_premium",
  "ticket_premium_2",
  "virtual_token"
];
const tassetGuis = [//62
  "alert",
  "bg_overlay",
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
  "changed_bg",
  "checkbox_off",
  "checkbox_on",
  "cube_bg",
  "download",
  "download_android",
  "download_computer",
  "exit",
  "first_modal_bg",
  "hard_on",
  "hell_on",
  "icon_bg",
  "line",
  "loading_yi_logo_2x",
  "long_button",
  "long_button_hover",
  "menu",
  "menu_close",
  "nav_menu_chs",
  "nav_menu_chs_hover",
  "nav_menu_cht",
  "nav_menu_cht_hover",
  "nav_menu_en",
  "nav_menu_en_hover",
  "nav_menu_jp",
  "nav_menu_jp_hover",
  "nav_menu_ko",
  "nav_menu_ko_hover",
  "nav_menu_ru",
  "nav_menu_ru_hover",
  "nav_menu_he",
  "nav_menu_he_hover",
  "nav_menu_de",
  "nav_menu_de_hover",
  "new_modal_content",
  "normal_on",
  "notice",
  "range_bar",
  "range_thumb",
  "selected",
  "tab_horizontal",
  "tab_off",
  "tab_vertical",
  "unselected",
  "wrapper_bg",
  "up_note",
  "close",
  "services_bg",
  "key_bg",
  "key_bg_hover",
  "htp_button"
];
const tassetLeagues = [//18
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
const tassetSnakes = [//72
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
const tassetSystems = [//33
  "battery_charging",
  "battery_low",
  "battery_normal",
  "battery_main_charging",
  "battery_main_low",
  "battery_main_normal",
  "discord",
  "Google_chs",
  "Google_cht",
  "Google_en",
  "Google_jp",
  "Google_ko",
  "Google_ru",
  "Google_he",
  "Google_de",
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
  "messenger"
];
const tassetLoadingLogos = [//4
  "anime",
  "classic",
  "miku",
  "nakano_azusa"
];
const tassetCursors = [//32
  "default-0",
  "default-1",
  "default-2",
  "default-3",
  "default-4",
  "default-5",
  "default-6",
  "default-7",
  "default-8",
  "default-9",
  "default-10",
  "default-11",
  "default-12",
  "default-13",
  "default-14",
  "default-15",
  "link-0",
  "link-1",
  "link-2",
  "link-3",
  "link-4",
  "link-5",
  "link-6",
  "link-7",
  "link-8",
  "link-9",
  "link-10",
  "link-11",
  "link-12",
  "link-13",
  "link-14",
  "link-15",
  "disabled-0",
  "disabled-1",
  "disabled-2",
  "disabled-3",
  "disabled-4",
  "disabled-5",
  "disabled-6",
  "disabled-7",
  "disabled-8",
  "disabled-9",
  "disabled-10",
  "disabled-11",
  "disabled-12",
  "disabled-13",
  "disabled-14",
  "disabled-15"
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
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
      }else
      if(localStorage.getItem("lang") === "jp") {
        document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
      }else
      if(localStorage.getItem("lang") === "chs") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "cht") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "ko") {
        document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
      }else
      if(localStorage.getItem("lang") === "de") {
        document.getElementById("loadingText").innerHTML = errorscont + " Assets können nicht geladen werden, nicht gefunden oder entfernt …";
      }
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
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
      }else
      if(localStorage.getItem("lang") === "jp") {
        document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
      }else
      if(localStorage.getItem("lang") === "chs") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "cht") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "ko") {
        document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
      }else
      if(localStorage.getItem("lang") === "de") {
        document.getElementById("loadingText").innerHTML = errorscont + " Assets können nicht geladen werden, nicht gefunden oder entfernt …";
      }
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
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
      }else
      if(localStorage.getItem("lang") === "jp") {
        document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
      }else
      if(localStorage.getItem("lang") === "chs") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "cht") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "ko") {
        document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
      }else
      if(localStorage.getItem("lang") === "de") {
        document.getElementById("loadingText").innerHTML = errorscont + " Assets können nicht geladen werden, nicht gefunden oder entfernt …";
      }
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
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
      }else
      if(localStorage.getItem("lang") === "jp") {
        document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
      }else
      if(localStorage.getItem("lang") === "chs") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "cht") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "ko") {
        document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
      }else
      if(localStorage.getItem("lang") === "de") {
        document.getElementById("loadingText").innerHTML = errorscont + " Assets können nicht geladen werden, nicht gefunden oder entfernt …";
      }
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
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
      }else
      if(localStorage.getItem("lang") === "jp") {
        document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
      }else
      if(localStorage.getItem("lang") === "chs") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "cht") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "ko") {
        document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
      }else
      if(localStorage.getItem("lang") === "de") {
        document.getElementById("loadingText").innerHTML = errorscont + " Assets können nicht geladen werden, nicht gefunden oder entfernt …";
      }
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
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
      }else
      if(localStorage.getItem("lang") === "jp") {
        document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
      }else
      if(localStorage.getItem("lang") === "chs") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "cht") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "ko") {
        document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
      }else
      if(localStorage.getItem("lang") === "de") {
        document.getElementById("loadingText").innerHTML = errorscont + " Assets können nicht geladen werden, nicht gefunden oder entfernt …";
      }
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
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
      }else
      if(localStorage.getItem("lang") === "jp") {
        document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
      }else
      if(localStorage.getItem("lang") === "chs") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "cht") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "ko") {
        document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
      }else
      if(localStorage.getItem("lang") === "de") {
        document.getElementById("loadingText").innerHTML = errorscont + " Assets können nicht geladen werden, nicht gefunden oder entfernt …";
      }
    });
    document.getElementById("loadedbar").appendChild(assetLoadingLogo);
  };
  for(var cursor = 0; cursor < tassetCursors.length; cursor++) {
    const assetCursor = document.createElement('img');
    assetCursor.src = cursors + tassetCursors[cursor] + png;
    assetCursor.style.width = "1px";
    assetCursor.style.height = "1px";
    assetCursor.style.opacity = "0";
    assetCursor.addEventListener("load", function() {
      widthcont = widthcont + 0.1;
      document.getElementById('widther').style.width = widthcont + "%";
      document.getElementById('widthernum').innerHTML = loadedcont++;
      toDisplayNone();
    });
    assetCursor.addEventListener("error", function() {
      errorscont++;
      if(localStorage.getItem("lang") === "en") {
        document.getElementById("loadingText").innerHTML = "Cant load " + errorscont + " assets, not found or removed...";
      }else
      if(localStorage.getItem("lang") === "ru") {
        document.getElementById("loadingText").innerHTML = "Невозможно загрузить " + errorscont + " активов, они не найдены или удалены...";
      }else
      if(localStorage.getItem("lang") === "jp") {
        document.getElementById("loadingText").innerHTML = errorscont + "つのアセットを読み込めません。見つからないか削除されています...";
      }else
      if(localStorage.getItem("lang") === "chs") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "cht") {
        document.getElementById("loadingText").innerHTML = "無法載入" + errorscont + "個資產，未找到或已刪除...";
      }else
      if(localStorage.getItem("lang") === "ko") {
        document.getElementById("loadingText").innerHTML = errorscont + "개의 자산을 로드할 수 없습니다. 자산을 찾을 수 없거나 삭제되지 않았습니다...";
      }else
      if(localStorage.getItem("lang") === "he") {
        document.getElementById("loadingText").innerHTML = "לא ניתן לטעון " + errorscont + " נכסים, לא נמצאו או הוסרו...";
      }else
      if(localStorage.getItem("lang") === "de") {
        document.getElementById("loadingText").innerHTML = errorscont + " Assets können nicht geladen werden, nicht gefunden oder entfernt …";
      }
    });
    document.getElementById("loadedbar").appendChild(assetCursor);
  };
};
function toDisplayNone() {
  if(document.getElementById('widther').style.width === "32.3%") {
    alertAccept();
    document.getElementById("loading").style.display = "none";
  }
};