let a = 0;

function rec() {
    a = a + 2;
    console.log(a);
    if (a > 99) {
        return a;
    }
    rec();
}

rec();

let offset = 0;

function move() {
    offset = offset + 5;
    document.querySelector('.test-2').style.left = offset + 'px';
    if (offset > 200) {
        return true;
    }
    setTimeout(move, 500);
}

document.querySelector('button').onclick = move;