// embedding.js — for topics/embedding.html

function runEmbed() {
  var msg = document.getElementById('embed-msg').value.trim();
  var out = document.getElementById('embed-output');

  if (!msg) {
    out.textContent = '⚠ Please type a message first.';
    out.className = 'output-area warn';
    showToast('Missing Input', 'Please type a message before running.', 'warn');
    return;
  }

  var result = '📄 document says: "' + msg + '"';
  out.textContent = result;
  out.className = 'output-area';
  flashOutput('embed-output');
  showToast('Script Executed!', 'Your message was written to the output via JavaScript.', 'success');
}

function clearEmbed() {
  document.getElementById('embed-output').textContent = 'Output will appear here...';
  document.getElementById('embed-output').className = 'output-area empty';
  document.getElementById('embed-msg').value = '';
  showToast('Cleared', 'Output has been reset.', 'info');
}