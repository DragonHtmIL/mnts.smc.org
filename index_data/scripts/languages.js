function englishLanguage() {
  document.getElementById("languageEn").classList.add("active");
  document.getElementById("languageRu").classList.remove("active");
  document.getElementById("languageJa").classList.remove("active");
  document.getElementById("languageChs").classList.remove("active");
  document.getElementById("languageCht").classList.remove("active");
  document.getElementById("languageKo").classList.remove("active");
  document.getElementById("languageHe").classList.remove("active");
  document.getElementById("languageDe").classList.remove("active");
  selectionSound();
};
function russianLanguage() {
  document.getElementById("languageEn").classList.remove("active");
  document.getElementById("languageRu").classList.add("active");
  document.getElementById("languageJa").classList.remove("active");
  document.getElementById("languageChs").classList.remove("active");
  document.getElementById("languageCht").classList.remove("active");
  document.getElementById("languageKo").classList.remove("active");
  document.getElementById("languageHe").classList.remove("active");
  document.getElementById("languageDe").classList.remove("active");
  selectionSound();
};
function japaneseLanguage() {
  document.getElementById("languageEn").classList.remove("active");
  document.getElementById("languageRu").classList.remove("active");
  document.getElementById("languageJa").classList.add("active");
  document.getElementById("languageChs").classList.remove("active");
  document.getElementById("languageCht").classList.remove("active");
  document.getElementById("languageKo").classList.remove("active");
  document.getElementById("languageHe").classList.remove("active");
  document.getElementById("languageDe").classList.remove("active");
  selectionSound();
};
function ChineseSimplifiedLanguage() {
  document.getElementById("languageEn").classList.remove("active");
  document.getElementById("languageRu").classList.remove("active");
  document.getElementById("languageJa").classList.remove("active");
  document.getElementById("languageChs").classList.add("active");
  document.getElementById("languageCht").classList.remove("active");
  document.getElementById("languageKo").classList.remove("active");
  document.getElementById("languageHe").classList.remove("active");
  selectionSound();
};
function ChineseTraditionalLanguage() {
  document.getElementById("languageEn").classList.remove("active");
  document.getElementById("languageRu").classList.remove("active");
  document.getElementById("languageJa").classList.remove("active");
  document.getElementById("languageChs").classList.remove("active");
  document.getElementById("languageCht").classList.add("active");
  document.getElementById("languageKo").classList.remove("active");
  document.getElementById("languageHe").classList.remove("active");
  document.getElementById("languageDe").classList.remove("active");
  selectionSound();
};
function koreanLanguage() {
  document.getElementById("languageEn").classList.remove("active");
  document.getElementById("languageRu").classList.remove("active");
  document.getElementById("languageJa").classList.remove("active");
  document.getElementById("languageChs").classList.remove("active");
  document.getElementById("languageCht").classList.remove("active");
  document.getElementById("languageKo").classList.add("active");
  document.getElementById("languageHe").classList.remove("active");
  document.getElementById("languageDe").classList.remove("active");
  selectionSound();
};
function hebrewLanguage() {
  document.getElementById("languageEn").classList.remove("active");
  document.getElementById("languageRu").classList.remove("active");
  document.getElementById("languageJa").classList.remove("active");
  document.getElementById("languageChs").classList.remove("active");
  document.getElementById("languageCht").classList.remove("active");
  document.getElementById("languageKo").classList.remove("active");
  document.getElementById("languageHe").classList.add("active");
  document.getElementById("languageDe").classList.remove("active");
  selectionSound();
};
function germanLanguage() {
  document.getElementById("languageEn").classList.remove("active");
  document.getElementById("languageRu").classList.remove("active");
  document.getElementById("languageJa").classList.remove("active");
  document.getElementById("languageChs").classList.remove("active");
  document.getElementById("languageCht").classList.remove("active");
  document.getElementById("languageKo").classList.remove("active");
  document.getElementById("languageHe").classList.remove("active");
  document.getElementById("languageDe").classList.add("active");
  selectionSound();
};
function langCheck() {
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("languageEn").classList.add("active");
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("languageRu").classList.add("active");
  }else
  if(localStorage.getItem("lang") === "ja") {
    document.getElementById("languageJa").classList.add("active");
  }else
  if(localStorage.getItem("lang") === "chs") {
    document.getElementById("languageChs").classList.add("active");
  }else
  if(localStorage.getItem("lang") === "cht") {
    document.getElementById("languageCht").classList.add("active");
  }else
  if(localStorage.getItem("lang") === "ko") {
    document.getElementById("languageKo").classList.add("active");
  }else
  if(localStorage.getItem("lang") === "he") {
    document.getElementById("languageHe").classList.add("active");
  }else
  if(localStorage.getItem("lang") === "de") {
    document.getElementById("languageDe").classList.add("active");
  }
}
langCheck();