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
    const sum: number = Number(toArray(l1, []).reverse().join('')) 
                + Number(toArray(l2, []).reverse().join(''));
    const sumArray: string[] = sum.toString().split('');
    
    let result: ListNode | null = null;
    let beforeListNode: ListNode | null = null;
    for(let i: number = 0; i < sumArray.length; i++) {
        result = beforeListNode = new ListNode(Number(sumArray[i]), beforeListNode);
    }
    return result;
};

function toArray(target: ListNode | null, result: number[]): number[] {
    result.push(target.val);
    if (target.next !== null) toArray(target.next, result);
    return result;
};
