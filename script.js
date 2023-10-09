const height = document.getElementById('height');
const weight = document.getElementById('weight');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
const form = document.querySelector('form');

function getBMI(e) {
    e.preventDefault()

    if(height.value === "" || weight.value === ""){
        result.innerText = `Please input your parameters above.`
        result.style.backgroundColor = "#544c03"
    }

    const heightInMeters = height.value / 100;
    const BMI = (weight.value / Math.pow(heightInMeters, 2)).toFixed(2);

    if(BMI <= 18.4){
        result.innerText = `Your BMI is ${BMI}, which is underweight.`
        result.style.backgroundColor = "#f5d787"
    }else if(BMI >= 18.5 && BMI <= 24.9){
        result.innerText = `Your BMI is ${BMI}, which is normal.`
        result.style.backgroundColor = "#04ba19"
    }else if(BMI >= 25.0 && BMI <= 39.9){
        result.innerText = `Your BMI is ${BMI}, which is overweight.`
        result.style.backgroundColor = "#f57125"
    }else if(BMI >= 40){
        result.innerText = `Your BMI is ${BMI}, which is Obese.`
        result.style.backgroundColor = "#fa0505"
    }

    // console.log(BMI);
}

function resetCalculator() {
    height.value = "";
    weight.value = "";
    result.innerText = `Your BMI will be displayed here.`
    result.style.backgroundColor = "#007bff"
}

form.addEventListener('submit', getBMI);
reset.addEventListener('click', resetCalculator);