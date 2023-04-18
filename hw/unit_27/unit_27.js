// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    let action1 = new Promise((rezolve, reject) => {
        fetch(
            'http://getpost.itgid.info/index2.php?auth=37A38D7d5b44Dd6D856478D8&action=1',
        ).then((data) => {
            rezolve(data.text());
        });
    });
    let action2 = new Promise((rezolve, reject) => {
        fetch(
            'http://getpost.itgid.info/index2.php?auth=37A38D7d5b44Dd6D856478D8&action=2&name=Bred',
        ).then((data) => {
            rezolve(data.text());
        });
    });
    Promise.all([action1, action2]).then((data) => {
        document.querySelector('.out-1').innerHTML = data;
    });
}

document.querySelector('.b-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    let action3 = new Promise((rezolve, reject) => {
        fetch(
            'http://getpost.itgid.info/index2.php?auth=37A38D7d5b44Dd6D856478D8&action=3&num1=1&num2=2',
        ).then((data) => {
            rezolve(data.text());
        });
    });
    let action4 = new Promise((rezolve, reject) => {
        fetch(
            'http://getpost.itgid.info/index2.php?auth=37A38D7d5b44Dd6D856478D8&action=4&num1=1&num2=2',
        ).then((data) => {
            rezolve(data.text());
        });
    });
    Promise.all([action3, action4]).then((data) => {
        document.querySelector('.out-2').innerHTML = data;
    });
}

document.querySelector('.b-2').onclick = t2;
// ваше событие здесь!!!

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let action5 = new Promise((rezolve, reject) => {
        fetch(
            'http://getpost.itgid.info/index2.php?auth=37A38D7d5b44Dd6D856478D8&action=5',
        ).then((data) => {
            rezolve(data.text());
        });
    });
    let action6 = new Promise((rezolve, reject) => {
        fetch(
            'http://getpost.itgid.info/index2.php?auth=37A38D7d5b44Dd6D856478D8&action=6&num1=3&num2=5',
        ).then((data) => {
            rezolve(data.text());
        });
    });
    Promise.all([action5, action6]).then((data) => {
        document.querySelector('.out-3').innerHTML = data;
    });
}

document.querySelector('.b-3').onclick = t3;
// ваше событие здесь!!!

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let action7 = new Promise((rezolve, reject) => {
        fetch(
            'http://getpost.itgid.info/index2.php?auth=37A38D7d5b44Dd6D856478D8&action=7',
        ).then((data) => {
            rezolve(data.text());
        });
    });
    let action8 = new Promise((rezolve, reject) => {
        fetch(
            'http://getpost.itgid.info/index2.php?auth=37A38D7d5b44Dd6D856478D8&action=8&year=1995',
        ).then((data) => {
            rezolve(data.text());
        });
    });
    Promise.all([action7, action8]).then((data) => {
        document.querySelector('.out-4').innerHTML = data;
    });
}

document.querySelector('.b-4').onclick = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let action = new Promise((rezolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=37A38D7d5b44Dd6D856478D8&action=1',
        }).then((data) => {
            rezolve(data.text());
        });
    });
    let action2 = new Promise((rezolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=37A38D7d5b44Dd6D856478D8&action=2&name=Oleg',
        }).then((data) => {
            rezolve(data.text());
        });
    });
    Promise.all([action, action2]).then((data) => {
        document.querySelector('.out-5').innerHTML = data;
    });
}

document.querySelector('.b-5').onclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let action = new Promise((rezolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=37A38D7d5b44Dd6D856478D8&action=3&num1=9&num2=6',
        }).then((data) => {
            rezolve(data.text());
        });
    });
    let action2 = new Promise((rezolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=37A38D7d5b44Dd6D856478D8&action=4&num1=9&num2=6',
        }).then((data) => {
            rezolve(data.text());
        });
    });
    Promise.all([action, action2]).then((data) => {
        document.querySelector('.out-6').innerHTML = data;
    });
}

document.querySelector('.b-6').onclick = t6;
// ваше событие здесь!!!

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let action = new Promise((rezolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=37A38D7d5b44Dd6D856478D8&action=5',
        }).then((data) => {
            rezolve(data.text());
        });
    });
    let action2 = new Promise((rezolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=37A38D7d5b44Dd6D856478D8&action=6&num1=9&num2=6',
        }).then((data) => {
            rezolve(data.text());
        });
    });
    Promise.all([action, action2]).then((data) => {
        document.querySelector('.out-7').innerHTML = data;
    });
}

document.querySelector('.b-7').onclick = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let action = new Promise((rezolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=37A38D7d5b44Dd6D856478D8&action=7',
        }).then((data) => {
            rezolve(data.text());
        });
    });
    let action2 = new Promise((rezolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=37A38D7d5b44Dd6D856478D8&action=8&year=1980',
        }).then((data) => {
            rezolve(data.text());
        });
    });
    Promise.all([action, action2]).then((data) => {
        document.querySelector('.out-8').innerHTML = data;
    });
}

document.querySelector('.b-8').onclick = t8;
// ваше событие здесь!!!
