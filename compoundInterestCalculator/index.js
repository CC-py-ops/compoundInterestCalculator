document.getElementById("interestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const principal = parseFloat(document.getElementById("principal").value);
  const monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);
  const numberOfYears = parseInt(document.getElementById("numberOfYears").value);
  const annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);

  const finalValue = compoundInterest(principal, monthlyContribution, numberOfYears, annualInterestRate);
  const regularValue = calculateRegular(principal, monthlyContribution, numberOfYears);
  const difference = finalValue - regularValue;

  document.getElementById("finalValue").textContent = `Final Compounded Value: $${finalValue.toFixed(2)}`;
  document.getElementById("regularValue").textContent = `Regular Amount: $${regularValue.toFixed(2)}`;
  document.getElementById("difference").textContent = `Difference (Effect of Compounding): $${difference.toFixed(2)}`;
});

function compoundInterest(principal, monthlyContribution, numberOfYears, annualInterestRate) {
  let total = principal;
  const annualContribution = monthlyContribution * 12;

  for (let i = 0; i < numberOfYears; i++) {
    total += annualContribution;
    total *= (100 + annualInterestRate) / 100;
  }

  return total;
}

function calculateRegular(principal, monthlyContribution, numberOfYears) {
  return principal + monthlyContribution * 12 * numberOfYears;
}
