var change = function(amount, coins) {
    let n=coins.length;
    let dp=new Array(amount+1);
    dp.fill(0);
    dp[0]=1;
    for(let i=0;i<n;i++){
        for(let j=1;j<=amount;j++){
            if(j-coins[i]>=0){
                dp[j]=dp[j]+dp[j-coins[i]];
            }
        }
    }
    return dp[amount];
};