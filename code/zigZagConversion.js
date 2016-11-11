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

    for(var i in s){
        var lineNumber = i%n;
        if(lineNumber < numRows){
            array[lineNumber] += s[i];
        } else {
            array[2*numRows - lineNumber - 2] += s[i];
        }
    }

    return array.join('');
};
