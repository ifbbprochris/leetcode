/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, overflow) {
    var arry = [];
    var move = null;
    for(var i = 0; i < l1.length; i++) {
        var str = l1[i] + l2[i];

        if(move != null) {
            str = move + str;
            move = null;
        }

        if(str >= 10) {
            var arry_two = str.toString().split("");
            str = parseInt(arry_two[1]);
            move = parseInt(arry_two[0]);
        }

        arry.push(str);
    }
    return arry;
};

console.log(addTwoNumbers([2,4,3,4,0],[5,6,4,6,1]));
