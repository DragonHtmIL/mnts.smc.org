function selectLangInFirstEn() {
  if(document.getElementById("fLsa").className === "first-language select") {
    if(document.getElementById("fLsa").className === "first-language select") {
      document.getElementById('languageEn').click();
      document.getElementById('fLsa').classList.add('activet');
      document.getElementById('fLsb').classList.remove('activet');
      document.getElementById('fLsc').classList.remove('activet');
      document.getElementById('fLsd').classList.remove('activet');
      document.getElementById('fLse').classList.remove('activet');
      document.getElementById('fLsf').classList.remove('activet');
      document.getElementById('fLsg').classList.remove('activet');
      document.getElementById('fLsh').classList.remove('activet');
      document.getElementById("fAtLang").innerHTML = "First select a Language";
      document.getElementById("fBtLang").innerHTML = "Now select difficulty";
      document.getElementById("fDsa").innerHTML = "Normal";
      document.getElementById("fDsb").innerHTML = "Hard";
      document.getElementById("fDsc").innerHTML = "Hell";
      document.getElementById("tabAfirst").innerHTML = "Languages";
      document.getElementById("tabBfirst").innerHTML = "Game";
      document.getElementById("tabCfirst").innerHTML = "Snake";
      document.getElementById("tabDfirst").innerHTML = "Music";
      document.getElementById("tabEfirst").innerHTML = "Walking";
      document.getElementById("fCtLang").innerHTML = "Now setting up the snake";
      document.getElementById("fDtLang").innerHTML = "Now select the music you want";
      document.getElementById("fEtLang").innerHTML = "Now select the snake walking sound you want";
      document.getElementById("nc100l").innerHTML = "(Language translations may not be 100% accurate)";
    }else
    if(document.getElementById("fLsa").className === "first-language select activet") {
      return false;
    }
  }
  document.getElementById('tabBfirst').removeAttribute("disabled");
};
function selectLangInFirstRu() {
  if(document.getElementById("fLsb").className === "first-language select") {
    if(document.getElementById("fLsb").className === "first-language select") {
      document.getElementById('languageRu').click();
      document.getElementById('fLsa').classList.remove('activet');
      document.getElementById('fLsb').classList.add('activet');
      document.getElementById('fLsc').classList.remove('activet');
      document.getElementById('fLsd').classList.remove('activet');
      document.getElementById('fLse').classList.remove('activet');
      document.getElementById('fLsf').classList.remove('activet');
      document.getElementById('fLsg').classList.remove('activet');
      document.getElementById('fLsh').classList.remove('activet');
      document.getElementById("fAtLang").innerHTML = "Сначала выберите язык";
      document.getElementById("fBtLang").innerHTML = "Теперь выберите сложность";
      document.getElementById("fDsa").innerHTML = "Нормальная";
      document.getElementById("fDsb").innerHTML = "Тяжелая";
      document.getElementById("fDsc").innerHTML = "Адская";
      document.getElementById("tabAfirst").innerHTML = "Языки";
      document.getElementById("tabBfirst").innerHTML = "Игра";
      document.getElementById("tabCfirst").innerHTML = "Змея";
      document.getElementById("tabDfirst").innerHTML = "Музыка";
      document.getElementById("tabEfirst").innerHTML = "Ходьба";
      document.getElementById("fCtLang").innerHTML = "Теперь настраиваем змею";
      document.getElementById("fDtLang").innerHTML = "Теперь выберите музыку, которую вы хотите";
      document.getElementById("fEtLang").innerHTML = "Теперь выберите звук ходьбы змеи, которую вы хотите";
      document.getElementById("nc100l").innerHTML = "(Переводы могут содержать ошибки)";
    }else
    if(document.getElementById("fLsb").className === "first-language select activet") {
      return false;
    }
  }
  document.getElementById('tabBfirst').removeAttribute("disabled");
};
function selectLangInFirstJp() {
  if(document.getElementById("fLsc").className === "first-language select") {
    if(document.getElementById("fLsc").className === "first-language select") {
      document.getElementById('languageJp').click();
      document.getElementById('fLsa').classList.remove('activet');
      document.getElementById('fLsb').classList.remove('activet');
      document.getElementById('fLsc').classList.add('activet');
      document.getElementById('fLsd').classList.remove('activet');
      document.getElementById('fLse').classList.remove('activet');
      document.getElementById('fLsf').classList.remove('activet');
      document.getElementById('fLsg').classList.remove('activet');
      document.getElementById('fLsh').classList.remove('activet');
      document.getElementById("fAtLang").innerHTML = "まず言語を選択してください";
      document.getElementById("fBtLang").innerHTML = "難易度を選択してください";
      document.getElementById("fDsa").innerHTML = "普通";
      document.getElementById("fDsb").innerHTML = "難しい";
      document.getElementById("fDsc").innerHTML = "地獄";
      document.getElementById("tabAfirst").innerHTML = "言語";
      document.getElementById("tabBfirst").innerHTML = "ゲーム";
      document.getElementById("tabCfirst").innerHTML = "蛇";
      document.getElementById("tabDfirst").innerHTML = "音楽";
      document.getElementById("tabEfirst").innerHTML = "ウォーキング";
      document.getElementById("fCtLang").innerHTML = "蛇をセットアップ中";
      document.getElementById("fDtLang").innerHTML = "聴きたい音楽を選択してください";
      document.getElementById("fEtLang").innerHTML = "现在选择你想要的蛇行走声音";
      document.getElementById("nc100l").innerHTML = "(言語翻訳は100%正確ではない場合があります)";
    }else
    if(document.getElementById("fLsb").className === "first-language select activet") {
      return false;
    }
  }
  document.getElementById('tabBfirst').removeAttribute("disabled");
};
function selectLangInFirstChs() {
  if(document.getElementById("fLsd").className === "first-language select") {
    if(document.getElementById("fLsd").className === "first-language select") {
      document.getElementById('languageChs').click();
      document.getElementById('fLsa').classList.remove('activet');
      document.getElementById('fLsb').classList.remove('activet');
      document.getElementById('fLsc').classList.remove('activet');
      document.getElementById('fLsd').classList.add('activet');
      document.getElementById('fLse').classList.remove('activet');
      document.getElementById('fLsf').classList.remove('activet');
      document.getElementById('fLsg').classList.remove('activet');
      document.getElementById('fLsh').classList.remove('activet');
      document.getElementById("fAtLang").innerHTML = "首先选择一种语言";
      document.getElementById("fBtLang").innerHTML = "现在选择难度";
      document.getElementById("fDsa").innerHTML = "普通的";
      document.getElementById("fDsb").innerHTML = "难的";
      document.getElementById("fDsc").innerHTML = "地狱";
      document.getElementById("tabAfirst").innerHTML = "语言";
      document.getElementById("tabBfirst").innerHTML = "游戏";
      document.getElementById("tabCfirst").innerHTML = "蛇";
      document.getElementById("tabDfirst").innerHTML = "音乐";
      document.getElementById("tabEfirst").innerHTML = "步行";
      document.getElementById("fCtLang").innerHTML = "现在设置蛇";
      document.getElementById("fDtLang").innerHTML = "现在选择您想要的音乐";
      document.getElementById("fEtLang").innerHTML = "現在選擇你想要的蛇行走聲音";
      document.getElementById("nc100l").innerHTML = "(语言翻译可能不是 100% 准确)";
    }else
    if(document.getElementById("fLsd").className === "first-language select activet") {
      return false;
    }
  }
  document.getElementById('tabBfirst').removeAttribute("disabled");
};
function selectLangInFirstCht() {
  if(document.getElementById("fLse").className === "first-language select") {
    if(document.getElementById("fLse").className === "first-language select") {
      document.getElementById('languageCht').click();
      document.getElementById('fLsa').classList.remove('activet');
      document.getElementById('fLsb').classList.remove('activet');
      document.getElementById('fLsc').classList.remove('activet');
      document.getElementById('fLsd').classList.remove('activet');
      document.getElementById('fLse').classList.add('activet');
      document.getElementById('fLsf').classList.remove('activet');
      document.getElementById('fLsg').classList.remove('activet');
      document.getElementById('fLsh').classList.remove('activet');
      document.getElementById("fAtLang").innerHTML = "首先選擇一種語言";
      document.getElementById("fBtLang").innerHTML = "現在選擇難度";
      document.getElementById("fDsa").innerHTML = "普通的";
      document.getElementById("fDsb").innerHTML = "難的";
      document.getElementById("fDsc").innerHTML = "地獄";
      document.getElementById("tabAfirst").innerHTML = "語言";
      document.getElementById("tabBfirst").innerHTML = "遊戲";
      document.getElementById("tabCfirst").innerHTML = "蛇";
      document.getElementById("tabDfirst").innerHTML = "音樂";
      document.getElementById("tabEfirst").innerHTML = "行人徒步區";
      document.getElementById("fCtLang").innerHTML = "現在設定蛇";
      document.getElementById("fDtLang").innerHTML = "現在選擇您想要的音樂";
      document.getElementById("fEtLang").innerHTML = "現在選擇你想要的蛇行走聲音";
      document.getElementById("nc100l").innerHTML = "(語言翻譯可能不是 100% 準確)";
    }else
    if(document.getElementById("fLse").className === "first-language select activet") {
      return false;
    }
  }
  document.getElementById('tabBfirst').removeAttribute("disabled");
};
function selectLangInFirstKo() {
  if(document.getElementById("fLsf").className === "first-language select") {
    if(document.getElementById("fLsf").className === "first-language select") {
      document.getElementById('languageKo').click();
      document.getElementById('fLsa').classList.remove('activet');
      document.getElementById('fLsb').classList.remove('activet');
      document.getElementById('fLsc').classList.remove('activet');
      document.getElementById('fLsd').classList.remove('activet');
      document.getElementById('fLse').classList.remove('activet');
      document.getElementById('fLsf').classList.add('activet');
      document.getElementById('fLsg').classList.remove('activet');
      document.getElementById('fLsh').classList.remove('activet');
      document.getElementById("fAtLang").innerHTML = "먼저 언어를 선택하세요";
      document.getElementById("fBtLang").innerHTML = "이제 난이도를 선택하세요";
      document.getElementById("fDsa").innerHTML = "정상";
      document.getElementById("fDsb").innerHTML = "딱딱한";
      document.getElementById("fDsc").innerHTML = "지옥";
      document.getElementById("tabAfirst").innerHTML = "언어";
      document.getElementById("tabBfirst").innerHTML = "게임";
      document.getElementById("tabCfirst").innerHTML = "뱀";
      document.getElementById("tabDfirst").innerHTML = "음악";
      document.getElementById("tabEfirst").innerHTML = "걷는";
      document.getElementById("fCtLang").innerHTML = "이제 뱀을 설정합니다";
      document.getElementById("fDtLang").innerHTML = "이제 원하는 음악을 선택하세요";
      document.getElementById("fEtLang").innerHTML = "이제 원하는 뱀 걷는 소리를 선택하세요";
      document.getElementById("nc100l").innerHTML = "(언어 번역은 100% 정확하지 않을 수 있습니다.)";
    }else
    if(document.getElementById("fLsf").className === "first-language select activet") {
      return false;
    }
  }
  document.getElementById('tabBfirst').removeAttribute("disabled");
};
function selectLangInFirstHe() {
  if(document.getElementById("fLsg").className === "first-language select") {
    if(document.getElementById("fLsg").className === "first-language select") {
      document.getElementById('languageHe').click();
      document.getElementById('fLsa').classList.remove('activet');
      document.getElementById('fLsb').classList.remove('activet');
      document.getElementById('fLsc').classList.remove('activet');
      document.getElementById('fLsd').classList.remove('activet');
      document.getElementById('fLse').classList.remove('activet');
      document.getElementById('fLsf').classList.remove('activet');
      document.getElementById('fLsg').classList.add('activet');
      document.getElementById('fLsh').classList.remove('activet');
      document.getElementById("fAtLang").innerHTML = "ראשית בחר שפה";
      document.getElementById("fBtLang").innerHTML = "עכשיו בחר רמת קושי";
      document.getElementById("fDsa").innerHTML = "רגילה";
      document.getElementById("fDsb").innerHTML = "קשה";
      document.getElementById("fDsc").innerHTML = "גיהנומית";
      document.getElementById("tabAfirst").innerHTML = "שפות";
      document.getElementById("tabBfirst").innerHTML = "משחק";
      document.getElementById("tabCfirst").innerHTML = "נחש";
      document.getElementById("tabDfirst").innerHTML = "מוסיקה";
      document.getElementById("tabEfirst").innerHTML = "הליכה";
      document.getElementById("fCtLang").innerHTML = "עכשיו מגדירים את הנחש";
      document.getElementById("fDtLang").innerHTML = "עכשיו בחרו את המוזיקה שאתם רוצים";
      document.getElementById("fEtLang").innerHTML = "כעת בחרו את צליל של הליכת נחש שאתם רוצים";
      document.getElementById("nc100l").innerHTML = "(ייתכן שתרגומי שפה לא יהיו מדויקים ב-100%)";
    }else
    if(document.getElementById("fLsg").className === "first-language select activet") {
      return false;
    }
  }
  document.getElementById('tabBfirst').removeAttribute("disabled");
};
function selectLangInFirstDe() {
  if(document.getElementById("fLsh").className === "first-language select") {
    if(document.getElementById("fLsh").className === "first-language select") {
      document.getElementById('languageDe').click();
      document.getElementById('fLsa').classList.remove('activet');
      document.getElementById('fLsb').classList.remove('activet');
      document.getElementById('fLsc').classList.remove('activet');
      document.getElementById('fLsd').classList.remove('activet');
      document.getElementById('fLse').classList.remove('activet');
      document.getElementById('fLsf').classList.remove('activet');
      document.getElementById('fLsg').classList.remove('activet');
      document.getElementById('fLsh').classList.add('activet');
      document.getElementById("fAtLang").innerHTML = "Wählen Sie zuerst eine Sprache aus";
      document.getElementById("fBtLang").innerHTML = "NWählen Sie nun den Schwierigkeitsgrad";
      document.getElementById("fDsa").innerHTML = "Normaler";
      document.getElementById("fDsb").innerHTML = "Schwerer";
      document.getElementById("fDsc").innerHTML = "Höllen";
      document.getElementById("tabAfirst").innerHTML = "Sprachen";
      document.getElementById("tabBfirst").innerHTML = "Spiel";
      document.getElementById("tabCfirst").innerHTML = "Schlange";
      document.getElementById("tabDfirst").innerHTML = "Musik";
      document.getElementById("tabEfirst").innerHTML = "Gehen";
      document.getElementById("fCtLang").innerHTML = "Jetzt die Schlange einrichten";
      document.getElementById("fDtLang").innerHTML = "Wählen Sie nun die gewünschte Musik aus";
      document.getElementById("fEtLang").innerHTML = "Wählen Sie nun das gewünschte Schlangenlaufgeräusch aus";
      document.getElementById("nc100l").innerHTML = "(Sprachübersetzungen sind möglicherweise nicht 100 % genau)";
    }else
    if(document.getElementById("fLsh").className === "first-language select activet") {
      return false;
    }
  }
  document.getElementById('tabBfirst').removeAttribute("disabled");
};
function selectDeffInFirstNorm() {
  if(document.getElementById("fDsa").className === "first-difficulty select") {
    if(document.getElementById("fDsa").className === "first-difficulty select") {
      document.getElementById('normalDif').click();
      document.getElementById('fDsa').classList.add('activet');
      document.getElementById('fDsb').classList.remove('activet');
      document.getElementById('fDsc').classList.remove('activet');
    }else
    if(document.getElementById("fDsa").className === "first-difficulty select activet") {
      return false;
    }
  }
  document.getElementById('tabCfirst').removeAttribute("disabled");
};
function selectDeffInFirstHard() {
  if(document.getElementById("fDsb").className === "first-difficulty select") {
    if(document.getElementById("fDsb").className === "first-difficulty select") {
      document.getElementById('hardDif').click();
      document.getElementById('fDsa').classList.remove('activet');
      document.getElementById('fDsb').classList.add('activet');
      document.getElementById('fDsc').classList.remove('activet');
    }else
    if(document.getElementById("fDsb").className === "first-difficulty select activet") {
      return false;
    }
  }
  document.getElementById('tabCfirst').removeAttribute("disabled");
};
function selectDeffInFirstHell() {
  if(document.getElementById("fDsc").className === "first-difficulty select") {
    if(document.getElementById("fDsc").className === "first-difficulty select") {
      document.getElementById('hellDif').click();
      document.getElementById('fDsa').classList.remove('activet');
      document.getElementById('fDsb').classList.remove('activet');
      document.getElementById('fDsc').classList.add('activet');
    }else
    if(document.getElementById("fDsc").className === "first-difficulty select activet") {
      return false;
    }
  }
  document.getElementById('tabCfirst').removeAttribute("disabled");
};
function sLetterSis0() {
  document.getElementById('key0').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSis1() {
  document.getElementById('key1').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSis2() {
  document.getElementById('key2').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSis3() {
  document.getElementById('key3').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSis4() {
  document.getElementById('key4').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSis5() {
  document.getElementById('key5').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSis6() {
  document.getElementById('key6').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSis7() {
  document.getElementById('key7').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSis8() {
  document.getElementById('key8').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSis9() {
  document.getElementById('key9').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisa() {
  document.getElementById('keya').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisb() {
  document.getElementById('keyb').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisc() {
  document.getElementById('keyc').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisd() {
  document.getElementById('keyd').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSise() {
  document.getElementById('keye').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisf() {
  document.getElementById('keyf').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisg() {
  document.getElementById('keyg').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSish() {
  document.getElementById('keyh').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisi() {
  document.getElementById('keyi').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisj() {
  document.getElementById('keyj').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisk() {
  document.getElementById('keyk').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisl() {
  document.getElementById('keyl').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSism() {
  document.getElementById('keym').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisn() {
  document.getElementById('keyn').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSiso() {
  document.getElementById('keyo').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisp() {
  document.getElementById('keyp').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisq() {
  document.getElementById('keyq').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisr() {
  document.getElementById('keyr').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSiss() {
  document.getElementById('keys').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSist() {
  document.getElementById('keyt').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisu() {
  document.getElementById('keyu').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisv() {
  document.getElementById('keyv').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisw() {
  document.getElementById('keyw').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisx() {
  document.getElementById('keyx').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisy() {
  document.getElementById('keyy').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisz() {
  document.getElementById('keyz').click();
  document.getElementById('tabDfirst').removeAttribute("disabled");
};
function sLetterSisShift() {
  document.getElementById('keyShift').click();
};
function sLetterSisEmpty() {
  document.getElementById('keyClear').click();
};
function selectMusicInFirsta() {
  if(document.getElementById("fMsa").className === "first-music select") {
    if(document.getElementById("fMsa").className === "first-music select") {
      document.getElementById('msAlang').click();
      document.getElementById('fMsa').classList.add('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
      musicBackground();
      loadMusicPlay();
      musicAbgSound
    }else
    if(document.getElementById("fMsa").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstb() {
  if(document.getElementById("fMsb").className === "first-music select") {
    if(document.getElementById("fMsb").className === "first-music select") {
      document.getElementById('msBlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.add('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsb").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstc() {
  if(document.getElementById("fMsc").className === "first-music select") {
    if(document.getElementById("fMsc").className === "first-music select") {
      document.getElementById('msClang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.add('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsc").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstd() {
  if(document.getElementById("fMsd").className === "first-music select") {
    if(document.getElementById("fMsd").className === "first-music select") {
      document.getElementById('msDlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.add('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsd").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirste() {
  if(document.getElementById("fMse").className === "first-music select") {
    if(document.getElementById("fMse").className === "first-music select") {
      document.getElementById('msElang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.add('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMse").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstf() {
  if(document.getElementById("fMsf").className === "first-music select") {
    if(document.getElementById("fMsf").className === "first-music select") {
      document.getElementById('msFlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.add('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsf").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstg() {
  if(document.getElementById("fMsg").className === "first-music select") {
    if(document.getElementById("fMsg").className === "first-music select") {
      document.getElementById('msGlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.add('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsg").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirsth() {
  if(document.getElementById("fMsh").className === "first-music select") {
    if(document.getElementById("fMsh").className === "first-music select") {
      document.getElementById('msHlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.add('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsh").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirsti() {
  if(document.getElementById("fMsi").className === "first-music select") {
    if(document.getElementById("fMsi").className === "first-music select") {
      document.getElementById('msIlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.add('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsi").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstj() {
  if(document.getElementById("fMsj").className === "first-music select") {
    if(document.getElementById("fMsj").className === "first-music select") {
      document.getElementById('msJlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.add('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsj").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstk() {
  if(document.getElementById("fMsk").className === "first-music select") {
    if(document.getElementById("fMsk").className === "first-music select") {
      document.getElementById('msKlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.add('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsk").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstl() {
  if(document.getElementById("fMsl").className === "first-music select") {
    if(document.getElementById("fMsl").className === "first-music select") {
      document.getElementById('msLlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.add('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsl").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstm() {
  if(document.getElementById("fMsm").className === "first-music select") {
    if(document.getElementById("fMsm").className === "first-music select") {
      document.getElementById('msMlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.add('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsm").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstn() {
  if(document.getElementById("fMsn").className === "first-music select") {
    if(document.getElementById("fMsn").className === "first-music select") {
      document.getElementById('msNlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.add('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsn").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirsto() {
  if(document.getElementById("fMso").className === "first-music select") {
    if(document.getElementById("fMso").className === "first-music select") {
      document.getElementById('msOlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.add('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMso").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstp() {
  if(document.getElementById("fMsp").className === "first-music select") {
    if(document.getElementById("fMsp").className === "first-music select") {
      document.getElementById('msPlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.add('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsp").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstq() {
  if(document.getElementById("fMsq").className === "first-music select") {
    if(document.getElementById("fMsq").className === "first-music select") {
      document.getElementById('msQlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.add('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsq").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstr() {
  if(document.getElementById("fMsr").className === "first-music select") {
    if(document.getElementById("fMsr").className === "first-music select") {
      document.getElementById('msRlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.add('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsr").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirsts() {
  if(document.getElementById("fMss").className === "first-music select") {
    if(document.getElementById("fMss").className === "first-music select") {
      document.getElementById('msSlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.add('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMss").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstt() {
  if(document.getElementById("fMst").className === "first-music select") {
    if(document.getElementById("fMst").className === "first-music select") {
      document.getElementById('msTlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.add('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMst").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstu() {
  if(document.getElementById("fMsu").className === "first-music select") {
    if(document.getElementById("fMsu").className === "first-music select") {
      document.getElementById('msUlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.add('activet');
      document.getElementById('fMsv').classList.remove('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsu").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function selectMusicInFirstv() {
  if(document.getElementById("fMsv").className === "first-music select") {
    if(document.getElementById("fMsv").className === "first-music select") {
      document.getElementById('msVlang').click();
      document.getElementById('fMsa').classList.remove('activet');
      document.getElementById('fMsb').classList.remove('activet');
      document.getElementById('fMsc').classList.remove('activet');
      document.getElementById('fMsd').classList.remove('activet');
      document.getElementById('fMse').classList.remove('activet');
      document.getElementById('fMsf').classList.remove('activet');
      document.getElementById('fMsg').classList.remove('activet');
      document.getElementById('fMsh').classList.remove('activet');
      document.getElementById('fMsi').classList.remove('activet');
      document.getElementById('fMsj').classList.remove('activet');
      document.getElementById('fMsk').classList.remove('activet');
      document.getElementById('fMsl').classList.remove('activet');
      document.getElementById('fMsm').classList.remove('activet');
      document.getElementById('fMsn').classList.remove('activet');
      document.getElementById('fMso').classList.remove('activet');
      document.getElementById('fMsp').classList.remove('activet');
      document.getElementById('fMsq').classList.remove('activet');
      document.getElementById('fMsr').classList.remove('activet');
      document.getElementById('fMss').classList.remove('activet');
      document.getElementById('fMst').classList.remove('activet');
      document.getElementById('fMsu').classList.remove('activet');
      document.getElementById('fMsv').classList.add('activet');
      musicBackground();
      loadMusicPlay();
    }else
    if(document.getElementById("fMsv").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById('tabEfirst').removeAttribute("disabled");
};
function pauseFirstMusic() {
  document.getElementById("musicAbgSound").pause();
  document.getElementById("musicBbgSound").pause();
  document.getElementById("musicCbgSound").pause();
  document.getElementById("musicDbgSound").pause();
  document.getElementById("musicEbgSound").pause();
  document.getElementById("musicFbgSound").pause();
  document.getElementById("musicGbgSound").pause();
  document.getElementById("musicHbgSound").pause();
  document.getElementById("musicIbgSound").pause();
  document.getElementById("musicJbgSound").pause();
  document.getElementById("musicKbgSound").pause();
  document.getElementById("musicLbgSound").pause();
  document.getElementById("musicMbgSound").pause();
  document.getElementById("musicNbgSound").pause();
  document.getElementById("musicObgSound").pause();
  document.getElementById("musicPbgSound").pause();
  document.getElementById("musicQbgSound").pause();
  document.getElementById("musicRbgSound").pause();
  document.getElementById("musicSbgSound").pause();
  document.getElementById("musicTbgSound").pause();
  document.getElementById("musicUbgSound").pause();
  document.getElementById("musicVbgSound").pause();
};
function mwAIlangFunction() {
  if(document.getElementById("fWsai").className === "first-music select") {
    if(document.getElementById("fWsai").className === "first-music select") {
      document.getElementById('mwAIlang').click();
      document.getElementById('fWsai').classList.add('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsai").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwAlangFunction() {
  if(document.getElementById("fWsa").className === "first-music select") {
    if(document.getElementById("fWsa").className === "first-music select") {
      document.getElementById('mwAlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.add('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsa").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwBlangFunction() {
  if(document.getElementById("fWsb").className === "first-music select") {
    if(document.getElementById("fWsb").className === "first-music select") {
      document.getElementById('mwBlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.add('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsb").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwClangFunction() {
  if(document.getElementById("fWsc").className === "first-music select") {
    if(document.getElementById("fWsc").className === "first-music select") {
      document.getElementById('mwClang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.add('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsc").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwDlangFunction() {
  if(document.getElementById("fWsd").className === "first-music select") {
    if(document.getElementById("fWsd").className === "first-music select") {
      document.getElementById('mwDlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.add('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsd").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwElangFunction() {
  if(document.getElementById("fWse").className === "first-music select") {
    if(document.getElementById("fWse").className === "first-music select") {
      document.getElementById('mwElang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.add('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWse").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwFlangFunction() {
  if(document.getElementById("fWsf").className === "first-music select") {
    if(document.getElementById("fWsf").className === "first-music select") {
      document.getElementById('mwFlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.add('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsf").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwYlangFunction() {
  if(document.getElementById("fWsy").className === "first-music select") {
    if(document.getElementById("fWsy").className === "first-music select") {
      document.getElementById('mwYlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.add('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsy").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwGlangFunction() {
  if(document.getElementById("fWsg").className === "first-music select") {
    if(document.getElementById("fWsg").className === "first-music select") {
      document.getElementById('mwGlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.add('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsg").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwZlangFunction() {
  if(document.getElementById("fWsz").className === "first-music select") {
    if(document.getElementById("fWsz").className === "first-music select") {
      document.getElementById('mwZlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.add('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsz").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwHlangFunction() {
  if(document.getElementById("fWsh").className === "first-music select") {
    if(document.getElementById("fWsh").className === "first-music select") {
      document.getElementById('mwHlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.add('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsh").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwIlangFunction() {
  if(document.getElementById("fWsi").className === "first-music select") {
    if(document.getElementById("fWsi").className === "first-music select") {
      document.getElementById('mwIlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.add('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsi").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwJlangFunction() {
  if(document.getElementById("fWsj").className === "first-music select") {
    if(document.getElementById("fWsj").className === "first-music select") {
      document.getElementById('mwJlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.add('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsj").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwKlangFunction() {
  if(document.getElementById("fWsk").className === "first-music select") {
    if(document.getElementById("fWsk").className === "first-music select") {
      document.getElementById('mwKlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.add('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsk").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwAAlangFunction() {
  if(document.getElementById("fWsaa").className === "first-music select") {
    if(document.getElementById("fWsaa").className === "first-music select") {
      document.getElementById('mwAAlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.add('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsaa").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwABlangFunction() {
  if(document.getElementById("fWsab").className === "first-music select") {
    if(document.getElementById("fWsab").className === "first-music select") {
      document.getElementById('mwABlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.add('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsab").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwLlangFunction() {
  if(document.getElementById("fWsl").className === "first-music select") {
    if(document.getElementById("fWsl").className === "first-music select") {
      document.getElementById('mwLlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.add('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsl").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwMlangFunction() {
  if(document.getElementById("fWsm").className === "first-music select") {
    if(document.getElementById("fWsm").className === "first-music select") {
      document.getElementById('mwMlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.add('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsm").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwNlangFunction() {
  if(document.getElementById("fWsn").className === "first-music select") {
    if(document.getElementById("fWsn").className === "first-music select") {
      document.getElementById('mwNlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.add('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsn").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwAClangFunction() {
  if(document.getElementById("fWsac").className === "first-music select") {
    if(document.getElementById("fWsac").className === "first-music select") {
      document.getElementById('mwAClang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.add('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsac").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwOlangFunction() {
  if(document.getElementById("fWso").className === "first-music select") {
    if(document.getElementById("fWso").className === "first-music select") {
      document.getElementById('mwOlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.add('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWso").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwADlangFunction() {
  if(document.getElementById("fWsad").className === "first-music select") {
    if(document.getElementById("fWsad").className === "first-music select") {
      document.getElementById('mwADlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.add('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsad").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwAElangFunction() {
  if(document.getElementById("fWsae").className === "first-music select") {
    if(document.getElementById("fWsae").className === "first-music select") {
      document.getElementById('mwAElang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.add('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsae").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwPlangFunction() {
  if(document.getElementById("fWsp").className === "first-music select") {
    if(document.getElementById("fWsp").className === "first-music select") {
      document.getElementById('mwPlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.add('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsp").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwQlangFunction() {
  if(document.getElementById("fWsq").className === "first-music select") {
    if(document.getElementById("fWsq").className === "first-music select") {
      document.getElementById('mwQlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.add('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsq").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwRlangFunction() {
  if(document.getElementById("fWsr").className === "first-music select") {
    if(document.getElementById("fWsr").className === "first-music select") {
      document.getElementById('mwRlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.add('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsr").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwSlangFunction() {
  if(document.getElementById("fWss").className === "first-music select") {
    if(document.getElementById("fWss").className === "first-music select") {
      document.getElementById('mwSlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.add('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWss").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwTlangFunction() {
  if(document.getElementById("fWst").className === "first-music select") {
    if(document.getElementById("fWst").className === "first-music select") {
      document.getElementById('mwTlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.add('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWst").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwAFlangFunction() {
  if(document.getElementById("fWsaf").className === "first-music select") {
    if(document.getElementById("fWsaf").className === "first-music select") {
      document.getElementById('mwAFlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.add('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsaf").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwAJlangFunction() {
  if(document.getElementById("fWsaj").className === "first-music select") {
    if(document.getElementById("fWsaj").className === "first-music select") {
      document.getElementById('mwAJlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.add('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsaj").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwAGlangFunction() {
  if(document.getElementById("fWsag").className === "first-music select") {
    if(document.getElementById("fWsag").className === "first-music select") {
      document.getElementById('mwAGlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.add('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsag").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwUlangFunction() {
  if(document.getElementById("fWsu").className === "first-music select") {
    if(document.getElementById("fWsu").className === "first-music select") {
      document.getElementById('mwUlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.add('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsu").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwVlangFunction() {
  if(document.getElementById("fWsv").className === "first-music select") {
    if(document.getElementById("fWsv").className === "first-music select") {
      document.getElementById('mwVlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.add('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsv").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwAKlangFunction() {
  if(document.getElementById("fWsak").className === "first-music select") {
    if(document.getElementById("fWsak").className === "first-music select") {
      document.getElementById('mwAKlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.add('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsak").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwWlangFunction() {
  if(document.getElementById("fWsw").className === "first-music select") {
    if(document.getElementById("fWsw").className === "first-music select") {
      document.getElementById('mwWlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.add('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsw").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwAHlangFunction() {
  if(document.getElementById("fWsah").className === "first-music select") {
    if(document.getElementById("fWsah").className === "first-music select") {
      document.getElementById('mwAHlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.add('activet');
      document.getElementById('fWsx').classList.remove('activet');
    }else
    if(document.getElementById("fWsah").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function mwXlangFunction() {
  if(document.getElementById("fWsx").className === "first-music select") {
    if(document.getElementById("fWsx").className === "first-music select") {
      document.getElementById('mwXlang').click();
      document.getElementById('fWsai').classList.remove('activet');
      document.getElementById('fWsa').classList.remove('activet');
      document.getElementById('fWsb').classList.remove('activet');
      document.getElementById('fWsc').classList.remove('activet');
      document.getElementById('fWsd').classList.remove('activet');
      document.getElementById('fWse').classList.remove('activet');
      document.getElementById('fWsf').classList.remove('activet');
      document.getElementById('fWsy').classList.remove('activet');
      document.getElementById('fWsg').classList.remove('activet');
      document.getElementById('fWsz').classList.remove('activet');
      document.getElementById('fWsh').classList.remove('activet');
      document.getElementById('fWsi').classList.remove('activet');
      document.getElementById('fWsj').classList.remove('activet');
      document.getElementById('fWsk').classList.remove('activet');
      document.getElementById('fWsaa').classList.remove('activet');
      document.getElementById('fWsab').classList.remove('activet');
      document.getElementById('fWsl').classList.remove('activet');
      document.getElementById('fWsm').classList.remove('activet');
      document.getElementById('fWsn').classList.remove('activet');
      document.getElementById('fWsac').classList.remove('activet');
      document.getElementById('fWso').classList.remove('activet');
      document.getElementById('fWsad').classList.remove('activet');
      document.getElementById('fWsae').classList.remove('activet');
      document.getElementById('fWsp').classList.remove('activet');
      document.getElementById('fWsq').classList.remove('activet');
      document.getElementById('fWsr').classList.remove('activet');
      document.getElementById('fWss').classList.remove('activet');
      document.getElementById('fWst').classList.remove('activet');
      document.getElementById('fWsaf').classList.remove('activet');
      document.getElementById('fWsaj').classList.remove('activet');
      document.getElementById('fWsag').classList.remove('activet');
      document.getElementById('fWsu').classList.remove('activet');
      document.getElementById('fWsv').classList.remove('activet');
      document.getElementById('fWsak').classList.remove('activet');
      document.getElementById('fWsw').classList.remove('activet');
      document.getElementById('fWsah').classList.remove('activet');
      document.getElementById('fWsx').classList.add('activet');
    }else
    if(document.getElementById("fWsx").className === "first-music select activet") {
      return false;
    }
  }
  document.getElementById("applyFirstSettings").removeAttribute("disabled");
};
function openFtab(evt, tabTname) {
  var i, tabFcontent, tabFlinks;
  tabFcontent = document.getElementsByClassName("first-content");
  for (i = 0; i < tabFcontent.length; i++) {
    tabFcontent[i].style.display = "none";
  }
  tabFlinks = document.getElementsByClassName("tablinks-first");
  for (i = 0; i < tabFlinks.length; i++) {
    tabFlinks[i].className = tabFlinks[i].className.replace(" active", "");
  }
  document.getElementById(tabTname).style.display = "block";
  evt.currentTarget.className += " active";
};