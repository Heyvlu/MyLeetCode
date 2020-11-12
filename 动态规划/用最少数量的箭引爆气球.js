var findMinArrowShots = function(points) {
    if(points==0) return 0;
    points.sort((a,b)=>a[1]-b[1]);
    let count=1;
    let x_end=points[0][1];
    for (const point of points) {
        let start=point[0];
        if(start>x_end){
            count++;
            x_end=point[1];
        }
    }
    return count;
};
console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));