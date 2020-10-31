
// Calendar function runs
$(document).ready(function (){
    // Moment.js displays the current time & date
    const currentTime = moment().format('dddd, MMMM Do, h:mm a');
    $("#currentDay").text(currentTime);

    // Calendar times in military time
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    
    // Checks if the time is past, present or future
    times.forEach (time => {
        const timeCheck = window.localStorage.getItem(time);
        const currentHour = moment().hour();

        if (currentHour > time) {
            $(`#${time}`).addClass("past")
            $(`#${time}`).attr("disabled", true) 
        } else if (currentHour === time) {
            $(`#${time}`).addClass("present")
        } else {
            $(`#${time}`).addClass("future")
        }
    // Checks for previously set items in local storage
        if(timeCheck === null){
            window.localStorage.setItem(time, "");
        } else if (timeCheck.length > 0) {
            $(`#${time}`).attr("value", window.localStorage.getItem(time))
        }

    })
    // Event prevents default inputs 
    $("form").on("submit", function (e){
        e.preventDefault();
        const time = e.target.querySelector("input").getAttribute("id");
        const text = e.target.querySelector("input").value;
    // Finaly sets the time and text in the calendar local storage
        window.localStorage.setItem(time, text)
    })

});