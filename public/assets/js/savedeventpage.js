/************************************** 
global variables
**************************************/
var savedstellarEvent = 1;
var currentUserId = 1;

function addEventHandlers() {
  let viewButtonEls = document.querySelectorAll(".viewButton");
  viewButtonEls.forEach((element) => {
    element.addEventListener("click", function() {
      viewButtonClick(element);
    });
  let calendarButtonE1s=document.querySelectorAll(".calendarButton");
  calendarButtonE1s.forEach(element => {
    element.addEventListener("click",calendarButtonClick);
  });
  });
  let removeButtonEls = document.querySelectorAll(".removeButton");
  removeButtonEls.forEach((element) => {
    element.addEventListener("click", function() {
      removeButtonClick(element);
    });
  });
}

function viewButtonClick(element) {
  const row = element.value - 1;
  displayDetailArea(row);
}

function displayDetailArea(row) {
  const savedEventEls = document.querySelectorAll(".stellarEvent");
  const description = savedEventEls[row].textContent;
  const detailPhotoEl = document.querySelector("#detailPhoto");
  const detailInfoEl = document.querySelector("#detailInfo");

  const stellarEventPhotoEls = document.querySelectorAll(".stellarEventPhoto");
  const stellarEventInfoEls = document.querySelectorAll(".stellarEventInfo");

  let photoURL, info;

  stellarEventPhotoEls.forEach((photoEl, index) => {
    if (index === row) {
      photoURL = photoEl.textContent;
    }
  });

  stellarEventInfoEls.forEach((infoEl, index) => {
    if (index === row) {
      info = infoEl.textContent;
    }
  });

  if (photoURL) {
    detailPhotoEl.setAttribute("src", photoURL);
  } else {
    detailPhotoEl.removeAttribute("src");
  }

  detailInfoEl.textContent = info;
}

function main() {
  addEventHandlers();
  displayDetailArea(0);
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

// event handler for removeButtonClick

function removeButtonClick(element) {
  const eventId = element.value;
  // Send a request to the server to delete the saved event with the provided eventId
  fetch(`/savedevents/${eventId}`, {
    method: 'DELETE'
  })
  .then((response) => {
    if (response.ok) {
      // Remove the corresponding list item from the UI
      const listItem = element.closest(".list-group-item");
      listItem.remove();
    } else {
      console.log("Failed to delete the saved event.");
    }
  })
  .catch((error) => {
    console.log("An error occurred while deleting the saved event:", error);
  });
}

main();
