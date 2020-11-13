var maxCoins = function(nums) {
    let n=nums.length;
    let points=new Array(n+2);
    points[0]=points[n+1]=1;
    for(let i=1;i<n+1;i++){
        points[i]=nums[i-1];
    }
    let dp=Array.from({length:n+2},()=>new Array(n+2).fill(0));
    for(let i=n;i>=0;i--){
        for(let j=i+1;j<n+2;j++){
            for(let k=i+1;k<j;k++){
                // 定义dp[i][j]为（i，j）区间气球全被戳破得到的最高分数，不包含i和j，k为（i,k）区间最后一个戳破的气球
                dp[i][j]=Math.max(dp[i][j],dp[i][k]+dp[k][j]+points[i]*points[k]*points[j]);
            }
        }
    }
    return dp[0][n+1];
};
console.log(maxCoins([3,1,5,8]));