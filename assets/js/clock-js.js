<<<<<<< HEAD
let dom = document


// let blink = dom.getElementById('colon')
// const blinkInterval = 1000 //every second
// let hourInt = dom.getElementById('hour')
// let minuteInt = dom.getElementById('minute')
// let dayString = dom.getElementById('day')
// let monthString = dom.getElementById('month')
// let dayDateNumber = dom.getElementById('date')
=======
let blink = dom.getElementById('colon')
const blinkInterval = 1000 //every second
let hourInt = dom.getElementById('hour')
let minuteInt = dom.getElementById('minute')
let dayString = dom.getElementById('day')
let monthString = dom.getElementById('month')
let dayDateNumber = dom.getElementById('date')


function getTimeString(date, is24HourFormat) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormat = is24HourFormat ? '24-hour' : '12-hour';

    if (is24HourFormat) {
        return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    } else {
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${amPm}`;
    }
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

function getDateInfo(date) {
    let day = date.toLocaleString('en-US', { weekday: 'long' });
    let month = date.toLocaleString('en-US', { month: 'long' });
    let dayOfMonth = date.getDate();
    let year = date.getFullYear();
    return `${day}, ${month} ${dayOfMonth}, ${year}`;
}

function updateTime() {
    let now = new Date();
    let timeString = getTimeString(now, is24HourFormat);
    let dateString = getDateInfo(now);

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}



let timeElement = document.getElementById('time');
let dateElement = document.getElementById('date');
let is24HourFormat = true;

updateTime();
setInterval(updateTime, 1000);

let toggleButtons = document.getElementsByName('clock-toggle');
for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('change', function() {
        is24HourFormat = this.id === '24-hour';
        updateTime();
    });
}


let dom = document


>>>>>>> origin/2nd_draft


const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"

    ]

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"

]


<<<<<<< HEAD
// // blink on
// function show(){
//     if(blink)
//         blink.style.visibility = "visible"
// }
// function hide(){
//     if(blink)
//         blink.style.visibility = "hidden"
// }
//
// setInterval(function ()
// {
//     show();
//     setTimeout(hide, blinkInterval / 2);
// }, blinkInterval);
//
// function addZero(number){
//     if (number < 10){
//         return '0' + number.toString()
//     } else {
//         return number.toString()
//     }
// }
//
//
// function clockTime(){
//     let currentTime = new Date()
//     let hour = currentTime.getHours()
//     let min = currentTime.getMinutes()
//     let day = currentTime.getDay()
//     let date = currentTime.getDate()
//     let month = currentTime.getMonth()
//
//     min = addZero(min)
//
//    /* let timeFormat = dom.querySelector('input[name="timeFormat"]:checked').value
//
//     if (timeFormat === '12-hour') {
//         hour = hour % 12 || 12
//          }
//     */
//
//
//     hourInt.innerHTML = hour.toString()
//     minuteInt.innerHTML = min.toString()
//     dayString.innerHTML = days[day]
//     dayDateNumber.innerHTML = date.toString()
//     monthString.innerHTML = months[month]
//
//
// }
//
// clockTime()

function getTimeString(date, is24HourFormat) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    let timeFormat = is24HourFormat ? '24-hour' : '12-hour';

    if (is24HourFormat) {
        return `${formatTime(hours)}:${formatTime(minutes)}`;
    } else {
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${formatTime(hours)}:${formatTime(minutes)}: ${amPm}`;
    }
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

function getDateInfo(date) {
    let day=days[date.getDay()]
    let month = days[date.getMonth()];
    let dayOfMonth = date.getDate();
    return `${day}, ${month} ${dayOfMonth},`;
}

function updateTime() {
    let now = new Date();
    let timeString = getTimeString(now, is24HourFormat);
    let dateString = getDateInfo(now);

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

let timeElement = dom.getElementById('time');
let dateElement = dom.getElementById('date');
let is24HourFormat = true;

updateTime();
setInterval(updateTime, 1000);

let toggleButtons = document.getElementsByName('clock-toggle');
for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('change', function() {
        is24HourFormat = this.id === '24-hour';
        updateTime();
    });
}
=======
// blink on
function show(){
    if(blink)
        blink.style.visibility = "visible"
}
function hide(){
    if(blink)
        blink.style.visibility = "hidden"
}

setInterval(function ()
{
    show();
    setTimeout(hide, blinkInterval / 2);
}, blinkInterval);

function addZero(number){
    if (number < 10){
        return '0' + number.toString()
    } else {
        return number.toString()
    }
}


function clockTime(){
    let currentTime = new Date()
    let hour = currentTime.getHours()
    let min = currentTime.getMinutes()
    let day = currentTime.getDay()
    let date = currentTime.getDate()
    let month = currentTime.getMonth()

    min = addZero(min)

   /* let timeFormat = dom.querySelector('input[name="timeFormat"]:checked').value

    if (timeFormat === '12-hour') {
        hour = hour % 12 || 12
         }
    */


    hourInt.innerHTML = hour.toString()
    minuteInt.innerHTML = min.toString()
    dayString.innerHTML = days[day]
    dayDateNumber.innerHTML = date.toString()
    monthString.innerHTML = months[month]


}

clockTime()
>>>>>>> origin/2nd_draft
