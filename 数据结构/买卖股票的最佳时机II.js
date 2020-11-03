var maxProfit=function(prices){
    let profit_out=0,profit_in=0-prices[0];
    let n=prices.length;
    for(let i=1;i<n;i++){
        profit_out=Math.max(profit_out,profit_in+prices[i]);
        profit_in=Math.max(profit_in,profit_out-prices[i]);
    }
    return profit_out;
};
console.log(maxProfit([7,1,5,3,6,4]));