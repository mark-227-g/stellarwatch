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

addEventToUser(id)
try {
  // Get all Homepages, sorted by id
  const astroEventData = await AstroEvent.findAll({
    order: [['id', 'ASC']],
  });

  // Serialize Homepage data so templates can read it
  const astroEvents = astroEventData.map((project) => project.get({ plain: true }));

  // Pass serialized data into Handlebars.js template
  res.render('homepage', { astroEvents });
} catch (err) {
  res.status(500).json(err);
}
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