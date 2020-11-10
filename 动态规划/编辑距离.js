var minDistance = function(word1, word2) {
    let m=word1.length;
    let n=word2.length;
    let dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
    for(let i=1;i<=m;i++){
        dp[i][0]=i;
    }
    for(let j=1;j<=n;j++){
        dp[0][j]=j;
    }
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(word1.charAt(i-1)==word2.charAt(j-1)){
                dp[i][j]=dp[i-1][j-1];
            }else{
                dp[i][j]=Math.min(dp[i][j-1]+1,Math.min(dp[i-1][j]+1,dp[i-1][j-1]+1));
            }
        }
    }
    return dp[m][n];
};
console.log(minDistance("horse","ros"));