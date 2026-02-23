// loops.js — for topics/loops.html

function runLoop() {
  var type  = document.getElementById('loop-type').value;
  var start = parseInt(document.getElementById('loop-start').value);
  var end   = parseInt(document.getElementById('loop-end').value);
  var out   = document.getElementById('loop-output');

  if (isNaN(start) || isNaN(end)) {
    out.textContent = '⚠ Please enter valid numbers for start and end.';
    out.className = 'output-area warn';
    showToast('Invalid Input', 'Start and End must be valid numbers.', 'warn');
    return;
  }
  if (end <= start) {
    out.textContent = '⚠ End must be greater than Start.';
    out.className = 'output-area warn';
    showToast('Invalid Range', 'End value must be greater than Start.', 'warn');
    return;
  }
  if (end - start > 20) {
    out.textContent = '⚠ Maximum 20 iterations allowed for display.';
    out.className = 'output-area warn';
    showToast('Too Many Iterations', 'Limit to 20 iterations for display.', 'warn');
    return;
  }

  var total = end - start;
  var lines = [];

  if (type === 'for') {
    lines.push('for (var i = ' + start + '; i < ' + end + '; i++) {');
    for (var i = start; i < end; i++) {
      lines.push('  [iter ' + (i - start + 1) + ']  i = ' + i);
    }
    lines.push('}');
    lines.push('\nTotal iterations: ' + total);
  } else if (type === 'while') {
    lines.push('var i = ' + start + ';');
    lines.push('while (i < ' + end + ') {');
    var i = start;
    while (i < end) {
      lines.push('  [iter ' + (i - start + 1) + ']  i = ' + i);
      i++;
    }
    lines.push('  i++;');
    lines.push('}');
    lines.push('\nTotal iterations: ' + total);
  } else if (type === 'forof') {
    var arr = [];
    for (var j = start; j < end; j++) arr.push(j);
    lines.push('const arr = ' + JSON.stringify(arr) + ';');
    lines.push('for (const item of arr) {');
    arr.forEach(function(v, idx) {
      lines.push('  [iter ' + (idx + 1) + ']  item = ' + v);
    });
    lines.push('}');
    lines.push('\nArray length: ' + arr.length);
  }

  out.textContent = lines.join('\n');
  out.className = 'output-area';
  flashOutput('loop-output');
  showToast('Loop Completed!', total + ' iterations executed using the ' + type + ' loop.', 'success');
}

function clearLoop() {
  document.getElementById('loop-output').textContent = 'Output will appear here...';
  document.getElementById('loop-output').className = 'output-area empty';
  showToast('Cleared', 'Output has been reset.', 'info');
}