document.addEventListener("DOMContentLoaded", () => {
    const DURATION = 10;
    let remainingTime;
    let timer = null;

    const startBTN = document.getElementById("start-btn");
    const timeDisplay = document.getElementById("time");
    const popup = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    const closeButton = document.getElementById("close-toast");

    closeButton.addEventListener("click", () => popup.classList.remove("show"));
    startBTN.addEventListener("click", () => timer === null && startCountdown());

    function startCountdown() {
        startBTN.disabled = true;
        remainingTime = DURATION;
        timeDisplay.textContent = remainingTime;
        showToast("Countdown started!");

        timer = setInterval(() => {
            remainingTime--;

            if (remainingTime >= 0) {
                timeDisplay.textContent = remainingTime;

                if (remainingTime === 5) {
                    showToast("Start the engines! 💥");
                } else if (remainingTime === 0) {
                    showToast("Lift off! 🚀");
                }

            } else {
                clearInterval(timer);
                timer = null; // reset so countdown can be started again
                startBTN.disabled = false;
            }
        }, 1000);
    }

    // Show toast with message and handle fadeout removal
    function showToast(message) {
        toastMessage.textContent = message;
        popup.classList.add("show");

        // Remove .show after animation completes (~3.4s)
        // To avoid toast staying visible or stacking effects
        popup.addEventListener("animationend", onAnimationEnd);

        function onAnimationEnd(e) {
            // Only remove on fadeout animation (the 2nd one)
            if (e.animationName === "fadeout") {
                popup.classList.remove("show");
                popup.removeEventListener("animationend", onAnimationEnd);
            }
        }
    }

    function hideToast() {
        // Immediately hide toast on close button
        popup.classList.remove("show");
    }
});
