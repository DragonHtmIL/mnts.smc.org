function englishLanguage() {
  document.getElementById("languageEn").classList.add("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJa").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("languageDe").classList.remove("activet");
  selectionSound();
};
function russianLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.add("activet");
  document.getElementById("languageJa").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("languageDe").classList.remove("activet");
  selectionSound();
};
function japaneseLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJa").classList.add("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("languageDe").classList.remove("activet");
  selectionSound();
};
function ChineseSimplifiedLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJa").classList.remove("activet");
  document.getElementById("languageChs").classList.add("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  selectionSound();
};
function ChineseTraditionalLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJa").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.add("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("languageDe").classList.remove("activet");
  selectionSound();
};
function koreanLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJa").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.add("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("languageDe").classList.remove("activet");
  selectionSound();
};
function hebrewLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJa").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.add("activet");
  document.getElementById("languageDe").classList.remove("activet");
  selectionSound();
};
function germanLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJa").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("languageDe").classList.add("activet");
  selectionSound();
};
function langCheck() {
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("languageEn").classList.add("activet");
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("languageRu").classList.add("activet");
  }else
  if(localStorage.getItem("lang") === "ja") {
    document.getElementById("languageJa").classList.add("activet");
  }else
  if(localStorage.getItem("lang") === "chs") {
    document.getElementById("languageChs").classList.add("activet");
  }else
  if(localStorage.getItem("lang") === "cht") {
    document.getElementById("languageCht").classList.add("activet");
  }else
  if(localStorage.getItem("lang") === "ko") {
    document.getElementById("languageKo").classList.add("activet");
  }else
  if(localStorage.getItem("lang") === "he") {
    document.getElementById("languageHe").classList.add("activet");
  }else
  if(localStorage.getItem("lang") === "de") {
    document.getElementById("languageDe").classList.add("activet");
  }
}
langCheck();