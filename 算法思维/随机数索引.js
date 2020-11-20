var Solution = function(nums) {
    this.data=nums;
};

Solution.prototype.pick = function(target) {
    let arr=[];
    for(let i=0;i<this.data.length;i++){
        if(this.data[i]==target){
            arr.push(i);
        }
    }
    return arr[Math.floor(Math.random()*arr.length)];
};