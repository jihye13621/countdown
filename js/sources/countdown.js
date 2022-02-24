
let interval;
function Countdown(birthdayClicked) {
// (function () {
    // $('#clockdiv').html(`<div id="countdown">
    //     <ul>
    //         <li class="time-info"><span id="days"></span>days</li>
    //         <li class="time-info"><span id="hours"></span>Hours</li>
    //         <li class="time-info"><span id="minutes"></span>Minutes</li>
    //         <li class="time-info"><span id="seconds"></span>Seconds</li>
    //     </ul>
    // </div>
    // <div id="content" class="emoji">
    //     <span>🥳</span>
    //     <span>🎉</span>
    //     <span>🎂</span>
    // </div>`);
    

    if (birthdayClicked) {
        birthdayFormatted = birthdayClicked + '/';
    }
    
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let dayMonthValue;
    if (birthdayClicked) {
        dayMonthValue = birthdayClicked + '/';
    } else {
        dayMonthValue = "12/24/";
    }

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = dayMonthValue,
        // dayMonth = "12/24/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime();
    interval = setInterval(function() {

        const now = new Date().getTime(),
        distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        let percentageCalc = Math.round(((distance/day)/365)*100);
        $('.percent-years').html(percentageCalc+'%').css('width', percentageCalc+'%'); 

        //do something later when date is reached
        if (distance < 0) {
            $('#message-birthday').show();
            document.getElementById("message-birthday").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(interval);

            moreConfetti();

        }
    }, 0)
} 
Countdown();    