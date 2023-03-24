// scorll top 

$('.back-2-top').click(function(){
  $('html,body').animate({
    scrollTop:0
  },2000)
})
// menu bar fixed
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();

  if (scrolling > 20) {
    $('#menu').addClass('fmenu')
  }
  else {
    $('#menu').removeClass('fmenu')
  }
  if (scrolling > 20) {
    $('.back-2-top').fadeIn('fmenu')
  }
  else {
    $('.back-2-top').fadeOut('fmenu')
  }
  
  
});





// country slick 
$(function(){
    $('.country-item').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
      });
});



$(function(){
    $('.supply-item').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
      });
});