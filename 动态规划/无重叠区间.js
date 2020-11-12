var eraseOverlapIntervals = function(intervals) {
    if(intervals==0) return 0;
    intervals.sort((a,b)=>a[1]-b[1]);
    // 先找不重叠的区间数
    let count=1;
    let x_end=intervals[0][1];
    for (const interval of intervals) {
        let start=interval[0];
        if(start>=x_end){
            count++;
            x_end=interval[1];
        }
    }
    return intervals.length-count;
};
console.log(eraseOverlapIntervals([ [1,2], [1,2], [1,2]]));