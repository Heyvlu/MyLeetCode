var NestedIterator = function(nestedList) {
    this.list=[];
    NestedIterator.prototype.resetList=function(arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i].isInteger()){
                this.list.push(arr[i].getInteger());
            }else{
                this.resetList(arr[i].getList());
            }
        }
    }
    this.resetList(nestedList);
};


NestedIterator.prototype.hasNext = function() {
    return this.list.length>0;
};


NestedIterator.prototype.next = function() {
    return this.list.shift();
};

