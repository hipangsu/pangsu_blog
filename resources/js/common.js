// const accordion = document.querySelectorAll('.js_acc_hd');

// for(let i=0; i<accordion.length; i++) {
//     accordion[i].addEventListener('click', function() { 
//         nextNode = this.nextElementSibling;

//         if(!nextNode.classList.contains('active')) {
//             nextNode.classList.add('active')
//         } else {
//             nextNode.classList.remove('active');
//         }

//     })
// }

// ;(function(win, doc, undefined) { 

// })(window, document);

const mode = {
    target: null,

    click: function() {
        const o = this;
        // const html = document.querySelector('html');
        
        console.log('ezzzz');
    },

    init: function() {
        const o = this;
        o.target = document.querySelector('.js_mode');

        o.target.addEventListener('click', function() {
            o.click();
        });
    }
}


mode.init();