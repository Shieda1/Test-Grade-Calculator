// https://www.omnicalculator.com/other/test-grade

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const percentageRadio = document.getElementById('percentageRadio');
const pointsQuestionsRadio = document.getElementById('pointsQuestionsRadio');
const wrongRadio = document.getElementById('wrongRadio');
const correctRadio = document.getElementById('correctRadio');

let percentage;
let pointsQuestions = v1;
let wrong = v2;
let correct = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

percentageRadio.addEventListener('click', function() {
  variable1.textContent = '# Points / Questions';
  variable2.textContent = '# Wrong';
  variable3.textContent = '# Correct';
  pointsQuestions = v1;
  wrong = v2;
  correct = v3;
  result.textContent = '';
});

pointsQuestionsRadio.addEventListener('click', function() {
  variable1.textContent = 'Percentage';
  variable2.textContent = '# Wrong';
  variable3.textContent = '# Correct';
  percentage = v1;
  wrong = v2;
  correct = v3;
  result.textContent = '';
});

wrongRadio.addEventListener('click', function() {
  variable1.textContent = 'Percentage';
  variable2.textContent = '# Points / Questions';
  variable3.textContent = '# Correct';
  percentage = v1;
  pointsQuestions = v2;
  correct = v3;
  result.textContent = '';
});

correctRadio.addEventListener('click', function() {
  variable1.textContent = 'Percentage';
  variable2.textContent = '# Points / Questions';
  variable3.textContent = '# Wrong';
  percentage = v1;
  pointsQuestions = v2;
  wrong = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(percentageRadio.checked)
    result.textContent = `Percentage = ${computepercentage().toFixed(2)}`;

  else if(pointsQuestionsRadio.checked)
    result.textContent = `# Points / Questions = ${computepointsQuestions().toFixed(2)}`;

  else if(wrongRadio.checked)
    result.textContent = `# Wrong = ${computewrong().toFixed(2)}`;

  else if(correctRadio.checked)
    result.textContent = `# Correct = ${computecorrect().toFixed(2)}`;
})

// calculation

// percentage = (correct / (correct + wrong)) * (1 / pointsQuestions)

function computepercentage() {
  return (Number(correct.value) / (Number(correct.value) + Number(wrong.value))) * (1 / Number(pointsQuestions.value));
}

function computepointsQuestions() {
  return 1 / (Number(percentage.value) / (Number(correct.value) / (Number(correct.value) + Number(wrong.value))));
}

function computewrong() {
  return (Number(correct.value) /( Number(percentage.value) / (1 / Number(pointsQuestions.value)))) - Number(correct.value);
}

function computecorrect() {
  return (Number(pointsQuestions.value) - Number(wrong.value)) / Number(percentage.value);
}