document.addEventListener("DOMContentLoaded", () => {
  // Select the start button
  const startButton = document.getElementById("start-btn");

  // Add click event listener to start button
  startButton.addEventListener("click", startCountdown);

  // Define the startCountdown function
  function startCountdown() {
    const timeElement = document.getElementById("time");
    const toastElement = document.getElementById("toast");
    const closeToastButton = document.getElementById("close-toast");

    let timeRemaining = parseInt(timeElement.textContent, 10);

    // Countdown logic
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        timeElement.textContent = timeRemaining;
      } else {
        clearInterval(interval);
        toastElement.classList.add("show"); // Display toast message
      }
    }, 1000);

    // Add click event to close the toast
    closeToastButton.addEventListener("click", () => {
      toastElement.classList.remove("show"); // Hide the toast
    });
  }
});
