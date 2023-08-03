const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  const dividendValue = parseFloat(dividend);
  const dividerValue = parseFloat(divider);

  if (isNaN(dividendValue) || isNaN(dividerValue)) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Invalid number provided:", dividend, divider);
    return;
  }

  if (dividerValue === 0) {
    result.innerText = "Division not performed. Cannot divide by zero. Try again.";
    console.error("Cannot divide by zero:", dividend, divider);
    return;
  }

  const divisionResult = dividendValue / dividerValue;

  if (!Number.isInteger(divisionResult)) {
    result.innerText = `Result: ${divisionResult.toFixed(0)}`;
  } else {
    result.innerText = `Result: ${divisionResult}`;
  }
});






