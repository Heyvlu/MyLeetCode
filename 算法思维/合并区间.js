var merge = function(intervals) {
    if(intervals.length<2){
        return intervals;
    }
    let res=[];
    intervals.sort((a,b)=>{ return (a[0]-b[0])});
    res.push(intervals[0]);
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]>res[res.length-1][1]){
            res.push(intervals[i])
        }else if(intervals[i][1]>res[res.length-1][1]){
            res[res.length-1][1]=intervals[i][1];
        }
    }
    return res;
};
console.log(merge([[1,4],[0,4]]));