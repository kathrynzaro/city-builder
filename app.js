// import functions and grab DOM elements
const exteriorDropdown = document.getElementById('exterior-dropdown');
const interiorDropdown = document.getElementById('interior-dropdown');
const neighborhoodDropdown = document.getElementById('neighborhood-dropdown');
const catDropdown = document.getElementById('cat-dropdown');

const exElem = document.getElementById('exterior');
const inElem = document.getElementById('interior');
const hoodElem = document.getElementById('neighborhood');
const catElem = document.getElementById('cat');
const reportEl = document.getElementById('report');
const slogansEl = document.getElementById('slogans');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

// let state
let exCount = 0;
let inCount = 0;
let hoodCount = 0;
let catCount = 0;

let slogans = [];

// set event listeners 
exteriorDropdown.addEventListener('change', () => {
    console.log('changing exterior', exteriorDropdown.value);
    exCount++;
    exElem.style.backgroundImage = `url('../assets/${exteriorDropdown.value}.png')`;
    displayStats();
});

interiorDropdown.addEventListener('change', () => {
    console.log('changing interior', interiorDropdown.value);
    inCount++;
    inElem.style.backgroundImage = `url('../assets/${interiorDropdown.value}.png')`;
    displayStats();
});

neighborhoodDropdown.addEventListener('change', () => {
    console.log('changing neighborhood', neighborhoodDropdown.value);
    hoodCount++;
    hoodElem.style.backgroundImage = `url('../assets/${neighborhoodDropdown.value}.png')`;
    displayStats();
});

catDropdown.addEventListener('change', () => {
    console.log('changing cat', catDropdown.value);
    catCount++;
    catElem.style.backgroundImage = `url('../assets/${catDropdown.value}.png')`;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    slogans.push(sloganInput.value);
    console.log(slogans);
    sloganInput.value = '';
    displaySlogans();
});

function displayStats() {
    reportEl.textContent = `YOU'VE EXPLORED ${exCount} EXTERIORS, ${inCount} INTERIORS, ${hoodCount} LANDSCAPES, AND ${catCount} RENLYS.`;
}

function displaySlogans() {
    slogansEl.textContent = '';
    for (let slogan of slogans) {
        const sloganList = document.createElement('div');
        console.log(slogans);
        sloganList.textContent = slogan;
        slogansEl.append(sloganList);
    }
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
