document.addEventListener("DOMContentLoaded", () => {

  const DURATION = 10; // 10 seconds
  let timer = null; // Variable to store the interval
  const startBtn = document.querySelector("#start-btn");
  startBtn.addEventListener("click", startCountdown);
  const time = document.querySelector("#time");

  // ITERATION 1: Add event listener to the start button
  function startCountdown() {
    timer = DURATION;
    startBtn.disabled = true
    const intervalTimer = setInterval(() => {
      if (timer === 10) {
        let message = '⏰ Final countdown! ⏰'
        showToast(message)
      }
      if (timer === 5) {
        let message = 'Start the engines! 💥'
        showToast(message)
      }
      if (timer > 0) {
        timer--
        time.innerHTML = `${timer}`
      }

      if (timer <= 0) {
        let message = 'Lift off! 🚀'
        showToast(message)
        reset()
      }
    }, 1000)
  }

  function reset() {
    startBtn.disabled = false
    time.innerHTML = `${DURATION}`
  }

  //Toast visibilidad y texto
  const toast_message = document.querySelector("#toast-message");
  const show = document.getElementById("toast");

  // ITERATION 3: Show Toast
  function showToast(message) {
    show.classList.add("show");
    toast_message.innerHTML = `${message}`
    setTimeout(() => {
      show.classList.remove("show");
    }, 2000);
  }

  //Closed toast manual
  const close = document.getElementById("close-toast");
  const closeButton = document.querySelector("#close-toast");
  closeButton.addEventListener("click", () => {
    close.classList.remove("show");
    clearTimeout(show.classList.remove("show"), 3000);
  });

});