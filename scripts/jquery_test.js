$(document).ready(() => {
    //Creating the horizontal navigation animation below!
    let catch_first_loading = true;

    $(window).scroll(function () {
        let scroller_top = $(window).scrollTop()
        let navigation = $('#items-list');
        let nav_btns = $('#items-list > li > a')

        if (scroller_top > 60) {

            navigation.removeClass('shrink-nav')
            navigation.addClass('enlarge-nav')

            nav_btns.removeClass('shrink-btn-nav')
            nav_btns.addClass('enlarge-btn-nav')
            catch_first_loading = false;
        }
        else if (catch_first_loading === false) {

            nav_btns.removeClass('enlarge-btn-nav')
            nav_btns.addClass('shrink-btn-nav')

            navigation.removeClass('enlarge--nav')
            navigation.addClass('shrink-nav')

            catch_first_loading = true;
        }
    })
    // Creating Mobile Toggle Menu below!
    let toggle_btn = $('#items-container > p > i');
    let modal_and_close_icon = $('#close-icon-container > i, #modal-window')

    let mobile_menu = $('#mobile-menu');
    let modal_window = $('#modal-window')
    

    // let mobile_nav_btns = $('#mobile-items > li > a')
    // let main_nav_btn_border = $('#mobile-items > li > span')

    // for (let i = 0; i < 6; i++) {
    //     $(`#items-list > li:nth-child(${i + 1})`)
    //         .hover(
    //             function () {
    //                 $(`#items-list > li:nth-child(${i + 1}) > span`)
    //                     .animate({
    //                         width: '100%',
    //                         height: '1px'
    //                     }, 'fast')
    //             })
    // }

    toggle_btn.click(() => { open_mobile_menu(modal_window, mobile_menu) })
    modal_and_close_icon.click(() => { close_mobile_menu(modal_window, mobile_menu) })
})

function open_mobile_menu(modal_window, mobile_menu) {
    modal_window.show()

    mobile_menu.animate({
        left: '0%'
    }, 'slow')

    let top_percent = 40;
    for (let i = 0; i < 5; i++) {
        $(`#mobile-items > li:nth-child(${i + 1})`).animate({
            top: `${top_percent}%`
        }, 'slow')

        top_percent -= 6;
    }
}
function close_mobile_menu(modal_window, mobile_menu) {
    modal_window.hide()
    mobile_menu.animate({
        left: '-53%'
    }, 'slow')

    for (let i = 0; i < 5; i++) {
        $(`#mobile-items > li:nth-child(${i + 1})`).animate({
            top: `-10%`
        }, 'slow')
    }
}
