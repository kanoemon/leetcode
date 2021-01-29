/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const l1joined = toArray(l1, []).reverse().join('');
    const l2joined = toArray(l2, []).reverse().join('');
    const sum = Number(l1joined) + Number(l2joined);
    const resultArray = sum.toString().split('');
    
    for(let i = 0; i < resultArray.length; i++) {
        if (i === 0) {
            var currentListNode = new ListNode(Number(resultArray[i]), null);
            var beforeListNode = currentListNode;
        } else {
            var currentlistNode = new ListNode(Number(resultArray[i]), beforeListNode);
        }
    }
    console.log(currentListNode);
    return null;
};

function toArray(target: ListNode | null, result) {
    result.push(target.val);
    if (target.next !== null) {
        toArray(target.next, result);
    }
    return result;
};
