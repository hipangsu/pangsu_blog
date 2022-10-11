

;(function(){
    window.common = {};

    common = {

        mode: {
            target: document.querySelector('.js_mode'),

            mode_act: function() {
                const html = document.querySelector('html');
    
                html.classList.toggle('mode_dark');
            },
            init: function() {
                const o = this;

                o.target.addEventListener('click', function() {
                    o.mode_act();
                    console.log(this);
                })
                // this.target.addEventListener('click', () => this.mode_act());  
            },
        },

        ex : {
            target: null,

            ex_act: function() {
                console.log('hello');
            },
            init: function() {
                const o = this;

                o.ex_act();
            }

        },

    }

    document.addEventListener('DOMContentLoaded', function(){
        common.mode.init();
        common.ex.init();
    });
    
})(window, document);
