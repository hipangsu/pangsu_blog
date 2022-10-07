// 'use strict';

;(function(win, doc, undefined) {

     common = {
        antiCache: function() {
            
        },
    

        init: function() {
            common.header();
        },

        header: function() {
            document.querySelector('.js_mode').addEventListener('click', common.mode);
        },

        mode: function() {
            document.querySelector('html').classList.toggle('dark');
            console.log('mode ez')
        },
        
    };

    common.init();

}) (window, document);


