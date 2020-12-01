var countPrimes = function(n) {
    // 用于标记是否是素数，初始假定都是素数，之后进行排除筛选
    let prime=Array(n).fill(true);
    let count=0;
    for(let i=2;i*i<n;i++){
        if(prime[i]){
            for(let j=i*i;j<n;j+=i){
                prime[j]=false;
            }
        }
    }
    for(let i=2;i<n;i++){
        count+=prime[i];
    }
    return count;
};