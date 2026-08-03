if(navigator.serviceWorker) {
  if(window.location.protocol === 'https:') {
    navigator.serviceWorker.register('/mnts.smc.org/sw.js',{scope: '/mnts.smc.org/'}).then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
      return false
    });
    document.getElementById("manifestTestLoad").setAttribute('href','/mnts.smc.org/manifest.webmanifest');
  }else
  if (window.location.protocol === 'file:') {
    console.log('Service workers cannot be registered on file protocol.');
  } else {
    console.log('Service workers are not being registered on non-HTTPS or non-file protocols.');
  }
}