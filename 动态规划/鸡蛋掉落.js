var superEggDrop = function(K, N) {
    let memo=Array.from({length:K+1},()=>new Array(N+1).fill(0));
    const dp=(K,N)=>{
        if(memo[K][N]){
            return memo[K][N];
        }
        if(K==1) return N;
        if(N==0) return 0;
        let left=1;
        let right=N;
        let res=Infinity;
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            let broken=dp(K-1,mid-1);
            let notBroken=dp(K,N-mid);
            if(broken>notBroken){
                right=mid-1;
                res=Math.min(res,broken+1);
            }else{
                left=mid+1;
                res=Math.min(res,notBroken+1);
            }
        }
        memo[K][N]=res;
        return res;
    }
    return dp(K,N);
};
console.log(superEggDrop(3,14));