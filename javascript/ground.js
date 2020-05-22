function displayDate() {
    var now, months, month, year, date, fullDate, en, hour, minutes, seconds;

    now = new Date();
    //var christmas = new Date(2016, 11, 25);
    date = now.getDate()

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = now.getMonth();

    year = now.getFullYear();
    en = "AM"
    hour = now.getHours();

    if (hour > 12) {
        hour = hour - 12;
        en = "PM"
    }
    if (hour == 0) {
        hour = 12;
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    seconds = now.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    fullDate = hour + ":" + minutes + ":" + seconds + " " + en + " " + date + " " + months[month] + " " + year
    console.log(fullDate);
    document.getElementById("showDate").textContent = fullDate;
}

setInterval(displayDate, 0);
