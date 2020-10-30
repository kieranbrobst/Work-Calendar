

$(document).ready(function (){
    const currentTime = moment().format('dddd, MMMM Do, h:mm a');
    $("#currentDay").text(currentTime);


    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    
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

        if(timeCheck === null){
            window.localStorage.setItem(time, "");
        } else if (timeCheck.length > 0) {
            $(`#${time}`).attr("value", window.localStorage.getItem(time))
        }

    })

    $("form").on("submit", function (e){
        e.preventDefault();
        const time = e.target.querySelector("input").getAttribute("id");
        const text = e.target.querySelector("input").value;

        window.localStorage.setItem(time, text)
    })

});