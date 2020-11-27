// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
})

// When the user scrolls down 50px from the top of the document, resize the header's font size

//when the user scroll down change navbar style

$(function () {
    var header = $(".navbar-default");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 155) {
            header.removeClass('navbar-default nav ').addClass("navbar-s na current");
        } else {
            header.removeClass("navbar-s na current").addClass('navbar-default nav ');
        }
    });
});




//form



//form validation



