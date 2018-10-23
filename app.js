'use strict';

var allProducts = [];
var lastDisplayed = [];

function Product(name, filepath, textString) {
  this.name = name;
  this.filepath = filepath;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}

new Product('bag', 'img/bag.jpg', 'bag');
new Product('banana', 'img/banana.png', 'banana');
new Product('boots', 'img/boots.jpg', 'boots');
new Product('breakfast', 'img/breakfast.jpg', 'breakfast');
new Product('bubblegum', 'img/bubblegum.jpg', 'bubblegum');
/*new Product('bathroom', 'img/bathroom.jpg', 'bathroom');
new Product('chair', 'img/chair.png', 'chair');
new Product('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
new Product('dog-duck', 'img/dog-duck.jpg', 'dog-duck');
new Product('dragon', 'img/dragon.jpg', 'dragon');
new Product('pen', 'img/pen.jpg', 'pen');
new Product('pet-sweep', 'img/pet-sweep.jpg', 'pet-sweep');
new Product('scissors', 'img/scissors.jpg', 'scissors');
new Product('shark', 'img/shark.jpg', 'shark');
new Product('sweep', 'img/sweep.png', 'sweep');
new Product('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
new Product('unicorn', 'img/unicorn.jpg', 'unicorn');
new Product('usb', 'img/usb.gif', 'usb');
new Product('water-can', 'img/water-can.jpg', 'water-can');
new Product('wine-glass', 'img/wine-glass.jpg', 'wine-glass');
*/

var imgElContainer = getElementById('image-container');

var imgElOne = document.getElementById('left-image');
var imgElTwo = document.getElementById('center-image');
var imgElThree = document.getElementById('right-image');

imgElContainer.addEventListener('click', randomProduct);

function randomInt() {
  return Math.floor(Math.random() * allProducts.length);
}

/*
var itemOneIndex = Math.floor(Math.random() * allProducts.length);
var itemTwoIndex = Math.floor(Math.random() * allProducts.length);
var itemThreeIndex = Math.floor(Math.random() * allProducts.length); */

imgElOne.src = allProducts[itemOneIndex].filepath;
imgElOne.alt = allProducts[itemOneIndex].name;
imgElOne.title = allProducts[itemOneIndex].name;  

imgElTwo.src = allProducts[itemTwoIndex].filepath;
imgElTwo.alt = allProducts[itemTwoIndex].name;
imgElTwo.title = allProducts[itemTwoIndex].name;

imgElThree.src = allProducts[itemThreeIndex].filepath;
imgElThree.alt = allProducts[itemThreeIndex].name;
imgElThree.title = allProducts[itemThreeIndex].name;

function randomProduct() {
  var randomArray
  randomArray[0] = itemOneIndex
  while (itemOneIndex === itemTwoIndex)

}


randomProduct();