const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-btn");
    const timeDisplay = document.getElementById("time");
    const toastCard = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    const closeToast = document.getElementById("close-toast");
    
    function startCountdown() {
        console.log("startCountdown called!");
        remainingTime = DURATION;
        timeDisplay.textContent = remainingTime;
        startButton.disabled = true;

        timer = setInterval(() => {
            remainingTime--;
            timeDisplay.textContent = remainingTime;

            if (remainingTime === 10) {
                showToast("⏰ Final countdown! ⏰");
            }
            if (remainingTime === 5) {
                showToast("Start the engines! 💥");
            }
            if (remainingTime === 0) {
                clearInterval(timer);
                showToast("Lift off! 🚀");
                startButton.disabled = false;
            }
        }, 1000);
    }

    function showToast(message) {
        console.log("showToast called!");
        toastMessage.textContent = message;
        toastCard.classList.add("show");
        
        let toastTimeout = setTimeout(() => {
            toastCard.classList.remove("show");
        }, 3000);
    }

    closeToast.addEventListener("click", () => {
        clearTimeout(toastTimeout);
        toastCard.classList.remove("show");
    });

    startButton.addEventListener("click", startCountdown);
});

