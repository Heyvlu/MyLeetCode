var maxProfit=function(prices){
    let profit_1_in=-prices[0],profit_1_out=0;
    let profit_2_in=-prices[0],profit_2_out=0;
    let n=prices.length;
    for(let i=1;i<n;i++){
        profit_2_out=Math.max(profit_2_out,profit_2_in+prices[i]);
        profit_2_in=Math.max(profit_2_in,profit_1_out-prices[i]);
        profit_1_out=Math.max(profit_1_out,profit_1_in+prices[i]);
        profit_1_in=Math.max(profit_1_in,-prices[i]);
    }
    return profit_2_out;
};
console.log(maxProfit([1,2,3,4,5]));