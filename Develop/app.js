// local storage
// moments library
// conditionals

$(document).ready(function (){
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentTime").text(currentTime);


    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    
    times.forEach (time => {
        const timeCheck = window.localStorage.getItem(time)
        console.log(timeCheck)

        if(timeCheck === null){
            window.localStorage.setItem(time, "")
        } else if (timeCheck.length > 0){
            $(`#${time}`).attr("value", window.localStorage.getItem(time))
        }

    })

    $("form").on("submit", function (e){
        e.preventDefault();
        console.log(e.target.querySelector("input").getAttribute("id"));
        console.log(e.target.querySelector("input").value);
    })

});