let countdown;

function timer(seconds) {
  // clear any existing timers
  if (countdown) {
    clearInterval(countdown);
  }
  
  const now = Date.now();
  const then = now + seconds * 1000;
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    
    // check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  console.log({minutes, remainderSeconds, display});
  document.title = display;
}

timer(120); // start a 2 minutes countdown
