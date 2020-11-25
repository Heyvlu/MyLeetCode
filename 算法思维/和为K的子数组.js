var subarraySum = function(nums, k) {
    const map={0:1};
    let preSum=0;
    let count=0;
    for(let i=0;i<nums.length;i++){
        // 前缀和
        preSum+=nums[i];
        if(map[preSum-k]){
            count+=map[preSum-k];
        }
        if(map[preSum]){
            map[preSum]++;
        }else{
            map[preSum]=1;
        }
    }
    return count;
};