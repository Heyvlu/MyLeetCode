var maxSubArray = function(nums) {
    let n=nums.length;
    if(n==0) return 0;
    let dp=new Array(n);
    // 以nums[i]为结尾的最大子数组和为dp[i]
    dp[0]=nums[0];
    for(let i=1;i<n;i++){
        dp[i]=Math.max(nums[i],dp[i-1]+nums[i]);
    }
    let res=-Infinity;
    for(let i=0;i<n;i++){
        res=Math.max(res,dp[i]);
    }
    return res;
};