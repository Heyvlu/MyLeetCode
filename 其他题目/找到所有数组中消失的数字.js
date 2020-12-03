var findDisappearedNumbers = function(nums) {
    let res=[];
    for(let i=1;i<=nums.length;i++){
        if(nums.includes(i)==false){
            res.push(i);
        }
    }
    return res;
};