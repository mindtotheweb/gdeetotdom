"use strict";
$( "#Absolut-Logo" ).hover(function() {
  $( this ).attr('src', 'img/Absolut-Logo-blue.svg')
}, function() {
   $( this ).attr('src', 'img/Absolut-Logo.svg')
  }
);


var date = new Date(2017, 7, 24, 0, 0, 0, 0);
var now = new Date();
var day = date - now;
var day = Math.floor( (day/600/6000) / 24);
if (day < 10) {
	$(".content_block__timer___d").text(0);
	$(".content_block__timer___dd").text(day);
} else{
	day = String(day) 
	var mas = day.split("");
	$(".content_block__timer___d").text(mas[0]);
	$(".content_block__timer___dd").text(mas[1]);
}
var dateM = new Date(2017, 7, 26, 0, 0, 0, 0);

function getTimeRemaining(endtime){

  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };

}
function setTime(){
	$(".content_mainBlock__timer___day").text(getTimeRemaining(dateM).days);
	$(".content_mainBlock__timer___clock___h").text(getTimeRemaining(dateM).hours);
	$(".content_mainBlock__timer___clock___m").text(getTimeRemaining(dateM).minutes);
	$(".content_mainBlock__timer___clock___s").text(getTimeRemaining(dateM).seconds);
}
setTime(); // запустите функцию один раз, чтобы избежать задержки
var timeinterval = setInterval(setTime,1000);