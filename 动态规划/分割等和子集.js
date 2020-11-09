var canPartition = function(nums) {
    let sum=0;
    for (const num of nums) {
        sum+=num;
    }
    if(sum%2){
        return false;
    }
    sum=sum/2;
    let n=nums.length;
    let dp=[];
    for(let i=0;i<n+1;i++){
        dp[i]=[];
        for(let j=0;j<sum+1;j++){
            dp[i][j]=j==0?true:false;
        }
    }
    for(let i=1;i<n+1;i++){
        for(let j=1;j<sum+1;j++){
            if((j-nums[i-1])<0){
                dp[i][j]=dp[i-1][j];
            }else{
                dp[i][j]=dp[i-1][j]||dp[i-1][j-nums[i-1]];
            }
        }
    }
    return dp[n][sum];
};
console.log(canPartition([1, 5, 11, 5]));