var minInsertions = function(s) {
    let n=s.length;
    // 对s[i,j],最少需要插入dp[i][j]次才能变成回文
    let dp=Array.from({length:n},()=>new Array(n).fill(0));
    for(let i=n-2;i>=0;i--){
        for(let j=i+1;j<n;j++){
            if(s[i]==s[j]){
                dp[i][j]=dp[i+1][j-1];
            }else{
                dp[i][j]=Math.min(dp[i+1][j],dp[i][j-1])+1;
            }
        }
    }
    return dp[0][n-1];
};
console.log(minInsertions("mbadm"));