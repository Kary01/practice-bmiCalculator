
function calculate(){
  
  let bmi;
  let result;
  let category;

  // Get value from the sliders and display them with "oninput element" on html

  let weight = parseInt(document.getElementById('weight').value);
  document.getElementById('weight-value').textContent = weight + ' kg';

  let height = parseInt(document.getElementById('height').value);
  document.getElementById('height-value').textContent = height + ' cm';

  // Calculate to BMI
  bmi = (weight / Math.pow((height/100), 2)).toFixed(1);
  result = document.getElementById('result');
  result.textContent = bmi;

  // Assign a category based on the bmi

  if (bmi < 18.5) {
    category = "Underweight";

    // Change the font color based on category

    result.style.color = "#ffc44d";

  }else if(bmi >= 18.5 && bmi <= 24.9){
    category = "Normal weight";
    result.style.color = "#0be881";

  }else if(bmi >= 25 && bmi <= 29.9){
    category = "Overweight";
    result.style.color = "#ff884d";

  }else {
    category = "Obese";
    result.style.color = "#ff5e57";
  }

  document.getElementById('category').textContent = category;
}