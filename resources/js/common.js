
const accordion = document.querySelectorAll('.js_acc_hd');

for(let i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function() { 
        nextNode = this.nextElementSibling;

        if(!nextNode.classList.contains('active')) {
            nextNode.classList.add('active')
        } else {
            nextNode.classList.remove('active');
        }

    })
}

const html = document.querySelector('html');
const mode = document.querySelector('.js_mode');

function modeHandler() {
    html.classList.toggle('mode_dark');
}

mode.addEventListener('click', modeHandler);


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
console.log(today);