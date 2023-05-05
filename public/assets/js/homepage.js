/************************************** 
global variables
**************************************/


function loadAstroEvents()
{
  var astroEventListEl = document.querySelector("#astroEventList");
  var astroEventItemEl;
//document.getElementById("#astroEventList");
astroEventItemEl = document.createElement("div");
astroEventItemEl.innerHTML='<div class="astroEvent">'+
'<p>' + "lunar eclipse" +'</p>'+
//'<button id="btn-'+i+'" class="mealBtn col-md-4" value="'+meals[i].idMeal+'">'+
//'<img class="mealPhoto"src="'+meals[i].strMealThumb+'" />'
//'</button>'+
'</div>'
astroEventListEl.appendChild(astroEventItemEl);
//btnEl=document.getElementById("btn-"+i);
//btnEl.addEventListener("click",mealBtnClick);
}
  

//load events
loadAstroEvents();