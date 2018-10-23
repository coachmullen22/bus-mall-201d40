'use strict';

//++++++++++++++++++++++++++++++
// SETTING UP GLOBAL DATA
//++++++++++++++++++++++++++++++

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allProducts = []; // This is the main array of objects
var totalClicks = 0; // Tallies the 25 clicks

// DOM access
var container = document.getElementById('image_container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var productList = document.getElementById('productlist');
var justViewed = [];

//++++++++++++++++++++++++++++++
// CONSTRUCTOR
//++++++++++++++++++++++++++++++

function Product(name) {
  this.name = name; // this will be the alt title value
  this.filepath = `img/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}

//++++++++++++++++++++++++++++++
// INSTANCES
//++++++++++++++++++++++++++++++

for (var i = 0; i < names.length; i++) {
  new Product(names[i]);
}

//++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
//++++++++++++++++++++++++++++++

function makeRandom() {
  return Math.floor(Math.random() * allProducts.length);
}

function makeThreeUnique() {
  console.log(justViewed, 'just viewed in line 50');
  var output = [];

  var firstNum = (makeRandom()); //makes first img
  while (justViewed.includes(firstNum)) {
    firstNum = makeRandom();
  }
  output.push(firstNum);
    
  output.push(makeRandom());
  output.push(makeRandom()); //generate 2nd element
  while (output[0] === output[1]){
    console.log('duplicate detected on second'); 
  output[1] = makeRandom();
  }
  output.push(makeRandom());
  while (output[0] === output[2] || output[1] ===output[2]){
    console.log('duplicate detected on third'); 
  output[2] = makeRandom();
  }
  justViewed = output;
  return output;
}

function displayPics() {
  var idx = makeThreeUnique();
  consolee.log(idx, 'three new values in line 72');
  allProducts[idx[0]].views++;
  allProducts[idx[1]].views++;
  allProducts[idx[2]].views++;

  left.src = allProducts[idx[0]].filepath;
  center.src = allProducts[idx[1]].filepath;
  right.src = allProducts[idx[2]].filepath;

  left.alt = allProducts[idx[0]].name;
  center.alt = allProducts[idx[1]].name;
  right.alt = allProducts[idx[2]].name;

  left.title = allProducts[idx[0]].name;
  center.title = allProducts[idx[1]].name;
  right.title = allProducts[idx[2]].name;
}

function handleClick(event) {
//  console.log(event.target.alt, 'was clicked');
  if (event.target.id === 'image-container') {
    return alert('Please click directly on an image')
  }
  totalClicks++;
  console.log(totalClicks, 'total clicks');

  
  for(var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].votes++;
    }
    if (totalClicks === 3) {
      container.removeEventListener('click', handleClick);
      return showList();  
    }
  }
  displayPics();
}

function showList() {
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${allProducts[i].name} has ${allProducts[i].views} views and ${allProducts[i].votes} votes.`;
    productList.appendChild(liEl);
  }
}

//++++++++++++++++++++++++++++++
// CODE THAT EXECUTES ON PAGE LOAD
//++++++++++++++++++++++++++++++

displayPics();
container.addEventListener('click', handleClick);

/*
function makeThreeUnique() {
  //console.log(justViewed, 'just viewed in line 50');
  var output = [];

  var firstNum = makeRandom(); //make first     //**need to do this for 2 & 3 
  while (justViewed.includes(firstNum)) {
    firstNum = makeRandom(); //make first again
  }
  output.push(firstNum);


  var secondNum = makeRandom();
  while (output[0] === secondNum || justViewed.includes(secondNum)) {
    console.log('duplicate detected');
    secondNum = makeRandom();
  }
  output.push(secondNum);

  var thirdNum = makeRandom();
  while (output[0] === thirdNum || output[1] === thirdNum || justViewed.includes(thirdNum)) {
    console.log('duplicate detected on third');
    thirdNum = makeRandom();
  }
  output.push(thirdNum);
  justViewed = output; //puts images viewed into array to start checking for duplicates
  return output;
}*/