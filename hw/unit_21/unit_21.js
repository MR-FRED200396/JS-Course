// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').innerHTML = 'touch';
}

document.querySelector('.div-1').addEventListener('touchstart', t1);
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

function t2(event) {
    document.querySelector('.out-2').innerHTML = event.targetTouches.length;
}

document.querySelector('.div-2').addEventListener('touchstart', t2);
// ваше событие здесь!!!

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event) {
    if (event.target.className === 'div-3_2 block') {
        document.querySelector('.out-3').innerHTML = 2;
    } else {
        document.querySelector('.out-3').innerHTML = 1;
    }
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);
// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document
        .querySelector('.div-4')
        .addEventListener(
            'touchstart',
            () => (document.querySelector('.out-4').innerHTML = 'touch'),
        );
}

document.querySelector('.b-4').addEventListener('touchstart', t4);
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').ontouchstart = null;
}
document.querySelector('.b-5').addEventListener('touchstart', t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').innerHTML = 'touchend';
}

document.querySelector('.div-4').addEventListener('touchend', t6);
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.background = 'red';
}

document.querySelector('.div-7').ontouchstart = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
    let countRandom = 0 + Math.random() * (5 + 1 - 0);
    let countRandomFloor = Math.floor(countRandom);
    document.querySelector('.div-8').style.background = a8[countRandomFloor];
}

document.querySelector('.div-8').addEventListener('touchstart', t8);
// ваше событие здесь!!!

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
    document.querySelector('.out-9').innerHTML = event.touches.length;
}

document.querySelector('.div-9').addEventListener('touchstart', t9);
// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let num = 75;
function t10() {
    document.querySelector('.div-10').style.width = num + 'px';
    num++;
}

document.querySelector('.div-10').addEventListener('touchmove', t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
    document.querySelector('.out-11').innerHTML =
        'radiusX: ' +
        event.touches[0].radiusX +
        ' ' +
        'radiusY: ' +
        event.touches[0].radiusY;
}

document.querySelector('.div-11').addEventListener('touchstart', t11);
// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.addEventListener("touched", nextFunction);
next.addEventListener("click", nextFunction);

const prev = document.querySelector('.prev');
prev.addEventListener('touchmove', prevFunction);
prev.addEventListener('mousedown', prevFunction);

const reset = document.querySelector('.reset');
reset.addEventListener("click",resetFunction);
reset.addEventListener("touchend",resetFunction);
// reset[0].addEventListener('touchstart', resetFunction);

function nextFunction(event) {
    event.target.offsetParent.children[0].children[12].children[7].children[0].children[
        count
    ].classList.remove('active-img');
    if (count + 1 < images.length) {
        count++;
    } else {
        count = 0;
    }
    if (
        event.target.offsetParent.children[0].children[12].children[7]
            .children[0].children[count].classList[1] == undefined
    ) {
        event.target.offsetParent.children[0].children[12].children[7].children[0].children[
            count
        ].classList.add('active-img');
        event.target.offsetParent.children[0].children[12].children[7].children[1].children[0].src =
            event.target.offsetParent.children[0].children[12].children[7].children[0].children[
                count
            ].src;
    }
   
    return count;
}

function prevFunction(event) {
    event.target.offsetParent.children[0].children[12].children[7].children[0].children[
        count
    ].classList.remove('active-img');
    if (count > 0) {
        count--;
    } else {
        count = 5;
    }
    if (
        event.target.offsetParent.children[0].children[12].children[7]
            .children[0].children[count].classList[1] == undefined
    ) {
        event.target.offsetParent.children[0].children[12].children[7].children[0].children[
            count
        ].classList.add('active-img');
        event.target.offsetParent.children[0].children[12].children[7].children[1].children[0].src =
            event.target.offsetParent.children[0].children[12].children[7].children[0].children[
                count
            ].src;
    }
    return count;
}

function resetFunction(event) {
    event.target.offsetParent.children[0].children[12].children[7].children[0].children[
        count
    ].classList.remove('active-img');
    count = 0;
    event.target.offsetParent.children[0].children[12].children[7].children[0].children[
        count
    ].classList.add('active-img');
    event.target.offsetParent.children[0].children[12].children[7].children[1].children[0].src =
        event.target.offsetParent.children[0].children[12].children[7].children[0].children[
            count
        ].src;
}

// ваше событие здесь!!!
