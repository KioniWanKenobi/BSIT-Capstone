 var calculator = document.createElement('div');
 document.body.appendChild(calculator);

 var calculate = document.getElementById('calculate');
 calculate.onclick = function() {
   var principal = document.getElementById('principal').value;
   var rate = document.getElementById('rate').value;
   var years = document.getElementById('years').value;
   var result = document.getElementById('result');
   result.innerHTML = '$' + (principal * (1 + (rate / 100) * years)).toFixed(2);
 };

