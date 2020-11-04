var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=>{
        if(a[0]==b[0]){
            return b[1]-a[1]; 
        }else{
            return a[0]-b[0];
        }
    });
    let left=intervals[0][0];
    let right=intervals[0][1];
    let res=0;
    for(let i=1;i<intervals.length;i++){
        let intv=intervals[i];
        if(intv[0]>=left&&intv[1]<=right){
            res++;
        }
        if(intv[0]<=right&&intv[1]>=right){
            right=intv[1];
        }
        if(intv[0]>right){
            left=intv[0];
            right=intv[1];
        }
    }
    return (intervals.length-res);
};
console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]));