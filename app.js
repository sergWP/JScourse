function calculateAge(year) {
    var today = new Date();
    var todayYear = today.getFullYear();
    return todayYear - year;
}

//console.log(calculateAge(1983));

function about(name, year) {
    const age = calculateAge(year);

    if(age > 0) {
        console.log( name + ' is ' + age + ' years old' );
    } else {
        console.log( 'It\'s a future' );
    }

}

// about('Elena', 1983);
// about('Anna', 2009);
// about('Robin', 2021);

const cars = ['Lada', 'Mazda', 'Ford']
//const cars = new Array('Lada', 'Mazda', 'Ford')
// console.log(cars.length)
//
// cars[0] = 'Porsche'
// cars[3] = 'Lada 99'
// console.log(cars)

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
// new version!!
// for (let auto of cars) {
//     console.log(auto)
// }

// const user = {
//     firstName: 'Anna',
//     lastName: 'Kuzmenko',
//     age: calculateAge(2009),
//     language: ['Ua', 'Ru', 'En'],
//     hasChild: false,
//     greet: function () {
//         console.log('greeted')
//     }
// }

// console.log(user.firstName)
// console.log(user['lastName'])
//
// const key = 'age'
// console.log(user[key])
//
// user.hasChild = true
// console.log('Has child? - ' + user.hasChild)
// user.learnEnglish = true
// console.log(user)


/*****************************/

// const num = 42
// const float = '42.558'
// const pow = 10e3 // 10000
// console.log('MIN_SAFE_INTEGER: ' + Number.MIN_SAFE_INTEGER)
// console.log('Max Value: ' + Number.MAX_VALUE)
// console.log( parseFloat((0.4 + 0.2).toFixed(1)) )

// let a = 2;
// let b = 1;
//let x = 1 + (a *= 2);

// console.log(a); // 4
// console.log(x); // 5
//console.log(4 < "5");

// let name = prompt("Your Name", "");
// console.log(name);

// let num = prompt('Введите число', '');
// if(num > 0) {
//     console.log('1');
// } else if(num < 0) {
//     console.log('-1');
// } else {
//     console.log('0');
// }

// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина';

// let age = prompt('Введите свой возраст', '');
// if( !(age > 13 && age <= 90) ) {
//     console.log('Access enabled');
// } else {
//     console.log('Close');
// }

// let usr = prompt('Login', '');
//
// if(usr) {
//
//     if (usr == 'Админ') {
//
//         let usrPass = prompt('Pass', '');
//         if(usrPass) {
//             if(usrPass == 'Я главный') {
//                 console.log('Здравствуйте!');
//             } else {
//                 console.log('Неверный пароль');
//             }
//         } else {
//             console.log('Отменено');
//         }
//
//     } else {
//         console.log('Я вас не знаю');
//     }
//
// } else {
//     console.log('Отменено');
// }

// let n = 10;
//
// nextPrime:
// for ( let num = 2; num <= n; num++) {
//     for (let j = 2; j < num; j++) { // проверить, делится ли число..
//         if (num % j == 0) continue nextPrime; // не подходит, берём следующее
//         console.log('J- '+j);
//     }
//     console.log('Num- '+num);
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }

function min(a,b) {
    if(a !== b) {
        (a > b) ? console.log(b) : console.log(a)
    }
}

//min(70, 1);

// 2.13
// const number = +prompt('Введите число между 0 и 3', '');
//
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// 2.14
// function checkAge(age) {
//     let result = (age > 18) || confirm('Родители разрешили?');
//     console.log(result);
// }
// checkAge(55);

// 2.15
// let fun = function () {
//     console.log('Hello');
// };
// fun();

// const sum = (a, b) => { return a + b };
// console.log(sum(50, 5));

// 2.16
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// };
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

// Func callbacks
// function first() {
//     setTimeout(function () {
//         console.log('1');
//     }, 500);
// }
//
// function second() {
//     console.log('2');
// }
//
// first();
// second();
//
// function leanJS(lang, callback) {
//     console.log(`I learn: ${lang}`);
//     callback();
// }
//
// function done() {
//     console.log('This lesson')
// }
//
// leanJS('JS', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 800,
//     colors: {
//         border: '#000',
//         background: 'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };
//
// options.makeTest();
//
// const {border, background} = options.colors;
// console.log(border);

// Перебор
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let j in options[key]) {
//             console.log(`Label ${j} has value ${options[key][j]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Label ${key} has value ${options[key]}`);
//         counter++;
//     }
// }
//
// console.log(counter);

// Подщитать кол-во ключей
//console.log(Object.keys(options).length);

// псевдомассивы
// сортировка
// const arr = [1, 20, 52, 27, 8];
// arr.sort(compareNum);
//console.log(arr);

// правильная сортировка чисел в массиве
// function compareNum(a , b) {
//     return a - b;
// }

// arr.forEach(function(num, i, arr) {
//     console.log(`${i}: ${num} inset array ${arr}`);
// });
//
// const str = prompt('Q', '');
// const product = str.split(', ');
// product.sort();
// console.log(product.join('; '));

// arr[99] = 0;
//
// // arr.pop();
// // arr.push(10);
//
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let val of arr) {
//     console.log(val);
// }

// let a = 6,
//     b = a;
//
// b = b + 5;
//
// const obj = {
//     a: 5,
//     b: 2
// };

// Объекты и массивы не копируются а наследуються по "ссылке"
// const copy = obj;
//
// copy.a = 10;
//
// console.log(copy);
// console.log(obj);

// Поверхностная копия объекта (только 1й уровень)
// function copy(argObj) {
//     let objCopy = {};
//
//     let key;
//     for (key in argObj) {
//         objCopy[key] = argObj[key];
//     }
//
//     return objCopy;
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNum = copy(numbers);
//
// newNum.a = 10;
// newNum.c.x = 10;
//
// console.log(newNum);
// console.log(numbers);

///////

function copyObj(val) {
    const newObj = {};

    for (let k in val) {

        let value = val[k];

        if(typeof (value) === 'string') {
            value = value.toLocaleLowerCase();
        } else {
            value += value;
        }

        newObj[k] = value;
    }

    return newObj;

}

const startObj = {
    q: 'Q',
    w: 'W',
    num1: '1',
    num5: 5,
    num10: 10,
    num99: 99
};

const migrateValObj = copyObj(startObj);

// console.log(migrateValObj);
// console.log(startObj);

const ob = {
    zeta: 100,
    beta: 210,
    gama: 990
};

// assign добавление в объекты куда->что
//console.log(Object.assign(startObj, ob));

// assign добавление в объект с копирование объекта
const clone = (Object.assign({}, ob));
clone.zeta = 20;

//console.log(ob);
//console.log(clone);

/// Массивы
// slice() возвращает новый массив, содержащий копию части исходного массива.
// const oldArr = ['z', 'x', 'c'];
// const newArr = oldArr.slice();
//
// newArr[2] = 'dsfsdf';
//
// console.log(oldArr);
// console.log(newArr);
//
//
// // разворот массивов ...
// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs =  ['wp', 'lovejournal', 'blogger'],
//     internet  = [...video, ...blogs, 'vk']; // собираем все массивы в один с новыми данными
//
// // console.log(internet);
//
// function log(a, b , c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [2, 5, 'thumb'];
//
// log(...num); // spead оператор разворачивания
// //console.log(num);
//
// const newNum = [...num];
// const newOb = {...ob, lopa: 700}; // spead оператор разворачивания для объекта

//console.log(newOb);
////// Learn

// function sum(obj) {
//
//     let val = 0;
//
//     for(let key in obj) {
//         val += obj[key];
//     }
//
//     return val;
//
// }
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// console.log( sum(salaries) );

// function multiplyNumeric(obj) {
//
//     for (let key in obj) {
//         if( typeof (obj[key]) == 'number' ) {
//             obj[key] *= 2;
//         }
//     }
//
//     return obj;
//
// }
//
// console.log( multiplyNumeric(startObj) );