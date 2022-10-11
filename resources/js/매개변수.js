// 'use strict';

;(function(win, doc, undefined) {
    window.common = {};

    common = {

        init: function() {
            common.header();
        },

        header: function() {
            doc.querySelector('.js_mode').addEventListener('click', common.mode);
        },

        mode: function() {
            document.querySelector('html').classList.toggle('dark');
            console.log(this)
        },
        
    };

    document.addEventListener('DOMContentLoaded', function() {

        common.init();
    })

}) (window, document);


