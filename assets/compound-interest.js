

/*
  principal: initial investment
  annualInterest: interest in decimal
  compoundingFrequency: monthly: 12, yearly: 1
  period: time in years
  payment: regular contribution
  periodType: months or years
*/
function calculateCompoundInterest(principal, payment, annualInterest, compoundingFrequency, period, periodType) {
  var p = principal,
      r = annualInterest,
      n = compoundingFrequency,
      np = 1, /* compound by year */
      t = (period/periodType),
      pmt = payment,
      a = 0;

      console.log(r, n, t, pmt);

      if (p)
        a = p * Math.pow(1 + r/np, np*t);

      a += (pmt * (Math.pow(1 + r/n, n*t) - 1)) / (r/n);

      return a;
}


/*
function calculateCompoundInterest(initialInvestment, investment, period, interest) {
  var i = interest;
  var n = period;
  var pmt = investment;

  var total = pmt * (1 + i) * ((Math.pow(1 + i, n) - 1) / i);

  return parseInt(total.toString().split('.')[0]);
}
*/

function toCurrency(number) {
  var format = new Intl.NumberFormat(
    "es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0
    }
  );

  return format.format(number) + " MXN";
}
