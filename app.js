// import functions and grab DOM elements
const exteriorDropdown = document.getElementById('exterior-dropdown');
const interiorDropdown = document.getElementById('interior-dropdown');
const neighborhoodDropdown = document.getElementById('neighborhood-dropdown');

const exElem = document.getElementById('exterior');
const inElem = document.getElementById('interior');
const hoodElem = document.getElementById('neighborhood');

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

interiorDropdown.addEventListener('change', () => {
    console.log('changing interior', interiorDropdown.value);
    inCount++;
    inElem.style.backgroundImage = `url('../assets/${interiorDropdown.value}.png')`;
});

neighborhoodDropdown.addEventListener('change', () => {
    console.log('changing neighborhood', neighborhoodDropdown.value);
    hoodCount++;
    hoodElem.style.backgroundImage = `url('../assets/${neighborhoodDropdown.value}.png')`;
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
