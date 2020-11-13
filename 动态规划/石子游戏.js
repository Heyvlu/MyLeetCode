var stoneGame = function(piles) {
    let n=piles.length;
    let fTable=new Array(n),sTable=new Array(n);
    for(let i=0;i<n;i++){
        fTable[i]=new Array(n);
        sTable[i]=new Array(n);
    }
    for(let j=0;j<n;j++){
        fTable[j][j]=piles[j];
        sTable[j][j]=0;
        for(let i=j-1;i>=0;i--){
            fTable[i][j]=Math.max(piles[i]+sTable[i+1][j],piles[j]+sTable[i][j-1]);//先手选择了最左边的，对于剩下的[i+1][j]
            //先手就变成了后手，所以是piles[i]+sTable[i+1][j]
            sTable[i][j]=Math.min(fTable[i+1][j],fTable[i][j-1]);//后手就等于先手先选完了之后，剩下的后手就变成了先手
        }
    }
    return fTable[0][n-1]>sTable[0][n-1];
};
console.log(stoneGame([5,3,4,5]));