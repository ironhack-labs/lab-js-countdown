
function startCountdown() {
  console.log('startCountdown called!');
  // setInterval

  startBtn.disabled = true;

  let timer = setInterval(() => {
    remainingTime -= 1;
    time.textContent = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);

  // Your code goes here ...
}