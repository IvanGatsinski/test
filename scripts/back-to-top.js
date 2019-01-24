window.onscroll = function () { scrollFunction() };

let top_button = $("#topBtn");

top_button.click(() => {
    topFunction()
})

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {    
        top_button.fadeIn(1000)
    } else {
        top_button.fadeOut(1000)
        
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}