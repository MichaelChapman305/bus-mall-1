'use strict';


var container = document.getElementById('container');
var totalVotesOnPage = 0;
var PRODUCTS = {};

function Product(name, HTMLid, imgURL){
  this.name = name;
  this.HTMLid = HTMLid;
  this.imgURL = imgURL;
  this.totalVotes = this.totalViews = 0;
  
  PRODUCTS[this.HTMLid] = this;
}

Product.prototype.clickPercent = function(){
  return this.totalVotes / this.totalViews;
};

Product.prototype.render = function(parentId){
  var parent = document.getElementById(parentId);

  var img = document.createElement('img');
  img.setAttribute('id', this.HTMLid);
  img.setAttribute('src', this.imgURL);
  img.setAttribute('class', 'product');

  parent.appendChild(img);
};

function randomImageSelector(){

}

function addCurrentImages(event){

}

function displayResults(){

}

function handleClick(event) {
  if(event.target.className === 'product'){
    totalVotesOnPage++;
    PRODUCTS[event.target.id].totalVotes++;
    //TODO if total clicks stop listening
    if(totalVotesOnPage === 25){
      //TODO remove eventlistener from container
      displayResults();
      return;
    }

    randomImageSelector();
    addCurrentImages(event);
  }
}

container.addEventListener('click', handleClick);
