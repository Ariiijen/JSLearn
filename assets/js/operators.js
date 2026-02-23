// operators.js — for topics/operators.html

function runOperator() {
  var a = parseFloat(document.getElementById('op-a').value);
  var b = parseFloat(document.getElementById('op-b').value);
  var op = document.getElementById('op-sel').value;
  var out = document.getElementById('op-output');

  if (isNaN(a) || isNaN(b)) {
    out.textContent = '⚠ Please enter valid numbers in both fields.';
    out.className = 'output-area warn';
    showToast('Invalid Input', 'Both fields must contain valid numbers.', 'warn');
    return;
  }

  var result, desc;
  switch(op) {
    case '+':   result = a + b;        desc = 'Addition'; break;
    case '-':   result = a - b;        desc = 'Subtraction'; break;
    case '*':   result = a * b;        desc = 'Multiplication'; break;
    case '/':   result = b === 0 ? 'Cannot divide by zero' : a / b; desc = 'Division'; break;
    case '%':   result = a % b;        desc = 'Modulus (remainder)'; break;
    case '==':  result = a == b;       desc = 'Equality (value only)'; break;
    case '===': result = a === b;      desc = 'Strict equality (value + type)'; break;
    case '!=':  result = a != b;       desc = 'Not equal'; break;
    case '>':   result = a > b;        desc = 'Greater than'; break;
    case '<':   result = a < b;        desc = 'Less than'; break;
    case '&&':  result = (a !== 0) && (b !== 0); desc = 'Logical AND'; break;
    case '||':  result = (a !== 0) || (b !== 0); desc = 'Logical OR'; break;
    default:    result = 'Unknown'; desc = '';
  }

  out.textContent = 'Expression:  ' + a + ' ' + op + ' ' + b + '\nOperation:   ' + desc + '\nResult:      ' + result;
  out.className = 'output-area';
  flashOutput('op-output');
  showToast(a + ' ' + op + ' ' + b + ' = ' + result, desc, 'success');
}

function clearOperator() {
  document.getElementById('op-output').textContent = 'Output will appear here...';
  document.getElementById('op-output').className = 'output-area empty';
  showToast('Cleared', 'Output has been reset.', 'info');
}