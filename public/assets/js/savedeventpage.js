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

main();
