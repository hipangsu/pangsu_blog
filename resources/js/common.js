;(function(){

    tab = function() {
        const tab = {
            tabMenu : document.querySelector('tabMenu li'),
            tabCont : document.querySelectorAll('.tabCont .cont'),
            
        };

    };

    accordion = function() {
        const acc = {
            accBox : document.querySelector(".acco-container"),
            accBtn : document.querySelector(".acco-header"),
        }
        console.log();
    }

})(window, document);




const acco = {
    target: null,

    click : function(v) {
        const o = this;

        o.accHeader = v.parentNode;
        o.accCont = o.accHeader.nextElementSibling;
        o.accCont.classList.toggle('active');
        console.log("ez");
    },

    init: function() {
        const o = this;
        o.target = document.getElementsByClassName('acco-header');

        for(const accBtn of o.target) {
            accBtn.addEventListener('click', function() {
                o.click(this);
                console.log("ez");
            });
        }
    }
}
acco.init();





