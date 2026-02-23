const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const heightInput = document.querySelector('#height').value;
  const weightInput = document.querySelector('#weight').value;

  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);

  const res = document.querySelector('#results');

  if (heightInput === '' || height < 0 || isNaN(height)) {
    res.innerHTML = 'Please give valid height';
    return ;
  }

  if (weightInput === '' || weight < 0 || isNaN(weight)) {
    res.innerHTML = 'Please give valid weight';
    return ;
  }

  const bmi = (weight / (height / 100) ** 2).toFixed(2);
  res.innerHTML = `Your BMI is ${bmi}`;
});
 