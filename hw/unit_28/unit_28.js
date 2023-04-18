//  Задания юнита расположены на сайте.
// task 1

// const goods_1 = new Goods('apple', 23.5);
// console.log(goods_1);

// task 2

// const goods_1 = new Goods(
//     'apple',
//     23.5,
//     'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png',
//     400,
// );
// console.log(goods_1);

// task 3
const goods_1 = new Goods(
    'apple',
    23.5,
    'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png',
    400,
);
// console.log(goods_1);
// И теперь выведем на страницу
document.querySelector('.out-3').append(goods_1.draw());

// task 4
const goods_2 = new Goods(
    'lime',
    18.20,
    'https://cdn4.iconfinder.com/data/icons/fruits-79/48/22-lime-48.png',
);

document.querySelector('.out-4').append(goods_2.draw());

// task 5
const goods_3 = new Goods2(
    'lime',
    10.8,
    'https://cdn4.iconfinder.com/data/icons/fruits-79/48/22-lime-48.png',
    100,
);

console.log(goods_3);

// task 6;
// const goods_3 = new Goods2(
//     'apple',
//     23.5,
//     'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png',
//     400,
//     true,
// );
// console.log(goods_3);

// task 7
const goods_7 = new Goods2(
    'apple',
    23.5,
    'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png',
    400,
    true,
);
console.log(goods_7);
// И теперь выведем на страницу
document.querySelector('.out-7').append(goods_7.draw());

// task 8
const goods_8 = new Valid('Qwertyazerty', 12345678, true);
console.log(goods_8);

// task 9
// const v1 = new Valid('test@ua.ua', 'qwertyu');
// console.log(v1.validate());
// console.log(v1.isValid);

// const v2 = new Valid('test@ua.ua', 'qwe');
// console.log(v2.validate());
// console.log(v2.isValid);

// task 11
const v12 = new Valid2('test@ua.ua', 'qwertyu');
console.log(v12.validate());
console.log(v12.isValid);
console.log(v12.error_message);

const v13 = new Valid2('test@ua.ua', 'qwe');
console.log(v13.validate());
console.log(v13.isValid);
console.log(v13.error_message);

const v14 = new Valid2('', 'qwertyu');
console.log(v14.validate());
console.log(v14.isValid);
console.log(v14.error_message);
