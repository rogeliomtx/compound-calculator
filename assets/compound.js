
function presentValue(fv, r, y) {
    return fv / Math.pow(1 + r, y);
}

function futureValue(p, r, y) {
    return p * Math.pow(1 + r, y);
}

function returnRate(pv, fv, y) {
    return Math.pow(fv / pv, 1.0 / y) - 1.0;
}

function geomSeries(z, m, n) {
    var amt;
    if (z == 1.0)
        amt = n + 1;
    else
        amt = (Math.pow(z, n + 1) - 1) / (z - 1);
    if (m >= 1)
        amt -= geomSeries(z, 0, m - 1);
    return amt;
}

function basicInvestment(p, r, y, c) {
    if (c == null)
        c = 0;

    return futureValue(p, r, y) + c * geomSeries(1 + r, 1, y);
}

function annuityPayout(p, r, y) {
    return futureValue(p, r, y - 1) / geomSeries(1 + r, 0, y - 1);
}

function mortgagePayment(p, r, y) {
    return futureValue(p, r, y) / geomSeries(1 + r, 0, y - 1);
}

function randN(m, s) {
    return s * Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random()) + m;
}

function logNmean(m, s) {
    return Math.log(m) - (Math.pow(logNsigma(m, s), 2) / 2);
}

function logNsigma(m, s) {
    return Math.sqrt(Math.log(Math.pow(s / m, 2) + 1));
}

function gmEst(r_am, s) {
    return Math.sqrt(Math.pow(1 + r_am, 2) - Math.pow(s, 2)) - 1;
}

function numOrder(n, m) {
    return n - m;
}
//-->
