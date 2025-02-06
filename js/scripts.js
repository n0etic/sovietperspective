console.log('JS file is loaded');

const targetElement = document.querySelector('#myNav');
var main = document.getElementById('main');
var header = document.getElementById('header');
var left = document.getElementById('home-pic-left');
var right = document.getElementById('home-pic-right');
var homeMenu = document.getElementById('home-menu');
var curtainButton = document.getElementById('home-menu-button');








  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    main.style.filter = 'blur(5px)';
    header.style.filter = 'blur(5px)';

    // Target the Parallax.js generated element (the mirror)
    document.querySelectorAll('.parallax-mirror').forEach(function(el) {
        el.style.filter = 'blur(5px)';
    });

    bodyScrollLock.disableBodyScroll(targetElement);
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    main.style.filter = 'blur(0px)';
    header.style.filter = 'blur(0px)';

    // Remove blur from the Parallax.js mirror element
    document.querySelectorAll('.parallax-mirror').forEach(function(el) {
        el.style.filter = 'blur(0px)';
    });

    bodyScrollLock.enableBodyScroll(targetElement);
}







/*

function openCurtain() {
    left.style.transform = 'translateX(-35%)';
    right.style.transform = 'translateX(30%)';
    left.style.transition = 'transform 1.0s';
    right.style.transition = 'transform 1.0s';
    homeMenu.style.display = 'inherit';
    curtainButton.style.display = 'none';
   

}
function closeCurtain() {
    left.style.transform = 'translateX(0%)';
    right.style.transform = 'translateX(0%)';
    left.style.transition = 'transform 1.0s';
    right.style.transition = 'transform 1.0s';
    homeMenu.style.display = 'none';

    curtainButton.style.display = '';

 
}

*/



function openCurtain() {
  const left = document.getElementById('home-pic-left');
  const right = document.getElementById('home-pic-right');
  const homeMenu = document.getElementById('home-menu');
  const curtainButton = document.getElementById('home-menu-button');
  
  if (window.innerWidth <= 768) {  // Mobile size
      left.style.transform = 'translateX(-100%)';
      right.style.transform = 'translateX(100%)';
  } else { // Desktop
      left.style.transform = 'translateX(-35%)';
      right.style.transform = 'translateX(30%)';
  }

  left.style.transition = 'transform 1.0s';
  right.style.transition = 'transform 1.0s';
  homeMenu.style.display = 'inherit';
  curtainButton.style.display = 'none';
}

function closeCurtain() {
  const left = document.getElementById('home-pic-left');
  const right = document.getElementById('home-pic-right');
  const homeMenu = document.getElementById('home-menu');
  const curtainButton = document.getElementById('home-menu-button');
  
  left.style.transform = 'translateX(0%)';
  right.style.transform = 'translateX(0%)';
  left.style.transition = 'transform 1.0s';
  right.style.transition = 'transform 1.0s';
  homeMenu.style.display = 'none';
  curtainButton.style.display = '';
}





$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).ready(function(){
    $('.slider').bxSlider();

  }); 

  $(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 900,
      touchEnabled:false

    });
  });




 



