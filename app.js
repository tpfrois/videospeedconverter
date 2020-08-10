const convertButton = document.getElementById("convert");

convertButton.addEventListener("click", function (e) {
  e.preventDefault();

  // get data values
  let videoLength = document.querySelector("#videoLength").value;
  let selectedSpeed = document.querySelector('input[name="speeds"]:checked')
    .value;
  // preventing invalid length values
  !videoLength || videoLength == "00:00"
    ? alert(
        "Video length must be greater than 0 and HH:MM:SS format to convert"
      )
    : convertVideoLength(videoLength, selectedSpeed);
});

function convertVideoLength(length, speed) {
  // getting length in seconds
  var [hours, minutes, seconds] = length.split(":").map(Number);
  var lengthInSeconds = !seconds
    ? hours * 3600 + minutes * 60
    : hours * 3600 + minutes * 60 + seconds;

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
