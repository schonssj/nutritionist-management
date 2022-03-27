var title = document.querySelector(".title");
title.textContent = "Nutrition";

var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {

    var patient = patients[i];

    var tdWeight = patient.querySelector(".info-weight");
    var weight = tdWeight.textContent;

    var tdHeight = patient.querySelector(".info-height");
    var height = tdHeight.textContent;

    var tdBmi = patient.querySelector(".info-bmi");

    var isWeightValid = validateWeight(weight);
    var isHeightValid = validateHeight(height);

    if (!isWeightValid) {
        isWeightValid = false;
        tdBmi.textContent = "Invalid weight";
        patient.classList.add("invalid-patient");
    }

    if (!isHeightValid) {
        isHeightValid = false;
        tdBmi.textContent = "Invalid height";
        patient.classList.add("invalid-patient");
    }

    if (isWeightValid && isHeightValid) {
        var bmi = calculateBmi(weight, height);
        tdBmi.textContent = bmi;
    }
}

function calculateBmi(weight, height) {
    var bmi = 0;
    bmi = weight / (height * height);

    return bmi.toFixed(2);
}

function validateWeight(weight) {
    if (weight >= 0 && weight <= 1000)
        return true;
    return false;
}

function validateHeight(height) {
    if (height >= 0 && height <= 3.00)
        return true;
    return false;
}