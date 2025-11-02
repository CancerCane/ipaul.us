// Loading Screen Controller
(function() {
  'use strict';

  const loadingScreen = document.getElementById('loading-screen');
  
  if (!loadingScreen) return;

  // Minimum display time in milliseconds (prevents flash on fast loads)
  const MIN_DISPLAY_TIME = 500;
  const startTime = Date.now();

  function hideLoadingScreen() {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);

    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        if (loadingScreen.parentNode) {
          loadingScreen.parentNode.removeChild(loadingScreen);
        }
      }, 500); // Match CSS transition duration
    }, remainingTime);
  }

  // Hide loading screen when page is fully loaded
  if (document.readyState === 'complete') {
    hideLoadingScreen();
  } else {
    window.addEventListener('load', hideLoadingScreen);
  }

  // Failsafe: hide after 5 seconds even if load event doesn't fire
  setTimeout(() => {
    if (loadingScreen && !loadingScreen.classList.contains('fade-out')) {
      hideLoadingScreen();
    }
  }, 5000);
})();
