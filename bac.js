'use strict'

// 1) number
var num1 = 5;

var num2 = 10;

var res = (num1 + num2);

// 2) string
var valStr = 'hello';

// 3) boolean
var result = 5 > 6;

// 4) undefined
var resValue;

// 5) null

var resValue2 = null;

// 6 Object array
var names = ['vasa', 'an', 'alex'];

// 6 Object object
var user = { age: 25, name: 'Vasa', email: '@' };

console.log(user.name);


var num1 = +prompt('input number 1');
var num2 = +prompt('input number 2');

var result = num1 + num2;

if(result && result !==10){    
    alert(result);
}
else if (result === 10) {
    alert('result 10');
}
else {
    alert('value should be number');
}

