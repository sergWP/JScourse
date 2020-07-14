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

const user = {
    firstName: 'Anna',
    lastName: 'Kuzmenko',
    age: calculateAge(2009),
    language: ['Ua', 'Ru', 'En'],
    hasChild: false,
    greet: function () {
        console.log('greeted')
    }
}

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

let a = 2;
let b = 1;
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
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
};

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);