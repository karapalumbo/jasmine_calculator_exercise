window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
const loanAmount = document.getElementById("loan-amount");
if (loanAmount) {
  loanAmount.value = 10000;
}
const loanYears = document.getElementById("loan-years");
if (loanYears) {
  loanYears.value = 5;
}

const loanRate = document.getElementById("loan-rate");
if (loanRate) {
  loanRate.value = 2.7;
}

// Call a function to calculate the current monthly payment
function setupIntialValues() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let years = values.years;
  let interest = values.rate / 100 / 12;
  let numOfPayments = years * 12;

  let principleTimesInterest = principle * interest;
  let power = 1 - Math.pow(1 + interest, -numOfPayments);
  let monthlyPayment = principleTimesInterest / power;
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = `$${monthly}`;
}
