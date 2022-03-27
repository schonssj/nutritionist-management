var addButton = document.querySelector("#add-patient");
addButton.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#add-form");

    var patient = getFormPatient(form);

    var errors = validatePatient(patient);
    if (errors.length > 0) {
        showErrorMessages(errors);
        return;
    }

    addPatientsOnTable(patient);

    form.reset();

    var errorMessages = document.querySelector("#error-messages");
    errorMessages.innerHTML = "";

});

function getFormPatient(form) {

    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        bmi: calculateBmi(form.weight.value, form.height.value)
    }
    return patient;
}

function buildTr(patient) {
    var patientTr = document.createElement("tr");
    patientTr.classList.add("patient");

    patientTr.appendChild(buildTd(patient.name, "info-name"));
    patientTr.appendChild(buildTd(patient.weight, "info-weight"));
    patientTr.appendChild(buildTd(patient.height, "info-height"));
    patientTr.appendChild(buildTd(patient.fat, "info-fat"));
    patientTr.appendChild(buildTd(patient.bmi, "info-bmi"));

    return patientTr;
}

function buildTd(data, tdClass) {
    var td = document.createElement("td");
    td.classList.add(tdClass);
    td.textContent = data;
    return td;
}

function validatePatient(patient) {

    var errors = [];

    if (patient.name.length == 0)
        errors.push("Name can't be empty");

    if (patient.fat.length == 0)
        errors.push("Fat can't be empty");

    if (patient.weight.length == 0)
        errors.push("Weight can't be empty");

    if (patient.height.length == 0)
        errors.push("Height can't be empty");

    if (!validateWeight(patient.weight))
        errors.push("Invalid weight");

    if (!validateHeight(patient.height))
        errors.push("Invalid height");

    return errors;
}

function showErrorMessages(errors) {
    var ul = document.querySelector("#error-messages");
    ul.innerHTML = "";

    errors.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

function addPatientsOnTable(patient) {
    var patientTr = buildTr(patient);
    var table = document.querySelector("#patients-table");
    table.appendChild(patientTr);
}