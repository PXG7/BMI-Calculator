const btn = document.getElementById('calculator');

btn.addEventListener('click', function(){

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == ''|| weight == ''){
        alert('Please fill out the input fields!');
        return;
    }
    
    // BMI = weight in KG / (height in m)

    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);
 
    const result = document.querySelector("#result");
    result.innerHTML = BMI;
    
    let status = "";

     if(BMI < 18.5) {
        status = "Underweight"
        result.style.color = "#3498db"; // Blue
    }
    if(BMI >=18.5 && BMI < 25) {
        status = "Healthy";
         result.style.color ="#2ecc71"; // Green
    }
     if(BMI >= 25 && BMI < 30) {
        status = "Overweight";
         result.style.color = "#f39c12"; // Orange
    }
    if (BMI >= 30) {
        status = "Obese";
         result.style.color = "#e74c3c"; // Red
    }
    document.querySelector(".comment").innerHTML = `Comment: you are <span id="comment">${status}</span> `;
});