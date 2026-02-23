// data-types.js — for topics/data-types.html

function runTypeCheck() {
  var raw = document.getElementById('type-input').value.trim();
  var out = document.getElementById('type-output');

  if (!raw) {
    out.textContent = '⚠ Please enter a value to check.';
    out.className = 'output-area warn';
    showToast('Missing Input', 'Please enter a value first.', 'warn');
    return;
  }

  var val, type, detail;
  try {
    val = eval(raw);
    type = typeof val;
    if (Array.isArray(val))     { type = 'Array';     detail = 'Length: ' + val.length + ' · Items: ' + JSON.stringify(val); }
    else if (val === null)      { type = 'Null';       detail = 'Intentionally empty value'; }
    else if (type === 'string') { type = 'String';     detail = 'Length: ' + val.length + ' characters'; }
    else if (type === 'number') { type = 'Number';     detail = isNaN(val) ? 'Value is NaN (Not a Number)' : 'Numeric value: ' + val; }
    else if (type === 'boolean'){ type = 'Boolean';    detail = 'Value is: ' + val; }
    else if (type === 'object') { type = 'Object';     detail = 'Keys: ' + Object.keys(val).join(', '); }
    else                        { detail = '—'; }
  } catch(e) {
    val = raw; type = 'String'; detail = 'Length: ' + raw.length + ' characters';
  }

  out.textContent = 'Input:   ' + raw + '\nType:    ' + type.toUpperCase() + '\nDetail:  ' + detail;
  out.className = 'output-area';
  flashOutput('type-output');
  showToast('Type Detected: ' + type, detail, 'success');
}

function clearTypeCheck() {
  document.getElementById('type-output').textContent = 'Enter a value and click Check Type...';
  document.getElementById('type-output').className = 'output-area empty';
  document.getElementById('type-input').value = '';
  showToast('Cleared', 'Output has been reset.', 'info');
}