var pHour = 1;
var pMin = 30;

var plus = (pHour * 3600000) + (pMin * 60000);
var deadline = Date.now() + plus;
var display = document.querySelector('#countdown');

function formatTime (milliseconds) {
  var seconds = (milliseconds / 1000).toFixed(0);
  var minutes = Math.floor(seconds / 60);
  var hours = '';

  seconds = Math.floor(seconds % 60);

  seconds = (seconds >= 10) ? seconds : '0' + seconds;

  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes = minutes - (hours * 60);
    minutes = (minutes >= 10) ? minutes : '0' + minutes;
  }

  if (hours != '') {
    return hours + ':' + minutes + ':' + seconds;
  }

  return minutes + ':' + seconds;
}

function countDown(time, element) {
  var remainingMilliseconds = time - Date.now();

  if (remainingMilliseconds > 0) {
    element.innerHTML = (
      '<strong>' + formatTime(remainingMilliseconds) + '</strong>'
    );
  } else {
    element.innerHTML = '<strong>Countdown ended</strong>';
  }
