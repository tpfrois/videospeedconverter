const convertButton = document.getElementById("convert");

convertButton.addEventListener("click", function (e) {
  e.preventDefault();

  // get data values
  let videoHours = document.getElementById("videoHours").value;
  let videoMinutes = document.getElementById("videoMinutes").value;
  let videoSeconds = document.getElementById("videoSeconds").value;
  let selectedSpeed = document.querySelector('input[name="speeds"]:checked')
    .value;
  // preventing invalid length values
  if (videoHours == "" && videoMinutes == "" && videoSeconds == "") {
    alert("Please insert the video length to convert");
  } else {
    convertVideoLength(videoHours, videoMinutes, videoSeconds, selectedSpeed);
  }
});

function convertVideoLength(hours, minutes, seconds, speed) {
  // getting length in seconds
  var lengthInSeconds =
    Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

  if (lengthInSeconds <= 0) {
    alert("Video length has to be grater than 0 ");
    return false;
  }

  var convertedLengthInSeconds = lengthInSeconds / speed;

  // converting length back to hh:mm:ss
  var convertedHours = parseInt(convertedLengthInSeconds / 3600);
  var convertedMinutes = parseInt((convertedLengthInSeconds / 60) % 60);
  var convertedSeconds = parseInt(convertedLengthInSeconds % 60);

  renderConvertedLength(convertedHours, convertedMinutes, convertedSeconds);
}

function renderConvertedLength(hours, minutes, seconds) {
  // reveal results div
  document.querySelector(".results").style.opacity = 1;
  // change values
  document.getElementById("hour").innerHTML = `${hours}h`;
  document.getElementById("minutes").innerHTML = `${minutes}M`;
  document.getElementById("seconds").innerHTML = `${seconds}S`;
}
