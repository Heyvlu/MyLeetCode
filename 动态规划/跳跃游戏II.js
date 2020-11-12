var jump = function(nums) {
    let n=nums.length;
    let end=0,farthest=0;
    let jumps=0;
    for(let i=0;i<n-1;i++){
        farthest=Math.max(farthest,i+nums[i]);
        if(end==i){
            jumps++;
            end=farthest;
        }
    }
    return jumps;
};
console.log(jump([2,3,1,1,4]));