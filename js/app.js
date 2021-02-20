

function calculate(){
  
  let bmi;
  let result;
  let category;

  // 1. Get value from the sliders and display them with "oninput element" on html

  let weight = parseInt(document.getElementById('weight').value);
  document.getElementById('weight-value').textContent = weight + ' kg';
  let height = parseInt(document.getElementById('height').value);
  document.getElementById('height-value').textContent = height + ' cm';

  // 2. Calculate to BMI
  bmi = (weight / Math.pow((height/100), 2)).toFixed(1);
  result = document.getElementById('result');
  result.textContent = bmi;

  // 3. Assign a category based on the bmi

  if (bmi < 18.5) {
    category = "Underweight";
  }else if(bmi >= 18.5 && bmi <= 24.9){
    category = "Normal weight";
  }else if(bmi >= 25 && bmi <= 29.9){
    category = "Overweight";
  }else {
    category = "Obese";
  }

  document.getElementById('category').textContent = category;

}

calculate();