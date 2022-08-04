const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const allClear = document.querySelector("#AC");
const deleteBtn = document.querySelector("#del");
const del = document.querySelector("#del");
const equality = document.querySelector("#equal")
let currentScreen = document.querySelector(".screen .current");
let previousScreen = document.querySelector(".screen .old");

for (let num of numbers){
  num.onclick = (e) => {
  if (currentScreen.textContent == '0') {
    currentScreen.textContent = e.target.textContent;
  } else {
  currentScreen.textContent += e.target.textContent;
    }
  }
}

for (let operator of operators) {  
  operator.onclick = (e) => {
    previousScreen.textContent += currentScreen.textContent + e.target.textContent;
    currentScreen.textContent = "0";
  }
}

allClear.onclick = (e) => {
  previousScreen.textContent = '';
  currentScreen.textContent = '0';
}

deleteBtn.onclick = (e) => {
  if (currentScreen.textContent == '0') {
    return;
  } else if (currentScreen.textContent.length == 1) {
    currentScreen.textContent = '0';
    return;
    }
    currentScreen.textContent = currentScreen.textContent.slice(0, -1);
}

// equality.onclick = (e) => {
//   previousScreen.textContent = previousScreen.textContent + currentScreen.textContent;
//   if (previousScreen.textContent.slice(-2) == "/0") {
//     dividebyZero();
//   };
//   let result = eval(previousScreen.textContent);
//   if (result.toString().split('.')[1] && result.toString().length >= 6) {
//     currentScreen.textContent = result.toFixed(5);
//     return;
//   } currentScreen.textContent = result;
// };

operationsObj = {
  "+" : (a, b) => a + b,
  "-" : (a, b) => a - b,
  "*" : (a, b) => a * b,
  ":" : (a, b) => a / b,
}

equality.onclick = (e) => {
  previousScreen.textContent = previousScreen.textContent + currentScreen.textContent;
  if (previousScreen.textContent.slice(-2) == "/0") {
    dividebyZero();
  }
  if (previousScreen.textContent.indexOf('+') != -1) {
    let result = operationsObj['+'](+previousScreen.textContent.split('+')[0], +previousScreen.textContent.split('+')[1]);
    showResult(result);
  } else if (previousScreen.textContent.indexOf('-') != -1) {
    let result = operationsObj['-'](+previousScreen.textContent.split('-')[0], +previousScreen.textContent.split('-')[1]);
    showResult(result);
  } else if (previousScreen.textContent.indexOf('*') != -1) {
    let result = operationsObj['*'](+previousScreen.textContent.split('*')[0], +previousScreen.textContent.split('*')[1]);
    showResult(result);
  } else if (previousScreen.textContent.indexOf(':') != -1) {
    let result = operationsObj[':'](+previousScreen.textContent.split(':')[0], +previousScreen.textContent.split(':')[1]);
    showResult(result);
  }
  };


function showResult(res){
  if (res.toString().split('.')[1] && res.toString().length >= 6) {
    return currentScreen.textContent = res.toFixed(5);
    }
  return currentScreen.textContent = res;
}


function dividebyZero(){
  alert("Can't divide by zero");
}
