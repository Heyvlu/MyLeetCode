var findTargetSumWays = function(nums, S) {
    let n=nums.length;
    let sum=0;
    for (const num of nums) {
        sum+=num;
    }
    if(S>sum||(S+sum)%2==1){
        return 0;
    }
    sum=(sum+S)/2;
    let dp=new Array(sum+1).fill(0);
    dp[0]=1;
    for(let i=1;i<=n;i++){
        for(let j=sum;j>=0;j--){
            if(j>=nums[i-1]){
                dp[j]=dp[j]+dp[j-nums[i-1]];
            }else{
                dp[j]=dp[j];
            }
        }
    }
    return dp[sum];
};