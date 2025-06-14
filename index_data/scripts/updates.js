let basicVersion = "1.1.3-v2";
function markUpdateReaded() {
  var modal = document.getElementById("updateModal");
  modal.style.display = "none";
  localStorage.setItem("updateRead", basicVersion);
}
function updateTextLangs() {
  var updateTitle = document.getElementById("updateTitleLang");
  var updateContent = document.getElementById("updateNoticeContent");
  if(localStorage.getItem("lang") === "en") {
    updateTitle.innerHTML = "What new in Version " + basicVersion;
    updateContent.innerHTML = "<h3>[14/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Added more loading animations." + "<br>";
    updateContent.innerHTML += "Updated music from original source." + "<br>";
    updateContent.innerHTML += "Updated some textures." + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[08/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Added show FPS (BETA)." + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[06/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Added services in ''about'' tab." + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[05/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Window of new player updated for new users." + "<br>";
    updateContent.innerHTML += "Changed some textures." + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Some fixes." + "<br>";
  }else
  if(localStorage.getItem("lang") === "ru") {
    updateTitle.innerHTML = "Что нового в версии " + basicVersion;
    updateContent.innerHTML = "<h3>[14/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Добавлено больше анимаций загрузки." + "<br>";
    updateContent.innerHTML += "Обновлена ​​музыка из оригинального источника." + "<br>";
    updateContent.innerHTML += "Обновлены некоторые текстуры." + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[08/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Добавлен показ FPS (BETA)." + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[06/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Добавлены услуги на вкладке «О»." + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[05/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Окно нового игрока обновлено для новых пользователей." + "<br>";
    updateContent.innerHTML += "Изменены некоторые текстуры." + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Некоторые исправления." + "<br>";
  }else
  if(localStorage.getItem("lang") === "jp") {
    updateTitle.innerHTML = "バージョン " + basicVersion + " の新機能";
    updateContent.innerHTML = "<h3>[14/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "読み込みアニメーションを追加しました。" + "<br>";
    updateContent.innerHTML += "オリジナルソースの音楽を更新しました。" + "<br>";
    updateContent.innerHTML += "テクスチャをいくつか更新しました。" + "<br>";
    updateContent.innerHTML += "いくつかの修正。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[08/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "FPS の表示を追加しました (ベータ版)。" + "<br>";
    updateContent.innerHTML += "いくつかの修正。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[06/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "「について」タブにサービスを追加しました。" + "<br>";
    updateContent.innerHTML += "いくつかの修正。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[05/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "新規ユーザー向けに新しいプレーヤーのウィンドウが更新されました." + "<br>";
    updateContent.innerHTML += "いくつかのテクスチャを変更しました。" + "<br>";
    updateContent.innerHTML += "いくつかの修正。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "いくつかの修正。" + "<br>";
  }else
  if(localStorage.getItem("lang") === "chs") {
    updateTitle.innerHTML = basicVersion + " 版新增功能";
    updateContent.innerHTML = "<h3>[14/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "添加了更多加载动画。" + "<br>";
    updateContent.innerHTML += "更新了原版音乐。" + "<br>";
    updateContent.innerHTML += "更新了部分纹理。" + "<br>";
    updateContent.innerHTML += "一些修复。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[08/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "添加了显示 FPS（BETA）。" + "<br>";
    updateContent.innerHTML += "一些修复。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[06/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "在“关于”选项卡中添加了服务。" + "<br>";
    updateContent.innerHTML += "一些修复。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[05/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "为新用户更新了新播放器窗口。" + "<br>";
    updateContent.innerHTML += "改变了一些纹理。" + "<br>";
    updateContent.innerHTML += "一些修复。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修复。" + "<br>";
  }else
  if(localStorage.getItem("lang") === "cht") {
    updateTitle.innerHTML = basicVersion + " 版新增功能";
    updateContent.innerHTML = "<h3>[14/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "新增了更多載入動畫。" + "<br>";
    updateContent.innerHTML += "更新了原版音樂。" + "<br>";
    updateContent.innerHTML += "更新了部分紋理。" + "<br>";
    updateContent.innerHTML += "一些修復。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[08/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "新增了顯示 FPS（BETA）。" + "<br>";
    updateContent.innerHTML += "一些修復。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[06/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "在「關於」標籤中新增了服務。" + "<br>";
    updateContent.innerHTML += "一些修復。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[05/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "為新用戶更新了新播放器窗口。" + "<br>";
    updateContent.innerHTML += "改變了一些紋理。" + "<br>";
    updateContent.innerHTML += "一些修復。" + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "一些修復。" + "<br>";
  }else
  if(localStorage.getItem("lang") === "ko") {
    updateTitle.innerHTML = "버전" + basicVersion + "의 새로운 기능";
    updateContent.innerHTML = "<h3>[14/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "로딩 애니메이션을 더 추가했습니다." + "<br>";
    updateContent.innerHTML += "원본 소스의 음악을 업데이트했습니다." + "<br>";
    updateContent.innerHTML += "일부 텍스처를 업데이트했습니다." + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[08/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "FPS 표시(베타)를 추가했습니다." + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[06/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "''정보'' 탭에 서비스를 추가했습니다." + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[05/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "신규 사용자를 위한 신규 플레이어 창이 업데이트되었습니다." + "<br>";
    updateContent.innerHTML += "일부 텍스처를 변경했습니다." + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "일부 수정 사항." + "<br>";
  }else
  if(localStorage.getItem("lang") === "he") {
    updateTitle.innerHTML = "מה חדש בגרסה " + basicVersion;
    updateTitle.style.textAlign = "right";
    updateTitle.style.direction = "rtl";
    updateTitle.style.width = "75%";
    updateContent.style.direction = "rtl";
    updateContent.style.textAlign = "right";
    updateContent.innerHTML = "<h3>[14/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "נוספו עוד אנימציות טעינה." + "<br>";
    updateContent.innerHTML += "עודכנו מוזיקה מהמקור המקורי." + "<br>";
    updateContent.innerHTML += "עודכנו כמה טקסטורות." + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[08/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "נוסף FPS של מופע (בטא)." + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[06/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "שירותים נוספו בלשונית ''אודות''." + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[05/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "חלון של שחקן חדש עודכן עבור משתמשים חדשים." + "<br>";
    updateContent.innerHTML += "שינו כמה טקסטורות." + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "כמה תיקונים." + "<br>";
  }else
  if(localStorage.getItem("lang") === "de") {
    updateTitle.innerHTML = "Was ist neu in Version " + basicVersion;
    updateContent.innerHTML = "<h3>[14/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Weitere Ladeanimationen hinzugefügt." + "<br>";
    updateContent.innerHTML += "Musik aus der Originalquelle aktualisiert." + "<br>";
    updateContent.innerHTML += "Einige Texturen aktualisiert." + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[08/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "FPS-Anzeige hinzugefügt (BETA)." + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[06/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Dienste im Tab „Info“ hinzugefügt." + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[05/06/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Fenster des neuen Players für neue Benutzer aktualisiert." + "<br>";
    updateContent.innerHTML += "Einige Texturen geändert." + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
    updateContent.innerHTML += "<hr>";

    updateContent.innerHTML += "<h3>[31/05/2025]</h3>" + "<br>";
    updateContent.innerHTML += "Einige Korrekturen." + "<br>";
  }
}