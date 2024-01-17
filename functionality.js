let appointments = [];
let appointmentId = 0;

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var patientInfo = {
        id: ++appointmentId,
        name: document.getElementById('patientName').value,
        age: document.getElementById('patientAge').value,
        gender: document.getElementById('patientGender').value,
        cause: document.getElementById('admitCause').value,
        weight: document.getElementById('patientWeight').value,
        height: document.getElementById('patientHeight').value,
        fever: document.getElementById('fever').checked ? "Yes" : "No",
        type: document.getElementById('appointmentType').value
    };

    bookAppointment(patientInfo);
    displayAppointments();
});

function bookAppointment(patientInfo) {
    appointments.push(patientInfo);
    appointments.sort((a, b) => {
        if (a.type === b.type) {
            return a.id - b.id;
        }
        return (a.type === 'emergency') ? -1 : (b.type === 'emergency') ? 1 : (a.type === 'phoneCall') ? -1 : 1;
    });
}

function displayAppointments() {
    var display = '<h3>Appointment Queue:</h3>';
    appointments.forEach((patient, index) => {
        display += `<div class='appointment'>
                        <p><strong>Token:</strong> ${index + 1}</p>
                        <p><strong>Name:</strong> ${patient.name}</p>
                        <p><strong>Age:</strong> ${patient.age}</p>
                        <p><strong>Gender:</strong> ${patient.gender}</p>
                        <p><strong>Cause for Admitting:</strong> ${patient.cause}</p>
                        <p><strong>Weight:</strong> ${patient.weight} kg</p>
                        <p><strong>Height:</strong> ${patient.height} cm</p>
                        <p><strong>Fever:</strong> ${patient.fever}</p>
                        <p><strong>Appointment Type:</strong> ${patient.type}</p>
                    </div>`;
    });
    document.getElementById('appointmentInfo').innerHTML = display;
}

