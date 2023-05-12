/************************************** 
global variables
**************************************/

function addEventHandlers()
{
  let saveButtenE1s=document.querySelectorAll(".saveButton");
  saveButtenE1s.forEach(element => {
    element.addEventListener("click",saveButtonClick);
  });

  let calendarButtonE1s=document.querySelectorAll(".calendarButton");
  calendarButtonE1s.forEach(element => {
    element.addEventListener("click",calendarButtonClick);
  });
  let viewButtonE1s=document.querySelectorAll(".viewButton");
  viewButtonE1s.forEach(element => {
    element.addEventListener("click",viewButtonClick);
  });
}

/************************************** 
Event handler for viewButtonClick
**************************************/
function displayDetailArea(row) {
  
  /*************************************
  find photo in eventlist and update detail photo
  **************************************/
  let photoListE1s=document.querySelectorAll("#stellarEventPhoto");
  let photoURL=photoListE1s[row].innerHTML;
  let detailPhotoEl = document.querySelector("#detailPhoto")
  detailPhotoEl.setAttribute("src",photoURL);  
  
  /*************************************
  find info in eventlist and update detail info
  **************************************/
  let infolistEls=document.querySelectorAll("#stellarEventInfo");
  let info=infolistEls[row].innerHTML
  let detailInfoEl = document.querySelector("#detailInfo")
  detailInfoEl.innerHTML=info;//setAttribute("src",photo);  
}

/************************************** 
Event handler for viewButtonClick
**************************************/
function viewButtonClick(event) {
  displayDetailArea(event.currentTarget.value - 1); 
}
/************************************** 
Event handler for saveButtonClick
**************************************/
function saveButtonClick(event) {
  const eventId = event.currentTarget.value;
  console.log('currentUserId:', currentUserId);
  console.log('eventId:', eventId);
  addUserEvent(currentUserId, eventId);
}

function addUserEvent(userId, eventId) {
  fetch('/event/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, event_id: eventId }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Event saved:', data);
    })
    .catch(function (error) {
      console.error('Error saving event:', error);
    });
}

/************************************** 
Event handler for calendarButtonClick
**************************************/
function calendarButtonClick(event) {
  alert("event " +event.currentTarget.value+" has been added to your calendar");
  console.log(event.currentTarget);
}
  
function main(){
  addEventHandlers();
  displayDetailArea(0); 
};

main();  