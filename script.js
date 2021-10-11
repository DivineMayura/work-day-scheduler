var may0    = $("#may-0");
var may1    = $("#may-1");
var may2    = $("#may-2");
var may3    = $("#may-3");
var may4    = $("#may-4");
var may5    = $("#may-5");
var may6    = $("#may-6");
var may7    = $("#may-7");
var may8    = $("#may-8");
var may9    = $("#may-9");
var may10   = $("#may-10");
var may11   = $("#may-11");
var maybutton = $(".may-button")
var maytext = $(".may-text")
//for displaying the date at the top of the webpage
var currentDay = $("#currentDay");
currentDay.text(moment().format("MMM Do, YYYY"));
var log = console.log();
mayarr = [may0,may1,may2,may3,may4,may5,may6,may7,may8,may9,may10,may11];

function clock() {
var timekeepr = 0;
var time = setInterval(function() {


for (i=0; i<12; i++) {

colorSplash(mayarr);

}

if(timekeepr !== 0) {window.location.reload(); clearInterval(time); } //don't know why I need this yet, gonna look at it later
}, 100);
}
function colorSplash(pointerArr) {
    for (i=0; i<12; i++) {
    var element = pointerArr[i];
    var elementHour = parseInt(pointerArr[i].text());
    var currentHour = parseInt(moment().format("H"));


    if (elementHour < currentHour) {
        element.parent().parent().addClass("past");
    } else if (elementHour === currentHour || elementHour === currentHour +1) {
        element.parent().parent().addClass("present");
    } else {
        element.parent().parent().addClass("future");
    }
    }
}
clock();

    let caterpillar = [ //named it caterpillar because it looks like a caterpillar
        {"name":"2",
         "text": ""},
         {"name":"4",
         "text": ""},
         {"name":"6",
         "text": ""},
         {"name":"8",
         "text": ""},
         {"name":"10",
         "text": ""},
         {"name":"12",
         "text": ""},
         {"name":"14",
         "text": ""},
         {"name":"16",
         "text": ""},
         {"name":"18",
         "text": ""},
         {"name":"20",
         "text": ""},
         {"name":"22",
         "text": ""},
         {"name":"24",
         "text": ""},
    ]

    function saveit(event) {
        let maybutton = $(event.target);
        let textContent = maybutton.parent().children().children('.camelia').val();//camelia is the text area
        let time = maybutton.parent().children().children('.orchid').text();//orchid is the time

        // console.log(textContent); //expected string
        // console.log(time);  //expected number

        for (let i = 0; i < caterpillar.length; i++) {
          if (time === caterpillar[i].name) {
            caterpillar[i].text = textContent;
            localStorage.setItem('storageBox', JSON.stringify(caterpillar));
            // console.log(caterpillar[i].name);
            // console.log(caterpillar[i].text);
            // console.log(textContent);
          }
        }
      }

      function getcaterpillar(){
        var retrievedstorage = JSON.parse(localStorage.getItem('storageBox'));
        if (retrievedstorage == null) {
            return;
        }
        for (let i = 0; i < retrievedstorage.length; i++){
            mayarr[i].parent().parent().children().children('.camelia').val(retrievedstorage[i].text);
        }}

getcaterpillar()

$(".row").on("click", ".may-button", saveit);