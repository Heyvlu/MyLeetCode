var maxProfit=function(k,prices){
    let n=prices.length;
    if(k>(n/2)){
        k=Math.floor(n/2);
    }
    let profit=new Array(k);
    for(let j=0;j<=k;j++){
        profit[j]={
            profit_in:-prices[0],
            profit_out:0
        };
    }
    for(let i=0;i<n;i++){
        for(let j=1;j<=k;j++){
            profit[j]={
                profit_out:Math.max(profit[j].profit_out,profit[j].profit_in+prices[i]),
                profit_in:Math.max(profit[j].profit_in,profit[j-1].profit_out-prices[i])
            }
        }
    }
    return profit[k].profit_out;
};
console.log(maxProfit(2,[3,2,6,5,0,3]));