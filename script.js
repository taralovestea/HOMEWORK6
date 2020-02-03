// create a variable for hours listed 
var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, ]; // 9am- 8 pm
// create a for loop to show what the current hour is 
for (var item in hours) {
    $(".hours").append( "<P>" + hours[item] + "</p>" );
 }
var startTime = moment('09:00 +0000', 'HH:mm Z'); // 9:00 am UTC
var endTime = moment('20:00 +0000', 'HH:mm Z'); // 8:00 pm UTC
var timeRange = moment().range(startTime, endTime);
var when = moment('2012-05-22 12:32 +0000', 'YYYY-MM-DD HH:mm Z');

// save user input to local storage when they click the submit button 



$(".saveBtn").on("click", function() {
    console.log(JSON.parse(localStorage.getItem("userInput"))); 
}); 
