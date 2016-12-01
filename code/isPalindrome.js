/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x.toString();
    var array = str.split('');
    var reverseStr = array.reverse();
    var newStr = array.join('');
    if (str == newStr) return true;
    return false;
};

console.log(isPalindrome(233442));
