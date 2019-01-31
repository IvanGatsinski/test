$(document).ready(() => {
    //Creating the horizontal navigation animation below!
    let catch_first_loading = true;

    $(window).scroll(function () {
        let scroller_top = $(window).scrollTop()
        let navigation = $('#items-list');
        console.log(navigation)

        if (scroller_top > 60) {

            navigation.removeClass('shrink-nav')
            navigation.addClass('enlarge-nav')
            catch_first_loading = false;
        }
        else if (catch_first_loading === false) {

            navigation.removeClass('enlarge-nav')
            navigation.addClass('shrink-nav')
            catch_first_loading = true;
        }
    })
    // Creating Mobile Toggle Menu below!
    let toggle_btn = $('#items-list > li:nth-child(1) > i');

    let mobile_menu = $('#mobile-menu');
    let modal_window = $('#modal-window')

    let btn_one = $('#mobile-items > li:nth-child(1)')
    let btn_two = $('#mobile-items > li:nth-child(2)')
    let btn_three = $('#mobile-items > li:nth-child(3)')
    let btn_four = $('#mobile-items > li:nth-child(4)')
    let btn_five = $('#mobile-items > li:nth-child(5)')

    toggle_btn.click(function (e) {
        if (mobile_menu.hasClass('hide-mobile-menu')) {

            modal_window.show();
            mobile_menu.removeClass('hide-mobile-menu')
            mobile_menu.addClass('show-mobile-menu')

            btn_one.addClass('drop-btn-one')
            btn_one.removeClass('pull-btn-one')

            btn_two.addClass('drop-btn-two')
            btn_two.removeClass('pull-btn-two')

            btn_three.addClass('drop-btn-three')
            btn_three.removeClass('pull-btn-three')

            btn_four.addClass('drop-btn-four')
            btn_four.removeClass('pull-btn-four')

            btn_five.addClass('drop-btn-five')
            btn_five.removeClass('pull-btn-five')
        }
        else if (mobile_menu.hasClass('show-mobile-menu')) {

            btn_one.removeClass('drop-btn-one')
            btn_one.addClass('pull-btn-one')

            btn_two.removeClass('drop-btn-two')
            btn_two.addClass('pull-btn-two')

            btn_three.removeClass('drop-btn-three')
            btn_three.addClass('pull-btn-three')

            btn_four.removeClass('drop-btn-four')
            btn_four.addClass('pull-btn-four')

            btn_five.removeClass('drop-btn-five')
            btn_five.addClass('pull-btn-five')

            modal_window.hide();

            mobile_menu.removeClass('show-mobile-menu')
            mobile_menu.addClass('hide-mobile-menu')
        }
        else {
            mobile_menu.addClass('show-mobile-menu')
            modal_window.show();

            btn_one.addClass('drop-btn-one')
            btn_one.removeClass('pull-btn-one')

            btn_two.addClass('drop-btn-two')
            btn_two.removeClass('pull-btn-two')

            btn_three.addClass('drop-btn-three')
            btn_three.removeClass('pull-btn-three')

            btn_four.addClass('drop-btn-four')
            btn_four.removeClass('pull-btn-four')

            btn_five.addClass('drop-btn-five')
            btn_five.removeClass('pull-btn-five')
        }
    })

    $('#close-icon-container > i').click(() => {
        
        setTimeout(() => {
            mobile_menu.removeClass('show-mobile-menu')
            mobile_menu.addClass('hide-mobile-menu')

            modal_window.hide();
        }, 800)

        setTimeout(() => {
            btn_one.addClass('pull-btn-one')
            btn_one.removeClass('drop-btn-one')
        }, 500)

        setTimeout(() => {
            btn_two.addClass('pull-btn-two')
            btn_two.removeClass('drop-btn-two')
        }, 400);

        setTimeout(() => {
            btn_three.addClass('pull-btn-three')
            btn_three.removeClass('drop-btn-three')
        }, 300)

        setTimeout(() => {
            btn_four.addClass('pull-btn-four')
            btn_four.removeClass('drop-btn-four')
        }, 200)

        setTimeout(() => {
            btn_five.addClass('pull-btn-five')
            btn_five.removeClass('drop-btn-five')
        }, 100)
    })
})