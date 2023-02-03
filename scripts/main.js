let image = document.querySelector('img');



let Heading = document.querySelector('h1');
let Button = document.querySelector('button');


function setUserName() {
  let Name = prompt('Please enter your name.');
  if(!Name) {
    setUserName();
  } else {
    localStorage.setItem('name', Name);
    Heading.innerHTML = 'Mozilla is cool, ' + Name;
  }
}

Button.onclick = function() {
  setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  Heading.innerHTML = 'Mozilla is cool, ' + storedName;
}

image.onclick = function() {
  let mySrc = image.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    image.setAttribute ('src','images/1.png');
  } else {
    image.setAttribute ('src','images/firefox-icon.png');
  }
}