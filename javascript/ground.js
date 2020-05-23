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
        hour = "0" + hour;
    }
    minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = now.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    // time = hour + ":" + minutes + ":" + seconds + " " + en + " " +
    fullDate =date + " " + months[month] + " " + year;
    // console.log(fullDate);
    document.getElementById("showDate").textContent = fullDate;
}
setInterval(displayDate, 0);


const analog = () => {
    const deg = 6;
    const hr = document.getElementById("hr");
    const mn = document.getElementById("mn");
    const sc = document.getElementById("sc");


    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;

    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(analog, 1000);

const showImage = (event) => {
    let closing,opening,ele;
    var date = new Date();
    const ID = event.target.parentNode.id || event.target.parentNode.parentNode.id;
    
    document.getElementById("image").style.display = "none";
    document.querySelector("hr").style.margin = "2vh 3.5vw";
    document.querySelector("hr").style.display = "none";
    document.getElementById("isOpen").textContent = "";   
    document.getElementById("opening").textContent = "";
    document.getElementById("closing").textContent = "";
    document.getElementById("element").textContent = "";



    if (ID.length === 11){
        closing = "4.30 PM";
        opening = "9.30 AM";
        document.getElementById("isOpen").textContent = "Currently :  Closed";
        if(date.getHours()>9 && date.getHours()<17){
            document.getElementById("isOpen").textContent = "Currently :  Open";
        }
        document.getElementById("element").textContent = "Classroom";
        document.getElementById("opening").textContent = "Opening Time : " + opening;
        document.getElementById("closing").textContent = "Closing Time : " + closing;
        document.querySelector("hr").style.width = "10vw";
        document.querySelector("hr").style.background = "#fff";     
    } else if (ID === "lab") {
        closing = "4.30 PM";
        opening = "9.30 AM";
        document.getElementById("isOpen").textContent = "Currently :  Closed";
        if (date.getHours() > 9 && date.getHours() < 17) {
            document.getElementById("isOpen").textContent = "Currently :  Open";
        }
        document.getElementById("element").textContent = "Lab";
        document.getElementById("opening").textContent = "Opening Time : " + opening;
        document.getElementById("closing").textContent = "Closing Time : " + closing;
        document.querySelector("hr").style.width = "10vw";
        document.querySelector("hr").style.background = "#fff"; 
    } else if (ID === "washroom") {
        closing = "1/0";
        opening = "24 Hours";
        document.getElementById("isOpen").textContent = "Currently :  Feels like Badambadi";
        document.getElementById("element").textContent = "Washroom";
        document.getElementById("opening").textContent = "Open Duration : " + opening;
        // document.getElementById("closing").textContent = "Closing Time : " + closing;
        document.querySelector("hr").style.width = "10vw";
        document.querySelector("hr").style.background = "#fff";
    }else if (ID === "openspace") {
        closing = "Always Open";
        opening = "Always Open";  
        document.getElementById("isOpen").textContent = "Currently :  Open";   
        document.getElementById("element").textContent = "Openspace";
        document.getElementById("opening").textContent = "Opening Time : " + opening;
        document.getElementById("closing").textContent = "Closing Time : " + closing;
        document.querySelector("hr").style.width = "10vw";
        document.querySelector("hr").style.background = "#fff";
    }if (ID === "principal") {
        closing = "04.00 PM";
        opening = "10.00 AM";
        document.getElementById("isOpen").textContent = "Currently :  Closed";
        if (date.getHours() >= 10 && date.getHours() < 16) {
            document.getElementById("isOpen").textContent = "Currently :  Open";
        }
        document.getElementById("element").textContent = "Principal's Room";
        document.getElementById("opening").textContent = "Opening Time : " + opening;
        document.getElementById("closing").textContent = "Closing Time : " + closing;
        document.querySelector("hr").style.width = "10vw";
        document.querySelector("hr").style.background = "#fff";
    }
    else if (ID === "hod") {
        closing = "04.00 PM";
        opening = "10.00 AM";
        document.getElementById("isOpen").textContent = "Currently :  Closed";
        if (date.getHours() >= 10 && date.getHours() < 16) {
            document.getElementById("isOpen").textContent = "Currently :  Open";
        }
        document.getElementById("element").textContent = "H.O.D Room";
        document.getElementById("opening").textContent = "Opening Time : " + opening;
        document.getElementById("closing").textContent = "Closing Time : " + closing;
        document.querySelector("hr").style.width = "10vw";
        document.querySelector("hr").style.background = "#fff";
    } else if (ID === "staff") {
        closing = "Always Open";
        opening = "Always Open";  
        document.getElementById("isOpen").textContent = "Currently :  Open";   
        document.getElementById("element").textContent = "Openspace";
        document.getElementById("opening").textContent = "Opening Time : " + opening;
        document.getElementById("closing").textContent = "Closing Time : " + closing;
        document.querySelector("hr").style.width = "10vw";
        document.querySelector("hr").style.background = "#fff";
    }
    else if (ID === "reading") {
        closing = "06.00 AM";
        opening = "08.00 AM";
        document.getElementById("isOpen").textContent = "Currently :  Open";
        if (date.getHours() < 8 && date.getHours() >= 6) {
            document.getElementById("isOpen").textContent = "Currently :  Closed";
        }
        document.getElementById("element").textContent = "Reading Room";
        document.getElementById("opening").textContent = "Opening Time : " + opening;
        document.getElementById("closing").textContent = "Closing Time : " + closing;
        document.querySelector("hr").style.width = "10vw";
        document.querySelector("hr").style.background = "#fff";
    } else if (ID === "library") {
        closing = "04.00 PM";
        opening = "10.00 AM";
        document.getElementById("isOpen").textContent = "Currently :  Closed";
        if (date.getHours() >= 10 && date.getHours() < 16) {
            document.getElementById("isOpen").textContent = "Currently :  Open";
        }
        document.getElementById("element").textContent = "Academic Section";
        document.getElementById("opening").textContent = "Opening Time : " + opening;
        document.getElementById("closing").textContent = "Closing Time : " + closing;
        document.querySelector("hr").style.width = "10vw";
        document.querySelector("hr").style.background = "#fff";
    }
    else if(event.target.id === "container" || event.target.id === "upperHalf" || event.target.id === "lowerHalf"){
        document.getElementById("element").textContent = "Original Map";
        document.getElementById("element").style.margin = "0";
        document.querySelector("hr").style.margin = "0";
        document.getElementById("image").style.display = "flex";
    }
    
};
document.querySelector("hr").style.background = "none";
document.querySelector(".contain").addEventListener("click",showImage);



