var Solution = function(head) {
    this.head=head;
};

Solution.prototype.getRandom = function() {
    let num=0;
    let res=null;
    let head=this.head;
    while(head!=null){
        num++;
        if(!Math.floor(Math.random()*num)) res=head.val;
        head=head.next;
    }
    return res;
};