var maxEnvelopes = function(envelopes) {
    let n=envelopes.length;
    envelopes.sort((a,b)=>a[0]===b[0]?(b[1]-a[1]):(a[0]-b[0]));
    let height=[];
    for(let i=0;i<n;i++){
        height[i]=envelopes[i][1];
    }
    let dp=new Array(height.length).fill(1);
    for(let i=0;i<height.length;i++){
        for(let j=0;j<i;j++){
            if(height[i]>height[j]){
                dp[i]=Math.max(dp[i],dp[j]+1);
            }
        }
    }
    let res=0;
    for(let m=0;m<dp.length;m++){
        if(dp[m]>res){
            res=dp[m];
        }
    }
    return res;
};
console.log(maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1]]));