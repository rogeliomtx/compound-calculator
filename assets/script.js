
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
        var ahorroInicial = parseInt($ahorroInicial.val()),
            ahorroRecurrente = parseInt($ahorroRecurrente.val()),
            tipoPeriodoAhorroRecurrente = parseInt($tipoPeriodoAhorroRecurrente.val()),
            periodo = parseInt($periodo.val()),
            tipoPeriodo = parseInt($tipoPeriodo.val()),
            interes = parseInt($interes.val()),

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

        totalInversion = calculateCompoundInterest(ahorroInicial, ahorroRecurrente, interes, depositosAlAxo, periodo, tipoPeriodo);
        totalAhorro = ahorroInicial + (ahorroRecurrente * tipoPeriodoAhorroRecurrente * periodo / tipoPeriodo);
        totalInteres = totalInversion - totalAhorro;

        $totalInversion.text(toCurrency(totalInversion));
        $totalAhorro.text(toCurrency(totalAhorro));
        $totalInteres.text(toCurrency(totalInteres));
      });

});

/* 12,464 MXN */
