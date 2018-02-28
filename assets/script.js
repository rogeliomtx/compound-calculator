
$(document).ready(function() {

  var $initialInvestment = $('#ahorroInicial'),

      $investment = $('#ahorroRecurrente'),
      $investmentTerm = $('#tipoPeriodoAhorroRecurrente'),

      $term = $('#periodo'),
      $termType = $('#tipoPeriodo'),

      $returnRate = $('#interes'),
      $totalInvestment = $('#totalInversion'),
      $totalSaves = $('#totalAhorro'),
      $totalRevenue = $('#totalInteres'),

      $calculateInvestment = $('#calculateInvestment');


  /*
    Calculator of invesment
    c = 0
  */
  $calculateInvestment.click(function() {
    var initialInvestment = $initialInvestment.val() ? parseInt($initialInvestment.val()) : 0,
        investment = $investment.val() ? parseInt($investment.val()) : 0,
        investmentTerm = parseInt($investmentTerm.val()),
        term = $term.val() ? parseInt($term.val()) : 0,
        termType = parseInt($termType.val()),
        returnRate = $returnRate.val() ? parseInt($returnRate.val()) : 0,

        totalInvestment = 0,
        totalSaves = 0,
        totalRevenue = 0;

    /* 01 validate */
    if (investmentTerm < termType) {
      alert("el periodo tiene que ser mayor al ahorro recurrente");
      return;
    }

    /* 02 calculate */
    returnRate /= 100;

    if (returnRate == 0)
      totalInvestment = initialInvestment + (investment * investmentTerm * term / termType);
    else
      totalInvestment = calculateCompoundInterest(initialInvestment, investment, investmentTerm, term, termType, returnRate);

    totalSaves = initialInvestment + (investment * investmentTerm * term / termType);
    totalRevenue = totalInversion - totalAhorro;

    /* 03 print results */
    $totalInvestment.text(toCurrency(totalInvestment));
    $totalSaves.text(toCurrency(totalSaves));
    $totalRevenue.text(toCurrency(totalRevenue));
  });
});
