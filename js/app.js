'use strict';

let cityProfiles = document.getElementById('city-profiles');

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  hoursAndCookies: [],
  randomCustomerGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min and max - from MDN
  },
  getCookieNumbers: function(){
    let totalCookies = 0;
    for(let i = 0; i < hours.length; i++){
      let cookies = Math.round(this.randomCustomerGenerator(this.minCust, this.maxCust) * this.avgCookieBought);
      totalCookies += Number(cookies);
      this.hoursAndCookies.push(`${hours[i]}: ${cookies} cookies`)
    }
    this.hoursAndCookies.push(`Total: ${totalCookies} cookies`)
  }
};
seattle.getCookieNumbers();
console.log(seattle);