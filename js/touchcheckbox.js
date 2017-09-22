var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

function openModal(defaultTime) {
  let day = defaultTime.substr(0, 3);
  let timeStamp = defaultTime.substr(3);
  $(".main-select option[value=" + timeStamp + "]").prop("selected", "selected");
  let upperDay = day.charAt(0).toUpperCase() + day.slice(1);
  document.getElementById("date-select").innerHTML = upperDay;
  modal.style.display = "block";
}

function cancelModal() {
  let endDay = document.getElementById("date-select").innerHTML; //Sun
  let startTime = document.getElementsByClassName('start-time')[0].value; //2am
  let timeId = endDay.charAt(0).toLowerCase() + endDay.slice(1) + startTime; //sun2am
  document.getElementById(timeId).nextElementSibling.style.background = "transparent";
  modal.style.display = "none";
}

function confirmModal() {
  let timeArray = ['12am', '1230am', '1am', '130am', '2am', '230am', '3am', '330am', '4am', '430am', '5am', '530am', '6am', '630am',
    '7am', '730am', '8am', '830am', '9am', '930am', '10am', '1030am', '11am', '1130am', '12pm', '1230pm', '1pm', '130pm',
    '2pm', '230pm', '3pm', '330pm', '4pm', '430pm', '5pm', '530pm', '6pm', '630pm', '7pm', '730pm', '8pm', '830pm', '9pm', '930pm',
    '10pm', '1030pm', '11pm', '1130pm'
  ];
  //get it from the array and loop til end of array
  let startTime = document.getElementsByClassName('start-time')[0].value; //2am
  let endTime = document.getElementsByClassName('end-time')[0].value; //4am
  let endDay = document.getElementById("date-select").innerHTML; //sun

   //check that end greater than start time
  if(timeArray.indexOf(startTime) >= timeArray.indexOf(endTime)) {
    alert('End Time Must Be Later than Start Time!')
    return false;
  }
  
  for (var i = 0; i < timeArray.length; i++) {
    if (timeArray[i] === startTime) {
      for (var j = i; j < timeArray.length; j++) {
        if (timeArray[j] !== endTime) {
          let timeId = endDay.charAt(0).toLowerCase() + endDay.slice(1) + timeArray[j];
          document.getElementById(timeId).nextElementSibling.style.background = "blue";
        } else {
          modal.style.display = "none";
          return false;
        }
      }
    }
  }
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}