it("should calculate the monthly rate correctly", function () {
  expect(
    calculateMonthlyPayment({ amount: 10000, years: 5, rate: 2.7 })
  ).toEqual("178.36");
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 1000, years: 10, rate: 3.7 })
  ).toEqual("9.98");
});
