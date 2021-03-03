$(window).on('load', () =>{
  setTimeout(() =>{
    $('body').removeClass('entrada')
    $('.entrada-content').remove();
  }, 2500);
  animateOnScroll()
})


$('.burguer-menu').click(function(){
  $('.hamburguer-menu').toggleClass('open');
  $('.burguer-menu').toggleClass('open');
  $('header').removeClass('animate__animated');
  $('header').removeClass('animate__fadeInDown');
});

$('.h-link').click(function(){
  $('.hamburguer-menu').removeClass('open');
  $('.burguer-menu').removeClass('open');
});

$('.front-end-toggle').click(function(e){
  e.preventDefault();
  $('.front-end-toggle').toggleClass('toggled');
  $('.arrow-frontend').toggleClass('open');
  $('.front-end-projects').toggleClass('closed');
});

$('.node-toggle').click(function(e){
  e.preventDefault();
  $('.node-toggle').toggleClass('toggled');
  $('.arrow-node').toggleClass('open');
  $('.node-projects').toggleClass('closed');
});
  
$('.close-tab-frontend').click(function(e){
  e.preventDefault();
  animateOnScroll()
  $('.front-end-toggle').toggleClass('toggled');
  $('.arrow-frontend').toggleClass('open');
  $('.front-end-projects').toggleClass('closed');
});

$('.close-tab-node').click(function(e){
  e.preventDefault();
  animateOnScroll( )
  $('.node-toggle').toggleClass('toggled');
  $('.arrow-node').toggleClass('open');
  $('.node-projects').toggleClass('closed');
});
$(document).scroll(() => {
  animateOnScroll()
});

function animateOnScroll(){
  const animationClass = 'animate-project';
  const itensFe = document.querySelectorAll('.project.fe')
  const itensNode = document.querySelectorAll('.project.node')
  const windowTop = window.pageYOffset;
  itensFe.forEach((item, index) =>{
    const itemTop = item.offsetTop;
    
    if((windowTop) > itemTop + 550){
      item.classList.add(animationClass)
    }else{
      item.classList.remove(animationClass)
    }
  });
  
  itensNode.forEach((item, index) =>{
    const itemTop = item.offsetTop;
    console.log(window.innerHeight)

    if((windowTop) > itemTop + 2400){
      item.classList.add(animationClass)
    }else{
      item.classList.remove(animationClass)
    }
  });
}


