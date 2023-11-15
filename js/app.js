'use strict';

//get a window into HMTL file
let cityTable = document.getElementById('city-profiles');

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

let hourTotals =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//add times to top row of table
function createTimeRow(){
  let hoursTR = document.createElement('tr');
  cityTable.appendChild(hoursTR);

  let hourTH = document.createElement('th');
  hourTH.innerText = 'Locations';
  hoursTR.appendChild(hourTH);
  for(let i = 0; i < hours.length; i++){
    let hourTH = document.createElement('th');
    hourTH.innerText = hours[i];
    hoursTR.appendChild(hourTH);
  }
  hourTH = document.createElement('th');
  hourTH.innerText = 'Daily Location Total';
  hoursTR.appendChild(hourTH);
  
}

//create an object for each city
function City(cityName, minCust, maxCust, avgCookieBought, contactInfo, location) {
  this.name = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookieNumbersByHours = [];
  this.hoursOpen = '6am - 7pm';
  this.contactInto = contactInfo;
  this.location = location;
}
City.prototype.randomCustomerGenerator = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min and max - from MDN
}

City.prototype.getCookieNumbers = function(){
  let totalCookies = 0;
  for(let i = 0; i < hours.length; i++){
    let cookies = Math.round(this.randomCustomerGenerator(this.minCust, this.maxCust) * this.avgCookieBought);
    totalCookies += Number(cookies);
    this.cookieNumbersByHours.push(cookies);
    hourTotals[i] += this.cookieNumbersByHours[i];
  }
  this.cookieNumbersByHours.push(totalCookies)
},

City.prototype.render = function(){
  this.getCookieNumbers();


  let cityTR = document.createElement('tr');
  cityTable.appendChild(cityTR);
  let cityTD = document.createElement('td');
  cityTD.innerText = this.name;
  cityTR.appendChild(cityTD);
  
  for(let i = 0; i < this.cookieNumbersByHours.length; i++){
    let cookiesTD = document.createElement('td');
    cookiesTD.innerText = this.cookieNumbersByHours[i];
    cityTR.appendChild(cookiesTD);
  }
}

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24,1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38,2.3);
let lima = new City('Lima', 2, 16, 4.6);

//Add daily totals
function calculateTotal(){
  let combinedTotal = 0;
  for(let i = 0; i < hourTotals.length; i++){
    combinedTotal += hourTotals[i];
  }

  let totalsTR = document.createElement('tr');
  cityTable.appendChild(totalsTR);
  
  let totalTH = document.createElement('th');
  totalTH.innerText = 'Locations';
  totalsTR.appendChild(totalTH);
  for(let i = 0; i < hourTotals.length; i++){
    let totalTH = document.createElement('th');
    totalTH.innerText = hourTotals[i];
    totalsTR.appendChild(totalTH);
  }
  totalTH = document.createElement('th');
  totalTH.innerText = combinedTotal;
  totalsTR.appendChild(totalTH);
}

createTimeRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
calculateTotal();


