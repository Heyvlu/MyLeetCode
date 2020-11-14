var isPalindrome = function(head) {
    let left=head;
    let traverse=(right)=>{
        if(right==null) return true;
        let res=traverse(right.next);
        res=res&&(right.val==left.val);
        left=left.next;
        return res;
    };
    return traverse(head);
};