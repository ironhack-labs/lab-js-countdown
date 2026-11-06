const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATIONS 1 (and 4)

let startButton = document.querySelector("#start-btn");
let closeButton = document.querySelector("#close-toast");
let numberOnCountdown = document.querySelector("#time");

startButton.addEventListener("click", function() {
	
	startCountdown();
});

closeButton.addEventListener("click", function() {
	
	toastClass.remove("show");
});

// ITERATION 2: Start Countdown
function startCountdown
() 
{
	console.log("startCountdown called!");
	startButton.disabled = true;

	timer =
		setInterval( function() {
		
			numberOnCountdown.innerHTML = remainingTime;

			remainingTime -= 1;

			if (remainingTime === -1) {
				
				clearInterval(timer);
				showToast();
			}
		}, 1000);

}

// ITERARION 3: Show Toast

let toast = document.querySelector("#toast");
let toastClass = toast.classList;

function showToast
(message) 
{
  console.log("showToast called!");

	toastClass.add("show");

	toastTimer =
		setTimeout( function () {

			toast.classList.remove("show");				
		}, 3000);
}
