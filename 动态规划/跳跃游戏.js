var canJump = function(nums) {
    let n=nums.length;
    let farthest=0;
    for(let i=0;i<n-1;i++){
        farthest=Math.max(farthest,i+nums[i]);
        if(farthest<=i){
            return false;
        }
    }
    return true;
};
console.log(canJump([3,2,1,0,4]));