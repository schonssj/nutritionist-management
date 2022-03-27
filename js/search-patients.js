var addButton = document.querySelector("#search-patients");

addButton.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var ajaxError = document.querySelector("#ajax-error");

        if (xhr.status == 200) {
            ajaxError.classList.add("invisible");
            
            var response = xhr.responseText;
            var patients = JSON.parse(response);

            patients.forEach(function(patient) {
                let parsedpatient = {
                    name: patient.nome,
                    weight: patient.peso,
                    height: patient.altura,
                    fat: patient.gordura,
                    bmi: patient.imc
                }
                addPatientsOnTable(parsedpatient);
            });
        } else {
            ajaxError.classList.remove("invisible");
        }
    });

    xhr.send();
});