$(document).ready(function() {
    $(document).resize(resizeBackground);
    resizeBackground();
    
    $('.nav-toggle').click(() => {
        $('.nav-items').toggleClass('nav-items-dropped')
    })
    $('#button-home').click(() => {
        $('html,body').animate({
            scrollTop: 0
         }, 500);
    });

    $('#button-about').click(() => {
        $('html,body').animate({
            scrollTop: $('.about').offset().top
         }, 500);
    });

    $('#button-projects').click(() => {
        $('html,body').animate({
            scrollTop: $('.projects').offset().top
         }, 500);
    });

    $('#button-connect').click(() => {
        console.log("About clicked");
    });
});


function resizeBackground() {
    $('.background').height($(document).height());
}



// scrollTo = (id) => {
//     $('html,body').animate({
//        scrollTop: $("#"+id).offset().top - $(window).height()/2
//     }, 1000);
//  }