const modeBtn = document.querySelector('.js_mode');

function mode(self) {
    const bg = document.querySelector('body');
    const color = document.querySelector('p');

    if(self.value === 'light') {
        bg.style.backgroundColor = 'white';
        color.style.color = 'black';
        self.value = 'dark';
    } else {
        bg.style.backgroundColor = 'black';
        color.style.color = 'white';
        self.value = 'light';
    }

    console.log(self.value);
}

modeBtn.addEventListener('click', mode);