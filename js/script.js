
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 500,
        pauseOnFocus: false,
        slidesToShow: 8,
        enableTouch: false,
        draggable: false,


        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 270,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]


    })



});





