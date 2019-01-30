$(document).ready(() => {
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
    
    let toggle_btn = $('#items-list > li:nth-child(1) > i');

    let mobile_menu = $('#mobile-menu');
    let modal_window = $('#modal-window')

    toggle_btn.click(function (e) {
        if (mobile_menu.hasClass('hide-mobile-menu')) {

            mobile_menu.removeClass('hide-mobile-menu')
            mobile_menu.addClass('show-mobile-menu')
        }
        else if (mobile_menu.hasClass('show-mobile-menu')) {
            mobile_menu.removeClass('show-mobile-menu')
            mobile_menu.addClass('hide-mobile-menu')
        }
        else {
            mobile_menu.addClass('show-mobile-menu')
        }
        // modal_window.show();
    })

    modal_window.click(() => {
        //modal_window.hide();
    })
})