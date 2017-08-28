function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  foodarray = ['Curry', 'Laksa', 'Nasi Lemak', 'Chicken Rice', 'Mixed Rice']
  number = 0
  restaurant = document.getElementById('restaurant');
  array = Array.from(foodarray)
  function showfood() {
	number += 1
	if (number >= array.length) {
		number = 0
	};
	restaurant.innerHTML = array[number];
  }
  function lister(){
	startloop = setInterval(showfood, 500);
  }

  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", lister)


  getBtn = document.getElementById('get-restaurant-button');
  function getplace() {
  	clearInterval(startloop);
  	selected = document.getElementById('selected');
  	selected.innerHTML = "Great let's go eat " + array[number] + "!";
  	array.splice(number, 1);
  }
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", getplace);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);

// setAttribute
// .style
// appendChild
// insertBefore
// createElement
// removeChild
// setInterval
// clearInterval
// innerHTML
// getElementByID
// getElementsByClassName