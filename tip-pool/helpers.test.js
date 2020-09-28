it("amount to be the correct tip percentage", function () {
  expect(calculateTipPercent(20.0, 2.0)).toEqual(10);
});

it("sums total of all payments", function () {
  allPayments = {
    payment1: {
      billAmt: "20",
      tipAmt: "10",
      tipPercentage: 50,
    },
  };
  expect(sumPaymentTotal("tipAmt")).toEqual(10);
  expect(sumPaymentTotal("billAmt")).toEqual(20);
  expect(sumPaymentTotal("tipPercentage")).toEqual(0);
});
