let dom = document

const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"

]

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"

]


let timeElement = dom.getElementById('time');
let dateElement = dom.getElementById('date');
let is24HourFormat = true;

function getTimeString(date, is24HourFormat) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let timeFormat = is24HourFormat ? '24-hour' : '12-hour';

    if (is24HourFormat) {
        return `${formatTime(hours)}:${formatTime(minutes)}`;
    } else {
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return`${formatTime(hours)}:${formatTime(minutes)} ${amPm}`;
    }
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

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

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

updateTime();
setInterval(updateTime, 1000);

let toggleButtons = document.getElementsByName('clock-toggle');
for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('change', function() {
        is24HourFormat = this.id === '24-hour';
        updateTime();
    });
}


// //
// function getTimeString(date, is24HourFormat) {
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let timeFormat = is24HourFormat ? '24-hour' : '12-hour';
//
//     if (is24HourFormat) {
//         return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
//     } else {
//         let amPm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12 || 12;
//         return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${amPm}`;
//     }
// }
//
// function formatTime(time) {
//     return time.toString().padStart(2, '0');
// }
//
// function getDateInfo(date) {
//     let day = date.toLocaleString('en-US', { weekday: 'long' });
//     let month = date.toLocaleString('en-US', { month: 'long' });
//     let dayOfMonth = date.getDate();
//     let year = date.getFullYear();
//     return `${day}, ${month} ${dayOfMonth}, ${year}`;
// }
//
// function updateTime() {
//     let now = new Date();
//     let timeString = getTimeString(now, is24HourFormat);
//     let dateString = getDateInfo(now);
//
//     timeElement.textContent = timeString;
//     dateElement.textContent = dateString;
// }
//
// let timeElement = document.getElementById('time');
// let dateElement = document.getElementById('date');
// let is24HourFormat = true;
//
// updateTime();
// setInterval(updateTime, 1000);
//
// let toggleButtons = document.getElementsByName('clock-toggle');
// for (let i = 0; i < toggleButtons.length; i++) {
//     toggleButtons[i].addEventListener('change', function() {
//         is24HourFormat = this.id === '24-hour';
//         updateTime();
//     });
// }
