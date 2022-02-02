const heading = document.querySelector("h1");
console.log(heading);

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});




// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");
// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  })

  // 6. Insert each park into DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  })
});




//// -------------
// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parkA.querySelector(".rating-display .value").innerText;
  const parkBRating = parkB.querySelector(".rating-display .value").innerText;
  if (parkARating < parkBRating) {
    return -1;
  } else if (parkARating > parkBRating) {
    return 1;
  } else {
    return 0;
  }
}
// function for handling the "ratingSorter" click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();
  //1. get main element
  const main = document.querySelector("main");
  //2 get list of parks
  const parksList = document.querySelectorAll(".park-display");
  //3 empty the main
  main.innerHTML = "";
  //4 create array
  const parksArray = Array.from(parksList);
  //5 sort array
  parksArray.sort(sortByRating);
  //6 insert each park into dom
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
}

//select the ratingSorter link
const ratingSorter = document.querySelector("#rating-sorter");

//add event listener
ratingSorter.addEventListener("click", ratingSorterClickHandler);


/*
//! Lesson 24.4
// add text or html elements with .innerText or innerHTML
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
  let content = desc.innerText;
  
  if(content.length > 250) {
    content = content.slice(0, 250);
    content += '<a href="#">...</a>';
  }
  desc.innerHTML = content;
}


// add/remove a class to an item
const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if(ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}


//add a element to DOM (appendChild)
const parks = document.querySelectorAll(".park-display");
const numberPark = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberPark} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

//remove elements from DOM (removeChild)
const main = document.querySelector("main");
const park = document.querySelector(".park-display");
main.removeChild(park);


//! Lesson 24.3
const value = document.querySelector(".value");
const button = document.querySelector("button");
const area = document.querySelector(".area");
const div = document.querySelector(".stat > div");
const hello = document.querySelector(".hello");

console.log(value, button, area, div, hello);

const allButtons = document.querySelectorAll("button");
console.log(allButtons);


// Iterate over the list and print each one
console.log("for of loop");
const heading3List = document.querySelectorAll("h3");
for (let element of heading3List.values()) {
  console.log(element);
}
    // or with regular for loop
console.log("for loop")
for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
}

//find all divs and iterate through and print
console.log("DIVS");
const containsRatings = document.querySelectorAll(".rating-display > .value");
for(let rating of containsRatings.values()) {
    console.log(rating);
}

const areas = document.querySelectorAll(".area-display > div");
for (i=0; i < areas.length; i++) {
    console.log(areas[i]);
}
*/
