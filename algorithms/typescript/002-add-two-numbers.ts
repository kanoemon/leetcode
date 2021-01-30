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
    const l1Array: number[] = toArray(l1, []);
    const l2Array: number[] = toArray(l2, []);
    const largerArray: number[] = l1Array.length >= l2Array.length ? l1Array : l2Array;
    const smallArray: number[] = l1Array.length < l2Array.length ? l1Array : l2Array;
    
    let sumResult = [];
    let numToAdd: number = 0;
    let sum = 0;
    for (let i = 0; i < largerArray.length; i++) {
        if (smallArray[i] === undefined) {
            sum = largerArray[i] + numToAdd;
        } else {
            sum = largerArray[i] + smallArray[i] + numToAdd;
        }
        
        const sumForResult = sum.toString().length === 1 ? sum : Number(sum.toString().slice(-1));
        
        numToAdd = sum.toString().length === 1 ? 0 : 1;

        sumResult.push(sumForResult);
    }
    
    if (numToAdd) sumResult.push(1);
            
    let result: ListNode | null = null;
    let beforeListNode: ListNode | null = null;
    
    sumResult.reverse();
    for(let i: number = 0; i < sumResult.length; i++) {
        result = beforeListNode = new ListNode(Number(sumResult[i]), beforeListNode);
    }
    return result;
};


function toArray(target: ListNode | null, result: number[]): number[] {
    result.push(target.val);
    if (target.next !== null) toArray(target.next, result);
    return result;
};
