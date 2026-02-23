// selection.js — for topics/selection.html

function runGrade() {
  var score = parseFloat(document.getElementById('score-input').value);
  var out = document.getElementById('grade-output');

  if (isNaN(score)) {
    out.textContent = '⚠ Please enter a valid number.';
    out.className = 'output-area error';
    return;
  }
  if (score < 0 || score > 100) {
    out.textContent = '⚠ Score must be between 0 and 100.';
    out.className = 'output-area error';
    return;
  }

  var grade, remark;
  if (score >= 96) {
    grade = 'A+'; remark = 'Excellent! Outstanding work!';
  } else if (score >= 90) {
    grade = 'A';  remark = 'Excellent!';
  } else if (score >= 85) {
    grade = 'B+'; remark = 'Very Good!';
  } else if (score >= 80) {
    grade = 'B';  remark = 'Good job!';
  } else if (score >= 75) {
    grade = 'C';  remark = 'Passed.';
  } else if (score >= 70) {
    grade = 'D';  remark = 'Below average. Study more!';
  } else {
    grade = 'F';  remark = 'Failed. Keep trying!';
  }

  out.textContent = 'if / else if chain evaluated:\n\nScore:    ' + score + '\nGrade:    ' + grade + '\nRemark:   ' + remark + '\n\nCode run:\nif (score >= 90)  → ' + (score >= 90) + '\nelse if (score >= 80) → ' + (score < 90 && score >= 80) + '\nelse if (score >= 75) → ' + (score < 80 && score >= 75);
  out.className = 'output-area';
}

function clearGrade() {
  document.getElementById('grade-output').textContent = 'Enter a score and click Check Grade...';
  document.getElementById('grade-output').className = 'output-area empty';
}