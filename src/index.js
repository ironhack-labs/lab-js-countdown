const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.getElementById("start-btn").addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
/*
We have set up the listener on the start button to trigger `startCountdown()`. The next step is to implement the function logic.
The `startCountdown()` function should start a countdown timer that runs for 10 seconds. Every second, the shown remaining time should be decreased by 1. Once the the remaining time reaches 0, the countdown timer should stop.
Here are the steps you should follow to implement the function logic:
- Start the countdown timer using `setInterval()` that runs in intervals of 1 second (1000 milliseconds).
- On each interval tick, the remaining time (seconds) should be decreased by 1.
- On each interval tick, the `div#time` element should be updated to display the remaining time.
- When the remaining time reaches 0, the countdown timer should be stopped.
- When the remaining time reaches 0, the `showToast()` function should be called to display a toast message to the user (you'll implement this function in the next iteration).
The start button (`#start-btn`) should be disabled during the countdown using the `disabled` property, so that the user can't click it. See [example](https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp).
*/

function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  let timeLeft = 10
  const countdownElement = document.getElementById("time");
  
  const intervalID = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    if (timeLeft > -1) {
      countdownElement.innerHTML = timeLeft;
      timeLeft--;
    } else {
      showToast();
    clearInterval(intervalID);
    }
    }
  }




// ITERATION 3: Show Toast

/*
As the last step in the previous iteration, when the countdown timer reaches 0, we call a function called `showToast()`, 
however the function logic is not implemented yet. 
In this iteration, we'll implement the `showToast()` function so that it displays a toast message on the screen.
The `index.html` file already contains the HTML for the _toast card_ (`div#toast-card`) element:

```html
<!-- Toast Card - hidden by default using CSS -->
<div id="toast" class="toast">
  <span id="toast-message">Lift off! 🚀</span>
  <span id="close-toast">x</span>
</div>
```
The toast card is set to be hidden at first and should only be shown when the countdown timer reaches 0.
To show the toast card element, we need to update the CSS property `display` to `"block"`. 
We already have a CSS class called `show` that does this. 
To show the toast card, we simply add the `"show"` class to the toast card, and it will become visible. 
We will use the `showToast()` function to do this.
Here's what you need to do to implement the `showToast()` function:
- Show the toast card element (`div#toast`), which is initially hidden.<br>To do this, add the class `"show"` to the element's class list. 
You can use [`classList`](https://www.w3schools.com/jsref/prop_element_classlist.asp) methods to do this.
- Set a timeout of 3 seconds (3000 milliseconds), after which the toast card should be hidden again.
- To hide the toast card back, simply remove the class `"show"` from the element's class list.
*/

function showToast(message) {

  // Your code goes here ...
  console.log("showToast called!");
  let toast = document.getElementById("toast");

  const list = toast.classList;
  list.add("show");


  let timeOut = 3;



/*
let timeLeft = 10
  const countdownElement = document.getElementById("time");
  
  const intervalID = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    if (timeLeft > -1) {
      countdownElement.innerHTML = timeLeft;
      timeLeft--;
    } else {
      showToast();
    clearInterval(intervalID);
    }
    }
  }

*/
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
