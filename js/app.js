

function calculate(){
  
  // 1. Get value from the sliders and display them with "oninput element" on html

  let weigth = parseInt(document.getElementById('weigth').value);
  document.getElementById('weigth-value').textContent = weigth + ' kg';
  let height = parseInt(document.getElementById('height').value);
  document.getElementById('height-value').textContent = height + ' cm';

  // 2. Calculate to BMI
  
}

calculate();