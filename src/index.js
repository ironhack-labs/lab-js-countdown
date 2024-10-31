const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeout = null; // Variable to store the timeout (toast)
let timeout2 = null; // Variable to store the timeout (toast)

const timeDisplay = document.querySelector('#time');

// ITERATION 1: Add event listener to the start button
// Your code goes here ...
const startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', () => {
	timeDisplay.textContent = remainingTime;
	toastCard.classList.remove('show');
	startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
	// Your code goes here ...
	startButton.disabled = true;
	timeDisplay.textContent = remainingTime;
	handleTimer();
	timer = setInterval(handleTimer, 1000);

	function handleTimer() {
		timeDisplay.textContent = remainingTime;

		switch (remainingTime--) {
			case 10:
				clearTimeout(timeout);
				showToast('⏰ Final countdown!');
				break;
			case 5:
				showToast('Start the engines! 💥');
				break;
			case 0:
				showToast('Lift off! 🚀');

				remainingTime = DURATION;
				startButton.disabled = false;

				clearInterval(timer);
				break;
		}
	}
}

// ITERATION 3: Show Toast
const toastCard = document.querySelector('#toast');
const toastMessageDisplay = document.querySelector('#toast-message');
const closeToastButton = document.querySelector('#close-toast');

closeToastButton.addEventListener('click', () => {
	toastCard.classList.remove('show');
	clearTimeout(timeout);
});

function showToast(message) {
	// Your code goes here ...
	toastMessageDisplay.textContent = message;
	toastCard.classList.add('show');

	// BONUS: ITERATION 4: TOAST CLOSE BUTTON
	// Your code goes here ...
	clearTimeout(timeout);

	timeout = setTimeout(() => {
		toastCard.classList.remove('show');
	}, 3000);
}
