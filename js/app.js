'use strict';

//get a window into HMTL file


  let cityTable = document.getElementById('city-profiles');
  let locationDescription = document.getElementById('location-descriptions');


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

  if(cityTable !== null){
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
  
  if(locationDescription !== null){
    let articleEle = document.createElement('article');
    locationDescription.appendChild(articleEle);

    let cityHeading = document.createElement('h3'); // html creation
    cityHeading.innerText = this.name; // context
    articleEle.appendChild(cityHeading); 

    let storeOpenHours = document.createElement('p');
      storeOpenHours.innerText = 'Hours: ' + this.hoursOpen;
      articleEle.appendChild(storeOpenHours); 


    let storeContactInfo = document.createElement('p');
      storeContactInfo.innerText = 'Contact: ' + this.contactInto
      articleEle.appendChild(storeContactInfo); 

    let storeLocation = document.createElement('p');
      storeLocation.innerText = 'Address: ' + this.location
      articleEle.appendChild(storeLocation); 
  }
}

let seattle = new City('Seattle', 23, 65, 6.3, '123-456-7890', '2901 3rd Ave #300, Seattle, WA 98121');
let tokyo = new City('Tokyo', 3, 24, 1.2, '222-222-2222', '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634');
let dubai = new City('Dubai', 11, 38, 3.7, '333-333-3333', '1 Sheikh Mohammed bin Rashid Blvd - Dubai');
let paris = new City('Paris', 20, 38, 2.3, '444-444-4444', 'Champ de Mars, 5 Avenue Anatole FRance, 75007 Paris');
let lima = new City('Lima', 2, 16, 4.6, '555-555-5555', 'Ca. Gral. Borgoño cuadra 8, Miraflores 15074');

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

if(cityTable !== null)
  createTimeRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
if(cityTable !== null)
  calculateTotal();


