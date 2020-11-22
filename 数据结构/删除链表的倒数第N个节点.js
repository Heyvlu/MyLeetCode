var removeNthFromEnd = function(head, n) {
    let fast=head,slow=head;
    // 让快指针比慢指针先走N步,这样快指针到终点，慢指针就在倒数第N个节点
    while(n-->0){
        fast=fast.next;
    }
    if(fast==null){
        return head.next;
    }
    while(fast!==null && fast.next!==null){
        fast=fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next;
    return head;
};