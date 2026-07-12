const buttons = document.querySelectorAll("main .buttons button");
const display = document.getElementById("display");
const themeToggle = document.getElementById("theme-toggle");

let justCalculated = false;
const operators = "+-×÷";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === ".") {
      const parts = display.value.split(/[+\-×÷]/);
      const currentNumber = parts[parts.length - 1];

      if (currentNumber.includes(".")) {
        return;
      }
    } else if (value === "C") {
      display.value = "";
      justCalculated = false;
      return;
    } else if (value === "=") {
      try {
        const expression = display.value
          .replaceAll("×", "*")
          .replaceAll("÷", "/");

        display.value = eval(expression);
        justCalculated = true;
      } catch {
        display.value = "Error";
      }
      return;
    } else if (value === "⌫") {
      display.value = display.value.slice(0, -1);
      return;
    } else if (value === "%") {
      display.value /= 100;
      justCalculated = true;
      return;
    } else if (justCalculated && "0123456789.".includes(value)) {
      display.value = "";
      justCalculated = false;
    }

    const lastChar = display.value.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
      display.value = display.value.slice(0, -1) + value;
    } else {
      display.value += value;
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === ".") {
    const parts = display.value.split(/[+\-×÷]/);
    const currentNumber = parts[parts.length - 1];

    if (currentNumber.includes(".")) {
      return;
    }
  }

  if (key === "Enter" || key === "=") {
    try {
      const expression = display.value
        .replaceAll("×", "*")
        .replaceAll("÷", "/");

      display.value = eval(expression);
      justCalculated = true;
    } catch {
      display.value = "Error";
    }
    return;
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
    return;
  } else if (key.toLowerCase() === "c") {
    display.value = "";
    justCalculated = false;
    return;
  } else if (key === "%") {
    display.value /= 100;
    justCalculated = true;
    return;
  }

  let value = key;

  if (key === "*") value = "×";
  if (key === "/") value = "÷";

  if ("0123456789+-×÷.".includes(value)) {
    if (justCalculated && "0123456789.".includes(value)) {
      display.value = "";
      justCalculated = false;
    }

    const lastChar = display.value.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
      display.value = display.value.slice(0, -1) + value;
    } else {
      display.value += value;
    }
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggle.textContent = themeToggle.textContent === "🌙" ? "☀️" : "🌙";

  themeToggle.blur();
});
