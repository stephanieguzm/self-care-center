var receiveMessage = document.querySelector(".receive-message");
var messageArea = document.querySelector(".message-area");
var bellArea = document.querySelector(".bell-area");
var randomMessage = document.getElementById("message-space");
var radioButtons = document.getElementsByName("radio");
var clearButton = document.querySelector(".clear-button");
var deleteButton = document.getElementById("delete-button");
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
  "I am worthy of what I desire.",
  "I am adventurous. I overcome fears by following my dreams.",
  "I feed my spirit. I focus my mind. It's my time.",
  "I am in charge of my life",
  "I will not compare myself to others.",
  "I believe in the good things coming.",
];
var mantraList = [
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
"I am conquering my fears and becoming stronger each day.",
"I will have a good day because it's my choice.",
"I am not afraid to be wrong.",
"My potential is limitless, and I choose where to spend my energy.",
];
var selectedList

receiveMessage.addEventListener("click", randomizeMessage);
clearButton.addEventListener("click", clearMessage);
deleteButton.addEventListener("click", deleteMessage);
mantraOption.addEventListener("click", selectMantra);
affirmationOption.addEventListener("click", selectAffirmation);

function selectMantra() {
  selectedList = mantraList;
}

function selectAffirmation() {
  selectedList = affirmList;
}

function getRandomMessage(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function randomizeMessage() {
  if (selectedList) {
    displayMessage(getRandomMessage(selectedList))
} else if (!selectedList) {
    alert("Please select an affirmation or mantra!")
  }
};

function displayMessage(messageType) {
  messageArea.classList.remove("hidden");
  bellArea.classList.add("hidden");
  randomMessage.innerText = messageType;
};

function clearMessage() {
  messageArea.classList.add("hidden");
  bellArea.classList.remove("hidden");
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
};

function deleteMessage() {
  for (var i = 0; i < selectedList.length; i++) {
    if (selectedList[i] === randomMessage.innerText) {
      selectedList.splice(i, 1);
    }
  }
    clearMessage();
    alert("This message has been deleted.");

}
