document.addEventListener("keydown", function (event) {
  const target = event.target;
  if (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  ) {
    if (event.key !== "Escape") return;
  }
  const menu = document.getElementById("menu");
  const alertBox = document.getElementById("alert");
  const loading = document.getElementById("loading");
  const accenter = document.getElementById("accenter");
  const isMenuOpen = menu?.style.display === "block";
  const isAlertOpen = alertBox?.style.display === "block";
  const isLoading = loading?.style.display === "flex";
  const isAccenterOpen = accenter?.style.display === "block";
  if (event.key === "Escape") {
    if (isMenuOpen) {
      document.getElementById("menuCloseBtn")?.click();
    } else if (!isAlertOpen && !isLoading) {
      document.getElementById("navBtn")?.click();
    }
    return;
  }
  if (event.key === " ") {
    document.getElementById("chechboxPausing")?.click();
    return;
  }
  if (event.key.toLowerCase() === "w") {
    document.getElementById("btn001")?.click();
    return;
  }
  if (event.key.toLowerCase() === "s") {
    document.getElementById("btn004")?.click();
    return;
  }
  if (event.key.toLowerCase() === "a") {
    document.getElementById("btn003")?.click();
    return;
  }
  if (event.key.toLowerCase() === "d") {
    document.getElementById("btn005")?.click();
    return;
  }
  if (event.key.toLowerCase() === "e") {
    if (isAccenterOpen) {
      document.getElementById("closeacc")?.click();
      return;
    }
    if (!isMenuOpen && !isAlertOpen && !isLoading) {
      document.getElementById("profileOpener")?.click();
    }
    return;
  }
  if (event.key === "Enter") {
    if (isAlertOpen) {
      document.getElementById("alertRight")?.click();
    } else if (document.getElementById("loseModal")?.style.display === "block") {
      document.getElementById("reset")?.click();
    }
    return;
  }
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && ["I", "C"].includes(event.key)) ||
    (event.metaKey && event.altKey && event.key === "I") ||
    (event.metaKey && event.shiftKey && event.key === "C")
  ) {
    const f12Tool = document.getElementById("f12Tool");
    const adminTools = document.getElementById("administratorTools");
    const allowDevTools = f12Tool?.checked && adminTools?.checked;
    if (!allowDevTools) {
      event.preventDefault();
    }
  }
});