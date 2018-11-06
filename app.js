'use strict';


var allProducts = [];
var totalClicks = [0];
var productChart;
//var chartDrawn = false;
var views = [];
var votes = [];
var names = [];
var prod = {};

var container = document.getElementById('image-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var productList = document.getElementById('product-list');
var justViewed = [];

function Product(name) {
  this.name = name; //also used as alt title per Sam's example
  this.filepath = `img/${name}.jpg` //condensed list per Sam's example;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
  var products = ['bag', 'banana', 'boots','breakfast', 'bubblegum', 'bathroom', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
}

/*
window.onload = function(){
  if(localStorage.getItem('cumulativeTotal')) {
    var retrieveItems = JSON.parse(localStorage.getItem('cumulativeTotal'));
    console.log('retrieved', retrieveItems);
    allProducts = retrieveItems;
    displayPics();
    drawChart()
  } else {
    allProducts.forEach(function(cumulativeItems) {
      new Product(cumulativeItems);
    });
  }
}
*/

function makeRandom() {
  return Math.floor(Math.random() * allProducts.length);
}

function makeThreeUnique() {
 console.log(justViewed, 'last viewed, line 37');
  var output = [];
  
  var firstNum = makeRandom();
  while (justViewed.includes(firstNum)) {
    firstNum = makeRandom();
  }
  output.push(firstNum);
    
  var secondNum = makeRandom();
  while (output[0] === secondNum || justViewed.includes(secondNum)) {
    console.log('duplicate detected on second');     
    secondNum = makeRandom();
  }
  output.push(secondNum);
  
  var thirdNum = makeRandom();
  while (output[0] === thirdNum || output[1] === thirdNum || justViewed.includes(thirdNum)) {
    console.log('duplicate detected on third')
    thirdNum = makeRandom();
  }
  output.push(thirdNum);

  justViewed = output;
  return output;
}

function displayPics() {
  var idx = makeThreeUnique();
  console.log(idx, 'three new values in line 55')
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
  if (event.target.id === 'image-container') {
    return alert('Please click directly on an image');
  }
  totalClicks++;
  console.log(totalClicks, 'total clicks');
  
  for(var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }

  if (totalClicks === 25) {
    container.removeEventListener('click', handleClick);
    // showList();
    drawChart();
    localStorage.setItem('cumulativeTotal', JSON.stringify(allProducts));
    return;
  }
  displayPics();
}


function drawChart() {
  var ctx = document.getElementById("productChart").getContext('2d');
  for (var i = 0; i < allProducts.length; i++) {
    views.push(allProducts[i].views);
    votes.push(allProducts[i].votes);
    names.push(allProducts[i].name);
  }
  
  prod = {
   labels: names,
   datasets: [
     {
       label: 'BusMall Survey Stats',
       data: votes,
       backgroundColor: [
         'blue',
         'purple',
         'brown',
         'aqua',
         'orange',
         'blue',
         'purple',
         'brown',
         'aqua',
         'orange',
         'blue',
         'purple',
         'brown',
         'aqua',
         'orange',
         'blue',
         'purple',
         'brown',
         'aqua',
         'orange'
       ]
     }
   ]
  };
  productChart = new Chart(ctx, {
    type: 'bar',
    data: prod,
    options: {
      responsive: false,
      animation: {
        duration: 500,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: { 
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
}

/*
function showList() {
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${allProducts[i].name} has ${allProducts[i].views} views and ${allProducts[i].votes} votes.`;
    productList.appendChild(liEl);
  }
}
*/
container.addEventListener('click', handleClick);
