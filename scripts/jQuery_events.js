console.log(window)

let nav_bar = $('#items-list');

let open_close_btn = $('#open_menu')

open_close_btn.click(function () {

    if (open_close_btn.text() === 'Close menu') {
        open_close_btn.text('Open menu')
        nav_bar.addClass('remove-animation')
    }
    else if (open_close_btn.text() === 'Open menu'){
        open_close_btn.text('Close menu')
        nav_bar.addClass('animation')
    }
    //  nav_bar.addClass('animation')
    console.log(1)
})

function element_animate_background_on(event_name, dom_selector) {

    // ~ event_name must to be a string;
    // ~ dom_selector must to be a string and valid DOM selector;
    inner_dom_selector = $(inner_dom_selector)

    switch (event_name) {
        case 'hover':
            return;
        case 'focus':
            return;
        case 'click':
            dom_selector.click(function (event) {
                dom_selector.addClass('show_container_animation')
                setTimeout(dom_selector.addClass('enlarged_container'), 3000)
            })
            return;
        default:
            console.warn('Not valid event name!')
            return;
    }
}

element_animate_background_on('click', '#container');
