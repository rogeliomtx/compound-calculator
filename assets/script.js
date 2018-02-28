
$(document).ready(function(){

  var $ahorroInicial = $('#ahorroInicial'),

      $ahorroRecurrente = $('#ahorroRecurrente'),
      $tipoPeriodoAhorroRecurrente = $('#tipoPeriodoAhorroRecurrente'),

      $periodo = $('#periodo'),
      $tipoPeriodo = $('#tipoPeriodo'),

      $interes = $('#interes'),
      $totalInversion = $('#totalInversion'),
      $totalAhorro = $('#totalAhorro'),
      $totalInteres = $('#totalInteres'),

      $calcular = $('#calcular');


  $calcular.click(function() {
    var ahorroInicial = $ahorroInicial.val() ? parseInt($ahorroInicial.val()) : 0,
        ahorroRecurrente = $ahorroRecurrente.val() ? parseInt($ahorroRecurrente.val()) : 0,
        tipoPeriodoAhorroRecurrente = parseInt($tipoPeriodoAhorroRecurrente.val()),
        periodo = $periodo.val() ? parseInt($periodo.val()) : 0,
        tipoPeriodo = parseInt($tipoPeriodo.val()),
        interes = $interes.val() ? parseInt($interes.val()) : 0,

        totalInversion = 0,
        totalAhorro = 0,
        totalInteres = 0;

    if (tipoPeriodoAhorroRecurrente < tipoPeriodo){
      alert("el periodo tiene que ser mayor al ahorro recurrente");
      return;
    }

    //periodo *= tipoPeriodoAhorroRecurrente / tipoPeriodo;

      interes /= 100;
    /*
      interes /= tipoPeriodoAhorroRecurrente / tipoPeriodo;
      interes /= tipoPeriodo;
    */

    var depositosAlAxo = tipoPeriodoAhorroRecurrente;
    console.log(depositosAlAxo);

    if (interes == 0)
      totalInversion = ahorroInicial + (ahorroRecurrente * tipoPeriodoAhorroRecurrente * periodo / tipoPeriodo);
    else
      totalInversion = calculateCompoundInterest(ahorroInicial, ahorroRecurrente, interes, depositosAlAxo, periodo, tipoPeriodo);

    totalAhorro = ahorroInicial + (ahorroRecurrente * tipoPeriodoAhorroRecurrente * periodo / tipoPeriodo);
    totalInteres = totalInversion - totalAhorro;

    $totalInversion.text(toCurrency(totalInversion));
    $totalAhorro.text(toCurrency(totalAhorro));
    $totalInteres.text(toCurrency(totalInteres));
  });
});
