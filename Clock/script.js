let dayName = document.getElementById("day_name");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(() => {
  let date = new Date();

  // Date
  dName = dayNames[date.getDay()];
  dayName.innerHTML = "<h3>" + dName + "</h3>";
  day.innerHTML = "<h3>" + date.getDate() + "</h3>";
  monthName = monthNames[date.getMonth()];
  month.innerHTML = "<h3>" + monthName + "</h3>";
  year.innerHTML = "<h3>" + date.getFullYear() + "</h3>";

  // Time
  hour.innerHTML = "<h1>" + date.getHours() + ":</h1>";
  minute.innerHTML = "<h1>" + date.getMinutes() + ":</h1>";
  second.innerHTML = "<h1>" + date.getSeconds() + "</h1>";
}, 1000);
