'use strict'
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2147483647;
    const sign = x < 0 ? -1 : 1;
    let res = 0;
    for(let i = Math.abs(x); i>=1; i=Math.floor(i/10)){
        res = (res * 10) + (i % 10);
    }
    return res > INT_MAX ? 0:res*sign;
};
console.log(reverse(0));
