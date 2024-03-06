
$(document).ready(function () {
  var todaysDate = dayjs().format("dddd, MMMM, D, YYYY");
  $("#currentDay").text(todaysDate);

  var workingHours = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];

  var currentHour = dayjs().hour();
  for (var i = 9; i <= 17; i++) {
    var targetElement = $("#" + workingHours[i - 9]);
    if (i < currentHour) {
      targetElement.addClass("past")
    } else if (i === currentHour) {
      targetElement.addClass("present");
    } else {
      targetElement.addClass("future");
    }
  }

  $(".saveBtn").on("click", function() {
    var timeBlock = $(this).parent().attr("id");
    var userText = $(this).siblings(".description").val();
    var currentDateTime = dayjs().format("dddd, MMMM, D, YYYY");
    $("#currentDay").text(currentDateTime);
    localStorage.setItem(timeBlock, userText);
    console.log(userText)
    console.log(timeBlock)

  })

});
