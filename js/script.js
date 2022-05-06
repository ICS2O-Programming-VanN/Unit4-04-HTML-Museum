// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the cost of entry for a museum depending on the age of the user and the day of week
 */
function displayCost() {
  // Constants
  const CHILD_FREE = 5;
  const SENIOR_FREE = 95;
  const STUDENT_DISCOUNT_MIN = 12;
  const STUDENT_DISCOUNT_MAX = 21;
  
  // Initialize variables
	let cost = "";
	
	// Get age and day of the week
	let age = parseInt(document.getElementById('age').value);
	let select = document.getElementById('day');
	let day = select.options[select.selectedIndex].value;

  // Ensures that user inputs a valid age
  if (age >= 0) {
    // IF user is younger than 5 or older than 95, for free entry
    if (age < CHILD_FREE || age > SENIOR_FREE) {
  		cost = "The cost is free for you!"
      // ELSE IF the day is Tuesday or Thursday OR the user's age is between 12 and 21 for discounted entry
  	} else if (((day == "Tuesday") || (day == "Thursday")) 
               || ((age >= STUDENT_DISCOUNT_MIN) && (age <= STUDENT_DISCOUNT_MAX))) {
  		cost = "You get a discount! (Student Pricing)"
      // ELSE IF checks that user did not leave it on "[Day of the Week]", displays regular price if they aren't getting in free or discounted
  	} else if (day != "") {
  		cost = "You have to pay regular price."
      // ELSE the user did not choose a day from the drop down menu
    } else {
      cost = "Please enter a valid day."
    }
    // ELSE user did not enter a valid age
  }	else {
    cost = "Please fill out a valid age"
  }
	
  // Outputs the cost given age and day of week
  document.getElementById('display-results').innerHTML = cost
}