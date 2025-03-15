/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null || head.next == null) return head;
    let dummy = new ListNode(0, head);
    let length = 0;

    while(dummy.next !== null){
        length++;
        dummy = dummy.next;
    }
    
    let rotation = k % length;

    for(let i = 0; i < rotation; i++){
        let last = head, prev = null;

        while(last.next !== null) {
            prev = last;
            last = last.next;
        }

        last.next = head;
        prev.next = null
        head = last
    }
    
    return head;
};
