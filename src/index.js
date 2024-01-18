const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const launchButton = document.querySelector('#start-btn');
launchButton.addEventListener('click', () => {
	startCountdown();
});
// ITERATION 2: Start Countdown
function startCountdown() {
	console.log('startCountdown called!');
	// Your code goes here ...
	const settingInterval = setInterval(() => {
		const visualTimer = document.getElementById('time');
		visualTimer.innerHTML = remainingTime;
		document.getElementById('start-btn').disabled = true;
		if (remainingTime === 10) {
			showToast('⏰ Final countdown! ⏰');
		}
		if (remainingTime === 5) {
			showToast('Start the engines! 💥');
		}
		if (remainingTime === 0) {
			showToast('Lift off! 🚀');
			clearInterval(settingInterval);
		}
		remainingTime--;
	}, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
	const showDiv = document.getElementById('toast');
	showDiv.classList.add('show');
	const showMessage = document.getElementById('toast-message');
  showMessage.innerHTML = message;
	setTimeout(() => {

		showDiv.classList.remove('show');
	}, 3000);

	// BONUS: ITERATION 4: TOAST CLOSE BUTTON
	const closeToast = document.getElementById('close-toast');

	closeToast.addEventListener('click', () => {
		showDiv.classList.remove('show');
	});

	// Your code goes here ...
}
