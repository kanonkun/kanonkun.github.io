var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image2.webp') {
      myImage.setAttribute ('src','images/test-image3.webp');
    } else {
      myImage.setAttribute ('src','images/test-image2.webp');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ханю недовольна, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ханю недовольна, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  