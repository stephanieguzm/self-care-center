var receiveMessage = document.querySelector(".receive-message");
var messageArea = document.querySelector(".message-area");
var bellArea = document.querySelector(".bell-area");
var randomMessage = document.getElementById("message-space");
var affirmList = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];

var mantraList = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather.",
];

// radioButton.addEventListener('');
receiveMessage.addEventListener('click', randomizeMessage);

// user clicks affirmation or mantra radio button
// event listener for radio button?
// user then clicks receive message button
// when message button is clicked, js will check which radio
// button was selected
// then it will find the matching array and retrieve a random message
// from the matching array
// the array element will then be sent to the html (innerHTML) and be displayed

// at same time, bell button will be hidden in the center div


function getRandomMessage(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function randomizeMessage() {
  if (document.getElementById("affirmation").checked) {
    displayMessage(getRandomMessage(affirmList))
  } else if (document.getElementById("mantra").checked) {
    displayMessage(getRandomMessage(mantraList));
  }
};

function displayMessage(message) {
  messageArea.classList.remove("hidden");
  bellArea.classList.add("hidden");
  randomMessage.innerText = message
}


















// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
//
// function getRandomElement(array) {
//   console.log(array)
//   var randomNum = getRandomIndex(array);
//   var randomItem = array[randomNum];
//   return randomItem;
// }

// function displayMessage() {
//   for (var i = 0; i <array.length)
// }
