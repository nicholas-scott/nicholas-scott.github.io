$(document).ready(function() {    
    $('.nav-toggle').click(() => {
        $('.nav-items').toggleClass('nav-items-dropped')
    })
    
    $('#button-home').click(() => {
        $('.nav-items').removeClass('nav-items-dropped');
        $('html,body').animate({
            scrollTop: 0
         }, 500);
    });

    $('#button-about').click(() => {
        $('.nav-items').removeClass('nav-items-dropped');
        $('html,body').animate({
            scrollTop: $('.about').offset().top
         }, 500);
    });

    $('#button-projects').click(() => {
        $('.nav-items').removeClass('nav-items-dropped');
        $('html,body').animate({
            scrollTop: $('.projects').offset().top
         }, 500);
    });

    $('#button-connect').click(() => {
        $('.nav-items').removeClass('nav-items-dropped');
        console.log("About clicked");
        $('html,body').animate({
            scrollTop: $('.connect').offset().top
         }, 500);
    });
});




// scrollTo = (id) => {
//     $('html,body').animate({
//        scrollTop: $("#"+id).offset().top - $(window).height()/2
//     }, 1000);
//  }