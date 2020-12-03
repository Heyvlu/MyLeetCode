var findErrorNums = function(nums) {
    let res=[];
    let len=nums.length;
    let sum=0;
    for(let i=0;i<len;i++){
        let index=Math.abs(nums[i])-1;
        if(nums[index]<0){
            res[0]=Math.abs(nums[i]);
            continue;
        }else{
            nums[Math.abs(nums[i])-1]*=-1;
            sum+=Math.abs(nums[i]);
        }
    }
    // 集合正确时的结果用等差数列的求和公式来求
    res[1]=(len*(1+len))/2-sum;
    return res;
};
console.log(findErrorNums([1,2,2,4]));