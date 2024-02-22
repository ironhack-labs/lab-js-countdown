const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let showTime = document.querySelector("#time");
let startBtn = document.querySelector("#start-btn");
let toastCard = document.querySelector("#toast");
let interval;
startBtn.addEventListener("click", () => startCountdown());

// ITERATION 2: Start Countdown
function startCountdown() {
	console.log("startCountdown called!");
	console.log(showTime);

	interval = setInterval(() => {
		remainingTime--;
		showTime.innerText = remainingTime;
		if (remainingTime <= 0) {
			clearInterval(interval);
			showToast();
		}
	}, 1000);

	// Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
	console.log("showToast called!");
	toastCard.classList.add("show");
	setTimeout(() => {
		toastCard.classList.remove("show");
	}, 3000);

	// Your code goes here ...

	// BONUS: ITERATION 4: TOAST CLOSE BUTTON

	// Your code goes here ...
}
