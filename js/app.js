'use strict';


var container = document.getElementById('container');
var totalClicks = 0;



function handleClick(event) {
  if(event.target.className === 'product'){
    // event.target.id
    totalClicks++;

  }
}

container.addEventListener('click', handleClick);
