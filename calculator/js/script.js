window.addEventListener('load', bindEvents);

var numbers = document.getElementsByClassName('num');
var symbol = document.getElementsByClassName('sybl');
var screen = document.querySelector('#screen');
var str = '';

function bindEvents() {
    for (let i = 0; i < numbers.length; ++i) {
        numbers[i].addEventListener('click', addItem);
    }
    for (let i = 0; i < symbol.length; ++i) {
        symbol[i].addEventListener('click', addSymbol);
    }
    document.querySelector('#equal').addEventListener('click', evaluate);
    document.querySelector('#clr').addEventListener('click', clrscr);
}

function clrscr() {
    str = '';
    screen.value = '0';
}

function evaluate() {
    var evl = str;
    evl = evl.replace("×", "*");
    evl = evl.replace("÷", "/");
    evl = evl.replace("−", "-");
    console.log("this: " + evl);
    screen.value = eval(evl);
    str = '';

}

function addItem() {
    str += this.textContent;
    screen.value = str;
    console.log(str);
}

function addSymbol() {
    if (str.endsWith('+') || str.endsWith('−') || str.endsWith('×') || str.endsWith('÷') || str.endsWith('%')) {
        str = str.slice(0, str.length - 1);
    }
    str += this.textContent;
    screen.value = str;
}