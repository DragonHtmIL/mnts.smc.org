function englishLanguage() {
  document.getElementById("languageEn").classList.add("active");
  document.getElementById("languageRu").classList.remove("active");
  document.getElementById("languageHe").classList.remove("active");
  selectionSound();
};
function russianLanguage() {
  document.getElementById("languageEn").classList.remove("active");
  document.getElementById("languageRu").classList.add("active");
  document.getElementById("languageHe").classList.remove("active");
  selectionSound();
};
function hebrewLanguage() {
  document.getElementById("languageEn").classList.remove("active");
  document.getElementById("languageRu").classList.remove("active");
  document.getElementById("languageHe").classList.add("active");
  selectionSound();
};
function langCheck() {
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("languageEn").classList.add("active");
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("languageRu").classList.add("active");
  }else
  if(localStorage.getItem("lang") === "he") {
    document.getElementById("languageHe").classList.add("active");
  }
}
langCheck();