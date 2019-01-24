// Sticky Header
$(window).scroll(function() {
        console.log($(window).scrollTop())
    if ($(window).scrollTop() > 60) {
        $('.navigation').addClass('sticky');
    } else {
        $('.navigation').removeClass('sticky');
    }
});

