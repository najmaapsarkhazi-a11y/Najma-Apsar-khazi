

let BMIbtn = document.getElementById("BMIbtn");
let averageBtn = document.getElementById("averageBtn");


let output = document.getElementById("output");



BMIbtn.addEventListener("click", function() {

  
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

  
    if (weight <= 0 || height <= 0) {
        output.innerHTML = "Please enter a valid weight and height.";
        return;
    }


    let BMI = weight / (height * height);

    // Display result
    output.innerHTML = "Your BMI is: " + BMI.toFixed(2);

});



averageBtn.addEventListener("click", function() {


    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);


    let average = (num1 + num2 + num3) / 3;

 
    output.innerHTML = "The average is: " + average.toFixed(2);

});
