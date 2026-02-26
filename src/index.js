const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
// Variable to store the interval
let timerID = null;
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn");
const divTime = document.querySelector("div#time");

startBtn.addEventListener("click", () => {
	if (timerID !== null) return;
	startCountdown();
	//desactivamos el boton
	startBtn.disabled = true;
});

// ITERATION 2: Start Countdown
function startCountdown() {
	console.log("startCountdown called!");

	let timer = setInterval(() => {
		divTime.innerText = `${remainingTime}`;

		if (remainingTime === 10) {
			showToast("⏰ Final countdown! ⏰");
		} else if (remainingTime === 5) {
			showToast("Start the engines! 💥");
		} else if (remainingTime === 0) {
			showToast("Lift off! 🚀");
		}

		//le restamos 1 a la variable y luego la mostramos en pantalla
		remainingTime--;

		if (remainingTime < 0) {
			clearInterval(timer);

			//Se reactiva el boton
			startBtn.disabled = false;

			//Reiniciar contador
			remainingTime = DURATION;
			divTime.innerText = `${remainingTime}`;
		}
	}, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
	console.log(message);

	const newCard = document.querySelector("div#toast");
	const toastMessage = document.querySelector("#toast-message");

	toastMessage.innerText = message;

	newCard.classList.add("show");

	setTimeout(() => {
		newCard.classList.remove("show");
	}, 3000);

	// BONUS: ITERATION 4: TOAST CLOSE BUTTON

	// Your code goes here ...
}
