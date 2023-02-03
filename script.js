let displaytext = document.getElementById("display-text");

let buttons = document.getElementsByClassName("button");

let text = "";
let operator1 = 0;
let operator2 = null;
let operand = null;
function is_operand(text) {
  return text === "X" || text === "-" || text === "+" || text === "/";
}
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  // console.log(element);
  element.addEventListener("click", function () {
    // console.log("clicked "+element.textContent);
    text = element.textContent;
    if (text == "AC") {
      operator1 = 0;
      operator2 = null;
      operand = null;
      displaytext.textContent = "";
      return;
    }
    if (text == "+/-") {
      if (operator2 === null) {
        operator1 *= -1;
        displaytext.textContent = operator1;
      } else {
        operator2 *= -1;
        displaytext.textContent = operator2;
      }
      return;
    }
    if (text == "%") {
      if (operator2 === null) {
        operator1 /= 100;
        displaytext.textContent = operator1;
      } else {
        operator2 /= 100;
        displaytext.textContent = operator2;
      }
      return;
    }
    if (text === "=") {
      if (operator2 != null) {
        displaytext.textContent = "";
        if (operand == "+") {
          displaytext.textContent = operator1 + operator2;
        } else if (operand == "-") {
          displaytext.textContent = operator1 - operator2;
        } else if (operand == "X") {
          displaytext.textContent = operator1 * operator2;
        } else if (operand == "/") {
          displaytext.textContent = operator1 / operator2;
        }
      }
      operator1=displaytext.textContent;
      operand=null;
      operator2=null;
      return;
    }
    if (is_operand(text)) {
      // console.log("operand "+text);
      if (displaytext.textContent!="") {
        operator1 = parseFloat(displaytext.textContent);
      }
      // else
      // operator1 =0;
      displaytext.textContent = "";
      operand = text;
      return;
    }

    if (operand != null) {
      displaytext.textContent += text;
      operator2 = parseFloat(displaytext.textContent);
    } else {
      displaytext.textContent += text;
      operator1 = parseFloat(displaytext.textContent);
    }

    // displaytext.textContent += text;
  });
}
