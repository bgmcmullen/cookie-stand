'use strict';

//get a window into HMTL file
let citySection = document.getElementById('city-profiles');

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

//create an object for each city
function City(cityName, minCust, maxCust, avgCookieBought) {
  this.name = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.hoursAndCookies = [];
}
City.prototype.randomCustomerGenerator = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min and max - from MDN
}

City.prototype.getCookieNumbers = function(){
  let totalCookies = 0;
  for(let i = 0; i < hours.length; i++){
    let cookies = Math.round(this.randomCustomerGenerator(this.minCust, this.maxCust) * this.avgCookieBought);
    totalCookies += Number(cookies);
    this.hoursAndCookies.push(`${hours[i]}: ${cookies} cookies`)
  }
  this.hoursAndCookies.push(`Total: ${totalCookies} cookies`)
},

City.prototype.render = function(){
  this.getCookieNumbers();
  let articleEle = document.createElement('article');
  citySection.appendChild(articleEle);

  let cityHeading = document.createElement('h2'); // html creation
  cityHeading.innerText = this.name; // context
  articleEle.appendChild(cityHeading); // dom addition

  let cityUL = document.createElement('ul');
  articleEle.appendChild(cityUL);
  
  for(let i = 0; i < this.hoursAndCookies.length; i++){
    let cookiesLI = document.createElement('li');
    cookiesLI.innerText = this.hoursAndCookies[i];
    cityUL.appendChild(cookiesLI);
  }
}

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24,1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38,2.3);
let lima = new City('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

