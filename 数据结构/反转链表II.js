var reverseBetween = function(head, m, n) {
    let nextTail=null;
    let reverseN=(head,n)=>{
        if(n==1){
            nextTail=head.next;
            return head;
        }
        let last=reverseN(head.next,n-1);
        head.next.next=head;
        head.next=nextTail;
        return last;
    };
    if(m==1){
        return reverseN(head,n);
    }
    head.next=reverseBetween(head.next,m-1,n-1);
    return head;
};