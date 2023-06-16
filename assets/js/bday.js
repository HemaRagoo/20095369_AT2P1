let dom = document

// Get current date
const currentDate = new Date();

// Get DOM elements
const yearSelect = dom.getElementById('year');
const monthSelect = dom.getElementById('month');
let daySelect = dom.getElementById('day');
const resultDiv = dom.getElementById('result');

// Populate the year options from 1900 to the current year
const currentYear = currentDate.getFullYear();
let yearOptions = '';
for (let i = currentYear; i >= 1900; i--) {
    yearOptions += '<option value="' + i + '">' + i + '</option>';
}
yearSelect.innerHTML = yearOptions;

// Update the number of days based on the selected year and month
function updateDays() {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = parseInt(monthSelect.value);

    // Clear existing day options
    daySelect.innerHTML = '';

    // Populate the day options based on the selected month and year
    if (selectedYear && selectedMonth) {
        let daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            const option = dom.createElement('option');
            option.value = i.toString();
            option.text = i.toString();
            daySelect.appendChild(option);
        }
    }
}
// Update the number of days in February based on the selected year (leap year or not)
yearSelect.addEventListener('change', updateDays);

// Calculate the difference between the selected date and the current date
function calculateDifference() {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = parseInt(monthSelect.value);
    let selectedDay = parseInt(daySelect.value.toString());

    // Check if a valid date is selected
    if (isNaN(selectedYear) || isNaN(selectedMonth) || isNaN(selectedDay)) {
        resultDiv.textContent = 'Please select a valid date.';
        return;
    }

    // Adjust the selected date if it's invalid (e.g., Feb 30)
    const maxDay = new Date(selectedYear, selectedMonth, 0).getDate();
    if (selectedDay > maxDay) {
        selectedDay = maxDay;
        daySelect.value = selectedDay;
    }

    const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
    const differenceInDays = Math.floor((currentDate - selectedDate) / (1000 * 60 * 60 * 24));
    const differenceInYears = (currentDate - selectedDate) / (1000 * 60 * 60 * 24 * 365.25);

    // Display the result
    resultDiv.innerHTML = 'Difference in days: ' + differenceInDays + '<br>' +
        'Difference in years: ' + differenceInYears.toFixed(2);

    // Display the result
    if (selectedMonth === currentDate.getMonth() + 1 && selectedDay === currentDate.getDate()) {
        const greetings = [
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
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        resultDiv.innerHTML = 'Happy Birthday! ' + randomGreeting;
    } else {
        resultDiv.innerHTML = 'Difference in days: ' + differenceInDays + '<br>' +
            'Difference in years: ' + differenceInYears.toFixed(2);
    }

}
