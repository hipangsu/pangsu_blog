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

    click: function() {
        // const html = document.querySelector('html');
        
        console.log('ezzzz');
    },

    init: function() {
        const modeBtn = document.querySelector('.js_mode')

        modeBtn.addEventListener('click');
    }
}


mode.init();