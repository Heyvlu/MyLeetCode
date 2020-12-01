var trailingZeroes = function(n) {
    // 两个数相乘结果末尾有 0，一定是因为两个数中有因子 2 和 5，因为 10 = 2 x 5。
    // 因为每个偶数都能分解出因子 2，因子 2 肯定比因子 5 多得多。所以求n的阶乘中5的个数。
    let res=0;
    let divisor=5;
    while(divisor<=n){
        res+=parseInt(n/divisor);
        divisor*=5;
        // 5的倍数提供一个5，25的倍数可以再多提供一个5，125的倍数可以再多提供一个5...
    }
    return res;
};
console.log(trailingZeroes(6));