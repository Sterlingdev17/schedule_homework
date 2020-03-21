
console.log("hooked up"); // see if jS is connected,
$(document).ready(function () {

    var areatext = ["#t9", "#t10", "#t11", "#t12", "#t13", "#t14", "#t15", "#t16", "#t17"];

    // put today time on the dashboard
    setInterval(function () {
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"))
    }, 1000)


    // color code past present and future
    // check the time of the day to assign color
    var d = new Date();
    var currentHours = d.getHours()

    console.log(currentHours);


    $(".save").click(function (e) {
        // prevent page from refreshing
        e.preventDefault();
        console.log("hello")
        // making local storage
        var textareaElement = $(this).siblings(".col-md-10");
        var activities = textareaElement.val()
        var keys = $(this).attr("id");
        localStorage.setItem(keys, activities)

    })
    // 

    for (var i = 0; i < areatext.length; i++) {
        var data = $(areatext[i]).attr("data-time");
        var activities = localStorage.getItem(data)
        $("#t" + data).val(activities);
        data = parseInt(data);

        // check for future color
        if (currentHours < data) {
            $(areatext[i]).addClass("future");

        }
        // check for present colro
        if (currentHours === data) {
            $(areatext[i]).addClass("present");

        }
        // check for past color 
        if (currentHours > data) {
            $(areatext[i]).addClass("past");

        }
    }

})

// 