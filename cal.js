const numberBtn = document.getElementsByClassName('box');
const uil = document.getElementsByClassName('other')
const out = document.querySelector('.out-math');
let nbr = '', i = 0, j = 0, first, second, components;

while(i < numberBtn.length) {
    numberBtn[i].addEventListener('click', (e) => {
        let dude = e.target.textContent;
        nbr += dude;
        out.textContent = nbr;
    })
    i++;
}
while(j < uil.length) {
    uil[j].addEventListener('click', uildel)
    j++;
}

function uildel(e) {
    components = e.target.textContent;
    let shame = out.textContent;
    let clear = false;
    first = parseInt(shame)
    nbr = '';
    if(components === 'AC') {
        out.textContent = '';
    }
}

document.querySelector('.equal').addEventListener('click', equalTotal);

function equalTotal() {
    second = parseInt(out.textContent);
    let result;
    switch(components) {
        case 'AC':
            num = '';
            result = 0;
            first = 0;
            second = 0;
            nbr = '';
            result = 0;
            break;
        case '-':
            result = first - second;
            break;
        case '%':
            result = first % second;
            break;
        case '+':
            result = first + second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
    }
    document.querySelector('.out-math').textContent = result;
}