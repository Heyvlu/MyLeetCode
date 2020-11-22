var RandomizedSet = function() {
    this.map=new Map();
    this.values=[];
};

RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)){
        return false;
    }
    this.map.set(val,this.values.length);
    this.values.push(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)){
        return false;
    }
    let index=this.map.get(val);
    if(index==this.values.length-1){
        this.values.pop();
        this.map.delete(val);
    }else{
        let lastVal=this.values.pop();
        this.values[index]=lastVal;
        this.map.set(lastVal,index);
        this.map.delete(val);
    }
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    let length=this.values.length;
    let random=Math.floor(Math.random()*length);
    return this.values[random];
};