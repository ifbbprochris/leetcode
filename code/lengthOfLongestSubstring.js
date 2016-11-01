/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var myMap = new Map();
    var curLength = 0;
    var maxLength = 0;
    var startIndex = 0;

    for(var i = 0; i < s.length; i++){
        var ch = s.charAt(i);
        if(myMap.has(ch) && myMap.get(ch) >= startIndex){
            startIndex = myMap.get(ch) + 1;
            curLength = i - startIndex + 1;
        } else if (++curLength > maxLength) {
            maxLength = curLength;
        }
        myMap.set(ch,i);
    }
    return maxLength;
};

lengthOfLongestSubstring("dvdf");
