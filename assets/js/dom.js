// dom.js — for topics/dom.html

var domLog = [];

function logAction(msg) {
  domLog.push(msg);
  var out = document.getElementById('dom-output');
  out.textContent = domLog.join('\n---\n');
  out.className = 'output-area';
  flashOutput('dom-output');
}

function domChangeText() {
  var el = document.getElementById('dom-demo-text');
  el.textContent = '✏️ Text changed by getElementById() + .textContent';
  logAction('document.getElementById("dom-demo-text")\n  .textContent = "..."');
  showToast('textContent Changed!', 'Element text updated via getElementById().', 'success');
}

function domChangeColor() {
  var el = document.getElementById('dom-demo-text');
  el.style.color = '#f0c040';
  logAction('document.getElementById("dom-demo-text")\n  .style.color = "#f0c040"');
  showToast('Color Changed!', 'Text color set to yellow via .style.color.', 'success');
}

function domChangeBg() {
  var el = document.getElementById('dom-demo-text');
  el.style.background = 'rgba(79,156,249,0.12)';
  el.style.padding = '10px 14px';
  el.style.borderRadius = '6px';
  logAction('element.style.background = "rgba(79,156,249,0.12)"\nelement.style.padding = "10px 14px"');
  showToast('Background Changed!', 'Background style applied to the element.', 'success');
}

function domReset() {
  var el = document.getElementById('dom-demo-text');
  el.textContent = '👋 This paragraph is your target element (id="dom-demo-text")';
  el.style.color = '';
  el.style.background = '';
  el.style.padding = '';
  el.style.borderRadius = '';
  domLog = [];
  var out = document.getElementById('dom-output');
  out.textContent = 'DOM actions will be logged here...';
  out.className = 'output-area empty';
  showToast('Reset Complete', 'Element restored to its original state.', 'info');
}

function domAddItem() {
  var val = document.getElementById('list-input').value.trim();
  if (!val) {
    showToast('Empty Input', 'Please type something before adding.', 'warn');
    return;
  }
  var ul = document.getElementById('dom-list');
  var li = document.createElement('li');
  li.textContent = val;
  ul.appendChild(li);
  document.getElementById('list-input').value = '';
  logAction('var li = document.createElement("li");\nli.textContent = "' + val + '";\nul.appendChild(li);');
  showToast('Element Added!', '"' + val + '" appended to the list via appendChild().', 'success');
}