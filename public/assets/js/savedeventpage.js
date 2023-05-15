/************************************** 
global variables
**************************************/

function addEventHandlers() {
  let viewButtonEls = document.querySelectorAll(".viewButton");
  viewButtonEls.forEach((element) => {
    element.addEventListener("click", function () {
      viewButtonClick(element);
    });
  });

  let calendarButtonE1s = document.querySelectorAll(".calendarButton");
  calendarButtonE1s.forEach((element) => {
    element.addEventListener("click", calendarButtonClick);
  });

  let removeButtonEls = document.querySelectorAll(".removeButton");
  removeButtonEls.forEach((element) => {
    element.addEventListener("click", function () {
      removeButtonClick(element);
    });
  });
}

function viewButtonClick(element) {
  displayDetailArea(element);
}

function displayDetailArea(element) {
  let listItem;

  if (element.classList.contains('list-group-item')) {
    listItem = element;
  } else if (element.classList.contains('viewButton')) {
    listItem = element.closest('.list-group-item');
  } else {
    return;
  }

  const description = listItem.querySelector(".stellarEvent").textContent;
  const photoURL = listItem.querySelector(".stellarEventPhoto").textContent;
  const info = listItem.querySelector(".stellarEventInfo").textContent;

  const detailPhotoEl = document.querySelector("#detailPhoto");
  const detailInfoEl = document.querySelector("#detailInfo");

  if (photoURL) {
    detailPhotoEl.setAttribute("src", photoURL);
  } else {
    detailPhotoEl.removeAttribute("src");
  }

  detailInfoEl.textContent = info;
}

function main(){
  addEventHandlers();
  const savedEvents = document.querySelectorAll('.list-group-item');
  if (savedEvents.length > 0) {
    displayDetailArea(savedEvents[0]);
  }
}

/************************************** 
Event handler for calendarButtonClick
**************************************/
function calendarButtonClick(event) {
  alert("event " +event.currentTarget.value+" has been added to your calendar");
  console.log(event.currentTarget);
}

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

document.addEventListener("DOMContentLoaded", function() {
  main();
});
