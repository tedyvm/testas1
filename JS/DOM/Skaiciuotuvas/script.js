let firstNumber = 0;
let secondNumber = 0;
let action = "";
let answer = 0;
let arVedamasSkaicius = false;
let arBaigtasVeiksmas = false;
let Coma = false;

let input = document.getElementById("calc-input");
let calculationSpan = document.getElementById("calculation");
let history = [];

function onNumberClick(number) {
  if (arBaigtasVeiksmas === true) {
    onCleanClick();
  }

  if (arVedamasSkaicius === false && number === 0) {
  } else {
    input.value += number;
    arVedamasSkaicius = true;
  }

  arBaigtasVeiksmas = false;
  console.log(number);
}

function onActionClick(clickedAction) {
  if (action === "") {
    input.value += " " + clickedAction + " ";
  } else if (clickedAction !== action) {
    input.value = input.value.slice(0, -3);
    input.value += " " + clickedAction + " ";
  }
  arBaigtasVeiksmas = false;
  arVedamasSkaicius = false;
  Coma = false;
  action = clickedAction;
  console.log(action);
}

function onCountClick() {
  let splitted = input.value.replace(/,/g, ".").split(" ");
  firstNumber = parseFloat(splitted[0]);
  action = splitted[1];
  secondNumber = parseFloat(splitted[2]);
  calculateAnswer();
  let newAnswer = answer.toString();
  input.value = newAnswer.replace(".", ",");
  console.log(answer);
  calculationSpan.innerText = `${firstNumber} ${action} ${secondNumber}`;
  addToHistory();
  action = "";
  arVedamasSkaicius = false;
  Coma = false;
  arBaigtasVeiksmas = true;
}

function calculateAnswer() {
  switch (action) {
    case "+":
      answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
    case "x":
      answer = firstNumber * secondNumber;
      break;
    case "/":
      answer = firstNumber / secondNumber;
      break;
  }
}

function onCleanClick() {
  firstNumber = 0;
  secondNumber = 0;
  action = "";
  answer = 0;
  input.value = "";
  calculationSpan.innerText = "";
  arVedamasSkaicius = false;
  arBaigtasVeiksmas = false;
}

function addToHistory() {
  let historyItem = {
    firstNumber,
    action,
    secondNumber,
    answer,
  };
  history.push(historyItem);
  if (history.length > 3) {
    history = history.slice(1);
  }
}

document.getElementById("show-history").onclick = function () {
  let formatted = history.map((x) => `<p>${x.firstNumber} ${x.action} ${x.secondNumber} = ${x.answer}</p>`);
  console.log(formatted.join(""));
  let historyBlock = document.querySelector(".calculator .history-items");
  historyBlock.innerHTML = formatted.join("");
  if (historyBlock.style.display === "none" || historyBlock.style.display === "") {
    historyBlock.style.display = "block";
  } else {
    historyBlock.style.display = "none";
  }
};
document.getElementById("clean-history").onclick = function () {
  history = [];
  let historyBlock = document.querySelector(".calculator .history-items");
  historyBlock.innerHTML = "";
};

function onComaClick() {
  if (arVedamasSkaicius === true && Coma === false) {
    input.value += ",";
    Coma = true;
  }
}

function onBackClick() {
  console.log("back");

  if (input.value.length > 0 && arVedamasSkaicius === true) {
    input.value = input.value.slice(0, -1);
  }
}
