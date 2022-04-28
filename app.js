// import functions and grab DOM elements
const exteriorDropdown = document.getElementById('exterior-dropdown');

const exElem = document.getElementById('exterior');

// let state
let exCount = 0;
let inCount = 0;
let hoodCount = 0;
let catCount = 0;

let slogan = [];

// set event listeners 
exteriorDropdown.addEventListener('change', () => {
    console.log('changing exterior', exteriorDropdown.value);
    exCount++;
    exElem.style.backgroundImage = `url('../assets/${exteriorDropdown.value}.png')`;

});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
