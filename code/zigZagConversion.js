/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(!s) return s;
    if(numRows == 1) return s;
    var n = numRows*2 - 2;
    var array = [];
    for(var i = 0; i<numRows; i++){
        array.push('');
    }

    for(var j in s){
        var lineNumber = j%n;
        if(lineNumber < numRows){
            array[lineNumber] += s[j];
        } else {
            array[2*numRows - lineNumber - 2] += s[j];
        }
    }

    return array.join('');
};

convert('PAYPALISHIRING', 3)
