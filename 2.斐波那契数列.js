function fib(n){
    if(n==0){
        return 0;
    }if(n==1||n==2){
        return 1;
    }
    let prev=1,curr=1;
    for(let i=3;i<=n;i++){
        let sum=prev+curr;
        prev=curr;
        curr=sum;
    }
    return curr;
}
console.log(fib(5));
