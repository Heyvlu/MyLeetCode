var removeNthFromEnd = function(head, n) {
    let fast=head,slow=head;
    while(n>0){
        fast=fast.next;
        n--;
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