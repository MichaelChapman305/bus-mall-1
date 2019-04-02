'use strict';


var container = document.getElementById('container');
var totalClicks = 0;
var productArray = [];

function Product(imgURL, name, HTMLid){
  this.imgURL = imgURL;
  this.name = name;
  this.totalVotes = this.totalViews = 0;
  this.HTMLid = HTMLid;

  productArray.push(this);
}

Product.prototype.clickPercent = function(){
  return this.totalViews / this.totalViews;
};

Product.prototype.render = function(parentId){
  var parent = document.getElementById(parentId);

  var img = document.createElement('img');
  img.setAttribute('id', this.HTMLid);
  img.setAttribute('src', this.imgURL);
  img.setAttribute('class', 'product');

  parent.appendChild(img);
};

function handleClick(event) {
  if(event.target.className === 'product'){
    console.log(event.target.className);
        // totalClicks++;

  }
}

container.addEventListener('click', handleClick);
