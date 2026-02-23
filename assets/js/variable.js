// variables.js — for topics/variables.html

function runVariable() {
  var name = document.getElementById('var-name').value.trim();
  var value = document.getElementById('var-value').value.trim();
  var out = document.getElementById('var-output');

  if (!name) {
    out.textContent = '⚠ Please enter a variable name.';
    out.className = 'output-area warn';
    showToast('Missing Input', 'Please enter a variable name.', 'warn');
    return;
  }
  if (/^\d/.test(name)) {
    out.textContent = '❌ SyntaxError: Variable name cannot start with a digit!\n"' + name + '" is invalid.';
    out.className = 'output-area error';
    showToast('SyntaxError!', '"' + name + '" cannot start with a digit.', 'error');
    return;
  }
  var reserved = ['var','function','return','if','else','for','while','class','let','const','new','this','typeof'];
  if (reserved.indexOf(name) !== -1) {
    out.textContent = '❌ SyntaxError: "' + name + '" is a reserved keyword!\nChoose a different variable name.';
    out.className = 'output-area error';
    showToast('Reserved Keyword!', '"' + name + '" cannot be used as a variable name.', 'error');
    return;
  }

  var isNum = !isNaN(value) && value !== '';
  var displayVal = isNum ? value : '"' + value + '"';
  var type = isNum ? 'Number' : 'String';

  out.textContent = '✅ Code executed:\n\nvar ' + name + ' = ' + displayVal + ';\n\n→ Name:  ' + name + '\n→ Value: ' + displayVal + '\n→ Type:  ' + type;
  out.className = 'output-area';
  flashOutput('var-output');
  showToast('Variable Created!', 'var ' + name + ' = ' + displayVal + ' (' + type + ')', 'success');
}

function clearVariable() {
  document.getElementById('var-output').textContent = 'Output will appear here...';
  document.getElementById('var-output').className = 'output-area empty';
  showToast('Cleared', 'Output has been reset.', 'info');
}