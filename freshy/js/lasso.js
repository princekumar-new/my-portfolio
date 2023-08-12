$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:["<span class='fa fa-chevron-left'>","<span class='fa fa-chevron-right'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(function(){
    $(".five-img").fadeOut(1000);
    $(".five-img").fadeIn(1000);
})