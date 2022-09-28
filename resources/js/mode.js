const mode = {
    target: document.querySelector('.js_mode'),

    click: function() {
        const html = document.querySelector('html');

        // html.classList.toggle('mode_dark');
        console.log(html);
    },

    init: function() {
        mode.target.addEventListener('click', function() {

        mode.click();
        })
    }
}

mode.init();