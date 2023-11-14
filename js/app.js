'use strict';

//get a window into HMTL file
let citySection = document.getElementById('city-profiles');

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

//create an object for each city
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
  },
  render: function(){
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
};

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
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
  },
  render: function(){
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
};
let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
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
  },
  render: function(){
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
};
let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
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
  },
  render: function(){
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
};
let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
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
  },
  render: function(){
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
};
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();