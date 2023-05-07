/************************************** 
global variables
**************************************/
var savedAstroEvent = 1;
var currentUserId = 1;



function addEventHandlers()
{
  let saveButtenE1s=document.querySelectorAll(".saveButton");
  saveButtenE1s.forEach(element => {
    element.addEventListener("click",saveButtonClick);
  });

  let calendarButtonE1s=document.querySelectorAll(".calendarButton");
  calendarButtonE1s.forEach(element => {
    element.addEventListener("click",saveButtonClick);
  });
  let viewButtonE1s=document.querySelectorAll(".viewButton");
  viewButtonE1s.forEach(element => {
    element.addEventListener("click",viewButtonClick);
  });
}

function addEventToUser(id) {
alert('add event to user'+id);
};

/************************************** 
Event handler for viewButtonClick
**************************************/
function viewButtonClick(event) {
  alert("view "+event.currentTarget.value);
  console.log(event.currentTarget);
}
/************************************** 
Event handler for saveButtonClick
**************************************/
function saveButtonClick(event) {
  alert("save "+event.currentTarget.value);
  console.log(event.currentTarget);
}
/************************************** 
Event handler for calendarButtonClick
**************************************/
function calendarButtonClick(event) {
  alert("calendar " +event.currentTarget.value);
  console.log(event.currentTarget);
}


addEventHandlers();