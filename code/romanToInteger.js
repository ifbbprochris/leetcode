/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var symbolMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    var pre, cur;
    var total = symbolMap[s[0]];
    for (var i = 1; i < s.length; i++) {
        pre = symbolMap[s[i - 1]];
        cur = symbolMap[s[i]];

        if (cur <= pre) {
            total += cur
        } else {
            total = total - pre * 2 + cur;
        }
    }

    return total;
};

console.log(romanToInt("DCXXI"));
