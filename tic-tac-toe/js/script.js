'use strict'

window.addEventListener('load', bindEvents, terminate);
var sign = 'O'

function bindEvents() {
    document.querySelector('#one').addEventListener('click', fillSign);
    document.querySelector('#two').addEventListener('click', fillSign);
    document.querySelector('#three').addEventListener('click', fillSign);
    document.querySelector('#four').addEventListener('click', fillSign);
    document.querySelector('#five').addEventListener('click', fillSign);
    document.querySelector('#six').addEventListener('click', fillSign);
    document.querySelector('#seven').addEventListener('click', fillSign);
    document.querySelector('#eight').addEventListener('click', fillSign);
    document.querySelector('#nine').addEventListener('click', fillSign);
}


function fillSign() {
    if (checkFilled(this)) {
        this.innerText = sign;
        var res = checkWinDraw(sign);
        if (res == true) {
            var player = sign == 'O' ? "Player 1" : "Player 2";
            document.querySelector('#msg').innerText = player + " Won";
            terminate();
        } else if (res == -1) {
            document.querySelector('#msg').innerText = "Match Draw";
        } else {
            toggleSign();
        }
    } else {

    }
}

function toggleSign() {
    if (sign == 'O') {
        sign = 'X';
    } else {
        sign = 'O';
    }
}

function checkFilled(box) {
    if (box.textContent == "") {
        return true;
    } else {
        return false;
    }
}

function checkWinDraw() {
    // returns true if wins, -1 if draw, false otherwise
    var one = document.querySelector('#one').textContent;
    var two = document.querySelector('#two').textContent;
    var three = document.querySelector('#three').textContent;
    var four = document.querySelector('#four').textContent;
    var five = document.querySelector('#five').textContent;
    var six = document.querySelector('#six').textContent;
    var seven = document.querySelector('#seven').textContent;
    var eight = document.querySelector('#eight').textContent;
    var nine = document.querySelector('#nine').textContent;
    var arr = [one, two, three, four, five, six, seven, eight, nine];

    // check win
    for (let i = 0; i < 9; i += 3) {
        if (arr[i] != '' && arr[i] == arr[i + 1] && arr[i] == arr[i + 2]) {
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (arr[i] != '' && arr[i] == arr[i + 3] && arr[i] == arr[i + 6]) {
            return true;
        }
    }
    if (arr[0] != '' && arr[0] == arr[4] && arr[0] == arr[8]) {
        return true;
    }
    if (arr[2] != '' && arr[2] == arr[4] && arr[2] == arr[6]) {
        return true;
    }

    // check draw
    var flag = true;
    for (let i of arr) {
        if (i == '') {
            flag = false;
            break;
        }
    }
    if (flag) {
        return -1;
    } else {
        return false;
    }
}

function terminate() {
    document.querySelector('#one').removeEventListener('click', fillSign);
    document.querySelector('#two').removeEventListener('click', fillSign);
    document.querySelector('#three').removeEventListener('click', fillSign);
    document.querySelector('#four').removeEventListener('click', fillSign);
    document.querySelector('#five').removeEventListener('click', fillSign);
    document.querySelector('#six').removeEventListener('click', fillSign);
    document.querySelector('#seven').removeEventListener('click', fillSign);
    document.querySelector('#eight').removeEventListener('click', fillSign);
    document.querySelector('#nine').removeEventListener('click', fillSign);
}