var multiply = function(num1, num2) {
    if(num1=='0' || num2=='0') return '0';
    let m=num1.length,n=num2.length;
    // 结果最多为m+n位数
    let res=new Array(m+n).fill(0);
    let str=new String();
    // 从个位数开始逐位相乘
    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            let mul=(num1[i]-'0')*(num2[j]-'0');
            let p1=i+j,p2=i+j+1;
            // 叠加到res上
            let sum=mul+res[p2];
            res[p2]=sum%10;
            res[p1]+=parseInt(sum/10);
        }
    }
    // 结果前缀可能存的 0（未使用的位）
    let i=0;
    while(i<res.length && res[i]==0){
        i++;
    }
    for(;i<res.length;i++){
        str+=res[i];
    }
    return res.length==0?'0':str;
};
console.log(multiply('123','456'));