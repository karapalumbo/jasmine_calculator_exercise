beforeEach(function () {
  billAmtInput.value = 100;
  tipAmtInput.value = 10;
});

it("should bill amount be greater than 0", function () {
  //   let billAmt = (billAmtInput.value = "10");
  //   let tipAmt = (tipAmtInput.value = "5");

  expect(createCurPayment()).toEqual({
    billAmt: billAmtInput.value,
    tipAmt: tipAmtInput.value,
    tipPercent: calculateTipPercent(billAmtInput.value, tipAmtInput.value),
  });
});

it("should update allPayments, html and clear inputs", function () {
  //   let billAmt = (billAmtInput.value = "10");
  //   let tipAmt = (tipAmtInput.value = "5");
  submitPaymentInfo();

  expect(allPayments).toEqual({
    payment1: { billAmt: "100", tipAmt: "10", tipPercent: 10 },
  });
  expect(billAmtInput.value).toEqual("");
  expect(tipAmtInput.value).toEqual("");
});

it("should udpdate paymentInfoTable", function () {
  let paymentTable = document.getElementById("paymentTable");

  expect(paymentTable.tBodies[0].rows.length).toEqual(1);
  //   let billAmt = (billAmtInput.value = "20");
  //   let tipAmt = (tipAmtInput.value = "2");
  submitPaymentInfo();
  expect(paymentTable.tBodies[0].rows.length).toEqual(2);

  let firstPmt = paymentTable.querySelector("#payment1");
  let bill = firstPmt.querySelectorAll("td")[0];
  let tip = firstPmt.querySelectorAll("td")[1];
  let percent = firstPmt.querySelectorAll("td")[2];

  expect(bill.innerText).toEqual("$100");
  expect(tip.innerText).toEqual("$10");
  expect(percent.innerText).toEqual("10%");
});

it("should create table row and update allPayments with 3 payments", function () {
  //   let billAmt = (billAmtInput.value = "20");
  //   let tipAmt = (tipAmtInput.value = "2");
  submitPaymentInfo();

  let totalTable = document.getElementById("summaryTable");
  let billTotal = totalTable.querySelectorAll("td")[0];
  let tipTotal = totalTable.querySelectorAll("td")[1];
  let percentTotal = totalTable.querySelectorAll("td")[2];

  expect(billTotal.textContent).toBe("$100");
  expect(tipTotal.textContent).toBe("$10");
  expect(percentTotal.textContent).toBe("10%");
});

afterEach(function () {
  billAmtInput.value = "";
  tipAmtInput.value = "";
  billTotal = "";
  tipTotal = "";
  percentTotal = "";
  allPayments = {};
});
