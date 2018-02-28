

/*
  Calculadora de interes compuesto con pagos

  initialInvestment: initial investment

  investment: regular contribution
  periodType: months or years

  depositsPerYear: monthly: 12, yearly: 1
  term: term of invesment
  termType: term type: monthly, yearly

  annualInterest: interest in decimal
*/

function calculateCompoundInterest(initialInvestment, investment, investmentTerm, term, termType, returnRate) {
  var p = initialInvestment,
      r = returnRate,
      n = investmentTerm,
      np = 1, /* compound by year */
      t = (term/termType),
      pmt = investment,
      a = 0;

      if (p)
        a = p * Math.pow(1 + r/np, np*t);

      a += ( (pmt * (Math.pow(1 + r/n, n*t) - 1)) / (r/n) ) * (1 + r/n);

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

/*
  Calculadora de fondo de emergencias
*/

function calculateEmergency(income, total, term, payment) {



}
