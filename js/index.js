'use strict';

let locationDescription = document.getElementById('location-descriptions');

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

let seattle = new City('Seattle', 23, 65, 6.3, '123-456-7890', '2901 3rd Ave #300, Seattle, WA 98121');
let tokyo = new City('Tokyo', 3, 24, 1.2, '222 - 222- 2222', '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634');
let dubai = new City('Dubai', 11, 38, 3.7, '333 - 333 - 3333', '1 Sheikh Mohammed bin Rashid Blvd - Dubai');
let paris = new City('Paris', 20, 38, 2.3, '444 - 444 - 4444', 'Champ de Mars, 5 Avenue Anatole FRance, 75007 Paris');
let lima = new City('Lima', 2, 16, 4.6, '555 - 555 - 5555', 'Ca. Gral. Borgoño cuadra 8, Miraflores 15074');

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();