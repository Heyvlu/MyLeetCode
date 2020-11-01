var detectCycle=function(head){
    let fast=head, slow=head;
    if(fast===null){
        return null;
    }
    while(fast!==null){
        slow=slow.next;
        if(fast.next!==null){
            fast=fast.next.next;
        }else{
            return null;
        }
        if(fast===slow){
            let ptr=head;
            while(ptr!==slow){
                ptr=ptr.next;
                slow=slow.next;
            }
            return ptr;
        }
    }
    return null;
};