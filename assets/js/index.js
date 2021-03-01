// $('.front-end-projects').slick({
//     dots: true,
//     infinite: true,
//     arrows: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '30px',
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 500,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '30px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
//   $('.node-projects').slick({
//     dots: true,
//     infinite: true,
//     arrows: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '30px',
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 500,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '30px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

  $('.burguer-menu').click(function(){
    $('.hamburguer-menu').toggleClass('open');
    $('.burguer-menu').toggleClass('open');
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
  
