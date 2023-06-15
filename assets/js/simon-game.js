// Get current date
var currentDate = new Date();

// Get DOM elements
var yearSelect = document.getElementById('year');
var monthSelect = document.getElementById('month');
var daySelect = document.getElementById('day');
var resultDiv = document.getElementById('result');

// Populate the year options from 1900 to the current year
const currentYear = currentDate.getFullYear();
for (var i = currentYear; i >= 1900; i--) {
    var option = document.createElement('option');
    option.value = i.toString();
    option.text = i.toString();
    console.log(option)
    yearSelect.appendChild(option);
}

// Update the number of days based on the selected year and month
function updateDays() {
    var selectedYear = yearSelect.value;
    var selectedMonth = monthSelect.value;
    var daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

    // Clear existing day options
    daySelect.innerHTML = '';

    // Populate the day options based on the selected month and year
    for (var i = 1; i <= daysInMonth; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }
}

// Calculate the difference between the selected date and the current date
function calculateDifference() {
    var selectedYear = parseInt(yearSelect.value);
    var selectedMonth = parseInt(monthSelect.value);
    var selectedDay = parseInt(daySelect.value);

    // Check if a valid date is selected
    if (isNaN(selectedYear) || isNaN(selectedMonth) || isNaN(selectedDay)) {
        resultDiv.textContent = 'Please select a valid date.';
        return;
    }

    // Adjust the selected date if it's invalid (e.g., Feb 30)
    var maxDay = new Date(selectedYear, selectedMonth, 0).getDate();
    if (selectedDay > maxDay) {
        selectedDay = maxDay;
        daySelect.value = selectedDay;
    }

    var selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
    var differenceInDays = Math.floor((currentDate - selectedDate) / (1000 * 60 * 60 * 24));
    var differenceInYears = (currentDate - selectedDate) / (1000 * 60 * 60 * 24 * 365.25);

    // Display the result
    if (selectedMonth === currentDate.getMonth() + 1 && selectedDay === currentDate.getDate()) {
        var greetings = [
            'Happy Birthday [English]',
            'Joyeux anniversaire! [French]',
            'Alles Gute zum Geburtstag! [German]',
            'Buon compleanno! [Italian]',
            'Penblwydd hapus! [Welsh]',
            'qoSlIj DatIvjaj [Klingon]',
            'Chestit Rozhden den! [Bulgarian]',
            'Shēngrì kuàilè! [Chinese]',
            'Tillykke med fødselsdagen! [Danish]',
            'Hyvää syntymäpäivää! [Finnish]',
            'janmadin mubaarak! [Hindi]',
            'Otanjōbiomedetōgozaimasu! [Japanese]',
            'تولدت مبارک! [Persian]'
        ];
        var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        resultDiv.innerHTML = 'Happy Birthday! ' + randomGreeting;
    } else {
        resultDiv.innerHTML = 'Difference in days: ' + differenceInDays + '<br>' +
            'Difference in years: ' + differenceInYears.toFixed(2);
    }
}
