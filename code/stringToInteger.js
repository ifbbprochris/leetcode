'use strict'
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();

    var i = 0;
    var sign = '+',
        num = "",
        result = 0,
        base = 1;

    if (str[0] === '+') {
        i++;
    } else if (str[0] === '-') {
        sign = '-';
        i++;
    }

    for (; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) {
            num += str[i];
        } else {
            if (num === "") {
                return 0;
            } else {
                break
            }
        }
    }

    for (i = num.length - 1; i >= 0; i--) {
        result += base * num[i];
        base *= 10;
        if (result > 2147483647 && sign === '+') {
            return 2147483647;
        } else if (result > 2147483648 && sign === '-') {
            return -2147483648;
        }
    }

    return sign === '-' ? result * -1 : result;
};

console.log(myAtoi("+-2"));
