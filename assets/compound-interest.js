

function calculateCompoundInterest(initialInvestment, investment, period, interest) {
  var i = interest;
  var n = period;
  var pmt = investment;

  var total = pmt * (1 + i) * ((Math.pow(1 + i, n) - 1) / i);

  return parseInt(total.toString().split('.')[0]);
}


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
