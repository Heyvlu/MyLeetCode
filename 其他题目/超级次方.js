var superPow = function(a, b) {
    let base=1337;
    function myPow(a,k){
        if(k==0) return 1;
        a %= base;
        // k是奇数
        if(k%2==1){
           return (a*myPow(a,k-1))%base; 
        }else{
            // k是偶数
            let sub=myPow(a,k/2);
            return (sub*sub)%base;
        }
    }
    if(b.length==0) return 1;
    let last=b.pop();
    let part1=myPow(a,last);
    let part2=myPow(superPow(a,b),10);
    // 每次乘法都要求模
    return (part1*part2)%base;
};