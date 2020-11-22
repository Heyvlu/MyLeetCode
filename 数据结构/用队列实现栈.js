var MyStack = function() {
    this.queue=[];
};

MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

MyStack.prototype.pop = function() {
    let pop=this.queue[this.queue.length-1];
    let res=[];
    for(let i=0;i<this.queue.length-1;i++){
        res.push(this.queue[i]);
    }
    this.queue=res;
    return pop;
};

MyStack.prototype.top = function() {
    return this.queue[this.queue.length-1];
};

MyStack.prototype.empty = function() {
    return this.queue.length==0;
};