var hammingWeight = function(n) {
    let res=0;
    while(n!==0){
        n=n&(n-1);   //n&(n-1)这个运算可以消除数字n的二进制表示中的最后一个1。
        res++;
    }
    return res;
};