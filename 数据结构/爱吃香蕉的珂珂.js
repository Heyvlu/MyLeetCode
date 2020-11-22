var minEatingSpeed = function(piles, H) {
    let maxVal=1;
    for (const pile of piles) {
        maxVal=Math.max(maxVal,pile);
    }
    let low=1;
    let high=maxVal;
    while(low<high){
        mid=Math.floor((low+high)/2);
        if(calculateTime(piles,mid)>H){
            low=mid+1;
        }else{
            high=mid;
        }
    }
    return low;
};

const calculateTime=(piles,speed)=>{
    let times=0;
    for (const pile of piles) {
        times+=Math.ceil(pile/speed);
    }
    return times;
};