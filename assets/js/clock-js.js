let dom = document

// Array containing the names of the days of the week and months
const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"

]
const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"

]

// Get the element with the ID time and date from the DOM

let timeElement = dom.getElementById('time');
let dateElement = dom.getElementById('date');

// Flag indicating whether the time format is 24-hour or 12-hour

let is24HourFormat = true;

// Function to format the time string based on the provided parameters

function getTimeString(date, is24HourFormat) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let timeFormat = is24HourFormat ? '24-hour' : '12-hour';

    if (is24HourFormat) {
        return `${formatTime(hours)}<span class="clock"></span>${formatTime(minutes)}`;
    } else {
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${formatTime(hours)}<span class="clock"></span>${formatTime(minutes)} ${amPm}`;
    }
}

// Function to add leading zeros to a time value if necessary

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

// Function to update the time and date displayed on the web page

function getDateInfo(date) {
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let dayOfMonth = date.getDate();
    return `${day}, ${month} ${dayOfMonth}`;
}

function updateTime() {
    let now = new Date();
    let timeString = getTimeString(now, is24HourFormat);
    let dateString = getDateInfo(now);

    timeElement.innerHTML = timeString;
    dateElement.textContent = dateString;
}



// Update the time and date immediately when the page loads
updateTime();
// Set up a recurring timer to update the time and date every second
setInterval(updateTime, 1000);

// Get all elements with the name clock-toggle
let toggleButtons = document.getElementsByName('clock-toggle');

// Add event listeners to the toggle buttons to handle changes
for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('change', function() {
        // Update the time format based on the selected button
        is24HourFormat = this.id === '24-hour';
        updateTime();
    });
}