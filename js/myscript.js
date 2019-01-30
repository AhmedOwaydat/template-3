$(function(){
   
   'use strict';

                /*  scroll  */
    /*$("body").niceScroll({
        cursorcolor:"#F7600E",
        cursorwidth:"10px"
    });*/


    $('.arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 300)
    })


    $('.ourWork .showMore').click(function () {

        $('.imghidden').fadeIn(1000);
        $(this).fadeOut(500);
    })


    function checkClient() {

        if($('.testimonials .client:first').hasClass('active')){

            $('.testimonials .fa-chevron-left').fadeOut(200);
        }

        else{
            $('.testimonials .fa-chevron-left').fadeIn(200);
        }


        if($('.testimonials .client:last').hasClass('active')){

            $('.testimonials .fa-chevron-right').fadeOut(200);
        }

        else{
            $('.testimonials .fa-chevron-right').fadeIn(200);
        }

       
    }

    checkClient();

    $('.testimonials .fa-chevron-right').click(function () {
        $('.testimonials .active').fadeOut(350, function () {
            $(this).addClass('hidden').removeClass('active');
            $(this).next('.client').removeClass('hidden').addClass('active').fadeIn(350);
            checkClient();
        });
       checkClient();
    })

    $('.testimonials .fa-chevron-left').click(function () {
        $('.testimonials .active').fadeOut(350, function () {
            $(this).addClass('hidden').removeClass('active');
            $(this).prev('.client').removeClass('hidden').addClass('active').fadeIn(350);
            checkClient();
        });
       checkClient();
    })
});