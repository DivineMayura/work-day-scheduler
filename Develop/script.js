var may0 = $("#may-0").text();
var may1 = $("#may-1").text();
var may2 = $("#may-2").text();
var may3 = $("#may-3").text();
var may4 = $("#may-4").text();
var may5 = $("#may-5").text();
var may6 = $("#may-6").text();
var may7 = $("#may-7").text();
var may8 = $("#may-8").text();
var may9 = $("#may-9").text();
var may10 = $("#may-10").text();
var may11 = $("#may-11").text();



//for displaying the date at the top of the webpage
var currentDay = $("#currentDay");
currentDay.text(today.format("MMM Do, YYYY"));



function clock() {
var timekeepr = 0;
var time = setInterval(function() {
mayarr = [may0,may1,may2,may3,may4,may5,may6,may7,may8,may9,may10,may11];

for (i=0; i<12; i++) {
    //I need all of them to be numbers, so I parseInt
var x = parseInt(mayarr[i]);
var y = parseInt(x-1);
var z = parseInt(moment().format("H"));


if ((x == z) || (y == z)) {
var w = "#may-" + [i]
    $(w).parent().parent().addClass("present")
}



}








if(timekeepr !== 0) {window.location.reload(); clearInterval(time); } //don't know why I need this yet, gonna look at it later
}, 1000);
}


clock();














// $("#may-button").on("click", savebutton());