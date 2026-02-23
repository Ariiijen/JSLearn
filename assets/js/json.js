// json.js — for topics/json.html

function switchTab(tab) {
  document.getElementById('tab-parse-content').style.display    = tab === 'parse'     ? 'block' : 'none';
  document.getElementById('tab-stringify-content').style.display = tab === 'stringify' ? 'block' : 'none';
  clearJSON();
  showToast('Switched to ' + (tab === 'parse' ? 'JSON.parse()' : 'JSON.stringify()'), 'Ready for your input.', 'info');
}

function runParse() {
  var raw = document.getElementById('json-parse-input').value.trim();
  var out = document.getElementById('json-output');

  if (!raw) {
    out.textContent = '⚠ Please enter a JSON string to parse.';
    out.className = 'output-area warn';
    showToast('Missing Input', 'Enter a JSON string to parse.', 'warn');
    return;
  }
  try {
    var parsed = JSON.parse(raw);
    var keys = Object.keys(parsed);
    var result = 'JSON.parse() ✅ Success!\n\nParsed object properties:\n';
    keys.forEach(function(k) {
      result += '  ' + k + '  →  ' + JSON.stringify(parsed[k]) + '  (' + typeof parsed[k] + ')\n';
    });
    result += '\nAccess with dot notation:\n  obj.' + keys[0] + '  →  ' + JSON.stringify(parsed[keys[0]]);
    out.textContent = result;
    out.className = 'output-area';
    flashOutput('json-output');
    showToast('JSON.parse() Success!', keys.length + ' properties parsed from JSON string.', 'success');
  } catch(e) {
    out.textContent = '❌ JSON Parse Error:\n' + e.message + '\n\nCommon fixes:\n  • Keys must be in double quotes\n  • No trailing commas\n  • Strings use double quotes not single';
    out.className = 'output-area error';
    showToast('Parse Error!', e.message, 'error');
  }
}

function runStringify() {
  var k1 = document.getElementById('obj-key1').value.trim();
  var v1 = document.getElementById('obj-val1').value.trim();
  var k2 = document.getElementById('obj-key2').value.trim();
  var v2 = document.getElementById('obj-val2').value.trim();
  var k3 = document.getElementById('obj-key3').value.trim();
  var v3 = document.getElementById('obj-val3').value.trim();
  var out = document.getElementById('json-output');

  if (!k1 || !v1) {
    out.textContent = '⚠ Please fill in at least Key 1 and Value 1.';
    out.className = 'output-area warn';
    showToast('Missing Input', 'Key 1 and Value 1 are required.', 'warn');
    return;
  }

  function castVal(v) {
    if (!isNaN(v) && v !== '') return parseFloat(v);
    if (v === 'true')  return true;
    if (v === 'false') return false;
    if (v === 'null')  return null;
    return v;
  }

  var obj = {};
  obj[k1] = castVal(v1);
  if (k2 && v2) obj[k2] = castVal(v2);
  if (k3 && v3) obj[k3] = castVal(v3);

  var compact   = JSON.stringify(obj);
  var formatted = JSON.stringify(obj, null, 2);

  out.textContent =
    'JavaScript Object:\n  ' + compact + '\n\n' +
    'JSON.stringify() compact:\n  ' + compact + '\n\n' +
    'JSON.stringify() formatted:\n' + formatted + '\n\n' +
    '✓ Ready to send to a server or store as text.';
  out.className = 'output-area';
  flashOutput('json-output');
  showToast('JSON.stringify() Done!', Object.keys(obj).length + ' properties converted to JSON string.', 'success');
}

function clearJSON() {
  var out = document.getElementById('json-output');
  out.textContent = 'Output will appear here...';
  out.className = 'output-area empty';
  showToast('Cleared', 'Output has been reset.', 'info');
}