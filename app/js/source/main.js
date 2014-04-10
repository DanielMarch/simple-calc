(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add').click(add);
    $('#subtract').click(subtract);
    $('#multiply').click(multiply);
    $('#divide').click(divide);
    $('#exponent').click(exponent);
    $('#square').click(root);
    $('#fact').click(fact);
  }

  function add(){
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    var sum = x + y;
    $('#sum').text(sum);
  }

  function subtract(){
    var x = $('#num3').val() * 1;
    var y = $('#num4').val() * 1;
    var sum = x - y;
    $('#difference').text(sum);
  }

  function multiply(){
    var x = $('#num5').val() * 1;
    var y = $('#num6').val() * 1;
    var sum = x * y;
    $('#multiplyer').text(sum);
  }

  function divide(){
    var x = $('#num7').val() * 1;
    var y = $('#num8').val() * 1;
    var sum = x / y;
    $('#divisor').text(sum);
  }

  function exponent(){
    var x = $('#num9').val() * 1;
    var y = $('#num10').val() * 1;
    var sum = Math.pow(x, y);
    $('#power').text(sum);
  }

  function root(){
    var x = $('#num11').val() * 1;
    var sum = Math.sqrt(x);
    $('#root').text(sum);
  }

  function fact(){
    var x = $('#num12').val() * 1;
    var sum = x;
    for(var i = 1; i < x; i++){
    sum *= i;
  }
    $('#factor').text(sum);
  }


})();
