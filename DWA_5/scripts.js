const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    throw new Error("Division not performed. Both values are required in inputs. Try again.");
  }

  const dividendValue = parseFloat(dividend);
  const dividerValue = parseFloat(divider);

  if (isNaN(dividendValue) || isNaN(dividerValue)) {
    throw new Error("Division not performed. Invalid number provided. Try again.");
  }

  if (dividerValue === 0) {
    throw new Error("Division not performed. Cannot divide by zero. Try again.");
  }

  const divisionResult = dividendValue / dividerValue;

  if (!Number.isInteger(divisionResult)) {
    result.innerText = `Result: ${divisionResult.toFixed(0)}`;
  } else {
    result.innerText = `Result: ${divisionResult}`;
  }
});





