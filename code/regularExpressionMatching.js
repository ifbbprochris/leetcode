/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var regMap = [];
    buildMap(regMap, p);
    console.log(regMap);
    return matchReg(s, 0);

    function buildMap(map, reg) {
        for (var i = 0; i < reg.length; i++) {
            if (reg[i] === '*') {
                if (map.length >= 1) {
                    map[map.length - 1] = map[map.length - 1] + "*";
                }
            } else {
                map.push(reg[i]);
            }
        }
    }

    function matchReg(str, index) {
        console.log(str, index);
        if (index === regMap.length) {
            return str === "" ? true : false;
        }

        if (regMap[index].indexOf('*') === -1) {
            if (str[0] === regMap[index] || (regMap[index] === "." && str != "")) {
                return matchReg(str.substring(1, str.length), index + 1);
            } else {
                return false;
            }
        }

        while (str !== "" && (str[0] === regMap[index][0] || regMap[index][0] === ".")) {
            if (matchReg(str, index + 1)) {
                return true;
            }
            str = str.substring(1, str.length);
        }

        return matchReg(str, index + 1);
    }

};

console.log(isMatch('a', '.*..a*'));
