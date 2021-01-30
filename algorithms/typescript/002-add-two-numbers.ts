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

const addTwoNumbers = function(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let tl1: ListNode | null = l1, 
        tl2: ListNode | null = l2,
        carry: number = 0,
        node: ListNode | null = null,
        curNode: ListNode | null = null;

    while(tl1 !== null || tl2 !== null) {
        let val1: number = tl1 === null ? 0 : tl1.val;
        let val2: number = tl2 === null ? 0 : tl2.val;
        let sum: number = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        
        if (node === null) {
            node = new ListNode(sum % 10);
            curNode = node;
        } else {
            curNode.next = new ListNode(sum % 10);
            curNode = curNode.next;
        }
        
        tl1 = tl1 === null ? null : tl1.next;
        tl2 = tl2 === null ? null : tl2.next;
    }
    
    if (carry) curNode.next = new ListNode(1);

    return node;
};
