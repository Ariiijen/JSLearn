// message-boxes.js — for topics/message-boxes.html

function runAlert() {
  var msg = document.getElementById('msg-input').value.trim() || 'This is an alert box!';
  var out = document.getElementById('msg-output');
  out.textContent = '🔔 alert("' + msg + '")\n→ Displays a popup with an [OK] button.\n→ Pauses script until user clicks OK.';
  out.className = 'output-area';
  flashOutput('msg-output');
  showToast('alert() Called', '"' + msg + '"', 'success');
}

function runConfirm() {
  var msg = document.getElementById('msg-input').value.trim() || 'Do you want to save changes?';
  var out = document.getElementById('msg-output');
  var result = confirm(msg);
  out.textContent = '✅ confirm("' + msg + '")\n→ User clicked: ' + (result ? 'OK  →  returns: true' : 'Cancel  →  returns: false');
  out.className = 'output-area';
  flashOutput('msg-output');
  showToast(
    result ? 'confirm() → true' : 'confirm() → false',
    'User clicked ' + (result ? 'OK' : 'Cancel') + '. Return value: ' + result,
    result ? 'success' : 'warn'
  );
}

function runPrompt() {
  var msg = document.getElementById('msg-input').value.trim() || 'Please enter your name';
  var out = document.getElementById('msg-output');
  var result = prompt(msg, 'Type here...');
  if (result !== null) {
    out.textContent = '📝 prompt("' + msg + '")\n→ User typed: "' + result + '"\n→ Returns: "' + result + '"';
    out.className = 'output-area';
    flashOutput('msg-output');
    showToast('prompt() Returned', 'User entered: "' + result + '"', 'success');
  } else {
    out.textContent = '📝 prompt("' + msg + '")\n→ User clicked Cancel\n→ Returns: null';
    out.className = 'output-area warn';
    flashOutput('msg-output');
    showToast('prompt() → null', 'User cancelled the prompt dialog.', 'warn');
  }
}

function clearMsgOutput() {
  document.getElementById('msg-output').textContent = 'Click a button to test...';
  document.getElementById('msg-output').className = 'output-area empty';
  document.getElementById('msg-input').value = '';
  showToast('Cleared', 'Output has been reset.', 'info');
}