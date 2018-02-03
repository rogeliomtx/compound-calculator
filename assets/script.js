
$(document).ready(function(){

  var $ahorroInicial = $('#ahorroInicial'),

      $ahorroRecurrente = $('#ahorroRecurrente'),
      $tipoPeriodoAhorroRecurrente = $('#tipoPeriodoAhorroRecurrente'),

      $periodo = $('#periodo'),
      $tipoPeriodo = $('#tipoPeriodo'),

      $interes = $('#interes'),
      $total = $('#total'),

      $calcular = $('#calcular');


      $calcular.click(function() {
        var ahorroInicial = $ahorroInicial.val(),
            ahorroRecurrente = $ahorroRecurrente.val(),
            tipoPeriodoAhorroRecurrente = $tipoPeriodoAhorroRecurrente.val(),
            periodo = $periodo.val(),
            tipoPeriodo = $tipoPeriodo.val(),
            interes = $interes.val();

        /*  */
        ahorroRecurrente = 0;

        /* calcular periodos */
        periodo = periodo * tipoPeriodo;




        console.log(ahorroInicial, ahorroRecurrente, tipoPeriodoAhorroRecurrente, periodo, tipoPeriodo, interes);
        result = calculateCompoundInterest(ahorroInicial, ahorroRecurrente, periodo, interes);

        $total.text(toCurrency(result));
      });

});
