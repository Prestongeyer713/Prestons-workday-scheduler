$(document).ready(function () {
    //display date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".hour").val(); 
        var time = $(this).siblings(".hour").val("data-index");
        
    

        localStorage.setItem(time, text);
    })


    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
    // check the time of day to change colors of each collum.
    var d = new Date();
    var hours = d.getHours();
    function checkPresent() {

    for (time = 6; time < 23; time ++) {
        var timeblock = $("#" + time);
        console.log($("#" + time))

        if(time == hours) {
            timeblock.addClass("present")
        } else if (time < hours) {
            timeblock.addClass("past")
        } else {
            timeblock.addClass("future")
        }
        $("#" + time).val(localStorage.getItem("" + time));

    }
}
checkPresent();
})
// trash button to clear values in time slots
    function trashEvent(event) {
        
        var hourId = $(this).siblings("input").attr("id");
        
        localStorage.removeItem(hourId);
        $(this).siblings("input[type='text']").val(" ");

    }

    $(".trashBtn").on("click", trashEvent) 