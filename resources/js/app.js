const objects = {
    target: null,

    event : function() {
        console.log("this is javascript");
    },


    init: function() {
        this.event();
    },
}

objects.init();


// this ? 
// argument 매개변수? 데이터전송?


function sayHello(v) {
    console.log(v);
}

sayHello("pangsu");