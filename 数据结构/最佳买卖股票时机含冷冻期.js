var maxProfit=function(prices){
    let n=prices.length;
    let profit_in=0-prices[0];
    let profit_out=0;
    let profit_freeze=0;
    for(let i=1;i<n;i++){
        let temp=profit_out;
        profit_out=Math.max(profit_out,profit_in+prices[i]);
        profit_in=Math.max(profit_in,profit_freeze-prices[i]);
        profit_freeze=temp;
    }
    return profit_out;
};
console.log(maxProfit([1,2,3,0,2]));