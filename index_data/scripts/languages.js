function englishLanguage() {
  document.getElementById("languageEn").classList.add("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJp").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function russianLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.add("activet");
  document.getElementById("languageJp").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function japaneseLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJp").classList.add("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function ChineseSimplifiedLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJp").classList.remove("activet");
  document.getElementById("languageChs").classList.add("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function ChineseTraditionalLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJp").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.add("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function koreanLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJp").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.add("activet");
  document.getElementById("languageHe").classList.remove("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function hebrewLanguage() {
  document.getElementById("languageEn").classList.remove("activet");
  document.getElementById("languageRu").classList.remove("activet");
  document.getElementById("languageJp").classList.remove("activet");
  document.getElementById("languageChs").classList.remove("activet");
  document.getElementById("languageCht").classList.remove("activet");
  document.getElementById("languageKo").classList.remove("activet");
  document.getElementById("languageHe").classList.add("activet");
  document.getElementById("applySettings").style.display = "block";
  selectionSound();
};
function langCheck() {
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("languageEn").classList.add("activet");
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("languageRu").classList.add("activet");
  }else
  if(localStorage.getItem("lang") === "jp") {
    document.getElementById("languageJp").classList.add("activet");
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
  }
};
langCheck();