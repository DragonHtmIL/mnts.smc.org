function languagesContents() {
  var a000 = document.getElementById("SettingsTitleLang");
  var a001 = document.getElementById("aboutTab");
  var a002 = document.getElementById("systemTab");
  var a003 = document.getElementById("snakeTab");
  var a004 = document.getElementById("foodTab");
  var a005 = document.getElementById("boardTab");
  var a006 = document.getElementById("audioTab");
  var a007 = document.getElementById("difficultyLang");
  var a008 = document.getElementById("normalDif");
  var a009 = document.getElementById("hardDif");
  var a010 = document.getElementById("hellDif");
  var a011 = document.getElementById("langsLangs");
  var a012 = document.getElementById("boardMapAlphaLang");
  var a013 = document.getElementById("boardMapOrigoLang");
  var a014 = document.getElementById("gameTab");
  var a015 = document.getElementById("uploadDataLang");
  var a016 = document.getElementById("saveProgDataViafile");
  var a017 = document.getElementById("meowLang");
  var a018 = document.getElementById("goldLang");
  var a019 = document.getElementById("alphaLang");
  var a020 = document.getElementById("crystalLang");
  var a021 = document.getElementById("ticketLang");
  var a022 = document.getElementById("cTicketLang");
  var a023 = document.getElementById("pTicketLang");
  var a024 = document.getElementById("muteLang");
  var a025 = document.getElementById("sfxLang");
  var a026 = document.getElementById("netEaseLang1");
  var a027 = document.getElementById("netEaseLang2");
  var a028 = document.getElementById("coderLang");
  var a029 = document.getElementById("baseCodeLang");
  var a030 = document.getElementById("getscore");
  var a031 = document.getElementById("loseText");
  var a032 = document.getElementById("defaultSettings");
  var a033 = document.getElementById("applySettings");
  var a034 = document.getElementById("controllerSettingsLangs");
  var a035 = document.getElementById("cspLang");
  var a036 = document.getElementById("ccLang");
  var a037 = document.getElementById("clLang");
  var a038 = document.getElementById("crLang");
  var a039 = document.getElementById("noticeTitleLang");
  var a040 = document.getElementById("heading");
  var a041 = document.getElementById("musicLang");
  var a042 = document.getElementById("musicstyleLang");
  var a043 = document.getElementById("navBtn");
  var a044 = document.getElementById("btn002");
  var a045 = document.getElementById("deleteprogbutton");
  var a046 = document.getElementById("langImportantLang");
  var a047 = document.getElementById("ifMobileLang");
  var a048 = document.getElementById("translate");
  var a049 = document.getElementById("snakeTabsound");
  var a050 = document.getElementById("autoScoreLang");
  var a051 = document.getElementById("profileTitleLang");
  var a052 = document.getElementById("clickable0Lang");
  var a053 = document.getElementById("cratedOn0Lang");
  var a054 = document.getElementById("txtAhow");
  var a055 = document.getElementById("loadingText");
  var a056 = document.getElementById("loadClassic");
  var a057 = document.getElementById("loadAnime");
  var a058 = document.getElementById("loadingLangStyle");
  var a059 = document.getElementById("boardMapAlpha2Lang");
  var a060 = document.getElementById("adminToolsLang");
  var a061 = document.getElementById("exitSiteLang");
  var a062 = document.getElementById("noticeUpLang");
  var a063 = document.getElementById("ambLang");
  var a064 = document.getElementById("howTitleLang");
  var a065 = document.getElementById("ifOthersLang");
  var a066 = document.getElementById("txtBhow");
  var a067 = document.getElementById("pTicket2Lang");
  var a068 = document.getElementById("virtualTokenLang");
  var a069 = document.getElementById("subButton");
  var a070 = document.getElementById("dataRunner");
  var a071 = document.getElementById("snakeColorLang");
  var a072 = document.getElementById("defOptionLang");
  var a073 = document.getElementById("dynOptionLang");
  var a074 = document.getElementById("swaOptionLang");
  const a000_all = document.getElementsByClassName('settingscontent');
  const a001_all = document.getElementsByClassName('stylescontent');
  const a002_all = document.getElementsByClassName('coming-soon');
  const a003_all = document.getElementsByClassName('moresettingscontent');
  const a004_all = document.getElementsByClassName('totopelement');
  const a005_all = document.getElementsByClassName('serviceLang');
  const a006_all = document.getElementsByClassName('r-stars');
  const a007_all = document.getElementsByClassName('r-star');
  if(localStorage.getItem("lang") === "en") {
    a000.innerHTML = "Settings";
    a001.innerHTML = "About";
    a002.innerHTML = "System";
    a003.innerHTML = "Snake";
    a004.innerHTML = "Food";
    a005.innerHTML = "Board";
    a006.innerHTML = "Audio";
    a007.innerHTML = "Difficulty:";
    a008.innerHTML = "Normal";
    a009.innerHTML = "Hard";
    a010.innerHTML = "Hell";
    a011.innerHTML = "Languages:";
    a012.innerHTML = "Alpha City Map";
    a013.innerHTML = "Origo Island Map";
    a014.innerHTML = "Game";
    a015.innerHTML = "Load data via file (.js)";
    a016.value = "Save data on file";
    a017.innerHTML = "Meow Token";
    a018.innerHTML = "Gold";
    a019.innerHTML = "Alpha Coin";
    a020.innerHTML = "Crystal";
    a021.innerHTML = "Ticket";
    a022.innerHTML = "Chromatic Ticket";
    a023.innerHTML = "Premium Ticket";
    a024.innerHTML = "Mute Audio";
    a025.innerHTML = "SFX Volume";
    a026.innerHTML = "Privacy Policy, Terms and Conditions";
    a027.innerHTML = "©1997-2025 NetEase, Inc.All Rights Reserved";
    a028.innerHTML = "Coding: " + "MNTS, DragonHtmIL;";
    a029.innerHTML = "Base Code: From";
    a030.innerHTML = "Score: 0";
    a031.innerHTML = "Game Over!";
    a032.value = "Default";
    a033.value = "Apply";
    a034.innerHTML = "Controller:";
    a035.innerHTML = "Position:";
    a036.innerHTML = "Center";
    a037.innerHTML = "Left";
    a038.innerHTML = "Right";
    a039.innerHTML = "Notice";
    a040.innerHTML = "Rating by " + rUsers + " Users";
    a041.innerHTML = "Background Music";
    a042.innerHTML = "Music";
      a043.classList.add("en-lang");
      a044.classList.add("en-lang");
    a045.value = "Delete Progress";
    a046.innerHTML = "(Language translations may not be 100% accurate)";
    a047.innerHTML = "If users use Mobiles (Android, iPhone, iPad, Tablets)";
    a048.classList.add("g-t-en");
    a049.innerHTML = "Snake";
    a050.innerHTML = "Auto load the saved score";
    a051.innerHTML = "Collection Center";
    a052.innerHTML = "> Clickable <";
    a053.innerHTML = "Coded on: ";
    a054.innerHTML = "Can be selected 3 types of game controlling:<br>";
    a054.innerHTML += "(open menu/System)<br>";
    a054.innerHTML += "Classic.<br>";
    a054.innerHTML += "Dynamic.<br>";
    a054.innerHTML += "Touch.<br>";
    a054.innerHTML += "Classic: need press on buttons.<br>";
    a054.innerHTML += "Dynamic: need press on buttons but position of buttons changed.<br>";
    a054.innerHTML += "Touch: gestures on screen for change the side of snake.";
    if(localStorage.getItem("loadingStyle") === "anime") {
      a055.innerHTML = "";
    }else{
      a055.innerHTML = "Loading…";
    }
    a056.innerHTML = "Classic";
    a057.innerHTML = "Anime";
    a058.innerHTML = "Loading Animation";
    a059.innerHTML = "Alpha City Map 2";
    a060.innerHTML = "Developments";
    a061.innerHTML = "Exit";
    a062.innerHTML = "Notice";
    a063.innerHTML = "Ambient";
    a064.innerHTML = "How to play";
    a065.innerHTML = "If users use other devices (Windows, MacOS, Linux)";
    a066.innerHTML = "Keyboard keys:<br>";
    a066.innerHTML += "↑←↓→ and W.A.S.D: Start game.<br>";
    a066.innerHTML += "Space bar: Pause and continue game.<br>";
    a066.innerHTML += "ESC: Open/close menu.<br>";
    a066.innerHTML += "E: Open/close collection center.<br>";
    a066.innerHTML += "Enter: Continue if alert is open and close the ''Game Over'' Window.";
    a067.innerHTML = "Premium Ticket";
    a068.innerHTML = "Virtual Token";
    a069.value = "Upload(.js)";
    a070.value = "Load";
    a071.innerHTML = "Snake color";
    a072.innerHTML = "Classic controller";
    a073.innerHTML = "DYnamic controller";
    a074.innerHTML = "Touch Screen Gestures";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = 'Settings:';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = 'Style:';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = 'Coming Soon!, Wait for updates.';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = 'More:';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = 'To start';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = 'Services:';
    };
    for (let i = 0; i < a006_all.length; i++) {
      a006_all[i].classList.add("en");
    };
    for (let i = 0; i < a007_all.length; i++) {
      a007_all[i].classList.add("en");
    }
    document.title = "Snake Mecha Collector";
  }else
  if(localStorage.getItem("lang") === "ru") {
    a000.innerHTML = "Настр'";
    a001.innerHTML = "О";
    a002.innerHTML = "Система";
    a003.innerHTML = "Змея";
    a004.innerHTML = "Еда";
    a005.innerHTML = "Доска";
    a006.innerHTML = "Аудио";
    a007.innerHTML = "Сложность:";
    a008.innerHTML = "Нормальный";
    a009.innerHTML = "Тяжелый";
    a010.innerHTML = "Адский";
    a011.innerHTML = "Языки:";
    a012.innerHTML = "Карта города Альфа";
    a013.innerHTML = "Карта острова Ориго";
    a014.innerHTML = "Игра";
    a015.innerHTML = "Загрузка данных через файл (.js)";
    a016.value = "Сохранить данные в файле";
    a017.innerHTML = "Мяу-жетон";
    a018.innerHTML = "Золото";
    a019.innerHTML = "Альфа-монета";
    a020.innerHTML = "Кристалл";
    a021.innerHTML = "Билет";
    a022.innerHTML = "Хроматический билет";
    a023.innerHTML = "Премиум-билет";
    a024.innerHTML = "Отключить звук";
    a025.innerHTML = "Громкость SFX";
    a026.innerHTML = "Политика конфиденциальности, положения и условия";
    a027.innerHTML = "©1997-2025 NetEase, Inc.Все права защищены";
    a028.innerHTML = "Кодирование: " + "MNTS, DragonHtmIL;";
    a029.innerHTML = "Базовый код: Из ";
    a030.innerHTML = "Счет: 0";
    a031.innerHTML = "Игра закончена!";
    a032.value = "По умолч";
    a033.value = "Применять";
    a034.innerHTML = "Контроллер:";
    a035.innerHTML = "Позиция:";
    a036.innerHTML = "Центрый";
    a037.innerHTML = "Левый";
    a038.innerHTML = "Правый";
    a039.innerHTML = "Уведомление";
    a040.innerHTML = "Оценка " + rUsers + " пользователей";
    a041.innerHTML = "Фоновая музыка";
    a042.innerHTML = "Музыка";
      a043.classList.add("ru-lang");
      a044.classList.add("ru-lang");
    a045.value = "Удалить Прогресс";
    a046.innerHTML = "(Переводы могут содержать ошибки)";
    a047.innerHTML = "Если пользователи используют мобильные (Android, iPhone, iPad, планшеты)";
    a048.classList.add("g-t-ru");
    a049.innerHTML = "Змея";
    a050.innerHTML = "Автоматически загрузить сохраненного счета";
    a051.innerHTML = "Центр сбора";
    a052.innerHTML = "> Нажемной <";
    a053.innerHTML = "Кодировано на: ";
    a054.innerHTML = "Можно выбрать 3 типа управления игрой:<br>";
    a054.innerHTML += "(откройте меню/Система)<br>";
    a054.innerHTML += "Классический.<br>";
    a054.innerHTML += "Динамичный.<br>";
    a054.innerHTML += "Прикосновение.<br>";
    a054.innerHTML += "Классический: нужно нажать на кнопки.<br>";
    a054.innerHTML += "Динамичный: нужно нажать на кнопки, но положение кнопок изменилось.<br>";
    a054.innerHTML += "Прикосновение: жесты на экране для смены стороны змеи.";
    if(localStorage.getItem("loadingStyle") === "anime") {
      a055.innerHTML = "";
    }else{
      a055.innerHTML = "Загрузка…";
    }
    a056.innerHTML = "Классический";
    a057.innerHTML = "Аниме";
    a058.innerHTML = "Анимация загрузки";
    a059.innerHTML = "Карта города Альфа 2";
    a060.innerHTML = "Разработки";
    a061.innerHTML = "Выход";
    a062.innerHTML = "Уведом'";
    a063.innerHTML = "Окружение";
    a064.innerHTML = "Как играть";
    a065.innerHTML = "Если пользователи используют другие устройства (Windows, MacOS, Linux)";
    a066.innerHTML = "Клавиши клавиатура:<br>";
    a066.innerHTML += "↑←↓→ и Ц.Ф.Ы.В: Начать игру.<br>";
    a066.innerHTML += "Пробел: Пауза и продолжение игры.<br>";
    a066.innerHTML += "ESC: Открыть/закрыть меню.<br>";
    a066.innerHTML += "E: Открыть/закрыть центр сбора.<br>";
    a066.innerHTML += "Enter: Продолжить, если открыто оповещение, и закрыть окно «Игра окончена».";
    a067.innerHTML = "Премиум-билет";
    a068.innerHTML = "Виртуальный токен";
    a069.value = "Загрузить(.js)";
    a070.value = "Загрузить";
    a071.innerHTML = "Цвет змеи";
    a072.innerHTML = "Классический контроллер";
    a073.innerHTML = "Динамический контроллер";
    a074.innerHTML = "Жесты сенсорного экрана";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = 'Настройки:';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = 'Стиль:';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = 'Скоро!, Ждите обновлений.';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = 'Более:';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = 'К началу';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = 'Услуги:';
    };
    for (let i = 0; i < a006_all.length; i++) {
      a006_all[i].classList.add("ru");
    };
    for (let i = 0; i < a007_all.length; i++) {
      a007_all[i].classList.add("ru");
    }
    document.title = "Змея Меха Сборщик";
  }else
  if(localStorage.getItem("lang") === "jp") {
    a000.innerHTML = "設定";
    a001.innerHTML = "について";
    a002.innerHTML = "システム";
    a003.innerHTML = "蛇";
    a004.innerHTML = "食べ物";
    a005.innerHTML = "ボード";
    a006.innerHTML = "オーディオ";
    a007.innerHTML = "困難：";
    a008.innerHTML = "普通";
    a009.innerHTML = "難しい";
    a010.innerHTML = "地獄";
    a011.innerHTML = "言語：";
    a012.innerHTML = "アルファシティマップ";
    a013.innerHTML = "オリゴ島の地図";
    a014.innerHTML = "ゲーム";
    a015.innerHTML = "ファイル（.js）経由でデータを読み込む";
    a016.value = "データをファイルに保存する";
    a017.innerHTML = "ニャートークン";
    a018.innerHTML = "金";
    a019.innerHTML = "アルファコイン";
    a020.innerHTML = "クリスタル";
    a021.innerHTML = "チケット";
    a022.innerHTML = "クロマティックチケット";
    a023.innerHTML = "プレミアムチケット";
    a024.innerHTML = "音声をミュートする";
    a025.innerHTML = "SFXボリューム";
    a026.innerHTML = "プライバシーポリシー、利用規約";
    a027.innerHTML = "©1997-2025 NetEase, Inc.無断転載禁止";
    a028.innerHTML = "コーディング： " + "MNTS, DragonHtmIL;";
    a029.innerHTML = "ベースコード： から ";
    a030.innerHTML = "スコア： 0";
    a031.innerHTML = "ゲームオーバー！";
    a032.value = "デフォルト";
    a033.value = "適用する";
    a034.innerHTML = "コントローラ：";
    a035.innerHTML = "位置：";
    a036.innerHTML = "中心";
    a037.innerHTML = "左";
    a038.innerHTML = "右";
    a039.innerHTML = "知らせ";
    a040.innerHTML = rUsers + "人のユーザーによる評価";
    a041.innerHTML = "バックグラウンドミュージック";
    a042.innerHTML = "音楽";
      a043.classList.add("jp-lang");
      a044.classList.add("jp-lang");
    a045.value = "削除の進行状況";
    a046.innerHTML = "(言語翻訳は100%正確ではない場合があります)";
    a047.innerHTML = "ユーザーがモバイル（Android、iPhone、iPad、タブレット）を使用する場合";
    a048.classList.add("g-t-jp");
    a049.innerHTML = "蛇";
    a050.innerHTML = "保存したスコアを自動ロード";
    a051.innerHTML = "収集センター";
    a052.innerHTML = "> ニックネーム可能 <";
      a052.style.fontSize = "12px";
    a053.innerHTML = "コーディング日： ";
    a054.innerHTML = "3種類のゲームコントロールを選択できます:<br>";
    a054.innerHTML += "（メニュー/システムを開く）<br>";
    a054.innerHTML += "クラシック。<br>";
    a054.innerHTML += "ダイナミック。<br>";
    a054.innerHTML += "感動的。<br>";
    a054.innerHTML += "クラシック： ボタンを押す必要があります。<br>";
    a054.innerHTML += "ダイナミック： ボタンを押す必要がありますが、ボタンの位置が変わります。<br>";
    a054.innerHTML += "感動的： 画面上のジェスチャーでヘビの側面を変更します。";
    if(localStorage.getItem("loadingStyle") === "anime") {
      a055.innerHTML = "";
    }else{
      a055.innerHTML = "読み込み中…";
    }
    a056.innerHTML = "クラシック";
    a057.innerHTML = "アニメ";
    a058.innerHTML = "読み込みのアニメーション";
    a059.innerHTML = "アルファシティマップ 2";
    a060.innerHTML = "開発";
    a061.innerHTML = "出口";
    a062.innerHTML = "知らせ";
    a063.innerHTML = "アンビエント";
    a064.innerHTML = "遊び方";
    a065.innerHTML = "ユーザーが他のデバイス（Windows、MacOS、Linux）を使用する場合";
    a066.innerHTML = "キーボードキー：<br>";
    a066.innerHTML += "↑←↓→ と て.ち.と.し：ゲーム開始。<br>";
    a066.innerHTML += "スペースバー：ゲームを一時停止して続行。<br>";
    a066.innerHTML += "ESC：メニューを開く/閉じる。<br>";
    a066.innerHTML += "E：コレクションセンターを開く/閉じる。<br>";
    a066.innerHTML += "Enter：アラートが開いている場合は続行し、「ゲームオーバー」ウィンドウを閉じる。";
    a067.innerHTML = "プレミアムチケット";
    a068.innerHTML = "仮想トークン";
    a069.value = "アップロード(.js)";
    a070.value = "ロード";
    a071.innerHTML = "ヘビの色";
    a072.innerHTML = "クラシックコントローラー";
    a073.innerHTML = "ダイナミックコントローラー";
    a074.innerHTML = "タッチスクリーンジェスチャー";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = '設定：';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = 'スタイル：';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = '近日公開予定！ 最新情報をお楽しみに。';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = '海：';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = '始まりへ';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = 'サービス：';
    };
    for (let i = 0; i < a006_all.length; i++) {
      a006_all[i].classList.add("jp");
    };
    for (let i = 0; i < a007_all.length; i++) {
      a007_all[i].classList.add("jp");
    }
    document.title = "スネークメカコレクター";
  }else
  if(localStorage.getItem("lang") === "chs") {
    a000.innerHTML = "设置";
    a001.innerHTML = "关于";
    a002.innerHTML = "系统";
    a003.innerHTML = "蛇";
    a004.innerHTML = "食物";
    a005.innerHTML = "木板";
    a006.innerHTML = "声音的";
    a007.innerHTML = "困难：";
    a008.innerHTML = "普通的";
    a009.innerHTML = "难的";
    a010.innerHTML = "地狱";
    a011.innerHTML = "语言：";
    a012.innerHTML = "阿尔法城地图";
    a013.innerHTML = "奥里戈岛地图";
    a014.innerHTML = "游戏";
    a015.innerHTML = "通过文件（.js）加载数据";
    a016.value = "将数据保存在文件中";
    a017.innerHTML = "喵币";
    a018.innerHTML = "金子";
    a019.innerHTML = "阿尔法币";
    a020.innerHTML = "水晶";
    a021.innerHTML = "票";
    a022.innerHTML = "彩色票";
    a023.innerHTML = "高级票";
    a024.innerHTML = "静音";
    a025.innerHTML = "音效音量";
    a026.innerHTML = "隐私政策、条款和条件";
    a027.innerHTML = "©1997-2025 网易公司版权所有";
    a028.innerHTML = "编码： " + "MNTS, DragonHtmIL;";
    a029.innerHTML = "基本代码：来自";
    a030.innerHTML = "分数： 0";
    a031.innerHTML = "游戏结束！";
    a032.value = "默认";
    a033.value = "申请";
    a034.innerHTML = "控制器：";
    a035.innerHTML = "位置：";
    a036.innerHTML = "中心";
    a037.innerHTML = "左边";
    a038.innerHTML = "正确的";
    a039.innerHTML = "注意";
    a040.innerHTML = rUsers + "位用户评分";
    a041.innerHTML = "背景音乐";
    a042.innerHTML = "音乐";
      a043.classList.add("chs-lang");
      a044.classList.add("chs-lang");
    a045.value = "删除进度";
    a046.innerHTML = "(语言翻译可能不是 100% 准确)";
    a047.innerHTML = "如果用户使用手机（Android、iPhone、iPad、平板电脑）";
    a048.classList.add("g-t-chs");
    a049.innerHTML = "蛇";
    a050.innerHTML = "自动加载已保存的乐谱";
    a051.innerHTML = "收集中心";
    a052.innerHTML = "> 可点击 <";
    a053.innerHTML = "编码于： ";
    a054.innerHTML = "可以选择3种游戏控制类型：<br>";
    a054.innerHTML += "（打开菜单/系统）<br>";
    a054.innerHTML += "经典。<br>";
    a054.innerHTML += "动感。<br>";
    a054.innerHTML += "感人。<br>";
    a054.innerHTML += "经典： 需要按下按钮。<br>";
    a054.innerHTML += "动感： 需要按下按钮，但按钮位置已改变。<br>";
    a054.innerHTML += "感人： 屏幕上的手势可改变蛇的朝向。";
    if(localStorage.getItem("loadingStyle") === "anime") {
      a055.innerHTML = "";
    }else{
      a055.innerHTML = "加载中…";
    }
    a056.innerHTML = "经典的";
    a057.innerHTML = "日本动画片";
    a058.innerHTML = "加载动画";
    a059.innerHTML = "阿尔法城地图 2";
    a060.innerHTML = "发展";
    a061.innerHTML = "出口";
    a062.innerHTML = "注意";
    a063.innerHTML = "周围的";
    a064.innerHTML = "怎么玩";
    a065.innerHTML = "如果用户使用其他设备（Windows、MacOS、Linux）";
    a066.innerHTML = "键盘按键：<br>";
    a066.innerHTML += "↑←↓→ 和 田-山.日-人.尸-革.木-日：开始游戏。<br>";
    a066.innerHTML += "空格键：暂停并继续游戏。<br>";
    a066.innerHTML += "ESC：打开/关闭菜单。<br>";
    a066.innerHTML += "E：打开/关闭收集中心。<br>";
    a066.innerHTML += "Enter：如果警报已打开，则继续并关闭“游戏结束”窗口。";
    a067.innerHTML = "高级票";
    a068.innerHTML = "虚拟代币";
    a069.value = "上传(.js)";
    a070.value = "加载";
    a071.innerHTML = "蛇色";
    a072.innerHTML = "经典控制器";
    a073.innerHTML = "动态控制器";
    a074.innerHTML = "触摸屏手势";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = '设置：';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = '风格：';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = '即将推出！等待更新。';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = '更多的：';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = '首先';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = '服务：';
    };
    for (let i = 0; i < a006_all.length; i++) {
      a006_all[i].classList.add("chs");
    };
    for (let i = 0; i < a007_all.length; i++) {
      a007_all[i].classList.add("chs");
    }
    document.title = "蛇形机甲收藏家";
  }else
  if(localStorage.getItem("lang") === "cht") {
    a000.innerHTML = "設定";
    a001.innerHTML = "關於";
    a002.innerHTML = "系統";
    a003.innerHTML = "蛇";
    a004.innerHTML = "食物";
    a005.innerHTML = "木板";
    a006.innerHTML = "聲音的";
    a007.innerHTML = "困難：";
    a008.innerHTML = "普通的";
    a009.innerHTML = "難的";
    a010.innerHTML = "地獄";
    a011.innerHTML = "語言：";
    a012.innerHTML = "阿爾法城地圖";
    a013.innerHTML = "奧里戈島地圖";
    a014.innerHTML = "遊戲";
    a015.innerHTML = "透過檔案（.js）載入數據";
    a016.value = "將資料保存在文件中";
    a017.innerHTML = "喵幣";
    a018.innerHTML = "金子";
    a019.innerHTML = "阿爾法幣";
    a020.innerHTML = "水晶";
    a021.innerHTML = "票";
    a022.innerHTML = "彩色票";
    a023.innerHTML = "高級票";
    a024.innerHTML = "靜音";
    a025.innerHTML = "SFX 音量";
    a026.innerHTML = "隱私權政策、條款與條件";
    a027.innerHTML = "©1997-2025 網易公司版權所有";
    a028.innerHTML = "編碼： " + "MNTS, DragonHtmIL;";
    a029.innerHTML = "基本程式碼：來自";
    a030.innerHTML = "分數： 0";
    a031.innerHTML = "遊戲結束！";
    a032.value = "預設";
    a033.value = "申請";
    a034.innerHTML = "控制器：";
    a035.innerHTML = "位置：";
    a036.innerHTML = "中心";
    a037.innerHTML = "左邊";
    a038.innerHTML = "正確的";
    a039.innerHTML = "注意";
    a040.innerHTML = rUsers + " 位用戶評分";
    a041.innerHTML = "背景音樂";
    a042.innerHTML = "音樂";
      a043.classList.add("cht-lang");
      a044.classList.add("sht-lang");
    a045.value = "刪除進度";
    a046.innerHTML = "(語言翻譯可能不是 100% 準確)";
    a047.innerHTML = "如果用戶使用手機（Android、iPhone、iPad、平板電腦）";
    a048.classList.add("g-t-cht");
    a049.innerHTML = "蛇";
    a050.innerHTML = "自動載入已儲存的樂譜";
    a051.innerHTML = "收集中心";
    a052.innerHTML = "> 可點擊 <";
    a053.innerHTML = "編碼於： ";
    a054.innerHTML = "可以選擇3種遊戲控制類型：<br>";
    a054.innerHTML += "（開啟選單/系統）<br>";
    a054.innerHTML += "經典的。<br>";
    a054.innerHTML += "動態的。<br>";
    a054.innerHTML += "接觸。<br>";
    a054.innerHTML += "經典的： 需要按下按鈕。<br>";
    a054.innerHTML += "動態的： 需要按下按鈕但按鈕的位置發生了變化。<br>";
    a054.innerHTML += "接觸： 螢幕上的手勢可以改變蛇的側面。";
    if(localStorage.getItem("loadingStyle") === "anime") {
      a055.innerHTML = "";
    }else{
      a055.innerHTML = "載入中…";
    }
    a056.innerHTML = "經典的";
    a057.innerHTML = "日本卡通";
    a058.innerHTML = "載入動畫";
    a059.innerHTML = "阿爾法城地圖 2";
    a060.innerHTML = "發展";
    a061.innerHTML = "出口";
    a062.innerHTML = "注意";
    a063.innerHTML = "周圍的";
    a064.innerHTML = "怎麼玩";
    a065.innerHTML = "如果使用者使用其他裝置（Windows、MacOS、Linux）";
    a066.innerHTML = "鍵盤鍵：<br>";
    a066.innerHTML += "↑←↓→ 和 田-山.日-人.尸-革.木-日：開始遊戲。<br>";
    a066.innerHTML += "空白鍵：暫停和繼續遊戲。<br>";
    a066.innerHTML += "ESC：開啟/關閉選單。<br>";
    a066.innerHTML += "E：開啟/關閉收集中心。<br>";
    a066.innerHTML += "輸入：如果警報開啟則繼續並關閉「遊戲結束」視窗。";
    a067.innerHTML = "高級票";
    a068.innerHTML = "虛擬代幣";
    a069.value = "上傳（.js）";
    a070.value = "載入";
    a071.innerHTML = "蛇色";
    a072.innerHTML = "經典控制器";
    a073.innerHTML = "動態控制器";
    a074.innerHTML = "觸控螢幕手勢";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = '設定:';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = '風格：';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = '即將推出！';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = '更多的：';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = '首先';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = '服務：';
    };
    for (let i = 0; i < a006_all.length; i++) {
      a006_all[i].classList.add("cht");
    };
    for (let i = 0; i < a007_all.length; i++) {
      a007_all[i].classList.add("cht");
    }
    document.title = "蛇形機甲收藏家";
  }else
  if(localStorage.getItem("lang") === "ko") {
    a000.innerHTML = "설정";
    a001.innerHTML = "에 대한";
    a002.innerHTML = "체계";
    a003.innerHTML = "뱀";
    a004.innerHTML = "음식";
    a005.innerHTML = "판자";
    a006.innerHTML = "오디오";
    a007.innerHTML = "어려움:";
    a008.innerHTML = "정상";
    a009.innerHTML = "딱딱한";
    a010.innerHTML = "지옥";
    a011.innerHTML = "언어:";
    a012.innerHTML = "알파 시티 지도";
    a013.innerHTML = "오리고 섬 지도";
    a014.innerHTML = "게임";
    a015.innerHTML = "파일(.js)을 통해 데이터 로드";
    a016.value = "파일에 데이터 저장";
    a017.innerHTML = "야옹 토큰";
    a018.innerHTML = "금";
    a019.innerHTML = "알파 코인";
    a020.innerHTML = "결정";
    a021.innerHTML = "표";
    a022.innerHTML = "크로매틱 티켓";
    a023.innerHTML = "프리미엄 티켓";
    a024.innerHTML = "오디오 음소거";
    a025.innerHTML = "SFX 용량";
    a026.innerHTML = "개인정보 보호정책, 이용약관";
    a027.innerHTML = "©1997-2025 NetEase, Inc. 모든 권리 보유";
    a028.innerHTML = "코딩: " + "MNTS, DragonHtmIL;";
    a029.innerHTML = "기본 코드: 에서";
    a030.innerHTML = "점수: 0";
    a031.innerHTML = "게임 오버!";
    a032.value = "기본";
    a033.value = "적용하다";
    a034.innerHTML = "제어 장치:";
    a035.innerHTML = "위치:";
    a036.innerHTML = "센터";
    a037.innerHTML = "왼쪽";
    a038.innerHTML = "오른쪽";
    a039.innerHTML = "알아채다";
    a040.innerHTML = rUsers + "명의 사용자 평가";
    a041.innerHTML = "배경음악";
    a042.innerHTML = "음악";
      a043.classList.add("ko-lang");
      a044.classList.add("ko-lang");
    a045.value = "진행 상황 삭제";
    a046.innerHTML = "(언어 번역은 100% 정확하지 않을 수 있습니다.)";
    a047.innerHTML = "사용자가 모바일(Android, iPhone, iPad, Tablet)을 사용하는 경우";
    a048.classList.add("g-t-ko");
    a049.innerHTML = "뱀";
    a050.innerHTML = "저장된 점수를 자동으로 로드합니다";
    a051.innerHTML = "수집 센터";
    a052.innerHTML = "> 클릭 가능 <";
    a053.innerHTML = "코딩된 내용: ";
    a054.innerHTML = "게임 제어는 3가지 유형을 선택할 수 있습니다:<br>";
    a054.innerHTML += "(메뉴/시스템 열기)<br>";
    a054.innerHTML += "클래식.<br>";
    a054.innerHTML += "다이내믹.<br>";
    a054.innerHTML += "감동적.<br>";
    a054.innerHTML += "클래식: 버튼을 눌러야 합니다.<br>";
    a054.innerHTML += "다이내믹: 버튼을 눌러야 하지만 버튼 위치가 변경되었습니다.<br>";
    a054.innerHTML += "감동적: 화면에서 제스처를 사용하여 뱀의 측면을 변경합니다.";
    if(localStorage.getItem("loadingStyle") === "anime") {
      a055.innerHTML = "";
    }else{
      a055.innerHTML = "로딩중…";
    }
    a056.innerHTML = "고전적인";
    a057.innerHTML = "애니";
    a058.innerHTML = "로딩 애니메이션";
    a059.innerHTML = "알파 시티 지도 2";
    a060.innerHTML = "개발";
    a061.innerHTML = "출구";
    a062.innerHTML = "알아채다";
    a063.innerHTML = "주변";
    a064.innerHTML = "게임 방법";
    a065.innerHTML = "사용자가 다른 장치(Windows, MacOS, Linux)를 사용하는 경우";
    a066.innerHTML = "키보드 키:<br>";
    a066.innerHTML += "↑←↓→ 및 ㅁ.ㄴ.ㅇ.ㄹ.: 게임 시작.<br>";
    a066.innerHTML += "스페이스바: 게임 일시 정지 및 계속.<br>";
    a066.innerHTML += "ESC: 메뉴 열기/닫기.<br>";
    a066.innerHTML += "E: 수집 센터 열기/닫기.<br>";
    a066.innerHTML += "Enter: 경고가 표시되면 계속하고 '게임 종료' 창을 닫습니다.";
    a067.innerHTML = "프리미엄 티켓";
    a068.innerHTML = "가상 토큰";
    a069.value = "업로드(.js)";
    a070.value = "로드";
    a071.innerHTML = "뱀 색깔";
    a072.innerHTML = "클래식 컨트롤러";
    a073.innerHTML = "다이내믹 컨트롤러";
    a074.innerHTML = "터치스크린 제스처";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = '설정:';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = '스타일:';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = '곧 출시됩니다. 업데이트를 기다려 주세요.';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = '더:';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = '시작하려면';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = '서비스:';
    };
    for (let i = 0; i < a006_all.length; i++) {
      a006_all[i].classList.add("ko");
    };
    for (let i = 0; i < a007_all.length; i++) {
      a007_all[i].classList.add("ko");
    }
    document.title = "뱀 메카 수집가";
  }else
  if(localStorage.getItem("lang") === "he") {
    a000.innerHTML = "הגדרות";
    a001.innerHTML = "אודות";
    a002.innerHTML = "מערכת";
    a003.innerHTML = "נחש";
    a004.innerHTML = "אוכל";
    a005.innerHTML = "לוח";
    a006.innerHTML = "אודיו";
    a007.innerHTML = "קושי:";
    a007.style.direction = "rtl";
    a007.style.textAlign = "right";
    a008.innerHTML = "רגיל";
    a009.innerHTML = "קשה";
    a010.innerHTML = "גהנום";
    a011.innerHTML = "שפות:";
    a011.style.direction = "rtl";
    a011.style.textAlign = "right";
    a012.innerHTML = "מפת עיר אלפא";
    a013.innerHTML = "מפת אי אוריגו";
    a014.innerHTML = "משחק";
    a015.innerHTML = "טעינת נתונים דרך קובץ (.js)";
    a015.style.direction = "rtl";
    a016.value = "שמירת נתונים בקובץ";
    a017.innerHTML = "מיאו אסימון";
    a018.innerHTML = "זהב";
    a019.innerHTML = "מתבעת אלפא";
    a020.innerHTML = "גביש";
    a021.innerHTML = "כרטיס";
    a022.innerHTML = "כרטיס כרומטי";
    a023.innerHTML = "כרטיס פרימיום";
    a024.innerHTML = "השתקת שמע";
    a025.innerHTML = "עוצמת SFX";
    a025.style.direction = "rtl";
    a025.style.textAlign = "right";
    a026.innerHTML = "מדיניות פרטיות, תנאים והגבלות";
    a027.innerHTML = "©1997-2025 NetEase, Inc. כל הזכויות שמורות";
    a027.style.direction = "rtl";
    a028.innerHTML = "קידוד: " + "MNTS, DragonHtmIL;";
    a028.style.direction = "rtl";
    a029.innerHTML = "קוד בסיס: מאת";
    a029.style.direction = "rtl";
    a030.innerHTML = "ניקוד: 0";
    a031.innerHTML = "משחק נגמר!";
    a031.style.direction = "rtl";
    a032.value = "ב''מחדל";
    a033.value = "החל";
    a034.innerHTML = "בקר:";
    a034.style.direction = "rtl";
    a034.style.textAlign = "right";
    a035.innerHTML = "מיקום:";
    a035.style.direction = "rtl";
    a035.style.textAlign = "right";
    a036.innerHTML = "מרכז";
    a037.innerHTML = "שמאל";
    a038.innerHTML = "ימין";
    a039.innerHTML = "הודעה";
    a039.style.textAlign = "right";
    a039.style.width = "75%";
    a040.innerHTML = "דירוג על ידי " + rUsers + " משתמשים";
    a041.innerHTML = "מוסיקת רקע";
    a042.innerHTML = "מוסיקה";
      a043.classList.add("he-lang");
      a044.classList.add("he-lang");
    a045.value = "מחיקת התקדמות";
    a046.innerHTML = "(ייתכן שתרגומי שפה לא יהיו מדויקים ב-100%)";
    a047.innerHTML = "אם משתמשים משתמשים בטלפונים ניידים (אנדרואיד, אייפון, אייפד, טאבלטים)";
    a047.style.textAlign = "right";
    a048.classList.add("g-t-he");
    a049.innerHTML = "נחש";
    a050.innerHTML = "טעינה אוטומטית של הציון הנשמר";
    a051.innerHTML = "מרכז איסוף";
    a051.style.textAlign = "right";
    a051.style.width = "75%";
    a052.innerHTML = "> נלחץ <";
    a053.innerHTML = "קודד על: ";
    a053.style.direction = "rtl";
    a054.innerHTML = "ניתן לבחור 3 סוגים של שליטה במשחק:<br>";
    a054.innerHTML += "(פתח תפריט/מערכת)<br>";
    a054.innerHTML += "קלאסי.<br>";
    a054.innerHTML += "דינמי.<br>";
    a054.innerHTML += "מגע.<br>";
    a054.innerHTML += "קלאסי: צריך ללחוץ על כפתורים.<br>";
    a054.innerHTML += "דינמי: צריך ללחוץ על הכפתורים אבל מיקום הכפתורים ישתנה.<br>";
    a054.innerHTML += "מגע: מחוות על המסך לשינוי צד של נחש.";
    a054.style.direction = "rtl";
    a054.style.textAlign = "right";
    if(localStorage.getItem("loadingStyle") === "anime") {
      a055.innerHTML = "";
    }else{
      a055.innerHTML = "טוען…";
    }
    a055.style.direction = "rtl";
    a056.innerHTML = "קלאסי";
    a057.innerHTML = "אנימה";
    a058.innerHTML = "אנימציית טעינה";
    a059.innerHTML = "מפת עיר אלפא 2";
    a060.innerHTML = "התפתחויות";
    a061.innerHTML = "יציאה";
    a062.innerHTML = "הודעה";
    a063.innerHTML = "סביבה";
    a064.innerHTML = "איך לשחק";
    a064.style.textAlign = "right";
    a064.style.width = "75%";
    a065.innerHTML = "אם משתמשים משתמשים במחשירים אחרים (Windows, MacOS, Linux)";
    a065.style.direction = "rtl";
    a065.style.textAlign = "right";
    a066.innerHTML = "כפתורי מיקלדת:<br>";
    a066.innerHTML += "↑←↓→ ו '.ש.ד.ג: התחלת משחק.<br>";
    a066.innerHTML += "רווח: לעצור ולהמשיך את המשחק.<br>";
    a066.innerHTML += "ESC: פתיחת/סגירת התפריט.<br>";
    a066.innerHTML += "E: פתיחת/סגירת מרכז איסוף.<br>";
    a066.innerHTML += "Enter: המשך אם ההתראה פתוחה וסגירת חלון 'המשחק נגמר'.";
    a066.style.direction = "rtl";
    a066.style.textAlign = "right";
    a067.innerHTML = "כרטיס פרימיום";
    a068.innerHTML = "אסימון וירטואלי";
    a069.value = "העלאה(.js)";
    a069.style.direction = "rtl";
    a070.value = "טעינה";
    a071.innerHTML = "צבע הנחש";
    a072.innerHTML = "בקר קלאסי";
    a073.innerHTML = "בקר דינמי";
    a074.innerHTML = "מחוות מסך מגע";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = 'הגדרות:';
      a000_all[i].style.direction = "rtl";
      a000_all[i].style.textAlign = "right";
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = 'עיצוב:';
      a001_all[i].style.direction = "rtl";
      a001_all[i].style.textAlign = "right";
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = 'בקרוב!, חכו לעדכונים.';
      a002_all[i].style.direction = "rtl";
      a002_all[i].style.textAlign = "right";
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = 'עוד:';
      a003_all[i].style.direction = "rtl";
      a003_all[i].style.textAlign = "right";
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = 'להתחלה';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = 'שירותים:';
      a005_all[i].style.direction = "rtl";
    };
    for (let i = 0; i < a006_all.length; i++) {
      a006_all[i].classList.add("he");
    };
    for (let i = 0; i < a007_all.length; i++) {
      a007_all[i].classList.add("he");
    }
    document.title = "מכה נחש אספן";
  }else
  if(localStorage.getItem("lang") === "de") {
    a000.innerHTML = "Einstel'";
    a001.innerHTML = "Über";
    a002.innerHTML = "System";
    a003.innerHTML = "Schlange";
    a004.innerHTML = "Essen";
    a005.innerHTML = "Planke";
    a006.innerHTML = "Audio";
    a007.innerHTML = "Schwierigkeit:";
    a008.innerHTML = "Normaler";
    a009.innerHTML = "Schwerer";
    a010.innerHTML = "Höllen";
    a011.innerHTML = "Sprachen:";
    a012.innerHTML = "Alpha-Stadtplan";
    a013.innerHTML = "Karte der Insel Origo";
    a014.innerHTML = "Spiel";
    a015.innerHTML = "Daten per Datei laden (.js)";
    a016.value = "Daten in Datei speichern";
    a017.innerHTML = "Miau-Token";
    a018.innerHTML = "Gold";
    a019.innerHTML = "Alpha-Münze";
    a020.innerHTML = "Kristall";
    a021.innerHTML = "Ticket";
    a022.innerHTML = "Chromatisches Ticket";
    a023.innerHTML = "Premium Ticket";
    a024.innerHTML = "Audio stummschalten";
    a025.innerHTML = "SFX-Lautstärke";
    a026.innerHTML = "Datenschutzrichtlinie, Allgemeine Geschäftsbedingungen";
    a027.innerHTML = "©1997-2025 NetEase, Inc. Alle Rechte vorbehalten";
    a028.innerHTML = "Kodierung: " + "MNTS, DragonHtmIL;";
    a029.innerHTML = "Basiscode: Von";
    a030.innerHTML = "Punktzahl: 0";
    a031.innerHTML = "Spiel vorbei!";
    a032.value = "Standard";
    a033.value = "Anwenden";
    a034.innerHTML = "Konsole:";
    a035.innerHTML = "Position:";
    a036.innerHTML = "Mitte";
    a037.innerHTML = "Links";
    a038.innerHTML = "Rechts";
    a039.innerHTML = "Beachten";
    a040.innerHTML = "Bewertung von " + rUsers + " Benutzern";
    a041.innerHTML = "Hintergrundmusik";
    a042.innerHTML = "Musik";
      a043.classList.add("de-lang");
      a044.classList.add("de-lang");
    a045.value = "Fortschritt löschen";
    a046.innerHTML = "(Sprachübersetzungen sind möglicherweise nicht 100 % genau)";
    a047.innerHTML = "Wenn Benutzer Mobilgeräte verwenden (Android, iPhone, iPad, Tablets)";
    a048.classList.add("g-t-de");
    a049.innerHTML = "Schlange";
    a050.innerHTML = "Automatisches Laden der gespeicherten Punktzahl";
    a051.innerHTML = "Sammelzentrum";
    a052.innerHTML = "> Anklickbar <";
    a053.innerHTML = "Codiert am: ";
    a054.innerHTML = "Es können 3 Arten der Spielsteuerung ausgewählt werden:<br>";
    a054.innerHTML += "(Menü/System öffnen)<br>";
    a054.innerHTML += "Klassiker.<br>";
    a054.innerHTML += "Dynamisch.<br>";
    a054.innerHTML += "Berühren.<br>";
    a054.innerHTML += "Klassisch: Tasten müssen gedrückt werden.<br>";
    a054.innerHTML += "Dynamisch: Tasten müssen gedrückt werden, aber die Position der Tasten hat sich geändert.<br>";
    a054.innerHTML += "Berühren: Gesten auf dem Bildschirm zum Wechseln der Seite der Schlange.";
    if(localStorage.getItem("loadingStyle") === "anime") {
      a055.innerHTML = "";
    }else{
      a055.innerHTML = "Laden…";
    }
    a056.innerHTML = "Klassiker";
    a057.innerHTML = "Anime";
    a058.innerHTML = "Animation wird geladen";
    a059.innerHTML = "Alpha-Stadtplan 2";
    a060.innerHTML = "Entwicklungen";
    a061.innerHTML = "Beenden";
    a062.innerHTML = "Beachten";
    a063.innerHTML = "Umgebung";
    a064.innerHTML = "Spielanleitung";
    a065.innerHTML = "Wenn Benutzer andere Geräte verwenden (Windows, MacOS, Linux)";
    a066.innerHTML = "Tastaturtasten:<br>";
    a066.innerHTML += "↑←↓→ und W.A.S.D: Spiel starten.<br>";
    a066.innerHTML += "Leertaste: Spiel pausieren und fortsetzen.<br>";
    a066.innerHTML += "ESC: Menü öffnen/schließen.<br>";
    a066.innerHTML += "E: Sammelstelle öffnen/schließen.<br>";
    a066.innerHTML += "Eingabe: Fortfahren, wenn die Warnung geöffnet ist, und das Fenster „Game Over“ schließen.";
    a067.innerHTML = "Premium-Ticket";
    a068.innerHTML = "Virtuelles Token";
    a069.value = "Hochladen(.js)";
    a070.value = "Laden";
    a071.innerHTML = "Schlangenfarbe";
    a072.innerHTML = "Klassische Konsole";
    a073.innerHTML = "Dynamische Konsole";
    a074.innerHTML = "Touchscreen-Gesten";
    for (let i = 0; i < a000_all.length; i++) {
      a000_all[i].textContent = 'Einstellungen:';
    };
    for (let i = 0; i < a001_all.length; i++) {
      a001_all[i].textContent = 'Stil:';
    };
    for (let i = 0; i < a002_all.length; i++) {
      a002_all[i].textContent = 'Demnächst verfügbar! Warten Sie auf Updates.';
    };
    for (let i = 0; i < a003_all.length; i++) {
      a003_all[i].textContent = 'Mehr:';
    };
    for (let i = 0; i < a004_all.length; i++) {
      a004_all[i].textContent = 'Zum Anfang';
    };
    for (let i = 0; i < a005_all.length; i++) {
      a005_all[i].textContent = 'Leistungen:';
    };
    for (let i = 0; i < a006_all.length; i++) {
      a006_all[i].classList.add("de");
    };
    for (let i = 0; i < a007_all.length; i++) {
      a007_all[i].classList.add("de");
    }
    document.title = "Schlangen Mecha Sammler";
  }
}
languagesContents();