const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding')


popupLinks.forEach(function(e){
  e.addEventListener('click', function(){
    let headerBlock = document.querySelector('.header-container');
    let html = document.documentElement;
    let marginSize = window.innerWidth - html.clientWidth

    body.style.paddingRight =  marginSize + 'px';
    headerBlock.style.marginLeft = 18 + 'px';
    headerBlock.style.marginRight = 18 + 'px';
    body.style.overflow='hidden';
    popup.classList.add('open');

    popup.addEventListener('click', function(){
      popup.classList.remove('open');
      body.style.overflow='auto';
      body.style.paddingRight= 0+'px';

    })


  })
})
